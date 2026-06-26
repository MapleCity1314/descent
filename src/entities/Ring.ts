import {
  Group,
  Mesh,
  MeshStandardMaterial,
  Vector3,
} from 'three';
import { TOWER, PALETTE, DIFFICULTY, SAFE_COLORS } from '../core/Config';
import { SectorKind, type SectorLayout } from './Sector';
import { getWedgeGeometry, getBonusTorusGeometry } from './wedgeGeometry';

const STEP = (Math.PI * 2) / TOWER.sectorCount;
const _local = new Vector3();

export interface RingConfig {
  depthIndex: number;
  /** per-run seed mixed into layout hashing so each run differs (req 1). */
  seed: number;
  /** fraction of sectors that are lethal; 0 = no red at all (req 2). */
  lethalRatio: number;
  /** width of the carved gap, in sectors (narrows with depth — mechanic ②). */
  gapCount: number;
  /** chance a safe sector becomes brittle (mechanic ③); 0 disables. */
  brittleChance: number;
  rotating: boolean;
  bonus: boolean;
  /** Force at least one guaranteed gap aligned near the ball (warmup/fairness). */
  guaranteedGapAngle?: number;
}

/**
 * One ring of the tower: TOWER.sectorCount wedge meshes that can each be a gap,
 * a safe segment, or a lethal segment. Lives as a child of the tower group (so
 * tower rotation applies); a rotating ring additionally spins its own group.
 *
 * Pool-friendly: all meshes are created once in the constructor and merely
 * re-coloured / toggled on configure().
 */
export class Ring {
  readonly group = new Group();
  private meshes: Mesh[] = [];
  private mats: MeshStandardMaterial[] = [];
  private bonusMesh: Mesh;
  private bonusMat: MeshStandardMaterial;

  layout: SectorLayout = [];
  depthIndex = -1;
  rotating = false;
  bonus = false;
  private selfRot = 0;
  /** sectors consumed by a shatter-smash this descent (treated as gaps). */
  private consumed = new Set<number>();
  active = false;

  constructor() {
    const geo = getWedgeGeometry();
    for (let i = 0; i < TOWER.sectorCount; i++) {
      const mat = new MeshStandardMaterial({
        color: PALETTE.towerLight,
        roughness: 0.82,
        metalness: 0.12,
        emissive: 0x000000,
        emissiveIntensity: 0,
      });
      const mesh = new Mesh(geo, mat);
      mesh.rotation.y = i * STEP;
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      this.meshes.push(mesh);
      this.mats.push(mat);
      this.group.add(mesh);
    }

    this.bonusMat = new MeshStandardMaterial({
      color: PALETTE.maple,
      emissive: PALETTE.maple,
      emissiveIntensity: 1.4,
      roughness: 0.4,
      metalness: 0.0,
    });
    this.bonusMesh = new Mesh(getBonusTorusGeometry(), this.bonusMat);
    this.bonusMesh.visible = false;
    this.group.add(this.bonusMesh);
  }

  /** (Re)initialise this ring for a depth slot. */
  configure(cfg: RingConfig): void {
    this.depthIndex = cfg.depthIndex;
    this.rotating = cfg.rotating;
    this.bonus = cfg.bonus;
    this.selfRot = 0;
    this.group.rotation.y = 0;
    this.consumed.clear();
    this.active = true;

    this.layout = this.bonus
      ? new Array(TOWER.sectorCount).fill(SectorKind.Gap)
      : this.buildLayout(cfg);

    this.applyLayout();
    this.bonusMesh.visible = this.bonus;
  }

  private buildLayout(cfg: RingConfig): SectorLayout {
    const n = TOWER.sectorCount;
    const out: SectorKind[] = new Array(n).fill(SectorKind.Safe);
    const seed = cfg.seed;

    // ---- carve the gap (width narrows with depth; always passable) ----
    const gapCount = Math.max(1, Math.min(n - 1, cfg.gapCount));
    // Anchor the primary gap near a requested angle (fairness), else seeded-random.
    let gapStart: number;
    if (cfg.guaranteedGapAngle !== undefined) {
      gapStart = mod(Math.round(-cfg.guaranteedGapAngle / STEP), n);
    } else {
      gapStart = hash((cfg.depthIndex * 2 + 1) ^ seed) % n;
    }
    for (let k = 0; k < gapCount; k++) {
      out[(gapStart + k) % n] = SectorKind.Gap;
    }

    // ---- sparse lethal: probabilistic rounding so early rings get 0–1 red ----
    // (e.g. ratio 0.02 → most rings 0 lethal, the occasional ring one). Never
    // overwrites the gap; placement is seeded so layouts vary per run.
    const exact = n * cfg.lethalRatio;
    let lethalTarget = Math.floor(exact);
    const frac = exact - lethalTarget;
    if (frac > 0 && rand01(hash((cfg.depthIndex * 13 + 5) ^ seed)) < frac) lethalTarget++;
    let placed = 0;
    let probe = (gapStart + gapCount + 2) % n;
    let guard = 0;
    while (placed < lethalTarget && guard++ < n * 3) {
      probe = (probe + 3 + (hash((cfg.depthIndex * 7 + placed) ^ seed) % 4)) % n;
      if (out[probe] === SectorKind.Safe) {
        out[probe] = SectorKind.Lethal;
        placed++;
      }
    }

    // ---- brittle platforms: some remaining safes crack (mechanic ③) ----
    if (cfg.brittleChance > 0) {
      for (let i = 0; i < n; i++) {
        if (out[i] !== SectorKind.Safe) continue;
        if (rand01(hash((cfg.depthIndex * 31 + i * 7 + 3) ^ seed)) < cfg.brittleChance) {
          out[i] = SectorKind.Brittle;
        }
      }
    }
    return out;
  }

  private applyLayout(): void {
    for (let i = 0; i < TOWER.sectorCount; i++) {
      const kind = this.layout[i];
      const mesh = this.meshes[i];
      const mat = this.mats[i];
      // reset any transform/material left over from a previous break animation
      mesh.position.set(0, 0, 0);
      mesh.rotation.set(0, i * STEP, 0);
      mesh.scale.set(1, 1, 1);
      mat.depthWrite = true;
      if (kind === SectorKind.Gap) {
        mesh.visible = false;
        continue;
      }
      mesh.visible = true;
      mesh.scale.set(1, 1, 1);
      mat.opacity = 1;
      mat.transparent = false;
      const c = SAFE_COLORS[((this.depthIndex % SAFE_COLORS.length) + SAFE_COLORS.length) % SAFE_COLORS.length];
      if (kind === SectorKind.Lethal) {
        // clear warning-red danger surface that glows — pops against the candy safes
        mat.color.setHex(PALETTE.lethal);
        mat.emissive.setHex(PALETTE.lethal);
        mat.emissiveIntensity = 0.55;
      } else if (kind === SectorKind.Brittle) {
        // cracked, glassy platform — translucent + pale so it reads as breakable
        mat.color.setHex(0xffffff);
        mat.emissive.setHex(c);
        mat.emissiveIntensity = 0.16;
        mat.opacity = 0.5;
        mat.transparent = true;
      } else {
        // safe platforms cycle through bright candy hues by depth (dopamine!),
        // each with a gentle self-glow so the colour stays vibrant under light
        mat.color.setHex(c);
        mat.emissive.setHex(c);
        mat.emissiveIntensity = 0.28;
      }
    }
  }

  /** Resolve which sector index sits under the given world position right now. */
  sectorIndexAt(worldPos: Vector3): number {
    this.group.updateWorldMatrix(true, false);
    _local.copy(worldPos);
    this.group.worldToLocal(_local);
    const a = Math.atan2(_local.z, _local.x); // ring-local horizontal angle
    // meshes are placed at rotation.y = i*STEP, which renders the wedge centre
    // at local angle -i*STEP; invert that mapping here.
    let i = Math.round(-a / STEP) % TOWER.sectorCount;
    if (i < 0) i += TOWER.sectorCount;
    return i;
  }

  kindAt(index: number): SectorKind {
    if (this.consumed.has(index)) return SectorKind.Gap;
    return this.layout[index] ?? SectorKind.Gap;
  }

  /** Mark a safe sector as smashed-through; returns its world centre for FX. */
  smashSector(index: number, out: Vector3): void {
    this.consumed.add(index);
    const mesh = this.meshes[index];
    mesh.getWorldPosition(out);
    // place FX roughly at the platform's mid-radius
    mesh.visible = false;
  }

  /**
   * The ball crashes through this disc: hide it instantly. The visible "shatter"
   * is a dense colored debris burst the caller spawns (Particles.burstRing) at
   * this ring's position, so the solid disc is replaced by flying candy
   * fragments. The ball has already advanced past it, so collision is unaffected.
   */
  break(): void {
    if (this.bonus) return;
    for (const m of this.meshes) m.visible = false;
  }

  /** The candy colour this ring's safe platforms use — for tinting its debris. */
  mainColor(): number {
    return SAFE_COLORS[((this.depthIndex % SAFE_COLORS.length) + SAFE_COLORS.length) % SAFE_COLORS.length];
  }

  /** World-space centre Y of this ring (centre is on the rotation axis). */
  centerY(): number {
    return this.group.position.y;
  }

  worldYTop(): number {
    return this.group.position.y + TOWER.ringHeight / 2;
  }

  setY(y: number): void {
    this.group.position.y = y;
  }

  update(dt: number, time: number): void {
    if (!this.active) return;

    if (this.rotating) {
      this.selfRot += DIFFICULTY.rotatingSpeed * dt;
      this.group.rotation.y = this.selfRot;
    }
    // slow breathing of lethal glow (synchronised, reads as deliberate)
    const breathe = 0.1 + 0.12 * (0.5 + 0.5 * Math.sin(time * 1.6));
    for (let i = 0; i < this.mats.length; i++) {
      if (this.layout[i] === SectorKind.Lethal && !this.consumed.has(i)) {
        this.mats[i].emissiveIntensity = breathe;
      }
    }
    if (this.bonus) {
      this.bonusMat.emissiveIntensity = 1.0 + 0.6 * Math.sin(time * 2.2);
    }
  }

  retire(): void {
    this.active = false;
    this.bonusMesh.visible = false;
  }
}

/* ---- small numeric helpers ---- */

function mod(a: number, n: number): number {
  return ((a % n) + n) % n;
}

/** deterministic integer hash for repeatable layouts per (depth, seed) */
function hash(x: number): number {
  let h = (x ^ 0x9e3779b9) >>> 0;
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b) >>> 0;
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b) >>> 0;
  return (h ^ (h >>> 16)) >>> 0;
}

/** map a uint32 hash into [0,1) */
function rand01(h: number): number {
  return (h >>> 0) / 0x100000000;
}

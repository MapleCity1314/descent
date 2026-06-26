import {
  Group,
  Mesh,
  MeshStandardMaterial,
  OctahedronGeometry,
  Scene,
  Vector3,
} from 'three';
import { BALL, TOWER } from '../core/Config';
import { ringCenterY } from './Tower';

interface Gem {
  mesh: Mesh;
  active: boolean;
  depth: number;
  y: number;
}

const LOOKAHEAD = 12; // spawn diamonds this many rings ahead of the ball
const SPAWN_CHANCE = 0.24; // chance a given ring slot gets a diamond below it
const POOL = 20;

/**
 * Diamonds — a world-space field of collectible gems that float in the central
 * column BETWEEN rings (at the ball's fixed orbit x/z, half a ring-gap below a
 * ring centre). Because they sit below a ring, the ball only reaches them by
 * passing through that ring's gap and continuing to fall — a normal bounce on
 * the ring above never descends far enough to touch them (req 3). The field is
 * independent of the tower layout: the falling ball is always at the orbit, so
 * once it passes a ring it drops straight through whatever gem is below.
 */
export class Diamonds {
  private group = new Group();
  private pool: Gem[] = [];
  private seed = 1;
  private spawnedThrough = -1;
  private prevBallY = 0;
  private readonly ox: number;
  private readonly oz: number;
  private readonly _pos = new Vector3();

  /** Called once per gem collected, with the gem's world position (for FX). */
  onCollect?: (worldPos: Vector3) => void;

  constructor(scene: Scene) {
    scene.add(this.group);
    const geo = new OctahedronGeometry(0.17);
    for (let i = 0; i < POOL; i++) {
      const mat = new MeshStandardMaterial({
        color: 0x6ee7ff,
        emissive: 0x22d3ee,
        emissiveIntensity: 0.9,
        roughness: 0.12,
        metalness: 0.35,
      });
      const mesh = new Mesh(geo, mat);
      mesh.scale.set(0.85, 1.25, 0.85);
      mesh.visible = false;
      this.group.add(mesh);
      this.pool.push({ mesh, active: false, depth: -1, y: 0 });
    }
    this.ox = BALL.orbitRadius * Math.cos(BALL.orbitAngle);
    this.oz = BALL.orbitRadius * Math.sin(BALL.orbitAngle);
  }

  /** Reset for a fresh run. `enabled=false` (tutorial) leaves the field empty. */
  reset(startBallY: number, enabled = true): void {
    for (const g of this.pool) {
      g.active = false;
      g.mesh.visible = false;
    }
    this.seed = enabled ? (Math.random() * 0xffffffff) >>> 0 : 0;
    this.enabled = enabled;
    this.spawnedThrough = -1;
    this.prevBallY = startBallY;
  }

  private enabled = true;

  private free(): Gem | undefined {
    return this.pool.find((g) => !g.active);
  }

  update(dt: number, time: number, ballY: number): void {
    if (this.enabled) {
      this.spawnAhead(ballY);
      this.collect(ballY);
    }
    this.prevBallY = ballY;

    // recycle gems that have drifted well above the ball, and animate the rest
    const cutoff = ballY + TOWER.recycleAbove * TOWER.ringGap;
    for (const g of this.pool) {
      if (!g.active) continue;
      if (g.y > cutoff) {
        g.active = false;
        g.mesh.visible = false;
        continue;
      }
      g.mesh.rotation.y += dt * 2.4;
      g.mesh.position.y = g.y + Math.sin(time * 2 + g.depth) * 0.05;
    }
  }

  private spawnAhead(ballY: number): void {
    const approxDepth = Math.floor((ringCenterY(0) - ballY) / TOWER.ringGap);
    const target = approxDepth + LOOKAHEAD;
    for (let d = this.spawnedThrough + 1; d <= target; d++) {
      this.spawnedThrough = d;
      if (d < 2) continue; // skip the very first rings (warmup clarity)
      // avoid back-to-back gems so they read as occasional treats
      if (rand01(hash((d * 2654435761) ^ this.seed)) >= SPAWN_CHANCE) continue;
      const slot = this.free();
      if (!slot) continue;
      slot.active = true;
      slot.depth = d;
      slot.y = ringCenterY(d) - TOWER.ringGap * 0.5; // mid-gap, below ring d
      slot.mesh.position.set(this.ox, slot.y, this.oz);
      slot.mesh.visible = true;
    }
  }

  private collect(ballY: number): void {
    for (const g of this.pool) {
      if (!g.active) continue;
      // the ball descended through the gem's height this step
      if (this.prevBallY > g.y && ballY <= g.y) {
        g.active = false;
        g.mesh.visible = false;
        this._pos.set(this.ox, g.y, this.oz);
        this.onCollect?.(this._pos);
      }
    }
  }
}

/* ---- shared with Ring's hashing style ---- */
function hash(x: number): number {
  let h = (x ^ 0x9e3779b9) >>> 0;
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b) >>> 0;
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b) >>> 0;
  return (h ^ (h >>> 16)) >>> 0;
}
function rand01(h: number): number {
  return (h >>> 0) / 0x100000000;
}

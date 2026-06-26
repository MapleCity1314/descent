import { Group, Scene, Vector3 } from 'three';
import { TOWER, ROTATION, DIFFICULTY } from '../core/Config';
import { Ring } from './Ring';

const RING_Y0 = -2.2; // world y of the first ring (depth 0), just below the ball

/** World-space centre Y of a ring at a given depth. Shared with the diamond
 * field so collectibles can be slotted between rings. */
export function ringCenterY(depth: number): number {
  return RING_Y0 - depth * TOWER.ringGap;
}

/**
 * Tower — owns the ring pool, drives infinite spawn/recycle as the ball
 * descends, eases its own rotation toward the player's drag target, and injects
 * depth-scaled difficulty into each ring it (re)configures.
 *
 * Only the tower rotates; it never translates. Rings are positioned in a
 * continuous descending column by depthIndex.
 */
export class Tower {
  readonly group = new Group();
  private pool: Ring[] = [];
  private byDepth = new Map<number, Ring>();
  private maxDepth = -1;

  targetRotation = 0;
  private spawned = false;
  /** per-run seed → layouts differ every run; fixed seed used for the tutorial. */
  private seed = 0;

  constructor(scene: Scene) {
    scene.add(this.group);
    for (let i = 0; i < TOWER.visibleRings; i++) {
      const ring = new Ring();
      this.pool.push(ring);
      this.group.add(ring.group);
    }
  }

  /** (Re)seed the tower for a fresh run. Pass a fixed seed for the tutorial; omit
   * for a randomised run. `noLethal` forces a red-free run (tutorial). */
  reset(seed?: number, noLethal = false): void {
    this.byDepth.clear();
    this.maxDepth = -1;
    this.targetRotation = 0;
    this.group.rotation.y = 0;
    this.seed = (seed ?? (Math.random() * 0xffffffff)) >>> 0;
    this.noLethal = noLethal;
    for (let i = 0; i < this.pool.length; i++) {
      this.configureRing(this.pool[i], i);
    }
    this.spawned = true;
  }

  private noLethal = false;

  private configureRing(ring: Ring, depth: number): void {
    const D = DIFFICULTY;
    const warmup = depth < D.warmupRings;
    const bonus = depth > 0 && depth % D.bonusRingEvery === 0;

    // mechanic ①: rotating-gap rings — probability ramps with depth (seeded).
    const rotating =
      !bonus &&
      !warmup &&
      depth >= D.rotatingStartDepth &&
      pseudo((depth * 2 + 1) ^ this.seed) <
        this.ramp(depth, D.rotatingChanceStart, D.rotatingChanceEnd, D.rotatingChanceDepth);

    // lethal (red): none until lethalStartDepth, then sparse → capped ramp.
    let lethalRatio = 0;
    if (!warmup && !this.noLethal && depth >= D.lethalStartDepth) {
      lethalRatio = this.ramp(depth - D.lethalStartDepth, D.lethalRatioStart, D.lethalRatioEnd, D.lethalRatioDepth);
    }
    // mechanic ④: rotating rings stay safe (pure moving gaps) until deep enough,
    // where they begin carrying lethal → red arcs that sweep.
    if (rotating && depth < D.movingLethalStartDepth) lethalRatio = 0;

    // mechanic ②: gap width narrows with depth.
    let gapCount: number = D.gapCountStart;
    if (depth >= D.narrowGapStartDepth) {
      gapCount = Math.round(
        this.ramp(depth - D.narrowGapStartDepth, D.gapCountStart, D.gapCountMin, D.narrowGapDepth),
      );
    }

    // mechanic ③: brittle platforms appear deep.
    const brittleChance = !warmup && depth >= D.brittleStartDepth ? D.brittleChance : 0;

    ring.configure({
      depthIndex: depth,
      seed: this.seed,
      lethalRatio,
      gapCount,
      brittleChance,
      rotating,
      bonus,
    });
    ring.setY(RING_Y0 - depth * TOWER.ringGap);

    const prev = this.byDepth.get(depth);
    if (prev && prev !== ring) prev.retire();
    this.byDepth.set(depth, ring);
    if (depth > this.maxDepth) this.maxDepth = depth;
  }

  /** Recycle rings that have risen well above the ball into new deeper slots. */
  recycle(ballY: number): void {
    if (!this.spawned) return;
    const cutoff = ballY + TOWER.recycleAbove * TOWER.ringGap;
    for (const ring of this.pool) {
      if (ring.active && ring.group.position.y > cutoff) {
        this.byDepth.delete(ring.depthIndex);
        this.configureRing(ring, this.maxDepth + 1);
      }
    }
  }

  getRingByDepth(depth: number): Ring | undefined {
    return this.byDepth.get(depth);
  }

  /** Eased rotation follow (brief: drag rotates the tower, no hard cut). */
  updateRotation(dt: number): void {
    const k = Math.min(1, ROTATION.ease * dt);
    this.group.rotation.y += (this.targetRotation - this.group.rotation.y) * k;
  }

  update(dt: number, time: number): void {
    for (const ring of this.pool) ring.update(dt, time);
  }

  /** Difficulty fall-speed scale at a given depth (multiplies gravity). */
  fallScale(depth: number): number {
    return this.ramp(depth, DIFFICULTY.fallScaleStart, DIFFICULTY.fallScaleEnd, DIFFICULTY.fallScaleDepth);
  }

  ringWorldPos(depth: number, out: Vector3): Vector3 {
    out.set(0, RING_Y0 - depth * TOWER.ringGap, 0);
    return out;
  }

  private ramp(depth: number, start: number, end: number, over: number): number {
    const t = Math.min(1, Math.max(0, depth / over));
    return start + (end - start) * t;
  }
}

/** deterministic [0,1) per depth so layouts/rotating-flags are stable on recycle */
function pseudo(x: number): number {
  let h = (Math.imul(x + 1, 0x9e3779b9) ^ 0x85ebca6b) >>> 0;
  h = Math.imul(h ^ (h >>> 15), 0xc2b2ae35) >>> 0;
  return ((h ^ (h >>> 16)) >>> 0) / 0xffffffff;
}

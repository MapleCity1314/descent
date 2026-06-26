/**
 * Config — single source of truth for the visual identity palette and every
 * hand-feel tunable. Keeping the numbers here makes the "juice" pass a matter
 * of tuning constants rather than hunting through the codebase.
 *
 * Hard visual constraint (brief §1/§7): the only accent is maple-red. The whole
 * game is maple-red + greyscale + bone-white. No second accent colour exists.
 */

export const PALETTE = {
  void: 0x0e0e10, // background / emptiness
  towerDark: 0x16161a, // tower body low
  towerLight: 0x222228, // tower body high
  textPrimary: 0xededed,
  textSecondary: 0x9a9a9f,
  maple: 0xff4fa3, // accent — player ball, combo, record, particles (now hot pink)
  mapleDim: 0x6e2420,
  lethal: 0xff3355, // danger sectors — clear warning red
  bone: 0xe8e4da, // secondary objects
} as const;

/**
 * Dopamine safe-platform palette — bright candy hues cycled per ring so depth
 * reads as a joyful rainbow. Red and the accent pink are deliberately excluded
 * so "danger" (red) and "player" (pink) never blend into the safe platforms.
 */
export const SAFE_COLORS = [
  0x2dd4bf, // teal
  0x38bdf8, // sky
  0x818cf8, // indigo
  0x4ade80, // green
  0xfb923c, // orange
  0xffd23f, // amber
  0xc084fc, // purple
] as const;

/**
 * Ball skins (shop). `default` is free and pre-owned; the rest cost diamonds.
 * Colours stay within the dopamine candy family so every skin pops against the
 * platforms. `trail` is the additive streak colour above the falling ball.
 */
export interface SkinDef {
  id: string;
  name: string;
  cost: number; // diamonds; 0 = free/default
  color: number;
  emissive: number;
  trail: number;
}

export const SKINS: readonly SkinDef[] = [
  { id: 'default', name: '霓虹粉', cost: 0, color: 0xff4fa3, emissive: 0xff4fa3, trail: 0xff4fa3 },
  { id: 'mint', name: '薄荷', cost: 8, color: 0x2dd4bf, emissive: 0x2dd4bf, trail: 0x5eead4 },
  { id: 'sky', name: '晴空', cost: 12, color: 0x38bdf8, emissive: 0x0ea5e9, trail: 0x7dd3fc },
  { id: 'gold', name: '鎏金', cost: 18, color: 0xffd23f, emissive: 0xffb700, trail: 0xffe680 },
  { id: 'violet', name: '电光紫', cost: 24, color: 0xc084fc, emissive: 0xa855f7, trail: 0xd8b4fe },
  { id: 'lime', name: '青柠', cost: 30, color: 0x4ade80, emissive: 0x22c55e, trail: 0x86efac },
] as const;

/** Look up a skin by id, falling back to the default skin. */
export function skinById(id: string): SkinDef {
  return SKINS.find((s) => s.id === id) ?? SKINS[0];
}

/** Hex strings for DOM/CSS use (mirrors PALETTE). */
export const CSS = {
  void: '#0E0E10',
  towerDark: '#16161A',
  towerLight: '#222228',
  textPrimary: '#EDEDED',
  textSecondary: '#9A9A9F',
  maple: '#C0362C',
  mapleDim: '#6E2420',
  bone: '#E8E4DA',
} as const;

/** Tower / ring geometry. */
export const TOWER = {
  radiusInner: 0.85, // central column radius (ball orbits just outside this)
  radiusOuter: 2.2, // outer edge of platform discs
  ringHeight: 0.42, // vertical thickness of a ring's platform
  ringGap: 2.85, // vertical distance between consecutive rings (more void shows through gaps)
  sectorCount: 16, // angular resolution: a ring is 16 wedges
  visibleRings: 14, // pool size — how many rings exist below+around the ball
  recycleAbove: 3.5, // recycle a ring once it rises this far above the ball (in ringGap units)
} as const;

/** Ball physics. The ball is pinned at a fixed radius & screen-angle; only y moves. */
export const BALL = {
  radius: 0.34,
  orbitRadius: 1.5, // distance from central Y axis where the ball sits
  orbitAngle: Math.PI / 2, // front of the tower (+z, toward camera) → screen-centred
  gravity: -34, // units/s^2
  bounceSpeed: 11, // upward speed imparted on a safe-sector bounce
  maxFallSpeed: -26, // terminal velocity clamp
} as const;

/** Tower rotation feel (drag → target angle, eased follow). */
export const ROTATION = {
  dragSensitivity: 0.011, // radians per pixel dragged
  ease: 14, // higher = snappier follow toward target angle
} as const;

/** Combo / shatter (brief §2.4). */
export const COMBO = {
  shatterThreshold: 3, // consecutive passes to enter shatter state
  baseScorePerRing: 10,
  multiplierStep: 0.5, // multiplier grows by this each pass while comboing
  multiplierMax: 9,
  smashBonus: 15, // extra score for smashing through a safe sector
  bonusRingScore: 50,
  brittleScore: 6, // small reward for breaking a brittle platform (no combo flex)
  shatterSmashBudget: 5, // a dash can punch through this many safe platforms, then it stops
} as const;

/**
 * Difficulty curve — staged so it's gentle early and gains variety with depth
 * through DISTINCT mechanics rather than ever-more red (user direction):
 *   ① rotating-gap rings  ② narrowing gaps  ③ brittle platforms  ④ moving red arcs
 * Red (lethal) does not appear at all until ~score 500 (≈ depth 48), then enters
 * sparsely and ramps slowly. Early `score ≈ depth × 10`.
 */
export const DIFFICULTY = {
  // (1) fall speed: gravity scale ramps with depth (lowered + stretched).
  fallScaleStart: 1.0,
  fallScaleEnd: 1.6,
  fallScaleDepth: 180, // rings to reach end scale

  // gap width in sectors — wide & easy early, narrows deep (mechanic ②)
  gapCountStart: 4,
  gapCountMin: 1,
  narrowGapStartDepth: 90,
  narrowGapDepth: 120, // depth span over which the gap narrows to gapCountMin

  // lethal (red): none until lethalStartDepth, then sparse → up (capped low).
  lethalStartDepth: 48, // ≈ score 500
  lethalRatioStart: 0.02, // so round() yields mostly 0–1 lethal per ring at first
  lethalRatioEnd: 0.26, // upper cap kept modest — difficulty rides on mechanics
  lethalRatioDepth: 170, // depth span (past lethalStartDepth) to reach the cap

  // mechanic ①: rotating-gap rings (safe — the gap simply sweeps).
  rotatingStartDepth: 18,
  rotatingChanceStart: 0.0,
  rotatingChanceEnd: 0.3, // probability a ring is a rotating ring
  rotatingChanceDepth: 80,
  rotatingSpeed: 0.6, // rad/s a rotating ring spins

  // mechanic ③: brittle platforms (break on contact, count as a pass).
  brittleStartDepth: 130,
  brittleChance: 0.18, // chance a given safe sector becomes brittle

  // mechanic ④: moving red arcs — rotating rings may carry lethal past this depth.
  movingLethalStartDepth: 180,

  bonusRingEvery: 11, // a guaranteed bonus ring roughly every N rings
  warmupRings: 6, // first few rings are extra easy (wide gap, no red, no rotate)
} as const;

/** Camera follow. */
export const CAMERA = {
  fov: 58,
  followLag: 6, // higher = tighter follow of the ball's descent
  yOffset: 4.0, // camera sits this far above the ball (looks down into the tube)
  zDistance: 5.9, // pull-back distance
  rollAmount: 0.05, // micro tower-roll tilt (radians) for weight
} as const;

/** Fixed-timestep physics. */
export const STEP = {
  dt: 1 / 120, // physics step (s)
  maxSubSteps: 6,
} as const;

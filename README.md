# 坠 · DESCENT

**▶ Play it live: https://maplecity1314.github.io/descent/**

A Helix Jump–style 3D descent game. A maple-red ball falls down the central axis
of an infinite spiral tower; you rotate the whole tower to line a gap up under
the ball. Chain consecutive drops to enter a **shatter state** that smashes
straight through safe platforms — the high-score loop of the genre.

Built as a portfolio demo with a single, strict visual identity: **silent
authority** — maple-red `#C0362C` as the *only* accent, over greyscale +
bone-white, all geometry/procedural/lit (zero bitmaps). Energy stays held in
reserve and is only released on the two key beats: **smash-through** and
**death**.

## Tech stack

- **Vite + TypeScript**
- **Three.js** (WebGL, post-processing: bloom + a combined vignette/grain/
  chromatic-aberration pass)
- **Tone.js** (ambient drone bed + event SFX — not a rhythm game)
- **@fontsource/space-grotesk** (bundled locally — no external/CDN font)

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks + bundles to dist/ (relative paths, static-host ready)
npm run preview  # serve the built bundle
```

Desktop (mouse drag) and mobile (touch drag) both supported. The build uses
`base: './'`, so `dist/` drops onto any static host, and the modular structure
is a clean baseline for a WeChat mini-game port.

## Controls

- **Drag left/right** (mouse or touch) — rotate the tower.
- **Arrow keys** — rotate (keyboard accessibility).
- Tap **轻点坠落 / TAP TO DROP** to start; pause via the top-left button.

## Architecture

```
src/
  core/    Game (state machine + fixed-step physics + scoring), Config (palette
           + every hand-feel tunable), Input, Settings (localStorage, try/catch),
           Events, Haptics
  scene/   SceneManager (renderer/lights/fog/void backdrop), CameraRig
           (follow/roll/FOV punch/dive-in/death-drop), PostFX (composer)
  entities/ Tower (ring pool + spawn/recycle + difficulty), Ring (sector geometry
           + breathing lethal glow + smash), Player (physics + squash&stretch +
           shatter glow/trail), Sector
  physics/ Collision (pure crossing classifier)
  fx/      Particles (instanced shards/sparks/dust), ScreenFX (score popups,
           flash, edge pulse), Telegraph (landing glow)
  audio/   AudioManager (Tone.js)
  ui/      Screens (start/pause/gameover/settings), HUD, styles.css
```

Design principle: the simulation in `Game`/`Collision` stays pure; presentation
(FX, audio, haptics) reacts to gameplay moments. All hand-feel numbers live in
`core/Config.ts` for quick tuning.

### Core-mechanic interpretation

The brief says "the ball is fixed on the central axis." Implemented as the
standard Helix model: the ball's **horizontal position is fixed** (front of the
tower, screen-centred) and only its `y` moves; the **tower rotates** to bring a
gap/safe/lethal sector under it. Collision uses an exact crossing test — at the
moment the ball's underside crosses a ring's top plane, the sector under it is
resolved via `worldToLocal` (accounting for tower + rotating-ring spin) and
classified gap / bounce / smash / death.

### Difficulty (only two variables, per brief §2.6)

1. Fall-speed scale ramps with depth.
2. Lethal-sector ratio **and** rotating-ring frequency ramp with depth.

Gap width and everything else stay constant — one fair, tunable source of
difficulty.

## Notes on the JUICE pass (§5) — substitutions & decisions

Where I deviated from the literal checklist (brief §5.7.4 asks me to say so):

- **Platform smash** — instead of fragmenting the exact wedge mesh, the smashed
  sector hides and emits a burst of faceted shards (GPU-instanced) at the
  contact point. Pool-friendly and cheaper; reads as the same "platform blows
  apart" beat. This is the most-polished moment alongside death.
- **Ball trail** — an additive cone streak that scales with fall speed (longer/
  brighter in shatter), rather than a per-frame ribbon. Cheaper and gives a
  cleaner silhouette that suits the restrained tone; shatter additionally emits
  trailing embers.
- **Telegraph** — the imminent-landing glow is an additive maple ring placed on
  the target platform, brightening as the ball nears.
- **Death** — ~80ms freeze-frame → desaturated flash + chromatic punch +
  vignette snap + camera drop + shard explosion + sub-bass, then a slow sink to
  the game-over screen with a count-up and (on a record) a maple particle burst.
- **Post FX** — vignette, grain (near-invisible), and chromatic aberration are
  combined into one final shader pass; chromatic + heavy vignette are `0` by
  default and only pushed on smash/death so the picture stays calm.

## Quality / constraints

- **Hard palette**: maple-red + greyscale + bone-white only. No second accent.
- **Zero bitmaps**: all geometry + procedural + lighting + light bloom.
- `localStorage` access is fully `try/catch`-wrapped (sandbox-safe).
- `prefers-reduced-motion` respected: screenshake / FOV punch / chromatic
  disabled, grain off, CSS transitions reduced.
- Performance: ring object-pool with recycle, GPU-instanced particles, fixed-
  step physics. No per-frame allocation in the hot path.
- Keyboard focus visible; start/restart reachable and triggerable by keyboard.

## Feature flags

- **Ad-revive** (brief §6): `FEATURES.adRevive` in `src/ui/Screens.ts` — a
  collapsed, secondary "看广告复活" button on the game-over screen (pure UI;
  revives above the death position). Set to `false` to remove entirely.

## Known notes

- The production bundle is ~800 KB (~207 KB gzip), dominated by Three.js +
  Tone.js. Acceptable for a demo; could be code-split or trimmed for production.

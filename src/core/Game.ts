import { Vector3 } from 'three';
import { SceneManager } from '../scene/SceneManager';
import { PostFX } from '../scene/PostFX';
import { CameraRig } from '../scene/CameraRig';
import { Tower } from '../entities/Tower';
import { Ring } from '../entities/Ring';
import { Player } from '../entities/Player';
import { Diamonds } from '../entities/Diamonds';
import { SectorKind } from '../entities/Sector';
import { Particles } from '../fx/Particles';
import { ScreenFX } from '../fx/ScreenFX';
import { HUD } from '../ui/HUD';
import { Screens } from '../ui/Screens';
import { TutorialOverlay } from '../ui/TutorialOverlay';
import { AudioManager } from '../audio/AudioManager';
import { Haptics } from './Haptics';
import { Settings } from './Settings';
import { Input } from './Input';
import { classifyLanding, Landing } from '../physics/Collision';
import { CAMERA, COMBO, PALETTE, STEP, TOWER, skinById } from './Config';

const TUTORIAL_DEPTH = 14; // rings to clear before the tutorial completes
const RING_MID_RADIUS = (TOWER.radiusInner + TOWER.radiusOuter) / 2; // where debris spawns

const enum State {
  Start,
  Playing,
  Paused,
  Dead,
  GameOver,
}

const START_Y = 0;

/**
 * Game — the orchestrator. Owns the state machine, the fixed-step physics +
 * crossing-based collision, the combo/score model, and broadcasts every
 * gameplay moment to FX / audio / haptics. The simulation stays pure of
 * presentation; presentation reacts here.
 */
export class Game {
  private scene: SceneManager;
  private post: PostFX;
  private cam: CameraRig;
  private tower: Tower;
  private player: Player;
  private diamonds: Diamonds;
  private particles: Particles;
  private screenFX: ScreenFX;
  private hud: HUD;
  private screens: Screens;
  private tutorialOverlay: TutorialOverlay;
  private audio: AudioManager;
  private haptics: Haptics;
  private settings: Settings;
  private input: Input;

  private state: State = State.Start;
  private acc = 0;
  private time = 0;

  // run state
  private score = 0;
  private combo = 0;
  private multiplier = 1;
  private currentDepth = 0;
  private shattering = false;
  private shatterBudget = 0; // remaining safe-platform smashes before the dash ends
  private prevBottom = 0;
  private deathTimer = 0;
  private reviveUsed = false;
  private reducedMotion = false;

  // tutorial run state
  private tutorial = false;
  private tutShownCombo = false;
  private tutShownShatter = false;
  private tutShownDiamond = false;

  private readonly ballPos = new Vector3();
  private readonly _ringPos = new Vector3();

  constructor(canvas: HTMLCanvasElement, uiRoot: HTMLElement) {
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.scene = new SceneManager(canvas);
    this.post = new PostFX(this.scene.renderer, this.scene.scene, this.scene.camera);
    this.cam = new CameraRig(this.scene.camera);
    this.cam.reducedMotion = this.reducedMotion;

    this.tower = new Tower(this.scene.scene);
    this.player = new Player();
    this.scene.scene.add(this.player.group);
    this.diamonds = new Diamonds(this.scene.scene);
    this.particles = new Particles(this.scene.scene);

    this.settings = new Settings();
    this.audio = new AudioManager();
    this.haptics = new Haptics();
    this.haptics.enabled = this.settings.haptics;

    this.diamonds.onCollect = (pos) => this.onDiamond(pos);
    this.player.applySkin(skinById(this.settings.equippedSkin));

    this.screenFX = new ScreenFX(uiRoot);
    this.tutorialOverlay = new TutorialOverlay(uiRoot);
    this.hud = new HUD(uiRoot, () => this.pause());
    this.screens = new Screens(uiRoot, this.settings, {
      onStart: () => this.beginRun(),
      onResume: () => this.resume(),
      onRestart: () => this.beginRun(),
      onReviveAd: () => this.revive(),
      onSettingChange: (k, v) => this.changeSetting(k, v),
      onResetHighScore: () => this.settings.resetHighScore(),
      onButtonSound: () => this.audio.button(),
      onHome: () => this.goHome(),
      onTutorial: () => this.beginRun({ tutorial: true }),
      onBuySkin: (id) => this.buySkin(id),
      onEquipSkin: (id) => this.equipSkin(id),
    });

    this.input = new Input(canvas, (d) => {
      this.tower.targetRotation += d;
    });

    if (this.reducedMotion) this.post.setGrain(0);

    // keep post-processing buffers in sync with the renderer (covers both the
    // window 'resize' path and the ResizeObserver late-sizing path)
    this.scene.onResize = (w, h) => this.post.setSize(w, h);
    window.addEventListener('resize', () => this.scene.resize());

    this.enterStart();
  }

  // ---------- state transitions ----------
  private enterStart(): void {
    this.state = State.Start;
    this.player.group.visible = false;
    this.tower.reset();
    this.diamonds.reset(START_Y, false);
    this.tutorialOverlay.hide();
    this.input.enabled = false;
    this.hud.show(false);
    this.screens.showStart();
    this.cam.snapTo(START_Y);
  }

  private beginRun(opts?: { tutorial?: boolean }): void {
    const tutorial = !!opts?.tutorial;
    this.tutorial = tutorial;
    this.tutShownCombo = this.tutShownShatter = this.tutShownDiamond = false;

    void this.audio.start(); // first gesture — boot audio
    this.score = 0;
    this.combo = 0;
    this.multiplier = 1;
    this.currentDepth = 0;
    this.shattering = false;
    this.shatterBudget = 0;
    this.reviveUsed = false;

    // tutorial: fixed gentle layout, no red, no diamonds; otherwise randomised
    this.tower.reset(tutorial ? 0xbeef : undefined, tutorial);
    this.diamonds.reset(START_Y, !tutorial);
    this.player.applySkin(skinById(this.settings.equippedSkin));
    this.player.reset(START_Y);
    this.player.group.visible = true;
    this.player.setShatter(false);
    this.prevBottom = this.player.bottom;
    this.cam.beginIntro(START_Y);
    this.input.enabled = true;
    this.screens.hideAll();
    this.hud.show(true);
    this.hud.setScore(0);
    this.hud.setMultiplier(1, false);
    this.hud.setDiamonds(this.settings.diamonds);

    if (tutorial) this.tutorialOverlay.show('拖动屏幕旋转塔，对准缺口让球落下');
    else this.tutorialOverlay.hide();

    this.state = State.Playing;
  }

  private pause(): void {
    if (this.state !== State.Playing) return;
    this.audio.button();
    this.state = State.Paused;
    this.input.enabled = false;
    this.screens.open('pause');
  }

  private resume(): void {
    if (this.state !== State.Paused) return;
    this.state = State.Playing;
    this.input.enabled = true;
    this.screens.hideAll();
  }

  /** Abandon the current run and return to the start menu (from pause). */
  private goHome(): void {
    this.tutorial = false;
    this.tutorialOverlay.hide();
    this.enterStart();
  }

  private revive(): void {
    if (this.reviveUsed) return;
    this.reviveUsed = true;
    this.audio.button();
    // resurrect just above the lethal ring and clear it to a safe passage
    this.player.reset(this.tower.ringWorldPos(this.currentDepth, this.ballPos).y + TOWER.ringGap * 1.5);
    this.player.group.visible = true;
    this.prevBottom = this.player.bottom;
    this.shattering = false;
    this.shatterBudget = 0;
    this.player.setShatter(false);
    this.combo = 0;
    this.multiplier = 1;
    this.screens.hideAll();
    this.hud.show(true);
    this.cam.snapTo(this.player.y);
    this.state = State.Playing;
  }

  private die(): void {
    this.state = State.Dead;
    this.deathTimer = 0;
    this.player.getWorldPos(this.ballPos);
    this.player.group.visible = false;

    // the one big release: explode, freeze, flash, shake, drop
    this.particles.burstShards(this.ballPos, PALETTE.maple, 26);
    this.particles.burstSparks(this.ballPos, 30);
    this.screenFX.flash(0.7);
    this.post.desatFlash(0.85);
    this.post.chromaticPunch(0.012);
    this.post.vignettePunch(1.4);
    this.cam.deathDrop();
    this.audio.death();
    this.haptics.death();
    this.input.enabled = false;
    this.hud.show(false);
  }

  private finishGameOver(): void {
    this.state = State.GameOver;
    const finalScore = Math.round(this.score);
    const isRecord = this.settings.submitScore(finalScore);
    if (isRecord) {
      this.particles.recordBurst(this.ballPos);
      this.screenFX.edgePulse();
    }
    this.screens.showGameOver(finalScore, isRecord);
  }

  private changeSetting(k: 'music' | 'sfx' | 'haptics', v: boolean): void {
    if (k === 'music') {
      this.settings.setMusic(v);
      this.audio.setMusic(v);
    } else if (k === 'sfx') {
      this.settings.setSfx(v);
      this.audio.setSfx(v);
    } else {
      this.settings.setHaptics(v);
      this.haptics.enabled = v;
    }
  }

  // ---------- main frame ----------
  frame(rawDt: number): void {
    const dt = Math.min(rawDt, 0.05); // clamp big stalls
    this.time += dt;

    switch (this.state) {
      case State.Start:
        this.updateStart(dt);
        break;
      case State.Playing:
        this.updatePlaying(dt);
        break;
      case State.Paused:
        // frozen sim; keep post/particles calm
        this.post.update(dt);
        break;
      case State.Dead:
        this.updateDeath(dt);
        break;
      case State.GameOver:
        this.updateGameOver(dt);
        break;
    }

    this.scene.syncBackdrop();
    this.post.render();
  }

  private updateStart(dt: number): void {
    // brief §3.1: a very slow ambient tower spin hinting at the mechanic
    this.tower.group.rotation.y += 0.12 * dt;
    this.tower.update(dt, this.time);
    this.cam.update(dt, START_Y + 1.5);
    this.particles.update(dt, this.scene.camera.position.y);
    this.post.update(dt);
  }

  private updatePlaying(dt: number): void {
    this.input.update(dt);
    this.tower.updateRotation(dt);

    // fixed-step physics + crossing collision
    this.acc += dt;
    let steps = 0;
    while (this.acc >= STEP.dt && steps < STEP.maxSubSteps) {
      this.physicsStep(STEP.dt);
      this.acc -= STEP.dt;
      steps++;
      if (this.state !== State.Playing) break; // died mid-step
    }

    this.tower.recycle(this.player.y);
    this.tower.update(dt, this.time);
    this.diamonds.update(dt, this.time, this.player.y);

    // camera: follow + micro roll from rotation speed
    this.cam.setRollTarget(-this.input.getAngularVelocity() * 6 * CAMERA.rollAmount * 20);
    this.cam.update(dt, this.player.y);

    // shatter embers
    if (this.shattering) {
      this.player.getWorldPos(this.ballPos);
      this.particles.emitEmber(this.ballPos);
    }
    this.player.render(dt, this.time);

    this.particles.update(dt, this.scene.camera.position.y);

    // bloom rises subtly with combo; tension opens the drone filter with depth
    const intensity = Math.min(1, this.combo / 12) * (this.shattering ? 1 : 0.5);
    this.post.setBloomIntensity(intensity);
    this.post.update(dt);
    this.audio.setTension(Math.min(1, this.currentDepth / 80));

    this.hud.setScore(this.score);
    this.hud.setMultiplier(this.multiplier, this.shattering);
  }

  private physicsStep(dt: number): void {
    this.prevBottom = this.player.bottom;
    const gScale = this.tower.fallScale(this.currentDepth);
    this.player.integrate(dt, gScale);

    const ring = this.tower.getRingByDepth(this.currentDepth);
    if (!ring) return;
    const ringTop = ring.worldYTop();

    // crossing from above while falling?
    if (this.player.vy < 0 && this.prevBottom > ringTop && this.player.bottom <= ringTop) {
      this.player.getWorldPos(this.ballPos);
      const res = classifyLanding(ring, this.ballPos, this.shattering);

      switch (res.landing) {
        case Landing.Pass:
          this.onPass(ring.bonus);
          break;
        case Landing.Bounce:
          this.onBounce();
          break;
        case Landing.Smash:
          this.onSmash(ring, res.sectorIndex, ring.kindAt(res.sectorIndex) === SectorKind.Brittle);
          break;
        case Landing.Death:
          this.die();
          break;
      }
    }
  }

  // ---------- landing consequences ----------
  private onPass(bonus: boolean): void {
    this.combo++;
    this.advanceCombo();
    let gained = Math.round(COMBO.baseScorePerRing * this.multiplier);
    if (bonus) gained += COMBO.bonusRingScore;
    this.score += gained;

    this.player.getWorldPos(this.ballPos);
    this.screenFX.scorePopup(this.ballPos, `+${gained}`, bonus || this.shattering, this.scene.camera, this.scene.renderer);

    if (bonus) {
      this.audio.bonus();
      this.post.vignettePunch(0.3);
    } else {
      this.audio.pass();
    }
    this.haptics.pass();
    // the just-cleared disc shatters into candy fragments beneath the ball (juice)
    if (!this.reducedMotion) this.crumbleRing(this.tower.getRingByDepth(this.currentDepth));
    this.currentDepth++;

    if (this.tutorial) {
      if (!this.tutShownCombo && this.combo >= 2) {
        this.tutShownCombo = true;
        this.tutorialOverlay.show('连续穿过缺口可以攒连击', 2600);
      }
      if (this.currentDepth >= TUTORIAL_DEPTH) this.finishTutorial();
    }
  }

  private onBounce(): void {
    this.combo = 0;
    this.multiplier = 1;
    if (this.shattering) {
      this.shattering = false;
      this.player.setShatter(false);
    }
    this.player.bounce();
    this.audio.bounce();
    this.haptics.bounce();
    // currentDepth unchanged — player must rotate a gap under the ball
  }

  private onSmash(ring: ReturnType<Tower['getRingByDepth']>, sectorIndex: number, brittle: boolean): void {
    this.combo++;
    this.advanceCombo();
    const gained =
      Math.round(COMBO.baseScorePerRing * this.multiplier) + (brittle ? COMBO.brittleScore : COMBO.smashBonus);
    this.score += gained;

    ring!.smashSector(sectorIndex, this.ballPos);
    this.particles.burstSparks(this.ballPos, brittle ? 6 : 12);
    this.player.smashImpact();

    this.screenFX.scorePopup(this.ballPos, `+${gained}`, true, this.scene.camera, this.scene.renderer);

    if (brittle) {
      // a brittle platform shatters cheaply — soft feedback, no big camera punch,
      // and it does NOT spend the dash budget (it isn't a "real" smash)
      this.audio.pass();
      this.haptics.pass();
    } else {
      // the *other* big release: punch the camera, shake, brief chromatic
      this.cam.punchFOV(6);
      this.cam.addShake(0.5);
      this.post.chromaticPunch(0.006);
      this.post.vignettePunch(0.6);
      if (!this.reducedMotion) this.particles.shockwave(this.ballPos);
      this.audio.smash();
      this.haptics.smash();
      // the dash spends one smash; when its budget runs out the dash ends so the
      // next safe platform bounces and stops the ball (req 4 — no endless dive)
      if (this.shattering && --this.shatterBudget <= 0) {
        this.shattering = false;
        this.player.setShatter(false);
        this.combo = 0;
        this.multiplier = 1;
      }
    }
    // the rest of the smashed disc shatters into candy fragments too (juice)
    if (!this.reducedMotion) this.crumbleRing(ring!);
    this.currentDepth++;
  }

  private advanceCombo(): void {
    this.multiplier = Math.min(COMBO.multiplierMax, 1 + this.combo * COMBO.multiplierStep);
    this.hud.pulseMultiplier();

    if (this.combo >= COMBO.shatterThreshold && !this.shattering) {
      this.shattering = true;
      this.shatterBudget = COMBO.shatterSmashBudget;
      this.player.setShatter(true);
      this.player.getWorldPos(this.ballPos);
      this.audio.shatterEnter();
      this.post.vignettePunch(0.4);
      if (this.tutorial && !this.tutShownShatter) {
        this.tutShownShatter = true;
        this.tutorialOverlay.show('碎裂态！可砸穿平台，冲刺额度用完会自动停下', 3000);
      }
    }
    if (this.combo > 0 && this.combo % 5 === 0) {
      this.screenFX.edgePulse();
    }
  }

  // ---------- diamonds / shop / tutorial ----------
  private onDiamond(pos: Vector3): void {
    this.settings.addDiamonds(1);
    this.particles.burstSparks(pos, 12);
    this.audio.diamond();
    this.haptics.pass();
    this.hud.setDiamonds(this.settings.diamonds);
    this.hud.pulseDiamonds();
    if (!this.tutShownDiamond) {
      this.tutShownDiamond = true;
      this.tutorialOverlay.show('◆ 钻石可在商店兑换球皮肤', 2200);
    }
  }

  private buySkin(id: string): void {
    const skin = skinById(id);
    if (this.settings.purchaseSkin(id, skin.cost)) {
      this.settings.equipSkin(id);
      this.player.applySkin(skinById(this.settings.equippedSkin));
    }
    this.screens.refreshShop();
  }

  private equipSkin(id: string): void {
    this.settings.equipSkin(id);
    this.player.applySkin(skinById(this.settings.equippedSkin));
    this.screens.refreshShop();
  }

  private finishTutorial(): void {
    this.settings.markTutorialSeen();
    this.tutorial = false;
    this.enterStart();
    this.tutorialOverlay.complete(); // after enterStart (which hides the overlay)
  }

  /** A cleared disc shatters: hide it and burst colored candy fragments from its rim. */
  private crumbleRing(ring: Ring | undefined): void {
    if (!ring || ring.bonus) return;
    this._ringPos.set(0, ring.centerY(), 0);
    this.particles.burstRing(this._ringPos, RING_MID_RADIUS, ring.mainColor(), 46);
    ring.break();
  }

  private updateDeath(dt: number): void {
    this.deathTimer += dt;
    // ~80ms freeze-frame: hold everything
    if (this.deathTimer < 0.08) {
      return;
    }
    // slow sink
    const slow = 0.4;
    this.tower.update(dt * slow, this.time);
    this.cam.update(dt * slow, this.player.y);
    this.particles.update(dt, this.scene.camera.position.y);
    this.post.update(dt);
    if (this.deathTimer > 1.1) this.finishGameOver();
  }

  private updateGameOver(dt: number): void {
    this.tower.group.rotation.y += 0.06 * dt;
    this.tower.update(dt, this.time);
    this.cam.update(dt, this.player.y);
    this.particles.update(dt, this.scene.camera.position.y);
    this.post.update(dt);
  }
}

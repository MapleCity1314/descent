import { PerspectiveCamera, Vector3 } from 'three';
import { CAMERA } from '../core/Config';

/**
 * CameraRig — drives the camera transform: lagged vertical follow of the ball,
 * a micro roll tilt for weight, transient FOV punch on impact, additive
 * screenshake, and the dive-in / death-drop transitions. Energy stays low by
 * default; the punches are only fired at smash/death (brief reverse-constraint).
 */
export class CameraRig {
  private followY = 0;
  private roll = 0;
  private rollTarget = 0;
  private fovBoost = 0; // additive, decays to 0
  private shake = 0; // decays to 0
  private dropVel = 0; // death-drop extra downward velocity
  private readonly lookTarget = new Vector3();
  private intro = 0; // 0..1 dive-in progress (1 = settled)
  private seed = 0;

  reducedMotion = false;

  constructor(private camera: PerspectiveCamera) {}

  snapTo(ballY: number): void {
    this.followY = ballY + CAMERA.yOffset;
    this.roll = this.rollTarget = 0;
    this.fovBoost = 0;
    this.shake = 0;
    this.dropVel = 0;
    this.intro = 1;
  }

  /** Begin a dive-in: camera starts pulled up & out, then eases to gameplay framing. */
  beginIntro(ballY: number): void {
    this.followY = ballY + CAMERA.yOffset + 6;
    this.intro = 0;
  }

  punchFOV(amount: number): void {
    if (this.reducedMotion) return;
    this.fovBoost = Math.max(this.fovBoost, amount);
  }

  addShake(amount: number): void {
    if (this.reducedMotion) return;
    this.shake = Math.max(this.shake, amount);
  }

  setRollTarget(t: number): void {
    this.rollTarget = this.reducedMotion ? 0 : t;
  }

  deathDrop(): void {
    this.dropVel = 4.5;
    this.addShake(0.9);
    this.punchFOV(10);
  }

  update(dt: number, ballY: number): void {
    this.seed += dt;

    // dive-in easing
    if (this.intro < 1) {
      this.intro = Math.min(1, this.intro + dt * 1.4);
    }
    const introEase = 1 - Math.pow(1 - this.intro, 3);

    // lagged follow
    const targetY = ballY + CAMERA.yOffset;
    const k = Math.min(1, CAMERA.followLag * dt);
    this.followY += (targetY - this.followY) * k;

    // death drop adds downward drift
    if (this.dropVel > 0.001) {
      this.followY -= this.dropVel * dt;
      this.dropVel *= 1 - Math.min(1, dt * 2);
    }

    // roll easing
    this.roll += (this.rollTarget - this.roll) * Math.min(1, dt * 6);

    // FOV recovery
    this.fovBoost *= 1 - Math.min(1, dt * 6);
    this.camera.fov = CAMERA.fov + this.fovBoost;
    this.camera.updateProjectionMatrix();

    // shake decay + additive offset
    this.shake *= 1 - Math.min(1, dt * 7);
    const sx = this.shake * Math.sin(this.seed * 97.0) * 0.25;
    const sy = this.shake * Math.sin(this.seed * 83.0 + 1.3) * 0.25;

    const introLift = (1 - introEase) * 6;
    const introBack = (1 - introEase) * 4;

    this.camera.position.set(
      sx,
      this.followY + introLift,
      CAMERA.zDistance + introBack,
    );
    this.camera.rotation.z = this.roll + sy * 0.05;

    // look a little below the ball so the player reads the descent ahead
    this.lookTarget.set(0, ballY - 1.4, 0);
    this.camera.lookAt(this.lookTarget);
    this.camera.rotation.z += this.roll; // re-apply roll after lookAt reset
  }
}

import { ROTATION } from './Config';

/**
 * Input — converts horizontal pointer/touch drag into tower rotation. The ball
 * never moves sideways; dragging rotates the whole tower (brief §2.2). Reports a
 * smoothed angular velocity so the camera can add a micro roll tilt.
 *
 * Only active while `enabled` (i.e. during play). Arrow keys also rotate, for
 * keyboard accessibility.
 */
export class Input {
  enabled = false;
  private dragging = false;
  private lastX = 0;
  private angularVel = 0;
  private keyDir = 0;

  constructor(
    target: HTMLElement,
    private onRotate: (deltaRad: number) => void,
  ) {
    target.addEventListener('pointerdown', this.onDown, { passive: true });
    window.addEventListener('pointermove', this.onMove, { passive: true });
    window.addEventListener('pointerup', this.onUp, { passive: true });
    window.addEventListener('pointercancel', this.onUp, { passive: true });
    window.addEventListener('keydown', this.onKey);
    window.addEventListener('keyup', this.onKeyUp);
  }

  private onDown = (e: PointerEvent): void => {
    if (!this.enabled) return;
    // ignore drags that start on UI buttons
    if ((e.target as HTMLElement)?.closest?.('button, .ui-interactive')) return;
    this.dragging = true;
    this.lastX = e.clientX;
  };

  private onMove = (e: PointerEvent): void => {
    if (!this.enabled || !this.dragging) return;
    const dx = e.clientX - this.lastX;
    this.lastX = e.clientX;
    const delta = dx * ROTATION.dragSensitivity;
    this.onRotate(delta);
    this.angularVel = this.angularVel * 0.6 + delta * 0.4;
  };

  private onUp = (): void => {
    this.dragging = false;
  };

  private onKey = (e: KeyboardEvent): void => {
    if (!this.enabled) return;
    if (e.key === 'ArrowLeft') this.keyDir = -1;
    else if (e.key === 'ArrowRight') this.keyDir = 1;
  };

  private onKeyUp = (e: KeyboardEvent): void => {
    if (e.key === 'ArrowLeft' && this.keyDir === -1) this.keyDir = 0;
    if (e.key === 'ArrowRight' && this.keyDir === 1) this.keyDir = 0;
  };

  /** call each frame to apply held-key rotation and decay angular velocity. */
  update(dt: number): void {
    if (this.enabled && this.keyDir !== 0) {
      const delta = this.keyDir * 2.6 * dt;
      this.onRotate(delta);
      this.angularVel = this.angularVel * 0.6 + delta * 0.4;
    } else {
      this.angularVel *= 1 - Math.min(1, dt * 8);
    }
  }

  getAngularVelocity(): number {
    return this.angularVel;
  }
}

import {
  AdditiveBlending,
  ConeGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PointLight,
  SphereGeometry,
  Vector3,
} from 'three';
import { BALL, PALETTE, type SkinDef } from '../core/Config';

/**
 * Player — the maple-red ball. Pinned at a fixed orbit position (x = orbitRadius,
 * z = 0); only y changes via gravity + bounce. Owns its squash & stretch and the
 * shatter-state glow. A small point light rides with it so nearby platforms pick
 * up a soft maple contact glow (doubles as the landing telegraph).
 */
export class Player {
  readonly group = new Group();
  private mesh: Mesh;
  private mat: MeshStandardMaterial;
  private light: PointLight;
  private trail: Mesh;
  private trailMat: MeshBasicMaterial;

  vy = 0;
  y = 0;
  shattering = false;

  private squash = 0; // impact compression impulse, decays to 0
  private glow = 0.45; // current emissive intensity (eased)
  private glowTarget = 0.45;
  private readonly worldPos = new Vector3();

  constructor() {
    const geo = new SphereGeometry(BALL.radius, 32, 24);
    this.mat = new MeshStandardMaterial({
      color: PALETTE.maple,
      emissive: PALETTE.maple,
      emissiveIntensity: 0.45,
      roughness: 0.35,
      metalness: 0.1,
    });
    this.mesh = new Mesh(geo, this.mat);
    this.group.add(this.mesh);

    // a soft maple glow that pools faintly under the ball — kept subtle so it
    // doesn't wash the grey platforms red (which would hide the lethal sectors)
    this.light = new PointLight(PALETTE.maple, 0.5, 2.2, 2.4);
    this.light.position.set(0, 0, 0);
    this.group.add(this.light);

    // upward-pointing trail (the ball falls, so the streak trails above it)
    const trailGeo = new ConeGeometry(BALL.radius * 0.8, 1, 16, 1, true);
    trailGeo.translate(0, 0.5, 0); // base at ball, tip upward
    this.trailMat = new MeshBasicMaterial({
      color: PALETTE.maple,
      transparent: true,
      opacity: 0,
      blending: AdditiveBlending,
      depthWrite: false,
    });
    this.trail = new Mesh(trailGeo, this.trailMat);
    this.group.add(this.trail);

    this.group.position.set(BALL.orbitRadius * Math.cos(BALL.orbitAngle), 0, BALL.orbitRadius * Math.sin(BALL.orbitAngle));
  }

  reset(startY: number): void {
    this.y = startY;
    this.vy = 0;
    this.squash = 0;
    this.shattering = false;
    this.glow = this.glowTarget = 0.45;
    this.group.position.y = startY;
    this.mesh.scale.set(1, 1, 1);
  }

  /** Advance physics by one fixed step. gravityScale ramps fall speed with depth. */
  integrate(dt: number, gravityScale: number): void {
    this.vy += BALL.gravity * gravityScale * dt;
    if (this.vy < BALL.maxFallSpeed) this.vy = BALL.maxFallSpeed;
    this.y += this.vy * dt;
  }

  bounce(): void {
    this.vy = BALL.bounceSpeed;
    this.squash = 0.7;
  }

  smashImpact(): void {
    this.squash = 0.5;
    // keep punching downward — a smash shouldn't stall the descent
    if (this.vy > -10) this.vy = -10;
  }

  setShatter(on: boolean): void {
    this.shattering = on;
    this.glowTarget = on ? 1.6 : 0.45;
  }

  /** Apply a shop skin to the ball, its contact light and its trail streak. */
  applySkin(skin: SkinDef): void {
    this.mat.color.setHex(skin.color);
    this.mat.emissive.setHex(skin.emissive);
    this.light.color.setHex(skin.color);
    this.trailMat.color.setHex(skin.trail);
  }

  /** Per-frame visual update (runs at render rate, not physics rate). */
  render(dt: number, time: number): void {
    this.group.position.y = this.y;

    // squash impulse decays
    this.squash += (0 - this.squash) * Math.min(1, dt * 12);

    // velocity-driven stretch (taller while falling fast)
    const sv = Math.min(1, Math.max(0, -this.vy / 26)) * 0.22;
    const sy = (1 + sv) * (1 - this.squash * 0.55);
    const sx = (1 - sv * 0.45) * (1 + this.squash * 0.5);
    this.mesh.scale.set(sx, sy, sx);

    // eased glow + shatter pulse
    this.glow += (this.glowTarget - this.glow) * Math.min(1, dt * 8);
    const pulse = this.shattering ? 0.25 * Math.sin(time * 18) : 0;
    this.mat.emissiveIntensity = this.glow + pulse;
    this.light.intensity = (this.shattering ? 1.8 : 0.5) + pulse * 1.2;

    // trail grows with downward speed; brighter/longer while shattering
    const fall = Math.min(1, Math.max(0, -this.vy / 22));
    const len = fall * (this.shattering ? 3.2 : 1.8) + (this.shattering ? 0.6 : 0);
    const wid = this.shattering ? 1.5 : 1.0;
    this.trail.scale.set(wid, Math.max(0.001, len), wid);
    this.trail.visible = len > 0.05;
    this.trailMat.opacity = Math.min(0.7, fall * (this.shattering ? 0.7 : 0.4) + (this.shattering ? 0.15 : 0));
  }

  getWorldPos(out?: Vector3): Vector3 {
    const v = out ?? this.worldPos;
    return this.group.getWorldPosition(v);
  }

  get bottom(): number {
    return this.y - BALL.radius;
  }
}

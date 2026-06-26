import {
  AdditiveBlending,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Color,
  DoubleSide,
  DynamicDrawUsage,
  IcosahedronGeometry,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  Points,
  PointsMaterial,
  Quaternion,
  RingGeometry,
  Scene,
  Vector3,
} from 'three';
import { PALETTE } from '../core/Config';

interface Wave {
  mesh: Mesh;
  mat: MeshBasicMaterial;
  life: number;
  ttl: number;
  active: boolean;
}

interface Shard {
  pos: Vector3;
  vel: Vector3;
  spin: Vector3;
  rot: Quaternion;
  life: number;
  ttl: number;
  scale: number;
  active: boolean;
}

const _dummy = new Object3D();
const _q = new Quaternion();
const _axis = new Vector3();

/**
 * Particles — pooled, GPU-instanced shards + sparks for the smash/death bursts,
 * plus a drifting dust field for depth. Everything recycles; nothing allocates
 * per frame after construction.
 */
export class Particles {
  private shardMesh: InstancedMesh;
  private shards: Shard[] = [];
  private shardCap = 140;

  private sparkMesh: InstancedMesh;
  private sparks: Shard[] = [];
  private sparkCap = 220;

  private dust: Points;
  private dustPositions: Float32Array;
  private dustCount = 220;

  private waves: Wave[] = [];
  private waveCap = 8;

  private debrisMesh: InstancedMesh;
  private debris: Shard[] = [];
  private debrisCap = 240;
  private debrisColorDirty = false;

  private _color = new Color();

  constructor(scene: Scene) {
    // shards: small icosahedra (faceted, reads as broken platform chips)
    const shardGeo = new IcosahedronGeometry(0.12, 0);
    const shardMat = new MeshStandardMaterial({
      roughness: 0.5,
      metalness: 0.1,
      emissive: PALETTE.maple,
      emissiveIntensity: 0.3,
      vertexColors: false,
    });
    this.shardMesh = new InstancedMesh(shardGeo, shardMat, this.shardCap);
    this.shardMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.shardMesh.frustumCulled = false;
    this.shardMesh.count = this.shardCap;
    scene.add(this.shardMesh);

    const sparkGeo = new IcosahedronGeometry(0.04, 0);
    const sparkMat = new MeshStandardMaterial({
      color: PALETTE.maple,
      emissive: PALETTE.maple,
      emissiveIntensity: 1.8,
      roughness: 0.4,
    });
    this.sparkMesh = new InstancedMesh(sparkGeo, sparkMat, this.sparkCap);
    this.sparkMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.sparkMesh.frustumCulled = false;
    this.sparkMesh.count = this.sparkCap;
    scene.add(this.sparkMesh);

    // candy debris — many small chips that burst out when a disc shatters, each
    // tinted to its platform's colour via per-instance colour. A little emissive
    // keeps them glowing like the platforms they came from.
    const debrisGeo = new BoxGeometry(0.2, 0.12, 0.2);
    const debrisMat = new MeshStandardMaterial({
      roughness: 0.38,
      metalness: 0.0,
      emissive: 0xffffff,
      emissiveIntensity: 0.18,
    });
    this.debrisMesh = new InstancedMesh(debrisGeo, debrisMat, this.debrisCap);
    this.debrisMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.debrisMesh.frustumCulled = false;
    this.debrisMesh.count = this.debrisCap;
    scene.add(this.debrisMesh);

    for (let i = 0; i < this.shardCap; i++) this.shards.push(this.makeShard());
    for (let i = 0; i < this.sparkCap; i++) this.sparks.push(this.makeShard());
    for (let i = 0; i < this.debrisCap; i++) {
      this.debris.push(this.makeShard());
      this.debrisMesh.setColorAt(i, this._color.setHex(0xffffff));
    }
    this.hideAll(this.shardMesh, this.shardCap);
    this.hideAll(this.sparkMesh, this.sparkCap);
    this.hideAll(this.debrisMesh, this.debrisCap);
    if (this.debrisMesh.instanceColor) this.debrisMesh.instanceColor.needsUpdate = true;

    // dust field
    this.dustPositions = new Float32Array(this.dustCount * 3);
    for (let i = 0; i < this.dustCount; i++) {
      this.dustPositions[i * 3] = (Math.random() - 0.5) * 10;
      this.dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      this.dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const dustGeo = new BufferGeometry();
    dustGeo.setAttribute('position', new BufferAttribute(this.dustPositions, 3));
    const dustMat = new PointsMaterial({
      color: PALETTE.bone,
      size: 0.03,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      fog: true,
    });
    this.dust = new Points(dustGeo, dustMat);
    this.dust.frustumCulled = false;
    scene.add(this.dust);

    // impact shockwaves — flat expanding rings that punch out from a smash
    const waveGeo = new RingGeometry(0.62, 0.8, 44);
    waveGeo.rotateX(-Math.PI / 2); // lie flat in the XZ plane
    for (let i = 0; i < this.waveCap; i++) {
      const mat = new MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        blending: AdditiveBlending,
        side: DoubleSide,
        depthWrite: false,
      });
      const mesh = new Mesh(waveGeo, mat);
      mesh.visible = false;
      mesh.frustumCulled = false;
      scene.add(mesh);
      this.waves.push({ mesh, mat, life: 0, ttl: 0.4, active: false });
    }
  }

  /** A bright ring that bursts outward from an impact point (the crash). */
  shockwave(pos: Vector3, color = 0xffffff): void {
    for (const w of this.waves) {
      if (w.active) continue;
      w.active = true;
      w.life = 0;
      w.ttl = 0.4;
      w.mesh.visible = true;
      w.mesh.position.copy(pos);
      w.mesh.scale.setScalar(0.4);
      w.mat.color.setHex(color);
      w.mat.opacity = 0.5;
      return;
    }
  }

  private makeShard(): Shard {
    return {
      pos: new Vector3(),
      vel: new Vector3(),
      spin: new Vector3(),
      rot: new Quaternion(),
      life: 0,
      ttl: 1,
      scale: 1,
      active: false,
    };
  }

  private hideAll(mesh: InstancedMesh, cap: number): void {
    _dummy.scale.set(0, 0, 0);
    _dummy.position.set(0, -9999, 0);
    _dummy.updateMatrix();
    for (let i = 0; i < cap; i++) mesh.setMatrixAt(i, _dummy.matrix);
    mesh.instanceMatrix.needsUpdate = true;
  }

  /** Platform smash: chunky shards flying outward + a few bright sparks. */
  burstShards(pos: Vector3, color: number = PALETTE.maple, count = 14): void {
    this._color.setHex(color);
    let spawned = 0;
    for (const s of this.shards) {
      if (s.active) continue;
      s.active = true;
      s.pos.copy(pos).add(rand(0.25));
      s.vel.set(
        (Math.random() - 0.5) * 6,
        Math.random() * 2.5 + 0.5,
        (Math.random() - 0.5) * 6,
      );
      s.spin.set(rnd(8), rnd(8), rnd(8));
      s.rot.identity();
      s.life = 0;
      s.ttl = 0.6 + Math.random() * 0.4;
      s.scale = 0.7 + Math.random() * 0.8;
      if (++spawned >= count) break;
    }
    this.burstSparks(pos, 8);
  }

  burstSparks(pos: Vector3, count = 10): void {
    let spawned = 0;
    for (const s of this.sparks) {
      if (s.active) continue;
      s.active = true;
      s.pos.copy(pos).add(rand(0.15));
      s.vel.set(
        (Math.random() - 0.5) * 4,
        Math.random() * 3 + 1,
        (Math.random() - 0.5) * 4,
      );
      s.spin.set(0, 0, 0);
      s.life = 0;
      s.ttl = 0.4 + Math.random() * 0.3;
      s.scale = 0.6 + Math.random() * 0.8;
      if (++spawned >= count) break;
    }
  }

  /** Trailing embers behind the ball while shattering. */
  emitEmber(pos: Vector3): void {
    for (const s of this.sparks) {
      if (s.active) continue;
      s.active = true;
      s.pos.copy(pos).add(rand(0.08));
      s.vel.set((Math.random() - 0.5) * 0.8, -0.4 - Math.random(), (Math.random() - 0.5) * 0.8);
      s.life = 0;
      s.ttl = 0.5 + Math.random() * 0.3;
      s.scale = 0.4 + Math.random() * 0.5;
      return;
    }
  }

  /**
   * A disc shatters: a ring of small candy chips bursts outward from the rim and
   * rains down, each tinted to the platform's colour. This is the crash — many
   * small fragments, not a few big slices.
   */
  burstRing(center: Vector3, radius: number, color: number, count = 46): void {
    let spawned = 0;
    for (let i = 0; i < this.debris.length && spawned < count; i++) {
      const s = this.debris[i];
      if (s.active) continue;
      const a = Math.random() * Math.PI * 2;
      const r = radius * (0.5 + Math.random() * 0.7);
      s.active = true;
      s.pos.set(
        center.x + Math.cos(a) * r,
        center.y + (Math.random() - 0.5) * 0.3,
        center.z + Math.sin(a) * r,
      );
      const outward = 1.4 + Math.random() * 3.6;
      s.vel.set(
        Math.cos(a) * outward,
        0.6 - Math.random() * 3.4, // mostly downward — the ball punched through from above
        Math.sin(a) * outward,
      );
      s.spin.set(rnd(14), rnd(14), rnd(14));
      s.rot.identity();
      s.life = 0;
      s.ttl = 0.55 + Math.random() * 0.5;
      s.scale = 0.55 + Math.random() * 1.0;
      this.debrisMesh.setColorAt(i, this._color.setHex(color));
      spawned++;
    }
    this.debrisColorDirty = true;
  }

  /** Big celebratory burst for a new record (used at the ball's last position). */
  recordBurst(pos: Vector3): void {
    this.burstShards(pos, PALETTE.maple, 28);
    this.burstSparks(pos, 40);
  }

  update(dt: number, cameraY: number): void {
    this.stepPool(this.shards, this.shardMesh, dt, true);
    this.stepPool(this.sparks, this.sparkMesh, dt, false);
    this.stepPool(this.debris, this.debrisMesh, dt, true);
    if (this.debrisColorDirty && this.debrisMesh.instanceColor) {
      this.debrisMesh.instanceColor.needsUpdate = true;
      this.debrisColorDirty = false;
    }

    // recycle dust around the camera for an infinite drifting field
    const half = 16;
    for (let i = 0; i < this.dustCount; i++) {
      let y = this.dustPositions[i * 3 + 1] - dt * 0.15;
      const rel = y - cameraY;
      if (rel < -half) y += half * 2;
      else if (rel > half) y -= half * 2;
      this.dustPositions[i * 3 + 1] = y;
    }
    (this.dust.geometry.getAttribute('position') as BufferAttribute).needsUpdate = true;

    // expand + fade active shockwaves
    for (const w of this.waves) {
      if (!w.active) continue;
      w.life += dt;
      const t = w.life / w.ttl;
      if (t >= 1) {
        w.active = false;
        w.mesh.visible = false;
        w.mat.opacity = 0;
        continue;
      }
      const ease = 1 - (1 - t) * (1 - t); // fast out
      w.mesh.scale.setScalar(0.4 + ease * 2.6);
      w.mat.opacity = 0.5 * (1 - t);
    }
  }

  private stepPool(pool: Shard[], mesh: InstancedMesh, dt: number, gravity: boolean): void {
    let dirty = false;
    for (let i = 0; i < pool.length; i++) {
      const s = pool[i];
      if (!s.active) continue;
      dirty = true;
      s.life += dt;
      if (s.life >= s.ttl) {
        s.active = false;
        _dummy.position.set(0, -9999, 0);
        _dummy.scale.set(0, 0, 0);
        _dummy.updateMatrix();
        mesh.setMatrixAt(i, _dummy.matrix);
        continue;
      }
      if (gravity) s.vel.y -= 11 * dt;
      s.pos.addScaledVector(s.vel, dt);
      const t = 1 - s.life / s.ttl;
      if (s.spin.lengthSq() > 0) {
        _axis.copy(s.spin).normalize();
        _q.setFromAxisAngle(_axis, s.spin.length() * dt);
        s.rot.multiply(_q);
      }
      _dummy.position.copy(s.pos);
      _dummy.quaternion.copy(s.rot);
      const sc = s.scale * t;
      _dummy.scale.set(sc, sc, sc);
      _dummy.updateMatrix();
      mesh.setMatrixAt(i, _dummy.matrix);
    }
    if (dirty) mesh.instanceMatrix.needsUpdate = true;
  }
}

function rnd(m: number): number {
  return (Math.random() - 0.5) * m;
}
function rand(m: number): Vector3 {
  return new Vector3(rnd(m), rnd(m), rnd(m));
}

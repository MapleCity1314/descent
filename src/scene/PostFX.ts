import { Vector2, WebGLRenderer, Scene, PerspectiveCamera } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

/**
 * PostFX — bloom (carries the maple/bone glow) plus a single final pass that
 * combines vignette, near-invisible grain, and momentary chromatic aberration.
 * Chromatic + heavy vignette are 0 by default and only pushed at smash/death so
 * the picture stays calm (brief reverse-constraint).
 */
const FinalShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uRes: { value: new Vector2(1, 1) },
    uVignette: { value: 0.28 }, // base vignette kept light so the slate bg reads
    uVignettePunch: { value: 0 }, // transient tightening
    uChromatic: { value: 0 }, // transient only
    uGrain: { value: 0.02 }, // almost invisible
    uDesat: { value: 0 }, // death flash desaturation
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uRes;
    uniform float uVignette;
    uniform float uVignettePunch;
    uniform float uChromatic;
    uniform float uGrain;
    uniform float uDesat;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      vec2 toC = uv - 0.5;
      float r2 = dot(toC, toC);

      // chromatic aberration: offset channels radially (transient)
      vec3 col;
      if (uChromatic > 0.0001) {
        vec2 off = toC * uChromatic;
        col.r = texture2D(tDiffuse, uv + off).r;
        col.g = texture2D(tDiffuse, uv).g;
        col.b = texture2D(tDiffuse, uv - off).b;
      } else {
        col = texture2D(tDiffuse, uv).rgb;
      }

      // vignette (base + punch)
      float vig = 1.0 - smoothstep(0.35, 0.95, r2 * (uVignette + uVignettePunch));
      col *= mix(1.0, vig, 0.9);

      // desaturate (death flash)
      if (uDesat > 0.0001) {
        float l = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(col, vec3(l), uDesat);
      }

      // grain (barely-there底噪)
      float g = hash(uv * uRes + uTime) - 0.5;
      col += g * uGrain;

      // linear (tone-mapped) -> sRGB output encoding. The EffectComposer renders
      // to a linear target and this custom pass is the last one, so we must do
      // the output conversion here (otherwise the whole image shows up dark).
      col = clamp(col, 0.0, 1.0);
      col = mix(col * 12.92, 1.055 * pow(col, vec3(0.4166667)) - 0.055, step(0.0031308, col));

      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

export class PostFX {
  readonly composer: EffectComposer;
  private bloom: UnrealBloomPass;
  private final: ShaderPass;
  private time = 0;

  constructor(renderer: WebGLRenderer, scene: Scene, camera: PerspectiveCamera) {
    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(scene, camera));

    const size = renderer.getSize(new Vector2());
    this.bloom = new UnrealBloomPass(size, 0.55, 0.7, 0.85);
    this.composer.addPass(this.bloom);

    this.final = new ShaderPass(FinalShader);
    this.final.uniforms.uRes.value.copy(size);
    this.composer.addPass(this.final);

    this.setSize(size.x, size.y);
  }

  setSize(w: number, h: number): void {
    this.composer.setSize(w, h);
    this.final.uniforms.uRes.value.set(w, h);
  }

  /** bloom rises slightly with combo intensity (0..1). */
  setBloomIntensity(t: number): void {
    this.bloom.strength = 0.5 + t * 0.55;
  }

  vignettePunch(amount: number): void {
    this.final.uniforms.uVignettePunch.value = Math.max(
      this.final.uniforms.uVignettePunch.value,
      amount,
    );
  }

  chromaticPunch(amount: number): void {
    this.final.uniforms.uChromatic.value = Math.max(
      this.final.uniforms.uChromatic.value,
      amount,
    );
  }

  desatFlash(amount: number): void {
    this.final.uniforms.uDesat.value = Math.max(
      this.final.uniforms.uDesat.value,
      amount,
    );
  }

  setGrain(v: number): void {
    this.final.uniforms.uGrain.value = v;
  }

  update(dt: number): void {
    this.time += dt;
    const u = this.final.uniforms;
    u.uTime.value = this.time;
    // transient effects decay back to calm
    u.uVignettePunch.value *= 1 - Math.min(1, dt * 4);
    u.uChromatic.value *= 1 - Math.min(1, dt * 5);
    u.uDesat.value *= 1 - Math.min(1, dt * 3);
  }

  render(): void {
    this.composer.render();
  }
}

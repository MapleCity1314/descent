import {
  ACESFilmicToneMapping,
  AmbientLight,
  BackSide,
  Color,
  DirectionalLight,
  Fog,
  HemisphereLight,
  Mesh,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  WebGLRenderer,
} from 'three';
import { CAMERA } from '../core/Config';

/**
 * SceneManager — owns the renderer, scene, camera, lighting, fog and the
 * gradient "void" backdrop. Post-processing lives in PostFX, which wraps the
 * renderer; SceneManager exposes the raw pieces it needs.
 */
export class SceneManager {
  readonly scene = new Scene();
  readonly camera: PerspectiveCamera;
  readonly renderer: WebGLRenderer;
  private backdrop: Mesh;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x7a5fd0, 1);
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    // a vibrant candy sky (dopamine) — blue up top into purple/magenta below
    this.scene.background = new Color(0x7a5fd0);
    // fog blends deeper rings into the magenta horizon so depth still reads
    this.scene.fog = new Fog(0x9a63d6, 18, 48);

    this.camera = new PerspectiveCamera(
      CAMERA.fov,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    this.camera.position.set(0, CAMERA.yOffset, CAMERA.zDistance);
    this.camera.lookAt(0, 0, 0);

    this.backdrop = this.makeBackdrop();
    this.scene.add(this.backdrop);

    this.addLights();
    this.resize();

    // Robust sizing: some environments lay out the canvas after construction
    // (or load it offscreen at 0×0). A ResizeObserver guarantees we pick up the
    // real size whenever it settles, not just on window 'resize'.
    if (typeof ResizeObserver !== 'undefined') {
      this.ro = new ResizeObserver(() => this.resize());
      this.ro.observe(canvas);
    }
  }

  private ro?: ResizeObserver;
  onResize?: (w: number, h: number) => void;

  /** One key directional light (cold, from upper-front) + low ambient fill, so
   * the greyscale tower reads as sculpted while emissive maple/bone carry glow. */
  private addLights(): void {
    // bright clean key so the candy platforms read as vivid, sculpted forms
    const key = new DirectionalLight(0xffffff, 3.0);
    key.position.set(3, 8, 7);
    this.scene.add(key);

    // soft fill from the camera side lifts the platform tops evenly
    const fill = new DirectionalLight(0xc9d4ff, 1.2);
    fill.position.set(-3, 2, 8);
    this.scene.add(fill);

    // candy sky/ground hemisphere — keeps everything bright and cheerful
    const hemi = new HemisphereLight(0xbcd6ff, 0xe7a8e0, 1.1);
    this.scene.add(hemi);

    this.scene.add(new AmbientLight(0x5a5a6e, 0.8));
  }

  /** A large inverted sphere with a soft radial/vertical gradient — the void is
   * never pure black, giving depth a readable falloff (brief §5.5). */
  private makeBackdrop(): Mesh {
    const top = new Color(0x4f86f0); // vivid sky blue
    const bottom = new Color(0xc056d8); // vivid magenta-purple
    const mat = new ShaderMaterial({
      side: BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        top: { value: top },
        bottom: { value: bottom },
      },
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 top;
        uniform vec3 bottom;
        varying vec3 vDir;
        void main() {
          float t = smoothstep(-0.6, 0.6, vDir.y);
          float r = 1.0 - smoothstep(0.0, 1.0, length(vDir.xz));
          vec3 col = mix(bottom, top, t);
          col += r * 0.015;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const mesh = new Mesh(new SphereGeometry(40, 32, 16), mat);
    mesh.frustumCulled = false;
    return mesh;
  }

  /** Keep the backdrop centred on the camera so it reads as infinite. */
  syncBackdrop(): void {
    this.backdrop.position.copy(this.camera.position);
  }

  resize(): void {
    const w = window.innerWidth || 1;
    const h = window.innerHeight || 1;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    // updateStyle=true so Three sets the canvas CSS size to the logical pixel
    // size; the drawing buffer is scaled by setPixelRatio. (Passing false leaves
    // the canvas CSS-sized to the dpr-inflated buffer, overflowing the viewport.)
    this.renderer.setSize(w, h, true);
    this.onResize?.(w, h);
  }
}

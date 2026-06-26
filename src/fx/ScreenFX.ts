import { PerspectiveCamera, Vector3, WebGLRenderer } from 'three';
import { CSS } from '../core/Config';

const _p = new Vector3();

/**
 * ScreenFX — DOM-layer juice that sits above the canvas: floating score popups,
 * full-screen flashes (death desaturated flash), and the maple edge pulse for
 * combo milestones. Freeze-frame itself is handled in the loop; this just
 * provides the visual punctuation.
 */
export class ScreenFX {
  private layer: HTMLDivElement;
  private flashEl: HTMLDivElement;
  private edgeEl: HTMLDivElement;

  constructor(parent: HTMLElement) {
    this.layer = document.createElement('div');
    this.layer.className = 'fx-layer';

    this.flashEl = document.createElement('div');
    this.flashEl.className = 'fx-flash';
    this.layer.appendChild(this.flashEl);

    this.edgeEl = document.createElement('div');
    this.edgeEl.className = 'fx-edge';
    this.layer.appendChild(this.edgeEl);

    parent.appendChild(this.layer);
  }

  scorePopup(
    worldPos: Vector3,
    text: string,
    accent: boolean,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
  ): void {
    _p.copy(worldPos).project(camera);
    const rect = renderer.domElement.getBoundingClientRect();
    const x = rect.left + ((_p.x + 1) / 2) * rect.width;
    const y = rect.top + ((1 - _p.y) / 2) * rect.height;

    const el = document.createElement('div');
    el.className = 'fx-popup' + (accent ? ' accent' : '');
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    this.layer.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }

  /** Full-screen flash. color defaults to bone-white; used for death. */
  flash(alpha = 0.6, color = CSS.textPrimary): void {
    this.flashEl.style.background = color;
    this.flashEl.style.opacity = String(alpha);
    // force reflow then fade
    void this.flashEl.offsetWidth;
    this.flashEl.style.transition = 'opacity 0.5s ease-out';
    this.flashEl.style.opacity = '0';
  }

  /** Brief maple edge pulse at combo milestones. */
  edgePulse(): void {
    this.edgeEl.classList.remove('pulse');
    void this.edgeEl.offsetWidth;
    this.edgeEl.classList.add('pulse');
  }
}

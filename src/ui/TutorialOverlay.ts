/**
 * TutorialOverlay — a single coaching bubble shown during the guided run. Game
 * drives it by calling `show()` at gameplay milestones (first drop, first combo,
 * shatter, diamond). Kept to one short line at a time so it never becomes the
 * "long tutorial" the brief forbids.
 */
export class TutorialOverlay {
  private root: HTMLDivElement;
  private bubble: HTMLDivElement;
  private hideTimer = 0;

  constructor(parent: HTMLElement) {
    this.root = document.createElement('div');
    this.root.className = 'tutorial';
    this.bubble = document.createElement('div');
    this.bubble.className = 'tutorial-bubble';
    this.root.appendChild(this.bubble);
    parent.appendChild(this.root);
  }

  show(text: string, autoHideMs = 0): void {
    window.clearTimeout(this.hideTimer);
    this.bubble.textContent = text;
    this.root.classList.add('show');
    if (autoHideMs > 0) {
      this.hideTimer = window.setTimeout(() => this.hide(), autoHideMs);
    }
  }

  hide(): void {
    window.clearTimeout(this.hideTimer);
    this.root.classList.remove('show');
  }

  /** Final celebratory line that fades itself out. */
  complete(text = '新手引导完成 🎉'): void {
    this.show(text, 1800);
  }
}

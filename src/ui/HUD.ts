/**
 * HUD — in-game overlay: big score, combo multiplier (greyscale when idle,
 * maple + heartbeat pulse while shattering), and a pause button. Deliberately
 * minimal so it never blocks the descent line of sight (brief §3.2).
 */
export class HUD {
  private root: HTMLDivElement;
  private scoreEl: HTMLDivElement;
  private multEl: HTMLDivElement;
  private diamondsEl: HTMLDivElement;
  private displayScore = 0;

  constructor(parent: HTMLElement, onPause: () => void) {
    this.root = document.createElement('div');
    this.root.className = 'hud';

    this.scoreEl = document.createElement('div');
    this.scoreEl.className = 'hud-score';
    this.scoreEl.textContent = '0';

    this.multEl = document.createElement('div');
    this.multEl.className = 'hud-mult';
    this.multEl.textContent = '';

    this.diamondsEl = document.createElement('div');
    this.diamondsEl.className = 'hud-diamonds';
    this.diamondsEl.textContent = '◆ 0';

    const pause = document.createElement('button');
    pause.className = 'hud-pause';
    pause.setAttribute('aria-label', '暂停');
    pause.textContent = '❘❘';
    pause.addEventListener('click', onPause);

    this.root.append(this.scoreEl, this.multEl, this.diamondsEl, pause);
    parent.appendChild(this.root);
  }

  setDiamonds(count: number): void {
    this.diamondsEl.textContent = `◆ ${count}`;
  }

  /** brief pop when a diamond is collected. */
  pulseDiamonds(): void {
    this.diamondsEl.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.4)' },
        { transform: 'scale(1)' },
      ],
      { duration: 240, easing: 'ease-out' },
    );
  }

  show(v: boolean): void {
    this.root.classList.toggle('show', v);
  }

  setScore(score: number): void {
    // ease the displayed number toward the real score for a count-up feel
    this.displayScore += (score - this.displayScore) * 0.3;
    if (Math.abs(score - this.displayScore) < 0.5) this.displayScore = score;
    this.scoreEl.textContent = String(Math.round(this.displayScore));
  }

  setMultiplier(mult: number, shattering: boolean): void {
    if (mult <= 1) {
      this.multEl.textContent = '';
      this.multEl.classList.remove('hot');
      return;
    }
    this.multEl.textContent = `×${mult.toFixed(1)}`;
    this.multEl.classList.toggle('hot', shattering);
  }

  /** heartbeat scale pulse on the multiplier when it ticks up. */
  pulseMultiplier(): void {
    this.multEl.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.35)' },
        { transform: 'scale(1)' },
      ],
      { duration: 220, easing: 'ease-out' },
    );
  }
}

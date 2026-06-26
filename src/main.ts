import './ui/styles.css';
import { Game } from './core/Game';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const ui = document.getElementById('ui') as HTMLElement;

const game = new Game(canvas, ui);

let last = performance.now();
function step(now: number): void {
  const dt = (now - last) / 1000;
  last = now;
  game.frame(dt);
}

function rafLoop(now: number): void {
  step(now);
  requestAnimationFrame(rafLoop);
}
requestAnimationFrame(rafLoop);

// Fallback pump: when the tab is hidden/offscreen (e.g. a headless preview),
// requestAnimationFrame is throttled to ~0Hz. This keeps the sim alive so the
// game doesn't freeze when backgrounded; the rAF loop drives it when visible.
setInterval(() => {
  if (document.hidden) step(performance.now());
}, 33);

// dev-only handle for inspection/automated checks
if (import.meta.env.DEV) {
  (window as unknown as { __game: Game }).__game = game;
}

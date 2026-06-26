/**
 * Haptics — thin wrapper over the Vibration API. Gated by a setting and degrades
 * silently where unsupported (desktop, iOS Safari). Intensities map to gameplay
 * weight (brief §5.6): bounce light, pass tick, smash medium, death heavy.
 */
export class Haptics {
  enabled = true;
  private supported = typeof navigator !== 'undefined' && 'vibrate' in navigator;

  private buzz(pattern: number | number[]): void {
    if (!this.enabled || !this.supported) return;
    try {
      navigator.vibrate(pattern);
    } catch {
      /* ignore */
    }
  }

  bounce() { this.buzz(8); }
  pass() { this.buzz(4); }
  smash() { this.buzz(22); }
  death() { this.buzz([40, 30, 60]); }
}

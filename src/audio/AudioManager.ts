import * as Tone from 'tone';

/**
 * AudioManager — a restrained ambient drone + event SFX. This is NOT a rhythm
 * game: SFX fire on gameplay events, never quantised to a beat (brief §4/§7).
 * Audio only starts after the first user gesture. Everything degrades silently
 * if the audio context can't start.
 */
export class AudioManager {
  private started = false;
  private musicOn = true;
  private sfxOn = true;

  private musicGain!: Tone.Gain;
  private sfxGain!: Tone.Gain;

  private droneA!: Tone.Oscillator;
  private droneB!: Tone.Oscillator;
  private droneFilter!: Tone.Filter;
  private pad!: Tone.PolySynth;
  private padLoop!: Tone.Loop;

  private bounceSynth!: Tone.MembraneSynth;
  private tickSynth!: Tone.Synth;
  private noise!: Tone.NoiseSynth;
  private sub!: Tone.Synth;
  private bell!: Tone.Synth;
  private click!: Tone.Synth;

  /** Build the graph and start the ambient bed. Safe to call repeatedly. */
  async start(): Promise<void> {
    if (this.started) return;
    try {
      await Tone.start();
      this.build();
      this.started = true;
      this.applyMusic();
    } catch {
      /* no audio available — degrade silently */
    }
  }

  private build(): void {
    this.musicGain = new Tone.Gain(0.0).toDestination();
    this.sfxGain = new Tone.Gain(0.9).toDestination();

    const reverb = new Tone.Reverb({ decay: 8, wet: 0.5 }).connect(this.musicGain);
    this.droneFilter = new Tone.Filter(280, 'lowpass').connect(reverb);

    this.droneA = new Tone.Oscillator(55, 'sine').connect(this.droneFilter);
    this.droneB = new Tone.Oscillator(55 * 1.5, 'sine').connect(this.droneFilter);
    this.droneA.volume.value = -10;
    this.droneB.volume.value = -18;
    this.droneA.start();
    this.droneB.start();

    // sparse, slow pad swells — very low, atmospheric
    this.pad = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'sine' },
      envelope: { attack: 4, decay: 2, sustain: 0.3, release: 6 },
      volume: -26,
    }).connect(reverb);
    const chords = [
      ['A2', 'E3'],
      ['F2', 'C3'],
      ['G2', 'D3'],
    ];
    let ci = 0;
    this.padLoop = new Tone.Loop((time) => {
      this.pad.triggerAttackRelease(chords[ci % chords.length], '8n', time);
      ci++;
    }, '8m');
    this.padLoop.start(0);
    Tone.Transport.bpm.value = 60;
    Tone.Transport.start();

    // --- SFX voices ---
    this.bounceSynth = new Tone.MembraneSynth({
      pitchDecay: 0.02,
      octaves: 2,
      envelope: { attack: 0.001, decay: 0.18, sustain: 0 },
      volume: -8,
    }).connect(this.sfxGain);

    this.tickSynth = new Tone.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.001, decay: 0.06, sustain: 0, release: 0.02 },
      volume: -16,
    }).connect(this.sfxGain);

    this.noise = new Tone.NoiseSynth({
      noise: { type: 'white' },
      envelope: { attack: 0.002, decay: 0.25, sustain: 0 },
      volume: -14,
    }).connect(new Tone.Filter(1200, 'bandpass').connect(this.sfxGain));

    this.sub = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.005, decay: 0.4, sustain: 0, release: 0.2 },
      volume: -4,
    }).connect(this.sfxGain);

    this.bell = new Tone.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.005, decay: 0.4, sustain: 0.1, release: 0.4 },
      volume: -14,
    }).connect(this.sfxGain);

    this.click = new Tone.Synth({
      oscillator: { type: 'square' },
      envelope: { attack: 0.001, decay: 0.03, sustain: 0 },
      volume: -22,
    }).connect(this.sfxGain);
  }

  setMusic(on: boolean): void {
    this.musicOn = on;
    this.applyMusic();
  }
  setSfx(on: boolean): void {
    this.sfxOn = on;
    if (this.started) this.sfxGain.gain.rampTo(on ? 0.9 : 0, 0.1);
  }

  private applyMusic(): void {
    if (!this.started) return;
    this.musicGain.gain.rampTo(this.musicOn ? 0.5 : 0, 0.6);
  }

  /** Raise tension slightly with depth/speed (very subtle filter open). */
  setTension(t: number): void {
    if (!this.started) return;
    this.droneFilter.frequency.rampTo(260 + t * 420, 0.5);
  }

  // ---- event SFX (guarded) ----
  private guard(): boolean {
    return this.started && this.sfxOn;
  }

  bounce(): void {
    if (!this.guard()) return;
    try { this.bounceSynth.triggerAttackRelease('C2', '16n'); } catch { /* */ }
  }
  pass(): void {
    if (!this.guard()) return;
    try { this.tickSynth.triggerAttackRelease('C6', '64n'); } catch { /* */ }
  }
  shatterEnter(): void {
    if (!this.guard()) return;
    try {
      this.noise.triggerAttackRelease('8n');
      this.sub.triggerAttackRelease('A1', '4n');
    } catch { /* */ }
  }
  smash(): void {
    if (!this.guard()) return;
    try {
      this.noise.triggerAttackRelease('16n');
      this.sub.triggerAttackRelease('D1', '8n');
    } catch { /* */ }
  }
  bonus(): void {
    if (!this.guard()) return;
    try {
      const t = Tone.now();
      this.bell.triggerAttackRelease('C5', '16n', t);
      this.bell.triggerAttackRelease('E5', '16n', t + 0.07);
      this.bell.triggerAttackRelease('G5', '16n', t + 0.14);
    } catch { /* */ }
  }
  diamond(): void {
    if (!this.guard()) return;
    try {
      const t = Tone.now();
      this.bell.triggerAttackRelease('E6', '32n', t);
      this.bell.triggerAttackRelease('B6', '32n', t + 0.05);
    } catch { /* */ }
  }
  death(): void {
    if (!this.guard()) return;
    try {
      const t = Tone.now();
      this.sub.triggerAttackRelease('A1', '2n', t);
      this.bell.triggerAttackRelease('A3', '8n', t);
      this.bell.frequency.rampTo('A2', 0.6, t);
    } catch { /* */ }
  }
  button(): void {
    if (!this.guard()) return;
    try { this.click.triggerAttackRelease('C7', '64n'); } catch { /* */ }
  }
}

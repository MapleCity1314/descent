/**
 * Settings — persisted preferences + high score.
 *
 * Hard constraint (brief §2.7 / §7): every localStorage access is wrapped in
 * try/catch. Preview/sandboxed environments throw on storage access; we must
 * degrade silently to in-memory state there and only persist where allowed.
 */

const KEY = 'descent.settings.v1';

export interface SettingsState {
  music: boolean;
  sfx: boolean;
  haptics: boolean;
  highScore: number;
  diamonds: number; // collected currency (req 3)
  ownedSkins: string[]; // purchased ball skin ids (always includes 'default')
  equippedSkin: string; // currently equipped skin id
  tutorialSeen: boolean; // whether the player has run the tutorial (req 5)
}

const DEFAULTS: SettingsState = {
  music: true,
  sfx: true,
  haptics: true,
  highScore: 0,
  diamonds: 0,
  ownedSkins: ['default'],
  equippedSkin: 'default',
  tutorialSeen: false,
};

export class Settings {
  private state: SettingsState;

  constructor() {
    this.state = { ...DEFAULTS, ...this.load() };
    // defensive: corrupt/old storage may lack a valid skin list
    if (!Array.isArray(this.state.ownedSkins)) this.state.ownedSkins = ['default'];
    if (!this.state.ownedSkins.includes('default')) this.state.ownedSkins.unshift('default');
    if (typeof this.state.diamonds !== 'number' || this.state.diamonds < 0) this.state.diamonds = 0;
  }

  private load(): Partial<SettingsState> {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return typeof parsed === 'object' && parsed ? parsed : {};
    } catch {
      return {};
    }
  }

  private save(): void {
    try {
      localStorage.setItem(KEY, JSON.stringify(this.state));
    } catch {
      /* sandboxed env — keep in-memory only */
    }
  }

  get music() {
    return this.state.music;
  }
  get sfx() {
    return this.state.sfx;
  }
  get haptics() {
    return this.state.haptics;
  }
  get highScore() {
    return this.state.highScore;
  }

  setMusic(v: boolean) {
    this.state.music = v;
    this.save();
  }
  setSfx(v: boolean) {
    this.state.sfx = v;
    this.save();
  }
  setHaptics(v: boolean) {
    this.state.haptics = v;
    this.save();
  }

  /** Returns true if this beat the stored record (and persists the new one). */
  submitScore(score: number): boolean {
    if (score > this.state.highScore) {
      this.state.highScore = score;
      this.save();
      return true;
    }
    return false;
  }

  resetHighScore() {
    this.state.highScore = 0;
    this.save();
  }

  // ---- diamonds (currency) ----
  get diamonds() {
    return this.state.diamonds;
  }
  addDiamonds(n: number) {
    this.state.diamonds = Math.max(0, this.state.diamonds + n);
    this.save();
  }
  /** Spend diamonds if affordable; returns true on success. */
  spendDiamonds(n: number): boolean {
    if (this.state.diamonds < n) return false;
    this.state.diamonds -= n;
    this.save();
    return true;
  }

  // ---- ball skins (shop) ----
  get ownedSkins(): string[] {
    return this.state.ownedSkins;
  }
  ownsSkin(id: string): boolean {
    return this.state.ownedSkins.includes(id);
  }
  /** Buy a skin: spend the cost and grant ownership. Returns false if unaffordable. */
  purchaseSkin(id: string, cost: number): boolean {
    if (this.ownsSkin(id)) return true;
    if (!this.spendDiamonds(cost)) return false;
    this.state.ownedSkins.push(id);
    this.save();
    return true;
  }
  get equippedSkin() {
    return this.state.equippedSkin;
  }
  equipSkin(id: string) {
    if (!this.ownsSkin(id)) return;
    this.state.equippedSkin = id;
    this.save();
  }

  // ---- tutorial ----
  get tutorialSeen() {
    return this.state.tutorialSeen;
  }
  markTutorialSeen() {
    this.state.tutorialSeen = true;
    this.save();
  }
}

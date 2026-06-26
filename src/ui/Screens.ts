import { Settings } from '../core/Settings';
import { SKINS } from '../core/Config';

export interface ScreenCallbacks {
  onStart: () => void;
  onResume: () => void;
  onRestart: () => void;
  onReviveAd: () => void;
  onSettingChange: (key: 'music' | 'sfx' | 'haptics', value: boolean) => void;
  onResetHighScore: () => void;
  onButtonSound: () => void;
  onHome: () => void;
  onTutorial: () => void;
  onBuySkin: (id: string) => void;
  onEquipSkin: (id: string) => void;
}

export const FEATURES = {
  /** brief §6: collapsible "watch ad to revive". One-line flag to disable. */
  adRevive: true,
};

type ScreenName = 'start' | 'pause' | 'gameover' | 'settings' | 'shop' | null;

/**
 * Screens — all DOM overlays (start / pause / gameover / settings). Each screen
 * does exactly one thing (brief §3). Restart is zero-friction: one button,
 * instant replay.
 */
export class Screens {
  private current: ScreenName = null;
  private prevScreen: ScreenName = null;

  private start: HTMLDivElement;
  private pause: HTMLDivElement;
  private gameover: HTMLDivElement;
  private settings: HTMLDivElement;
  private shop: HTMLDivElement;

  private bestStartEl: HTMLElement;
  private startDiamondsEl: HTMLElement;
  private finalScoreEl: HTMLDivElement;
  private bestEndEl: HTMLElement;
  private recordTag: HTMLDivElement;
  private reviveBtn: HTMLButtonElement;
  private shopBalEl!: HTMLElement;
  private shopList!: HTMLDivElement;

  constructor(
    parent: HTMLElement,
    private settingsModel: Settings,
    private cb: ScreenCallbacks,
  ) {
    this.start = this.buildStart();
    this.pause = this.buildPause();
    this.gameover = this.buildGameOver();
    this.settings = this.buildSettings();
    this.shop = this.buildShop();
    this.bestStartEl = this.start.querySelector('.best b')!;
    this.startDiamondsEl = this.start.querySelector('.diamonds b')!;
    this.finalScoreEl = this.gameover.querySelector('.final-score')!;
    this.bestEndEl = this.gameover.querySelector('.best b')!;
    this.recordTag = this.gameover.querySelector('.record-tag')!;
    this.reviveBtn = this.gameover.querySelector('.revive')!;
    parent.append(this.start, this.pause, this.gameover, this.settings, this.shop);
  }

  // ---------- builders ----------
  private el<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    cls?: string,
    text?: string,
  ): HTMLElementTagNameMap[K] {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  private button(label: string, cls: string, onClick: () => void): HTMLButtonElement {
    const b = this.el('button', cls, label);
    b.addEventListener('click', () => {
      this.cb.onButtonSound();
      onClick();
    });
    return b;
  }

  private buildStart(): HTMLDivElement {
    const s = this.el('div', 'screen');
    const title = this.el('div', 'title');
    title.innerHTML = `坠 <span class="accent">·</span> DESCENT`;
    const best = this.el('div', 'best');
    best.innerHTML = `最高 <b>0</b>`;
    const diamonds = this.el('div', 'best diamonds');
    diamonds.innerHTML = `◆ <b>0</b>`;
    const tap = this.button('轻点坠落 · TAP TO DROP', 'primary', () => this.cb.onStart());
    const row = this.el('div', 'btn-row');
    row.append(
      this.button('商店 · SHOP', 'secondary', () => this.open('shop')),
      this.button('新手引导', 'secondary', () => this.cb.onTutorial()),
    );
    const gear = this.button('⚙', 'gear', () => this.open('settings'));
    gear.setAttribute('aria-label', '设置');
    s.append(title, best, diamonds, tap, row, gear);
    return s;
  }

  private buildShop(): HTMLDivElement {
    const s = this.el('div', 'screen dim');
    const title = this.el('div', 'subtitle', '商店 · 球皮肤');
    const bal = this.el('div', 'best');
    bal.innerHTML = `钻石 <b>0</b>`;
    this.shopBalEl = bal.querySelector('b')!;
    this.shopList = this.el('div', 'settings shop-list');
    const back = this.button('返回', '', () => this.open('start'));
    s.append(title, bal, this.shopList, back);
    return s;
  }

  /** Rebuild the skin rows to reflect current balance / ownership / equip state. */
  refreshShop(): void {
    if (!this.shopList) return;
    this.shopBalEl.textContent = String(this.settingsModel.diamonds);
    this.startDiamondsEl.textContent = String(this.settingsModel.diamonds);
    this.shopList.textContent = '';
    for (const skin of SKINS) {
      const row = this.el('div', 'set-row');
      const left = this.el('div', 'skin-name');
      const sw = this.el('span', 'skin-swatch');
      sw.style.background = `#${skin.color.toString(16).padStart(6, '0')}`;
      left.append(sw, this.el('span', undefined, skin.name));

      const owned = this.settingsModel.ownsSkin(skin.id);
      const equipped = this.settingsModel.equippedSkin === skin.id;

      let btn: HTMLButtonElement;
      if (equipped) {
        btn = this.button('已装备', 'ghost', () => {});
        btn.disabled = true;
      } else if (owned) {
        btn = this.button('装备', '', () => this.cb.onEquipSkin(skin.id));
      } else {
        const affordable = this.settingsModel.diamonds >= skin.cost;
        btn = this.button(`◆ ${skin.cost}`, affordable ? 'primary' : '', () => {
          if (this.settingsModel.diamonds >= skin.cost) this.cb.onBuySkin(skin.id);
          else btn.animate(
            [{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }],
            { duration: 240 },
          );
        });
      }
      row.append(left, btn);
      this.shopList.append(row);
    }
  }

  private buildPause(): HTMLDivElement {
    const s = this.el('div', 'screen dim');
    const title = this.el('div', 'subtitle', '已暂停');
    const row = this.el('div', 'btn-row');
    row.append(
      this.button('继续', 'primary', () => this.cb.onResume()),
      this.button('重开', '', () => this.cb.onRestart()),
      this.button('返回主页', '', () => this.cb.onHome()),
      this.button('设置', '', () => this.open('settings')),
    );
    s.append(title, row);
    return s;
  }

  private buildGameOver(): HTMLDivElement {
    const s = this.el('div', 'screen');
    const tag = this.el('div', 'record-tag', '新纪录');
    const score = this.el('div', 'final-score', '0');
    const best = this.el('div', 'best');
    best.innerHTML = `最高 <b>0</b>`;
    const replay = this.button('重开', 'primary', () => this.cb.onRestart());
    const revive = this.button('看广告复活', 'ghost revive', () => this.cb.onReviveAd());
    revive.style.display = FEATURES.adRevive ? '' : 'none';
    s.append(tag, score, best, replay, revive);
    return s;
  }

  private buildSettings(): HTMLDivElement {
    const s = this.el('div', 'screen dim');
    const title = this.el('div', 'subtitle', '设置');
    const list = this.el('div', 'settings');

    list.append(
      this.toggleRow('音乐', 'music', this.settingsModel.music),
      this.toggleRow('音效', 'sfx', this.settingsModel.sfx),
      this.toggleRow('震动反馈', 'haptics', this.settingsModel.haptics),
    );

    const resetRow = this.el('div', 'set-row');
    resetRow.append(this.el('span', undefined, '最高分'));
    const resetBtn = this.button('重置', 'ghost', () => {
      if (resetBtn.dataset.confirm) {
        this.cb.onResetHighScore();
        this.refreshBest();
        resetBtn.textContent = '已重置';
        delete resetBtn.dataset.confirm;
      } else {
        resetBtn.dataset.confirm = '1';
        resetBtn.textContent = '确认重置？';
      }
    });
    resetRow.append(resetBtn);
    list.append(resetRow);

    const back = this.button('返回', '', () => this.open(this.prevScreen ?? 'start'));
    s.append(title, list, back);
    return s;
  }

  private toggleRow(label: string, key: 'music' | 'sfx' | 'haptics', initial: boolean): HTMLDivElement {
    const row = this.el('div', 'set-row');
    row.append(this.el('span', undefined, label));
    const t = this.el('button', 'toggle');
    t.setAttribute('role', 'switch');
    t.setAttribute('aria-checked', String(initial));
    t.setAttribute('aria-label', label);
    t.addEventListener('click', () => {
      const next = t.getAttribute('aria-checked') !== 'true';
      t.setAttribute('aria-checked', String(next));
      this.cb.onButtonSound();
      this.cb.onSettingChange(key, next);
    });
    row.append(t);
    return row;
  }

  // ---------- control ----------
  private screenFor(name: ScreenName): HTMLDivElement | null {
    switch (name) {
      case 'start': return this.start;
      case 'pause': return this.pause;
      case 'gameover': return this.gameover;
      case 'settings': return this.settings;
      case 'shop': return this.shop;
      default: return null;
    }
  }

  open(name: ScreenName): void {
    if (name === 'settings') this.prevScreen = this.current === 'settings' ? this.prevScreen : this.current;
    if (name === 'shop') this.refreshShop();
    const cur = this.screenFor(this.current);
    if (cur) cur.classList.remove('show');
    this.current = name;
    const next = this.screenFor(name);
    if (next) {
      next.classList.add('show');
      const focusable = next.querySelector('button.primary, button') as HTMLElement | null;
      focusable?.focus?.();
    }
  }

  hideAll(): void {
    [this.start, this.pause, this.gameover, this.settings, this.shop].forEach((s) => s.classList.remove('show'));
    this.current = null;
  }

  refreshBest(): void {
    this.bestStartEl.textContent = String(this.settingsModel.highScore);
    this.bestEndEl.textContent = String(this.settingsModel.highScore);
    this.startDiamondsEl.textContent = String(this.settingsModel.diamonds);
  }

  showStart(): void {
    this.refreshBest();
    this.open('start');
  }

  showGameOver(score: number, isRecord: boolean): void {
    this.refreshBest();
    this.finalScoreEl.classList.toggle('record', isRecord);
    this.recordTag.classList.toggle('show', isRecord);
    this.reviveBtn.style.display = FEATURES.adRevive ? '' : 'none';
    this.open('gameover');
    this.countUp(score);
  }

  /** satisfying count-up of the final score (brief §5.5, kept restrained). */
  private countUp(target: number): void {
    const el = this.finalScoreEl;
    const dur = 700;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = String(target);
    };
    requestAnimationFrame(tick);
  }
}

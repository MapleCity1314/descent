/**
 * A tiny typed event bus. Game logic broadcasts gameplay moments; FX, audio and
 * haptics subscribe. This keeps the simulation free of presentation concerns
 * (brief design principle: FX/Audio are event-driven, Collision stays pure).
 */

import type { Vector3 } from 'three';

export interface GameEventMap {
  bounce: { worldPos: Vector3; speed: number };
  pass: { worldPos: Vector3 };
  smash: { worldPos: Vector3; combo: number };
  shatterEnter: { worldPos: Vector3 };
  shatterExit: undefined;
  bonus: { worldPos: Vector3 };
  score: { amount: number; total: number; worldPos: Vector3; multiplier: number };
  comboMilestone: { combo: number };
  death: { worldPos: Vector3 };
  start: undefined;
  revive: undefined;
}

type Handler<T> = (payload: T) => void;

export class EventBus {
  private map = new Map<keyof GameEventMap, Set<Handler<any>>>();

  on<K extends keyof GameEventMap>(type: K, fn: Handler<GameEventMap[K]>): () => void {
    let set = this.map.get(type);
    if (!set) {
      set = new Set();
      this.map.set(type, set);
    }
    set.add(fn);
    return () => set!.delete(fn);
  }

  emit<K extends keyof GameEventMap>(type: K, payload: GameEventMap[K]): void {
    const set = this.map.get(type);
    if (!set) return;
    for (const fn of set) fn(payload);
  }
}

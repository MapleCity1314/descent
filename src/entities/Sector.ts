/**
 * Sector — the angular slice model for a ring. A ring is divided into
 * TOWER.sectorCount wedges; each wedge is one of three kinds.
 */

export const enum SectorKind {
  Gap = 0, // ball falls through
  Safe = 1, // ball bounces (unless shattering)
  Lethal = 2, // ball dies on contact (always — even when shattering)
  Brittle = 3, // cracked platform: breaks on contact and the ball passes through (always)
}

/** Per-ring sector layout: a fixed-length array of kinds. */
export type SectorLayout = SectorKind[];

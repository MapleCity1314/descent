import { Vector3 } from 'three';
import { Ring } from '../entities/Ring';
import { SectorKind } from '../entities/Sector';

export const enum Landing {
  None = 0,
  Pass = 1, // fell through a gap
  Bounce = 2, // landed on a safe sector (not shattering)
  Smash = 3, // shatter-state punched through a safe sector
  Death = 4, // landed on a lethal sector
}

export interface LandingResult {
  landing: Landing;
  sectorIndex: number;
}

/**
 * Pure judgment: given a ring the ball is crossing this tick and whether the
 * ball is in shatter state, classify what happens. No side effects — the caller
 * applies consequences (score, physics, FX events).
 */
export function classifyLanding(
  ring: Ring,
  ballWorldPos: Vector3,
  shattering: boolean,
): LandingResult {
  const index = ring.sectorIndexAt(ballWorldPos);
  const kind = ring.kindAt(index);

  switch (kind) {
    case SectorKind.Gap:
      return { landing: Landing.Pass, sectorIndex: index };
    case SectorKind.Lethal:
      return { landing: Landing.Death, sectorIndex: index };
    case SectorKind.Safe:
      return {
        landing: shattering ? Landing.Smash : Landing.Bounce,
        sectorIndex: index,
      };
    case SectorKind.Brittle:
      // a brittle platform always breaks and lets the ball through, shatter or not
      return { landing: Landing.Smash, sectorIndex: index };
    default:
      return { landing: Landing.None, sectorIndex: index };
  }
}

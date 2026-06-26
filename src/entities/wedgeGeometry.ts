import {
  BufferGeometry,
  ExtrudeGeometry,
  Shape,
  TorusGeometry,
} from 'three';
import { TOWER } from '../core/Config';

/**
 * Builds a single annular-wedge geometry centred on local angle 0, spanning
 * slightly less than one sector so thin dark seams separate the segments
 * (the precise, machined look the brief asks for). Vertical thickness is
 * centred on y = 0. Shared by every sector mesh; meshes differ only by their
 * rotation.y, so the geometry is built once.
 */
let cached: BufferGeometry | null = null;

export function getWedgeGeometry(): BufferGeometry {
  if (cached) return cached;

  const step = (Math.PI * 2) / TOWER.sectorCount;
  const half = (step - 0.055) / 2; // leave a seam between wedges
  const rIn = TOWER.radiusInner;
  const rOut = TOWER.radiusOuter;
  const h = TOWER.ringHeight;

  const shape = new Shape();
  // outer arc (-half -> +half), then inner arc back (+half -> -half)
  shape.absarc(0, 0, rOut, -half, half, false);
  shape.absarc(0, 0, rIn, half, -half, true);
  shape.closePath();

  const geo = new ExtrudeGeometry(shape, {
    depth: h,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 1,
    curveSegments: 6,
  });

  // Extrude builds in XY extruded along +Z. Rotate so thickness is vertical (Y),
  // and centre the thickness on y = 0.
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, -h / 2, 0);
  geo.computeVertexNormals();

  cached = geo;
  return geo;
}

/** Thin highlight torus used to mark bonus (fully-open) rings. */
let bonusTorus: BufferGeometry | null = null;
export function getBonusTorusGeometry(): BufferGeometry {
  if (bonusTorus) return bonusTorus;
  bonusTorus = new TorusGeometry(TOWER.radiusOuter, 0.045, 8, 48);
  bonusTorus.rotateX(Math.PI / 2);
  return bonusTorus;
}

import { Compass, CompassDirection } from '../../compass'
import { Hex, HexCoordinates, hexToOffset } from '../../hex'
import { Traverser } from '../types'
import { at } from './at'
import { branch } from './branch'
import { concat } from './concat'
import { move } from './move'

// todo: add in docs: only 90° corners for cardinal directions
// todo: when passed opposing corners: maybe add option to determine if row or col is traversed first
export function rectangle<T extends Hex>(options: RectangleOptions): Traverser<T>
export function rectangle<T extends Hex>(cornerA: HexCoordinates, cornerB: HexCoordinates): Traverser<T>
export function rectangle<T extends Hex>(
  optionsOrCornerA: RectangleOptions | HexCoordinates,
  cornerB?: HexCoordinates,
): Traverser<T> {
  return (cursor, getHex) => {
    const { width, height, start = { q: 0, r: 0 }, direction = CompassDirection.E } = cornerB
      ? optionsFromOpposingCorners(optionsOrCornerA as HexCoordinates, cornerB, cursor.isPointy, cursor.offset)
      : (optionsOrCornerA as RectangleOptions)

    return branch<T>(concat(at(start), move(Compass.rotate(direction, 2), height - 1)), move(direction, width - 1))(
      cursor,
      getHex,
    )
  }
}

export interface RectangleOptions {
  width: number
  height: number
  start?: HexCoordinates
  direction?: CompassDirection
}

function optionsFromOpposingCorners(
  cornerA: HexCoordinates,
  cornerB: HexCoordinates,
  isPointy: boolean,
  offset: number,
): RectangleOptions {
  const { col: cornerACol, row: cornerARow } = hexToOffset({ q: cornerA.q, r: cornerA.r, isPointy, offset })
  const { col: cornerBCol, row: cornerBRow } = hexToOffset({ q: cornerB.q, r: cornerB.r, isPointy, offset })
  const smallestCol = cornerACol < cornerBCol ? 'A' : 'B'
  const smallestRow = cornerARow < cornerBRow ? 'A' : 'B'
  const smallestColRow = (smallestCol + smallestRow) as keyof typeof RULES_FOR_SMALLEST_COL_ROW
  const { swapWidthHeight, direction } = RULES_FOR_SMALLEST_COL_ROW[smallestColRow]
  const width = Math.abs(cornerACol - cornerBCol) + 1
  const height = Math.abs(cornerARow - cornerBRow) + 1

  return {
    width: swapWidthHeight ? height : width,
    height: swapWidthHeight ? width : height,
    start: cornerA,
    direction,
  }
}

const RULES_FOR_SMALLEST_COL_ROW = {
  AA: {
    swapWidthHeight: false,
    direction: CompassDirection.E,
  },
  AB: {
    swapWidthHeight: true,
    direction: CompassDirection.N,
  },
  BA: {
    swapWidthHeight: true,
    direction: CompassDirection.S,
  },
  BB: {
    swapWidthHeight: false,
    direction: CompassDirection.W,
  },
}

/**
 * This is the "old way" of creating rectangles. It's less performant (up until ~40x slower with 200x200 rectangles), but it's able to create
 * actual rectangles (with 90° corners) for the ordinal directions. But because I assume people mostly need rectangles in the cardinal directions,
 * I've decided to drop "true ordinal rectangle" support for now.
 */

// export const RECTANGLE_DIRECTIONS_POINTY = [
//   null, // ambiguous
//   ['q', 's', 'r'], // NE
//   ['q', 'r', 's'], // E
//   ['r', 'q', 's'], // SE
//   null, // ambiguous
//   ['r', 's', 'q'], // SW
//   ['s', 'r', 'q'], // W
//   ['s', 'q', 'r'], // NW
// ] as [keyof CubeCoordinates, keyof CubeCoordinates, keyof CubeCoordinates][]

// export const RECTANGLE_DIRECTIONS_FLAT = [
//   ['s', 'q', 'r'], // N
//   ['q', 's', 'r'], // NE
//   null,
//   ['q', 'r', 's'], // SE
//   ['r', 'q', 's'], // S
//   ['r', 's', 'q'], // SW
//   null,
//   ['s', 'r', 'q'], // NW
// ] as [keyof CubeCoordinates, keyof CubeCoordinates, keyof CubeCoordinates][]

// export const rectangle = <T extends Hex>(
//   hexPrototype: T,
//   {
//     width,
//     height,
//     start = { q: 0, r: 0 },
//     direction = hexPrototype.isPointy ? CompassDirection.E : CompassDirection.SE,
//   }: RectangleOptions,
// ) => {
//   const result: T[] = []
//   const _start: CubeCoordinates = { q: start.q, r: start.r, s: -start.q - start.r }
//   const [firstCoordinate, secondCoordinate, thirdCoordinate] = (hexPrototype.isPointy
//     ? RECTANGLE_DIRECTIONS_POINTY
//     : RECTANGLE_DIRECTIONS_FLAT)[direction]
//   const [firstStop, secondStop] = hexPrototype.isPointy ? [width, height] : [height, width]

//   for (let second = 0; second < secondStop; second++) {
//     // for (let second = 0; second > -secondStop; second--) {
//     const secondOffset = offsetFromZero(hexPrototype.offset, second)

//     for (let first = -secondOffset; first < firstStop - secondOffset; first++) {
//       const nextCoordinates = {
//         [firstCoordinate]: first + _start[firstCoordinate],
//         [secondCoordinate]: second + _start[secondCoordinate],
//         [thirdCoordinate]: -first - second + _start[thirdCoordinate],
//       } as unknown
//       result.push(createHex<T>(hexPrototype, nextCoordinates as CubeCoordinates))
//     }
//   }

//   return result
// }
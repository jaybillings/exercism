export class Rectangles {
  static count(shape) {
    if (!shape.length) return 0;

    let rectangles,
      edgesLtoR = RectanglesHelper.findValidEdgesLtoR(shape),
      edgesTtoB = RectanglesHelper.findValidEdgesTtoB(shape);

    rectangles = RectanglesHelper.findRectangles(edgesLtoR, edgesTtoB);
    return rectangles.length;
  }
}

/**
 * Includes helper functions for calculating rectangles.
 *
 * @type {{
 *  generateMatchingEdges: (function(*, *, *): {}),
 *  findValidEdgesTtoB: (function(*): []),
 *  findRectangles: (function(*=, *=): []),
 *  findValidEdgesLtoR: (function(string[]): [])
 * }}
 */
const RectanglesHelper = {
  /**
   * Determines the horizontal edges of a given shape.
   * 'Horizontal' edges are those going across the x-axis. Edges are formed by two corners '+' on
   * either end, connected by zero or more sides '-'.
   *
   * Given the shape:
   *   012
   * 0 +-+
   * 1 | |
   * 2 | |
   * 3 +-+
   *
   * Returns:
   * [['0,2'],
   * [],
   * [],
   * ['0,2']]
   *
   * @param {string[]} shape
   * @returns {[]}
   */
  findValidEdgesLtoR: (shape) => {
    let allEdges = [];

    shape.forEach(row => {
      let validEdgesForRow = [], connectedCoords = [];

      row.split('').forEach((char, charIndex) => {
        if (char === '+') {
          connectedCoords.forEach(point => {
            validEdgesForRow.push(`${point},${charIndex}`);
          });
          connectedCoords.push(charIndex);
        } else if (char !== '-') {
          connectedCoords = [];
        }
      });

      allEdges.push(validEdgesForRow);
    });

    return allEdges;
  },
  /**
   * Determines the vertical edges of a given shape.
   * 'Vertical' edges are those going across the y axis. Edges are formed by two corners '+' on
   * either end, connected by zero or more sides '|'.
   *
   * Given the shape:
   *   012
   * 0 +-+
   * 1 | |
   * 2 | |
   * 3 +-+
   *
   * Returns:
   * [['0,3'],
   * [],
   * ['0,3']]
   *
   * @param {string[]} shape
   * @returns {[]}
   */
  findValidEdgesTtoB: (shape) => {
    let allEdges = [];

    for (let colIndex = 0; colIndex < shape[0].length; colIndex++) {
      let validEdgesForCol = [], connectedCoords = [];

      for (let rowIndex = 0; rowIndex < shape.length; rowIndex++) {
        let char = shape[rowIndex][colIndex];
        if (char === '+') {
          connectedCoords.forEach(point => {
            validEdgesForCol.push(`${point},${rowIndex}`);
          });
          connectedCoords.push(rowIndex);
        } else if (char !== '|') {
          connectedCoords = [];
        }
      }

      allEdges.push(validEdgesForCol);
    }

    return allEdges;
  },
  /**
   * Finds the rectangles present using a given dataset of connected edges.
   * 'Rectangles' are formed from a pair of parallel horizontal edges connected to a pair of
   * parallel vertical edges.
   *
   * @param edgesLtoR - 'Horizontal' or left-to-right spanning edges.
   * @param edgesTtoB - 'Vertical' or top-to-bottom spanning edges.
   * @returns {[]}
   */
  findRectangles: (edgesLtoR, edgesTtoB) => {
    let rectangles = [];

    edgesLtoR.forEach((row, rowIndex) => {
      row.forEach(xCoordPair => {

        for (let nextIndex = rowIndex + 1; nextIndex < edgesLtoR.length; nextIndex++) {
          edgesLtoR[nextIndex].forEach(nextXPair => {

            if (xCoordPair === nextXPair) {
              let matchingEdges = RectanglesHelper.generateMatchingEdges(rowIndex, nextIndex, xCoordPair),
                rectangleExists = true;

              Object.keys(matchingEdges).forEach(key => {
                // I'd usually make this a breakable loop, but there should only ever be two elements
                // This line is also why I recorded the X coords as strings
                // -- they're easier to handle for matching/searching than arrays
                if (!edgesTtoB[key].includes(matchingEdges[key])) rectangleExists = false;
              });

              if (rectangleExists) {
                // Count could be incremented directly instead, but I like having a record of the found rectangles
                // In professional code, it would be helpful in case of scope creep to already have this available
                rectangles.push(`${xCoordPair};${nextXPair};${Object.values(matchingEdges).join(';')}`);
              }
            }

          });
        }

      });
    });

    return rectangles;
  },
  /**
   * Given two horizontal edges, generate the vertical edges that would need to exist to form a rectangle.
   *
   * The horizontal edges are represented by two Y coordinates, demarcating the upper and lower bounds for the rectangle,
   * and a pair of X coordinates, demarcating the left and right bounds. The `coordPairX` string takes the format 'X,X'.
   *
   * @param {number} upperY - The Y coordinate for the upper edge.
   * @param {number} lowerY - The Y coordinate for the lower edge.
   * @param {string} coordPairX - A pair of X coordinates. (These are identical for matching upper and lower edges.)
   * @returns {{}}
   */
  generateMatchingEdges: (upperY, lowerY, coordPairX,) => {
    let edges = {},
      pointPairs = `${upperY},${lowerY}`,
      indices = coordPairX.split(',');

    indices.forEach(index => {
      edges[index] = pointPairs;
    });

    return edges;
  }
}

/**
 * Transpose an array of strings
 *
 * Algorithm is as follows:
 *  1. Go through each input array item
 *  2. If item is string, transform into char array (for exercism tests, will always be)
 *  3. Go through each char in string
 *  4. If result array empty at row index, init with empty string
 *  5. If result array item's length < row index, it is too short --> pad with spaces
 *  6. Add input array char to end of result array string
 *  7. Return result array
 *
 * @param {[string]} input
 * @returns {[string]}
 */
export const transpose = (input) => {
  let result = [];

  input.forEach((row, rowIndex) => {
    // Just in case
    if (!row[0]) throw new Error('Row type not iterable');
    if (typeof row === 'string') row = Array.from(row);

    row.forEach((colItem, colIndex) => {
      if (!result[colIndex]) result[colIndex] = '';
      if (result[colIndex].length < rowIndex)
        result[colIndex] = result[colIndex].concat(' '.repeat(rowIndex - result[colIndex].length));
      result[colIndex] = result[colIndex].concat(colItem);
    });
  });

  return result;
};
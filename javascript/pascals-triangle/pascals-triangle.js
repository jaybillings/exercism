export const rows = (numRows) => {
  if (numRows < 0) throw new Error('Number of rows must be positive');
  if (numRows === 0) return [];

  const triangle = [[1]];

  if (numRows === 1) return triangle;

  for (let i = 1; i < numRows; i++) {
    triangle[i] = [];

    for (let j = 0; j <= i; j++) {
      let leftNum = triangle[i - 1][j - 1] || 0;
      let rightNum = triangle[i - 1][j] || 0;

      triangle[i][j] = leftNum + rightNum;
    }
  }

  return triangle;
};

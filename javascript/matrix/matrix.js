export class Matrix {
  constructor(inputString) {
    this._inputString = inputString;
  }

  get rows() {
    return this._inputString.split('\n').map(row => {
      return row.split(' ').map(num => {
        return parseInt(num);
      });
    });
  }

  get columns() {
    const matrix = this.rows;
    let colArr = [];

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (!colArr[j]) colArr[j] = [];
        colArr[j][i] = matrix[i][j];
      }
    }

    return colArr;
  }
}

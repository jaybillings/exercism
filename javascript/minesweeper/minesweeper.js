export const annotate = (input) => {
  let gameBoard = new Minesweeper(input);
  gameBoard.fillCounts();
  return gameBoard.prettyPrint();
};

class Minesweeper {
  constructor(input) {
    this.board = this._parseBoard(input);
  }

  _parseBoard(boardState) {
    let parsedBoard = [];

    boardState.forEach(row => {
      let parsedRow = [];

      row.split('').forEach(rowItem => {
        parsedRow.push(rowItem === '*' ? rowItem : 0);
      });

      parsedBoard.push(parsedRow);
    });

    return parsedBoard;
  }

  fillCounts() {
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {

        if (this.board[row][col] && this.board[row][col] === '*') {
          for (let x = row - 1; x <= row + 1; x++) {
            for (let y = col - 1; y <= col + 1; y++) {
              if ((x > -1 && x < this.board.length)
                && (y > -1 && y < this.board[row].length)
                && typeof this.board[x][y] === 'number') this.board[x][y]++;
            }
          }
        }

      }
    }
  }

  prettyPrint() {
    const prettyBoard = [];

    this.board.forEach(row => {
      let prettyCol = '';

      row.forEach(colItem => {
        if (colItem === 0) prettyCol += ' ';
        else prettyCol += colItem;
      });

      prettyBoard.push(prettyCol);
    });

    return prettyBoard;
  }
}
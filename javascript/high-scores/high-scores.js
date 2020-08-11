export class HighScores {
  /**
   * Calculates various statistics from a given list of scores.
   * @param {number[]} scoreList
   */
  constructor(scoreList) {
    this._scores = scoreList;
    this.highestThree = this.calcThreeHighestScores();
  }

  /**
   * Returns list of all scores.
   * @returns {number[]}
   */
  get scores() {
    return this._scores;
  }

  /**
   * Returns last added score.
   * @returns {number}
   */
  get latest() {
    return this._scores[this._scores.length - 1];
  }

  /**
   * Returns top score.
   * @returns {number}
   */
  get personalBest() {
    return this.highestThree[0];
  }

  /**
   * Returns top scores, up to three, including ties.
   * @returns {number[]}
   */
  get personalTopThree() {
    return this.highestThree;
  }

  /**
   * Calculates the top three scores from an internal list of scores.
   *
   * Orders the list of scores such that the top score is always fist, with values descending.
   * Will never return more scores than exist in the list.
   *
   * @returns {number[]}
   */
  calcThreeHighestScores() {
    let threeHighest = [-1,-1,-1];

    this._scores.forEach(score => {
      for (let i = 0; i < threeHighest.length; i++) {
        if (score >= threeHighest[i]) {
          this.addToTopThree(threeHighest, score, i);
          return;
        }
      }
    });

    return threeHighest.filter(score => score > -1);
  }

  /**
   * Adds a score to the top three list at a particular index.
   *
   * Alters the list in-place. Will never return a list with greater than three elements.
   *
   * @param {number[]} list
   * @param {number} score
   * @param {number} index
   */
  addToTopThree(list, score, index) {
    list.splice(index, 0, score);
    list.splice(3);
  }
}

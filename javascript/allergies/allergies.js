export class Allergies {
  /**
   * `Allergies` implements an allergy code system where all detected allergies are represented by a composite score\
   * and each individual allergy code is a power of two.
   * @param {number} allergyScore - The composite allergy score.
   */
  constructor(allergyScore) {
    this.codesToAllergies = {
      1: 'eggs',
      2: 'peanuts',
      4: 'shellfish',
      8: 'strawberries',
      16: 'tomatoes',
      32: 'chocolate',
      64: 'pollen',
      128: 'cats'
    };

    this.allergyScore = allergyScore;
    this.allergyCodeList = this._computeAllergies();
  }

  /**
   * Returns the list of detected allergies.
   * @returns {string[]}
   */
  list() {
    return this.allergyCodeList
      .reverse()
      .filter(code => this.codesToAllergies[code])
      .map(code => this.codesToAllergies[code]);
  }

  /**
   * Indicates whether a particular allergy has been detected.
   * @param {string} allergy
   * @returns {boolean}
   */
  allergicTo(allergy) {
    return this.list().includes(allergy);
  }

  /**
   * Parses individual allergy codes from the composite score.
   *
   * @note: There is no reason to evoke this outside the constructor.
   * @returns {number[]}
   */
  _computeAllergies() {
    let remainder = this.allergyScore;
    let codeList = [];

    while (remainder > 0) {
      let closestPow = Math.log2(remainder);
      let code = 2 ** Math.floor(closestPow);

      codeList.push(code);
      remainder -= code;
    }

    if (remainder < 0) throw new Error('Something went wrong -- not all codes are powers of two');

    return codeList;
  }
}

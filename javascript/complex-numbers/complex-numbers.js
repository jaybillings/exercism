/**
 * `ComplexNumber` is a class representing a complex number.
 * @param {number} real - The real part of the number.
 * @param {number} imaginary - The real part of the imaginary part of the number. (ie. excluding "* sqrt(-1)")
 */
export class ComplexNumber {
  constructor(real = 0, imaginary = 0) {
    this._real = real;
    this._imaginary = imaginary; // imaginary * sqrt(-1)
  }

  /**
   * Returns the real part of the number;
   * @returns {number}
   */
  get real() {
    return this._real;
  }

  /**
   * Returns the real part of the imaginary part of the number. (ie. excludes "* sqrt(-1)")
   * @returns {number}
   */
  get imag() {
    return this._imaginary;
  }

  /**
   * Returns the absolute value.
   * @returns {number}
   */
  get abs() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  /**
   * Returns the conjugate.
   * @returns {ComplexNumber}
   */
  get conj() {
    let result = this.imag * -1;
    if (result === 0 && !Object.is(0, result)) result = 0;

    return new ComplexNumber(this.real, result);
  }

  /**
   * Returns the result of raising e to the number.
   * @returns {ComplexNumber}
   */
  get exp() {
    const expTerm = Math.pow(Math.E, this.real);
    return new ComplexNumber(expTerm * Math.cos(this.imag), expTerm * Math.sin(this.imag));
  }

  /**
   * Returns the result of multiplying this number with another.
   * @param {ComplexNumber} complexNum - The complex number being added.
   * @returns {ComplexNumber}
   */
  add(complexNum) {
    return new ComplexNumber(this.real + complexNum.real, this.imag + complexNum.imag);
  }

  /**
   * Returns the result of subtracting another number from this.
   * @param complexNum {ComplexNumber} - The complex number being subtracted;
   * @returns {ComplexNumber}
   */
  sub(complexNum) {
    return new ComplexNumber(this.real - complexNum.real, this.imag - complexNum.imag);
  }

  /**
   * Returns the result of dividing this number by another.
   * @param {ComplexNumber} complexNum - The divisor.
   * @returns {ComplexNumber}
   */
  div(complexNum) {
    const denominator = complexNum.real ** 2 + complexNum.imag ** 2;
    const real = (this.real * complexNum.real + this.imag * complexNum.imag)
      / denominator;
    const imag = (this.imag * complexNum.real - this.real * complexNum.imag)
      / denominator;
    return new ComplexNumber(real, imag);
  }

  /**
   * Returns the result of multiplying this number with another.
   * @param {ComplexNumber} complexNum - The multiplier.
   * @returns {ComplexNumber}
   */
  mul(complexNum) {
    return new ComplexNumber((this.real * complexNum.real - this.imag * complexNum.imag),
      (this.imag * complexNum.real + this.real * complexNum.imag));
  }
}

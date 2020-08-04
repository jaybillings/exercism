export const classify = (num) => {
  if (num <= 0) throw new Error('Classification is only possible for natural numbers.');

  const factors = calcFactors(num);
  if (factors.length === 1 && factors[0] === 1) return 'deficient'; // Prime numbers are deficient

  const sum = calcSum(factors.slice(0, -1));

  if (sum < num) return 'deficient';
  if (sum > num) return 'abundant';
  return 'perfect';
};

const calcFactors = (num) => {
  const leftFactor = [], rightFactor = [];
  let factor = 1;

  do {
    const res = num / factor;
    if (Math.trunc(res) === res) {
      if (factor !== res) leftFactor.push(factor);
      rightFactor.unshift(res);
    }
    factor++;
  } while (factor < rightFactor[0]);

  return leftFactor.concat(rightFactor);
};

const calcSum = (numArr) => {
  return numArr.reduce((total, cur) => total + cur);
};
//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (stringToTest) => {
  let stringArray = stringToTest.toLowerCase().split('');
  let alphaReg = /[a-z]/;
  let charTracker = [];

  stringArray.forEach(char => {
    if (alphaReg.test(char) && !charTracker.includes(char)) charTracker.push(char);
  });

  return charTracker.length === 26;
};

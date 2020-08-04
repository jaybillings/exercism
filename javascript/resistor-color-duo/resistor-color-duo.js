const resistorColorsToNum = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

export const decodedValue = (resistorColors) => {
  const colorsToLabel = resistorColors.slice(0, 2);
  let colorLabel = '';
  let i = 0;

  while (i < colorsToLabel.length) {
    const colorIndex = resistorColorsToNum.indexOf(colorsToLabel[i]);
    if (colorIndex > -1) colorLabel += colorIndex;
    i++;
  }

  return parseInt(colorLabel, 10);
};

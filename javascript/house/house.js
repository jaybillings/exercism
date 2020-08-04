const lyrics = [
  ['lay in', 'house that Jack built'],
  ['ate', 'malt'],
  ['killed', 'rat'],
  ['worried', 'cat'],
  ['tossed', 'dog'],
  ['milked', 'cow with the crumpled horn'],
  ['kissed', 'maiden all forlorn'],
  ['married', 'man all tattered and torn'],
  ['woke', 'priest all shaven and shorn'],
  ['kept', 'rooster that crowed in the morn'],
  ['belonged to', 'farmer sowing his corn'],
  ['', 'horse and the hound and the horn']
];

/**
 * House generates the poem recursively.
 */
export class House {
  static verse(maxLevel, currentLevel) {
    if (typeof currentLevel === 'undefined') currentLevel = 1;

    if (currentLevel === maxLevel) return [`This is the ${lyrics[currentLevel - 1][1]}${currentLevel === 1 ? '.' : ''}`];

    const nextLine = `that ${lyrics[currentLevel - 1][0]} the ${lyrics[currentLevel - 1][1]}${currentLevel === 1 ? '.' : ''}`;
    return House.verse(maxLevel, currentLevel + 1).concat([nextLine]);
  }

  static verses(startLevel, endLevel) {
    if (startLevel === endLevel) return House.verse(startLevel);

    return House.verse(startLevel).concat([''].concat(House.verses(startLevel + 1, endLevel)));
  }
}

/**
 * HouseIter generates the poem iteratively.
 */
export class HouseIter {
  static verse(verseLevel) {
    let poemArr = [];

    for (let i = verseLevel - 1; i >= 0; i--) {
      if (i === verseLevel - 1) {
        poemArr.push(`This is the ${lyrics[i][1]}${i === 0 ? '.' : ''}`);
      } else {
        poemArr.push(`that ${lyrics[i][0]} the ${lyrics[i][1]}${i === 0 ? '.' : ''}`);
      }
    }

    return poemArr;
  }

  static verses(startLevel, endLevel) {
    let poemArr = [];

    for (let repetitions = startLevel; repetitions <= endLevel; repetitions++) {
      poemArr = poemArr.concat(House.verse(repetitions));
      if (repetitions < endLevel) poemArr.push('');
    }

    return poemArr;
  }
}
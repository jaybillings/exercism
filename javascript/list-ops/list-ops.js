//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values) {
    this.values = values || [];
  }

  append(listToAppend) {
    if (typeof listToAppend === 'undefined' || !Array.isArray(listToAppend.values)) {
      return new List(this.values);
    }

    let newList = Array.from(this.values);

    for (let i = 0; i < listToAppend.values.length; i++) {
      newList[newList.length] = listToAppend.values[i];
    }

    return new List(newList);
  }

  concat(listOfLists) {
    // Normalize data
    if (typeof listOfLists === 'undefined') return this;
    const valuesToConcat = listOfLists.values.length ? listOfLists.values : [listOfLists.values];

    let resultList = new List(this.values);

    for (let i = 0; i < valuesToConcat.length; i++) {
      resultList = resultList.append(valuesToConcat[i]);
    }

    return resultList;
  }

  filter(filterFunction) {
    const filteredArray = [];

    for (let i = 0, answerIndex = 0; i < this.values.length; i++) {
      if (filterFunction(this.values[i])) {
        filteredArray[answerIndex] = this.values[i];
        answerIndex++;
      }
    }

    return new List(filteredArray);
  }

  length() {
    let index = 0;

    while (this.values[index]) index++;

    return index;
  }

  map(mapFunction) {
    const mappedArray = [];

    for (let i = 0; i < this.values.length; i++) {
      mappedArray[i] = mapFunction(this.values[i]);
    }

    return new List(mappedArray);
  }

  foldl(foldFunction, accumulator) {
    let i = 0;

    while(i < this.values.length) {
      accumulator = foldFunction(accumulator, this.values[i]);
      i++;
    }

    return accumulator;
  }

  foldr(foldFunction, accumulator) {
    let i = this.values.length - 1;

    while (i >= 0) {
      accumulator = foldFunction(accumulator, this.values[i]);
      i--;
    }

    return accumulator;
  }

  reverse() {
    const reversedArray = [];

    for (let i = this.values.length - 1; i >= 0; i--) {
      reversedArray[this.values.length - 1 - i] = this.values[i];
    }

    return new List(reversedArray);
  }
}

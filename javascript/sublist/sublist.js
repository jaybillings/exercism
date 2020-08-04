export class List {
  constructor(list = []) {
    this.dataList = list;
  }

  compare(listObj) {
    const str1 = this.dataList.join(','), str2 = listObj.dataList.join(',');
    let oneInTwo = false, twoInOne = false;

    if (str1.includes(str2)) twoInOne = true;
    if (str2.includes(str1)) oneInTwo = true;

    if (oneInTwo && twoInOne) return 'EQUAL';
    if (oneInTwo) return 'SUBLIST';
    if (twoInOne) return 'SUPERLIST';
    return 'UNEQUAL';
  }
}

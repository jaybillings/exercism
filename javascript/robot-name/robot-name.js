// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.


const NameManager = {
  nameList: [],
  generateRandomInteger: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateRandomChar: () => {
    return String.fromCharCode(NameManager.generateRandomInteger(65, 89));
  },
  generateRandomName: () => {
    let name = '';

    for (let i = 0; i < 2; i++) {
      name += NameManager.generateRandomChar();
    }

    for (let i = 0; i < 3; i++) {
      name += NameManager.generateRandomInteger(0, 9);
    }

    return name;
  },
  assignName: () => {
    let name;
    do {
      name = NameManager.generateRandomName();
    } while (NameManager.nameList.includes(name));

    NameManager.nameList.push(name);

    return name;
  },
  clearAllNames: () => {
    NameManager.nameList = [];
  }
};

export class Robot {
  constructor() {
    this._name = NameManager.assignName();
  }

  get name() {
    return this._name;
  }

  reset() {
    this._name = NameManager.assignName();
  }

  static releaseNames() {
    NameManager.clearAllNames();
  }
}
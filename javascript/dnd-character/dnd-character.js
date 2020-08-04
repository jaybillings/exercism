export const abilityModifier = (statValue) => {
  if (statValue < 3) throw Error("Ability scores must be at least 3");
  if (statValue > 18) throw Error("Ability scores can be at most 18");

  return Math.floor((statValue - 10) / 2);
};

export class DiceRoller {
  static rollOnce() {
    const max = 6, min = 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getBestRoll(timesToRoll, valuesToReturn) {
    const results = [];

    for (let i = 0; i < timesToRoll; i++) {
      results.push(DiceRoller.rollOnce());
    }

    return results.sort().slice(0, valuesToReturn);
  }
}

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
  }

  static rollAbility() {
    const bestOfFour = DiceRoller.getBestRoll(4, 3);
    return bestOfFour.reduce((total, val) => total + val);
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return 10 + abilityModifier(this._constitution);
  }
}

export class GradeSchool {
  constructor() {
    this._roster = {};
  }

  roster() {
    let rosterCopy = {};

    Object.keys(this._roster).forEach(grade => {
      rosterCopy[grade] = Object.assign([], this._roster[grade]);
    });

    return rosterCopy;
  }

  add(name, grade) {
    if (Object.keys(this._roster).includes(`${grade}`)) {
      this._roster[grade].push(name);
      this._roster[grade].sort();
    } else {
      this._roster[grade] = [name];
    }
  }

  grade(gradeNum) {
    if (Object.keys(this._roster).includes(`${gradeNum}`)) {
      return Object.assign([], this._roster[gradeNum]);
    }
    return [];
  }
}

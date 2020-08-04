export const meetup = (year, month, position, dayOfWeek) =>  {
  const permittedOrders = ['first', 'second', 'third', 'fourth', 'fifth'];
  const daysInWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  if (month > 12) throw new Error("Invalid value for 'month'");

  dayOfWeek = daysInWeek.indexOf(dayOfWeek.toLowerCase());
  if (dayOfWeek === -1) throw new Error("Invalid value for 'dayOfWeek'");

  if (position.toLowerCase() === 'teenth') {
    return DateParser.dateFromTeenth(year, month, dayOfWeek);
  }  else if (position.toLowerCase() === 'last') {
    return DateParser.dateFromOrderLast(year, month, dayOfWeek);
  } else {
    const orderNum = permittedOrders.indexOf(position.toLowerCase());
    if (orderNum === -1) throw new Error("Invalid value for 'position'");

    return DateParser.dateFromOrder(year, month, dayOfWeek, orderNum);
  }
};

const DateParser = {
  dateFromTeenth: (year, month, dayOfWeekNum) => {
    const baseDate = new Date(year, month - 1, 13);
    const offset = DateParser.getDayOfWeekOffset(baseDate.getDay(), dayOfWeekNum);

    return new Date(year, month - 1, 13 + offset);
  },
  dateFromOrder: (year, month, dayOfWeekNum, orderNum) => {
    const baseDate = new Date(year, month - 1, 1);
    const offset = DateParser.getDayOfWeekOffset(baseDate.getDay(), dayOfWeekNum);
    const orderOffset = (7 * orderNum) + offset;

    const daysInMonth = DateParser.getDaysInMonth(month, year);
    if (orderOffset > daysInMonth) throw new Error("Invalid day of week order -- does not exist in month");

    return new Date(year, month - 1, 1 + orderOffset);
  },
  dateFromOrderLast: (year, month, dayOfWeekNum) => {
    const daysInMonth = DateParser.getDaysInMonth(month, year);
    const baseDate = new Date(year, month - 1, daysInMonth);
    const offset = DateParser.getDayOfWeekOffset(dayOfWeekNum, baseDate.getDay());

    return new Date(year, month - 1, daysInMonth - offset);
  },
  getDayOfWeekOffset(earlierDay, laterDay) {
    return (7 - earlierDay + laterDay) % 7;
  },
  getDaysInMonth(month, year) {
    if (month === 2) {
      if (DateParser.isLeapYear(year)) return 29;
      return 28;
    }
    if ([4,6,9,11].includes(month)) return 30;
    return 31;
  },
  isLeapYear(year) {
    if (year % 2 === 0) return true;
    if (year % 100 === 0) return true;
    return year % 400 === 0;
  }
};
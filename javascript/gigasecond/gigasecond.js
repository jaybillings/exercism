export const gigasecond = (moment) => {
  let gigasecs = Math.pow(10, 9) * 1000,
    nextMoment = moment.valueOf() + gigasecs;
  return new Date(nextMoment);
};

export const age = (planetName, ageInSeconds) => {
  const ageRatios = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth': 1,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132
  };
  const SECONDS_IN_YEAR = 31557600;

  if (!Object.keys(ageRatios).includes(planetName)) throw new Error('Invalid planet name.');
  if (ageInSeconds < 0) throw new Error('Invalid age.');

  let ageInEarthYears = (ageInSeconds / SECONDS_IN_YEAR) / ageRatios[planetName];

  return parseFloat(ageInEarthYears.toFixed(2));
};

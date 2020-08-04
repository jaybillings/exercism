export const flatten = (arrayToFlatten) => {
  if (arrayToFlatten === null || typeof arrayToFlatten === "undefined" || !Array.isArray(arrayToFlatten)) throw new Error("Invalid input for function flatten");

  let flatArray = [];

  arrayToFlatten.forEach(elem => {
    if (!Array.isArray(elem)) {
      if (elem !== null && typeof elem !== "undefined") flatArray.push(elem);
    } else {
      flatArray = flatArray.concat(flatten(elem));
    }
  });

  return flatArray;
};

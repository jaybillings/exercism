export const isIsogram = (word) => {
  let seenChars = [];
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);
    if (seenChars.includes(char)) return false;
    if (/\w/.test(char)) seenChars.push(char);
  }

  return true;
};

export const findAnagrams = (word, anagrams) => {
  // Anagrams should be same length as og word, but not same word
  anagrams = anagrams.filter(anagram => (anagram.length === word.length && anagram.toLowerCase() !== word.toLowerCase()));
  if (anagrams.length === 0) return anagrams;

  // Transform all words into a more usable format
  const charsInWord = transformWords(word);
  let charsInAnagrams = {};

  anagrams.forEach(anagram => {
    charsInAnagrams[anagram] = transformWords(anagram);
  });

  // Character sets should be the same length as og char set
  anagrams = anagrams.filter(anagram => {
    if (Object.keys(charsInAnagrams[anagram]).length === Object.keys(charsInWord).length) return anagram;
  });
  if (anagrams.length === 0) return anagrams;

  // Character counts in sets should equal og char set
  anagrams = anagrams.filter(anagram => {
    let match = true;
    Object.keys(charsInAnagrams[anagram]).forEach(char => {
      if (charsInWord[char] !== charsInAnagrams[anagram][char]) match = false;
    });
    if (match) return anagram;
  });

  return anagrams;
};

/**
 * transformWords transforms a word into an array. The array indexes are each unique character, values are the number
 * of times that character appears in the word.
 * @param word
 * @returns {{char: string, count: number}}
 */
const transformWords = (word) => {
  word = word.toLowerCase();
  const wordArr = {};

  for (let i = 0; i < word.length; i++) {
    const charAtIndex = word[i];

    if (wordArr[charAtIndex]) wordArr[charAtIndex]++;
    else wordArr[charAtIndex] = 1;
  }

  return wordArr;
};

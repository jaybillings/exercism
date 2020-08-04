export const countWords = (phrase) => {
  const wordsInPhrase = [...phrase.matchAll(/\w+('[ts])?/g)],
    wordCounts = {};

  for (let match of wordsInPhrase) {
    let word = match[0];
    if (word) {
      word = word.toLowerCase();
      if (!wordCounts[word]) wordCounts[word] = 1;
      else wordCounts[word]++;
    }
  }

  return wordCounts;
};

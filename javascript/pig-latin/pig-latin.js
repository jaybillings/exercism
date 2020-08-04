export class translator {
  static translate(phraseToTranslate) {
    const wordsInPhrase = phraseToTranslate.split(' ');
    const translatedWords = wordsInPhrase.map(word => translator.translateWord(word));

    return translatedWords.join(' ');
  }

  static translateWord(wordToTranslate) {
    // Case 1: Starts with vowel
    if (/^([aeiou]|yt|xr)/.test(wordToTranslate)) return wordToTranslate + 'ay';

    // Case 2: Starts with consonant + QU
    const constQUTest = /^([^aeiou]qu)(\w+)$/.exec(wordToTranslate);
    if (constQUTest) return constQUTest[2] + constQUTest[1] + 'ay';

    // Case 3: Starts with consonant + Y
    const consYTest = /^([^aeiou]+)(y\w*)$/.exec(wordToTranslate);
    if (consYTest) return consYTest[2] + consYTest[1] + 'ay';

    // Case 4: Starts with a consonant
    const consTest = /^(qu|or|[^aeiou]+)(\w+)$/.exec(wordToTranslate);
    if (consTest) return consTest[2] + consTest[1] + 'ay';

    // Default case -- just add AY to end of word
    return wordToTranslate + 'ay';
  }
}

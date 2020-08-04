//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaStrand) => {
  const transcriptions = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  if (dnaStrand.length === 1) return transcriptions[dnaStrand];

  const dnaArr = dnaStrand.split('');
  const rnaStrand = dnaArr.map(nucleotide => transcriptions[nucleotide]);

  return rnaStrand.join('');
};

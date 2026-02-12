// Riepilogo esercizi Agosto e Settembre
// Nome esercizio + tempo di esecuzione annotato nel file originale

const esercizi = [
  // Agosto
  { file: "1.VowelCalance-11Agosto.js", nome: "Vowel Calance", tempo: { minuti: 30, secondi: 0 } },
  { file: "2.BaseCheck-12Agosto.js", nome: "Base Check", tempo: { minuti: 30, secondi: 0 } },
  { file: "3.FibonacciSequence-13Agosto.js", nome: "Fibonacci Sequence", tempo: { minuti: 9, secondi: 48 } },
  { file: "4.Spacejam.-14Agosto.js", nome: "Spacejam", tempo: { minuti: 4, secondi: 49 } },
  { file: "5.Jbelmud text-15Agosto.js", nome: "Jbelmud text", tempo: null },
  { file: "6.AnagramChecker-16Agosto.js", nome: "Anagram Checker", tempo: { minuti: 16, secondi: 11 } },
  { file: "7.TargetSum-17Agosto.js", nome: "Target Sum", tempo: { minuti: 15, secondi: 45 } },
  { file: "8.Factorializer-18Agosto.js", nome: "Factorializer", tempo: { minuti: 3, secondi: 33 } },
  { file: "9.SumOfSquares-19Agosto.js", nome: "Sum Of Squares", tempo: { minuti: 3, secondi: 49 } },
  { file: "10.3Strikes-20Agosto.js", nome: "3 Strikes", tempo: null },
  { file: "11.MilePace-21Agosto.js", nome: "Mile Pace", tempo: null },
  { file: "12.MessageDecoder-22Agosto.js", nome: "Message Decoder", tempo: { minuti: 30, secondi: 0 } },
  { file: "13.UnnaturalPrime-23Agosto.js", nome: "Unnatural Prime", tempo: null },
  { file: "14.CharactersBattle-24Agosto.js", nome: "Characters Battle", tempo: null },
  { file: "15.camelCase-25Agosto.js", nome: "camelCase", tempo: { minuti: 22, secondi: 24 } },
  { file: "16.ReverseParenthesis-26Agosto.js", nome: "Reverse Parenthesis", tempo: null },
  { file: "17.UnorderOfOperation-27Agosto.js", nome: "Unorder Of Operation", tempo: null },
  { file: "18.SecondBest-28Agostro.js", nome: "Second Best", tempo: null },
  { file: "19.Candlelight-29Agosto.js", nome: "Candlelight", tempo: null },
  { file: "20.ArrayDuplicates-30Agosto.js", nome: "Array Duplicates", tempo: { minuti: 8, secondi: 36 } },
  { file: "21.HexGenerator-31Agosto.js", nome: "Hex Generator", tempo: { minuti: 21, secondi: 32 } },

  // Settembre
  { file: "22.TribonacciSeuqnece-1Settembre.js", nome: "Tribonacci Sequence", tempo: { minuti: 11, secondi: 48 } },
  { file: "23.RgbToHex-2Settembre.js", nome: "Rgb To Hex", tempo: null },
  { file: "24.Pangram-3Settembre.js", nome: "Pangram", tempo: null },
  { file: "25.VowelRepeater-4Settembre.js", nome: "Vowel Repeater", tempo: null },
  { file: "26.IPv4Validator-5Settembre.js", nome: "IPv4 Validator", tempo: { minuti: 26, secondi: 23 } },
  { file: "27.MatrixRotate-6Settembre.js", nome: "Matrix Rotate", tempo: null },
  { file: "28.RomanNumeralParser-7Settembre.js", nome: "Roman Numeral Parser", tempo: null },
  { file: "29.AcronumBuilder-8Settembre.js", nome: "Acronum Builder", tempo: { minuti: 13, secondi: 12 } },
  { file: "30.UniqueCaracters-9Settembre.js", nome: "Unique Caracters", tempo: { minuti: 8, secondi: 48 } },
  { file: "31.ArrayDiff-10Settembre.js", nome: "Array Diff", tempo: null },
  { file: "32.ReverseSentence-11Settembre.js", nome: "Reverse Sentence", tempo: { minuti: 9, secondi: 59 } },
  { file: "33.ScreenTime-12Settembre.js", nome: "Screen Time", tempo: { minuti: 11, secondi: 42 } },
  { file: "34.MissingNumbers-13Settembre.js", nome: "Missing Numbers", tempo: { minuti: 15, secondi: 8 } },
  { file: "35.WordFrequency-14Settembre.js", nome: "Word Frequency", tempo: null },
  { file: "36.ThermostatAdjuster-15Settembre.js", nome: "Thermostat Adjuster", tempo: { minuti: 1, secondi: 14 } },
  { file: "37.SentenceCapitalize-16Settembre.js", nome: "Sentence Capitalize", tempo: null },
  { file: "38.SlugGenerator-17Settembre.js", nome: "Slug Generator", tempo: { minuti: 6, secondi: 0 } },
  { file: "39.FillTheTank-18Settembre.js", nome: "Fill The Tank", tempo: { minuti: 2, secondi: 30 } },
  { file: "40.PhotoStorage-19Settembre.js", nome: "Photo Storage", tempo: { minuti: 6, secondi: 6 } },
  { file: "41.FileStorage-20Settembre.js", nome: "File Storage", tempo: { minuti: 10, secondi: 0 } },
  { file: "42.VideoStorage-21Settembre.js", nome: "Video Storage", tempo: { minuti: 13, secondi: 10 } },
  { file: "43.DigitsVsLetters-22Settembre.js", nome: "Digits Vs Letters", tempo: { minuti: 6, secondi: 35 } },
  { file: "44.StringMirror-23Settembre.js", nome: "String Mirror", tempo: { minuti: 14, secondi: 57 } },
  { file: "45.PerfectSquare-24Settembre.js", nome: "Perfect Square", tempo: { minuti: 6, secondi: 54 } },
  { file: "46.2ndLargest-25Settembre.js", nome: "2nd Largest", tempo: { minuti: 9, secondi: 44 } },
  { file: "47.CaughtSpeeding-26Settembre.js", nome: "Caught Speeding", tempo: { minuti: 15, secondi: 27 } },
  { file: "48.SpamDetector-27Settembre.js", nome: "Spam Detector", tempo: null },
  { file: "49.CsvHeaderParses-28Settembre.js", nome: "Csv Header Parses", tempo: { minuti: 3, secondi: 36 } },
  { file: "50.LongestWord-29Settembre.js", nome: "Longest Word", tempo: { minuti: 17, secondi: 1 } },
  { file: "51.PhoneNumberFormatter-30Settembre.js", nome: "Phone Number Formatter", tempo: { minuti: 5, secondi: 40 } }
];

function formatTempo(tempo) {
  if (!tempo || tempo.minuti == null) return "Non indicato";

  const { minuti, secondi } = tempo;
  return `${minuti} minuti e ${secondi} secondi`;
}

console.log("=== Riepilogo Snack (minuti e secondi) ===");

esercizi.forEach(e => {
  console.log(`- ${e.file} | ${e.nome} | Tempo: ${formatTempo(e.tempo)}`);
});

// module.exports = esercizi;


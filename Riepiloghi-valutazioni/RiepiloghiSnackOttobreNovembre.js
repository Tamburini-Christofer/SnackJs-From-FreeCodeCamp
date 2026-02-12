// Riepilogo esercizi Ottobre e Novembre
// Nome esercizio + tempo di esecuzione annotato nel file originale

const esercizi = [
  // Ottobre
  { file: "52.BinaryToDecimal-01Ottobre.js", nome: "Binary To Decimal", tempo: null },
  { file: "53.DecimalToBinary-02Ottobre.js", nome: "Decimal To Binary", tempo: null },
  { file: "54.P@ssw=rdStr3ngth!-03Ottobre.js", nome: "Password Strength", tempo: null },
  { file: "55.SpaceWeekDay1-StellarClassification-04Ottobre.js", nome: "Stellar Classification", tempo: { minuti: 3, secondi: 17 } },
  { file: "56.SpaceWeekDay2-ExoplanetSearch-05Ottobre.js", nome: "Exoplanet Search", tempo: null },
  { file: "57.SpaceWeekDay3-PhoneHome-06Ottobre.js", nome: "Phone Home", tempo: null },
  { file: "58.SpaceWeekDay4-LandingSpot-07Ottobre.js", nome: "Landing Spot", tempo: null },
  { file: "59.SpaceWeekDay5-GoldilocksZone-08Ottobre.js", nome: "Goldilocks Zone", tempo: { minuti: 12, secondi: 2 } },
  { file: "60.SpaceWeekDay6-MoonPhase-09Ottobre.js", nome: "Moon Phase", tempo: null },
  { file: "61.SpaceWeekDay7-LaunchFuel-10Ottobre.js", nome: "Launch Fuel", tempo: null },
  { file: "62.HexToDecimal-11Ottobre.js", nome: "Hex To Decimal", tempo: null },
  { file: "63.BattleOfWords-12Ottobre.js", nome: "Battle Of Words", tempo: null },
  { file: "64.24To12-13Ottobre.js", nome: "24 To 12", tempo: { minuti: 19, secondi: 33 } },
  { file: "65.StringCount-14Ottobre.js", nome: "String Count", tempo: { minuti: 15, secondi: 0 } },
  { file: "66.HTMLTagStripper-15Ottobre.js", nome: "HTML Tag Stripper", tempo: { minuti: 2, secondi: 0 } },
  { file: "67.EmailValidator-16Ottobre.js", nome: "Email Validator", tempo: null },
  { file: "68.CreditCardMasker-17Ottobre.js", nome: "Credit Card Masker", tempo: { minuti: 18, secondi: 52 } },
  { file: "69.MissingSocks-18Ottobre.js", nome: "Missing Socks", tempo: { minuti: 20, secondi: 0 } },
  { file: "70.HtmlAttributeExtractor-19Ottobre.js", nome: "Html Attribute Extractor", tempo: null },
  { file: "71.TipCalculator-20Ottobre.js", nome: "Tip Calculator", tempo: { minuti: 16, secondi: 32 } },
  { file: "72.ThermostatAdjkuster2-21Ottobre.js", nome: "Thermostat Adjkuster 2", tempo: { minuti: 15, secondi: 36 } },
  { file: "73.SpeakWiselyTuouMust-22Ottobre.js", nome: "Speak Wisely Tuou Must", tempo: null },
  { file: "74.FavoriteSongs-23Ottobre.js", nome: "Favorite Songs", tempo: { minuti: 7, secondi: 30 } },
  { file: "75.HiddenTreasure-24Ottobre.js", nome: "Hidden Treasure", tempo: null },
  { file: "76.ComplementaryDNA-25Ottobre.js", nome: "Complementary DNA", tempo: { minuti: 9, secondi: 42 } },
  { file: "77.DurationFormatter-26Ottobre.js", nome: "Duration Formatter", tempo: null },
  { file: "78.IntegerSequence-27Ottobre.js", nome: "Integer Sequence", tempo: { minuti: 2, secondi: 33 } },
  { file: "79.Navigator-28Ottobre.js", nome: "Navigator", tempo: null },
  { file: "80.EmailSorter-29Ottobre.js", nome: "Email Sorter", tempo: null },
  { file: "81.NthPrime-30Ottobre.js", nome: "Nth Prime", tempo: null },
  { file: "82.SpOoKy-CaSe-31Ottobre.js", nome: "SpOoKy CaSe", tempo: null },

  // Novembre
  { file: "83.SignatureValidation-01Novembre.js", nome: "Signature Validation", tempo: null },
  { file: "84.Infected-02Novembre.js", nome: "Infected", tempo: { minuti: 12, secondi: 40 } },
  { file: "85.WordCounter-03Novembre.js", nome: "Word Counter", tempo: { minuti: 1, secondi: 1 } },
  { file: "86.ImageSearch-04Novembre.js", nome: "Image Search", tempo: { minuti: 8, secondi: 42 } },
  { file: "87.MatrixBuilder-05Novembre.js", nome: "Matrix Builder", tempo: { minuti: 11, secondi: 58 } },
  { file: "88.WeekdayFinder-06Novembre.js", nome: "Weekday Finder", tempo: { minuti: 4, secondi: 43 } },
  { file: "89.CoutingCards-07Novembre.js", nome: "Couting Cards", tempo: null },
  { file: "90.CharacterLimit-08Novembre.js", nome: "Character Limit", tempo: { minuti: 2, secondi: 8 } },
  { file: "91.WordSearch-09Novembre.js", nome: "Word Search", tempo: null },
  { file: "92.ExtensionExtractor-10Novembre.js", nome: "Extension Extractor", tempo: { minuti: 10, secondi: 20 } },
  { file: "93.VowelsAndConsonants-11Novembre.js", nome: "Vowels And Consonants", tempo: { minuti: 9, secondi: 39 } },
  { file: "94.EmailSignatureGenerator-12Novembre.js", nome: "Email Signature Generator", tempo: { minuti: 11, secondi: 20 } },
  { file: "95.ArrayShift-13Novembre.js", nome: "Array Shift", tempo: null },
  { file: "96.IsItTheWeekend-14Novembre.js", nome: "Is It The Weekend", tempo: { minuti: 8, secondi: 37 } },
  { file: "97.GCD-15Novembre.js", nome: "GCD", tempo: { minuti: 8, secondi: 30 } },
  { file: "98.RectangleCount-16Novembre.js", nome: "Rectangle Count", tempo: null },
  { file: "99.FingerprintTest-17Novembre.js", nome: "Fingerprint Test", tempo: { minuti: 18, secondi: 46 } },
  { file: "100.100Characters-18Novembre.js", nome: "100 Characters", tempo: { minuti: 14, secondi: 24 } },
  { file: "101.MarkdownHeadingConverter-19Novembre.js", nome: "Markdown Heading Converter", tempo: { minuti: 19, secondi: 24 } },
  { file: "102.LongestWord-20Novembre.js", nome: "Longest Word", tempo: { minuti: 4, secondi: 31 } },
  { file: "103.LCM-21Novembre.js", nome: "LCM", tempo: { minuti: 16, secondi: 26 } },
  { file: "104.RecipeScaler-22Novembre.js", nome: "Recipe Scaler", tempo: null },
  { file: "105.CharacterCount-23Novembre.js", nome: "Character Count", tempo: null },
  { file: "106.MessageValidator-24Novembre.js", nome: "Message Validator", tempo: { minuti: 5, secondi: 10 } },
  { file: "107.FizzBuzz-25Novembre.js", nome: "Fizz Buzz", tempo: { minuti: 4, secondi: 47 } },
  { file: "108.BuzzFizz-26Novembre.js", nome: "Buzz Fizz", tempo: null },
  { file: "109.What'sMyAgeAgain-27Novembre.js", nome: "What's My Age Again", tempo: { minuti: 11, secondi: 26 } },
  { file: "110.WordGuesser-28Novembre.js", nome: "Word Guesser", tempo: null },
  { file: "111.BallTrajectory-29Novembre.js", nome: "Ball Trajectory", tempo: null },
  { file: "112.AIDetector-30Novembre.js", nome: "AI Detector", tempo: { minuti: 14, secondi: 0 } },
];

function formatTempo(tempo) {
  if (!tempo || tempo.minuti == null) return "Non indicato";

  const { minuti, secondi } = tempo;
  return `${minuti} minuti e ${secondi} secondi`;
}

console.log("=== Riepilogo Snack Ottobre/Novembre (minuti e secondi) ===");

esercizi.forEach(e => {
  console.log(`- ${e.file} | ${e.nome} | Tempo: ${formatTempo(e.tempo)}`);
});

// module.exports = esercizi;

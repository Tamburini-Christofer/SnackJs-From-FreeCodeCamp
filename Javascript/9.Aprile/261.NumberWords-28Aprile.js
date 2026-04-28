//todo Consegna dell'esercizio
// Dato un numero intero da 0 a 99, restituisci la sua rappresentazione in lettere in inglese.
//todo

//* Tempo di esecuzione:
// 15 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function getNumberWords(n) {
  if(n === 0) return "zero"

  var first10 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var first20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var multiply = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if(n < 10) return first10[n]
  if(n < 20) return first20[n - 10]
  if(n < 100) return multiply[Math.floor(n / 10) - 2] + (n % 10 === 0 ? "" : "-" + first10[n % 10])

  return n;
}
//*

//* Codice scritto da ChatGpt
function getNumberWordsGPT(n) {
  const units = ["zero","one","two","three","four","five","six","seven","eight","nine"];
  const teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

  if (n < 10) return units[n];
  if (n < 20) return teens[n - 10];

  const ten = Math.floor(n / 10);
  const unit = n % 10;

  return unit === 0 ? tens[ten] : `${tens[ten]}-${units[unit]}`;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta e completa
// - Gestione perfetta di tutti i casi (0–99)
// - Uso intelligente degli array
// - Codice compatto e leggibile

//! Contro
// - Nomi variabili poco chiari ("multiply" poteva essere "tens")
// - first10 parte con stringa vuota (non necessario)
// - return n finale inutile (fuori specifica)
// - Manca controllo input (numero fuori range)

//*
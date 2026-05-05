//todo Consegna dell'esercizio
// Dato un numero intero positivo, determina se si tratta di un numero narcisistico.
// Un numero è narcisistico se la somma di ciascuna delle sue cifre elevata
// alla potenza del numero totale di cifre è uguale al numero stesso.
//todo

//* Tempo di esecuzione:
// 5 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function isNarcissistic(n) {

  let power = String(n).split("").length

  let convertedNumber = String(n)
    .split("")
    .map((n) => Number(n) ** power)
    .reduce((acc, init) => acc + init, 0)

  return convertedNumber === n;
}
//*

//* Codice scritto da ChatGpt
function isNarcissisticGPT(n) {
  const digits = [...String(n)];
  const power = digits.length;

  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), power);
  }, 0);

  return sum === n;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta e funzionante
// - Uso intelligente di map + reduce
// - Codice compatto
// - Ottima gestione della conversione numero → cifre

//! Contro
// - Usi String(n).split("") due volte (si può ottimizzare)
// - Variabile "init" poco chiara come nome
// - Un filo meno leggibile rispetto a una versione leggermente più esplicita

//*
//todo Consegna dell'esercizio
// Data una stringa di numeri separati da vari segni di punteggiatura,
// restituisci il numero più grande.
//
// I separatori possono essere:
// ",", "!", "?", ":", ";"
//todo

//* Tempo di esecuzione:
// 2 minuti e 15 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function largestNumber(str) {

  let convertedStr = str.replace(/[,!?:;]/g, " ").split(" ")

  return Math.max(...convertedStr);
}
//*

//* Codice scritto da ChatGpt
function largestNumber(str) {
  return Math.max(
    ...str.split(/[,!?:;]/).map(Number)
  )
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Ottima velocità ✔
// - Uso corretto delle regex ✔
// - Soluzione semplice e leggibile ✔
// - Funziona anche con numeri negativi ✔

//! Contro
// - Split su spazio → può creare stringhe vuote ❌
// - Non conversione esplicita a Number ❌
// - Un passaggio in più (replace inutile) ❌
//*
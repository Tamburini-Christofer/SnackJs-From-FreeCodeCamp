//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Date due stringhe, restituisci una nuova stringa che le mescoli una alla volta.
Se una delle due stringhe è più lunga, aggiungi i caratteri rimanenti alla fine.

Inizia con il primo carattere della prima stringa.
*/
//todo

//* Tempo di esecuzione:
// 10 Minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function zipStrings(a, b) {
  let word = "";
  const maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    if (a[i] !== undefined) word += a[i];
    if (b[i] !== undefined) word += b[i];
  }

  return word;
}

console.log(zipStrings("day", "night"));

//*

//* Codice scritto da ChatGpt

function zipStrings(a, b) {
  let result = "";
  const maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < a.length) result += a[i];
    if (i < b.length) result += b[i];
  }

  return result;
}

console.log(zipStrings("day", "night"));

//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// Soluzione corretta e funzionante
// Ottimo utilizzo di Math.max per gestire lunghezze diverse
// Hai gestito bene i caratteri mancanti con il controllo undefined
// Codice pulito e leggibile

//! Contro
// Il controllo con !== undefined funziona, ma usare i < string.length è più comune e leggibile
// Nome variabile "word" migliorabile in "result" o "mergedString"

//*
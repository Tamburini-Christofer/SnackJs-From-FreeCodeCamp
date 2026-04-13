//todo Consegna dell'esercizio
// Dato un anno intero, determina se è bisestile.
//todo

//! Requisiti da rispettare
// Un anno è bisestile se soddisfa le seguenti regole:
// L'anno è divisibile per 4 e
// L'anno non è divisibile per 100, a meno che
// L'anno non sia divisibile per 400.
//!

//* Tempo di esecuzione:
//* 5 Minuti e 04 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function isLeapYear(year) {

  if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) return true
  else return false

}

console.log(isLeapYear(2023))
//*

//* Codice scritto da ChatGpt
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2023)); // false
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 8/10
//todo

//* Pro e contro del mio codice

//* Pro

// Condizione corretta
// Codice leggibile
// Nessun caso mancante
// Funziona per tutti gli edge case (1900 ❌, 2000 ✅)

//! Contro

// else return false è superfluo
// Può essere ancora più pulito

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
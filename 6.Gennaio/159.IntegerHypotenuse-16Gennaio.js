//todo Consegna dell'esercizio
// Dati due numeri interi positivi che rappresentano le lunghezze dei due cateti (i due lati corti) di un triangolo rettangolo, determina se l'ipotenusa è un numero intero.
//todo

//! Requisiti da rispettare
// La lunghezza dell'ipotenusa si calcola sommando i quadrati delle lunghezze dei due cateti e poi estraendo la radice quadrata del totale (a² + b² = c²).
//!

//* Tempo di esecuzione:
//* 12 Minuti e 35 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function isIntegerHypotenuse(a, b) {

  return Number.isInteger(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
}

console.log(isIntegerHypotenuse(5, 12))
//*

//* Codice scritto da ChatGpt
function isIntegerHypotenuse(a, b) {
  const c = Math.sqrt(a ** 2 + b ** 2);
  return Number.isInteger(c);
}

console.log(isIntegerHypotenuse(5, 12));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 9.5/10
//todo

//* Pro e contro del mio codice

//* Pro

// Matematicamente corretto
// Pulito
// Sintetico
// Nessun codice inutile

//! Contro

// Math.pow() è un po’ verboso (oggi si usa **)
// Potresti salvare il risultato in una variabile per leggibilità

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
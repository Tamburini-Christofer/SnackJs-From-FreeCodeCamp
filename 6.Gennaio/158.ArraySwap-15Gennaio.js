//todo Consegna dell'esercizio
// Dato un array con due valori, restituisci un array con i valori scambiati.
//todo

//! Requisiti da rispettare
// Ad esempio, dato ["A", "B"], restituisci ["B", "A"].
//!

//* Tempo di esecuzione:
//* 15 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function arraySwap(arr) {

  return arr.reverse();
}

console.log(arraySwap(["A", "B"]))
//*

//* Codice scritto da ChatGpt

//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 8/10
//todo

//* Pro e contro del mio codice

//* Pro

// Super semplice
// Funziona perfettamente per la consegna
// Codice pulito

//! Contro

// reverse() muta l’array originale
// Non controlli che l’array abbia davvero 2 elementi
// Non stai creando un nuovo array (best practice)

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
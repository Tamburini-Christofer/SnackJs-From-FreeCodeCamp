//todo Consegna dell'esercizio
// Dato un array di interi, dove ogni valore rappresenta il numero di bersagli colpiti in un singolo round di biathlon, restituisci la distanza totale di penalità che l'atleta deve percorrere sugli sci.
//todo

//! Requisiti da rispettare
// Ogni round è composto da 5 bersagli.
// Ogni bersaglio mancato comporta un giro di penalità di 150 metri.
//!

//* Tempo di esecuzione:
//* 3 Minuti 
//*

//*Codice scritto senza utilizzo di ChatGpt
function calculatePenaltyDistance(rounds) {

  let penality = 0

  for(let round of rounds) {
    if(round < 5) penality += (5 - round) * 150
  }

  return penality;
}

console.log(calculatePenaltyDistance([4, 4]))
//*

//* Codice scritto da ChatGpt
function calculatePenaltyDistance(rounds) {

  let penalty = 0;

  for (let round of rounds) {
    penalty += (5 - round) * 150;
  }

  return penalty;
}

console.log(calculatePenaltyDistance([4,4]));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 8/10
//todo

//* Pro e contro del mio codice

///* Pro

// uso corretto di for...of
// logica semplice
// calcolo perfetto
// leggibile

//! Contro
// Piccole cose migliorabili:

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
//todo Consegna dell'esercizio
// Dato un array di punteggi dei giudici e penalità opzionali, calcola il punteggio finale di un'esibizione di pattinaggio artistico.
//todo

//! Requisiti da rispettare
// Il primo argomento è un array di 10 punteggi dei giudici, ciascuno un numero da 0 a 10. Rimuovi il punteggio più alto e quello più basso e somma gli 8 punteggi rimanenti per ottenere il punteggio base.
// Gli eventuali argomenti aggiuntivi passati alla funzione rappresentano le penalità. Sottrai tutte le penalità dal punteggio base per ottenere il punteggio finale.
//!

//* Tempo di esecuzione:
//* 5 Minuti e 13 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function computeScore(judgeScores, ...penalties) {

  return judgeScores.sort((a, b) => a - b).splice(1,8).reduce((acc, i) => acc + i, 0) - [...penalties].reduce((acc,i) => acc + i, 0)}

console.log(computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1))
//*

//* Codice scritto da ChatGpt
function computeScore(scores, ...penalties) {
  return scores
    .slice()
    .sort((a,b)=>a-b)
    .slice(1,-1)
    .reduce((a,b)=>a+b,0) - penalties.reduce((a,b)=>a+b,0);
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro

// uso corretto di rest parameters
// buon uso di sort
// buona pipeline con reduce
// codice compatto

//! Contro

// splice modifica l'array originale
// Questo in produzione è sconsigliato.
// Meglio usare slice.

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
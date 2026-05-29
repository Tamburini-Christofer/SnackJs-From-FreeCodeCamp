//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dati un numero iniziale e un numero finale, conta il numero di occorrenze di "fizz" e "buzz" nell'intervallo (inclusi).
//
// I numeri divisibili per 3 vengono conteggiati come "fizz".
//
// I numeri divisibili per 5 vengono conteggiati come "buzz".
//
// I numeri divisibili sia per 3 che per 5 vengono conteggiati sia come "fizz" che come "buzz".
//
// Restituisci un oggetto o un dizionario con i conteggi nel formato: { fizz, buzz }.
//todo

//* Tempo di esecuzione:
// 2 minuti e 40 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function fizzBuzzCount(start, end) {

  let contBuzz = 0
  let contFizz = 0;

  for(let i = start; i <= end; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      contBuzz++;
      contFizz++
    }
    else if(i % 3 === 0) contBuzz++
    else if(i % 5 === 0) contFizz++
  }

  return {fizz: contBuzz, buzz: contFizz};
}

console.log(fizzBuzzCount(24, 100))

//*

//* Codice scritto da ChatGpt

function fizzBuzzCount(start, end) {

  let fizz = 0;
  let buzz = 0;

  for(let i = start; i <= end; i++) {

    if(i % 3 === 0) fizz++;

    if(i % 5 === 0) buzz++;
  }

  return { fizz, buzz };
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 7/10
//todo

//* Pro e contro del mio codice

//* Pro
// Hai gestito correttamente il caso dei numeri divisibili sia per 3 che per 5.
// La logica generale è corretta.
// Codice leggibile e semplice da seguire.
// Buon tempo di esecuzione.

//! Contro
// Hai invertito i contatori:
// i numeri divisibili per 3 aumentano contBuzz,
// mentre quelli divisibili per 5 aumentano contFizz.
//
// Nel return i valori risultano quindi scambiati.
//
// Potevi semplificare la logica usando due if separati invece di if/else if.
//*
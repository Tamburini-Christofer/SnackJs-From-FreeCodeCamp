//Prompt ChatGpt: questo è il modello. Invierò consena esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato un array di numeri, restituisci la somma delle differenze tra ciascun numero e quello che lo segue.
// Ad esempio, dato [1, 3, 4], restituisci 3 (2 + 1).
//todo

//* Tempo di esecuzione:
// 3 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function sumOfDifferences(arr) {

  let resultArr = [];

  for(let i = arr.length - 1; i > 0; i--) {
    resultArr.push(arr[i] - arr[i-1])
  }

  return resultArr.reduce((acc, i) => acc + i, 0);
}

console.log(sumOfDifferences([1, 3, 4]))

//*

//* Codice scritto da ChatGpt

function sumOfDifferences(arr) {
  if (arr.length <= 1) return 0;

  let sum = 0;

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i] - arr[i - 1];
  }

  return sum;
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 7.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Hai usato correttamente il ciclo for
// - Ottima logica nel calcolo delle differenze
// - Uso corretto di reduce
// - Codice leggibile
// - Risolto velocemente in 3 minuti

//! Contro
// - Crei un array aggiuntivo inutilmente
// - Se l'array è vuoto, reduce può dare errore
// - Il ciclo al contrario rende il codice un po’ meno intuitivo
// - Si può ottimizzare sommando direttamente senza usare push

//*
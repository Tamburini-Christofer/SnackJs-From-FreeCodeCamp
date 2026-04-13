//todo Consegna dell'esercizio
// Dato un array di numeri, restituisci un nuovo array contenente il valore necessario per passare da ogni numero al successivo.
//todo

//! Requisiti da rispettare
// Per l'ultimo numero, usa 0 poiché non esiste un numero successivo.
// Ad esempio, dato [1, 2, 4, 7], restituisci [1, 2, 3, 0].
//!

//* Tempo di esecuzione:
//* 15 Minuti 
//*

//*Codice scritto senza utilizzo di ChatGpt
function findDifferences(arr) {

  let result = [];

  for(let i = 0; i < arr.length-1; i++) {
    result.push(arr[i+1] - arr[i])
  }

  result.push(0)

  return result;
}

console.log(findDifferences([1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1]))
//*

//* Codice scritto da ChatGpt
function findDifferences(arr) {
  if (arr.length === 0) return [];

  return arr.map((num, i) => arr[i + 1] - num || 0);
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 9/10
//todo

//* Pro e contro del mio codice

//* Pro

// Logica chiara e pulita
// Nessun errore
// Ben leggibile
// Gestione corretta dell’ultimo elemento

//! Contro

// Un po’ “manuale” → si può rendere più compatto
// Se arr è vuoto → ritorna [0] (non ideale)
// Non sfrutti metodi moderni (map)

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
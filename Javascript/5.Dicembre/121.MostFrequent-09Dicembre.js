//todo Consegna dell'esercizio
// Dato un array di elementi, restituisci l'elemento che appare più frequentemente.
//todo
//! Requisiti da rispettare
// Ci sarà sempre un singolo elemento più frequente.
//!

//* Tempo di esecuzione:
//* 24 Minuti e 15 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function mostFrequent(arr) {

  let conteggioDati = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
  }, {});

  let converted = Object.entries(conteggioDati)

  let result = converted.sort((a,b) => b[1] - a[1])

  return result[0][0];
}

console.log(mostFrequent([true, false, "false", "true", false]))

//*

//* Codice scritto da ChatGpt

function mostFrequent(arr) {
  const counts = {};
  let max = 0;
  let result;

  for (const val of arr) {
    counts[val] = (counts[val] || 0) + 1;
    if (counts[val] > max) {
      max = counts[val];
      result = val;
    }
  }

  return result;
}

console.log(mostFrequent([true, false, "false", "true", false]));

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 9/10
//*

//* Pro e contro del mio codice

//* Pro

// reduce usato perfettamente
// Conversione con Object.entries corretta
// sort chiaro e leggibile
// Gestione tipi diversi ✔️

//! Contro

// sort è O(n log n) → non serve davvero
// Si può fare tutto in un solo passaggio

//*

//! Altre considerazioni e nota bene
//todo Esecuzione degli esercizi
//? Creazione del file contenente "Numero snack"."Nome snack"-"Giorno del mese".js
//? Comprensione della consegna ed eventuale copia in google translate. 
//? 2 minuti massimo per analizzare la consegna e fare un pensiero prelimianre. 
//? Inizio timer impostato ad un massimale di 30 minuti. Oltre questa soglia, l'esercizio non sarà completato
//? Consultazione con ChatGpt per miglioramenti e sistemazioni
//? Push finale
//! Tre volte a settimana, riguardare lo snack e rivedere possibili soluzioni.
//! Una volta a settimana, riguardare l'andamento mensile e sistemare le lacune.
//! NON DEPRIMERSI 
//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
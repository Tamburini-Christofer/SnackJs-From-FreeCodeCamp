//todo Consegna dell'esercizio
// Dato un array di valori, rimuovi tutte le occorrenze dell'elemento più frequente e restituisci l'array risultante.
//todo
//! Requisiti da rispettare
// Se più valori sono a pari merito per il valore più frequente, rimuovili tutti.
// Non modificare nessuno degli altri elementi o il loro ordine.
//!

//* Tempo di esecuzione:
///* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function purgeMostFrequent(arr) {

  const conteggio = arr.reduce((acc, parola) => {
    acc[parola] = (acc[parola] || 0) + 1
    return acc
  }, {})

  let result = [];

  for (let [chiave, valore] of Object.entries(conteggio)) {
    if (valore > result) result.push(chiave)
  }

  return result;

}

console.log(purgeMostFrequent([1, 2, 2, 3]))

//*

//* Codice scritto da ChatGpt

function purgeMostFrequent(arr) {
  const count = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const maxFreq = Math.max(...Object.values(count));

  return arr.filter(val => count[val] !== maxFreq);
}

console.log(purgeMostFrequent([1, 2, 2, 3])); // [1, 3]

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 4/10
//*

//* Pro e contro del mio codice

//* Pro

// Uso corretto di reduce
// Codice leggibile
// Buona base logica

//! Contro

// Logica di confronto errata
// Manca il passaggio chiave: rimuovere dal arr
// Output sbagliato

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
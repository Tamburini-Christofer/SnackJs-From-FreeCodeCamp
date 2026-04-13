//todo Consegna dell'esercizio
// Dati due array, restituisci un nuovo array contenente la differenza simmetrica tra di essi.
//todo
//! Requisiti da rispettare
// La differenza simmetrica tra due insiemi è l'insieme dei valori che compaiono in uno dei due insiemi, ma non in entrambi.
// Restituisci i valori nell'ordine in cui compaiono per la prima volta negli array di input.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function difference(arr1, arr2) {

  let arrResult = [];
  
  if(arr1.length <= arr2.length) {
    for(let j = 0; j < arr2.length; j++) {
      if(!arr2.includes(arr1[j])) arrResult.push(arr1[j])
      if(!arr1.includes(arr2[j])) arrResult.push(arr2[j])
    }
  }

  else if(arr1.length > arr2.length) {
    for(let j = 0; j < arr1.length; j++) {
      if(!arr2.includes(arr1[j])) arrResult.push(arr1[j])
      if(!arr1.includes(arr2[j])) arrResult.push(arr2[j])
    }
  }
  return arrResult;
}

console.log(difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]))

//*

//* Codice scritto da ChatGpt

function difference(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
}

console.log(difference(
  [1, 3, 5, 7, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
));

//*

//* Valutazione al codice proposta da ChatGpt
//? Voto 5/10 
//*

//* Pro e contro del mio codice

//*Pro

// Buona intuizione nell’usare includes
// Logica generale quasi corretta
// Codice leggibile

//!Contro

// Bug sugli indici
// Struttura ripetitiva
// Non totalmente robusto
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
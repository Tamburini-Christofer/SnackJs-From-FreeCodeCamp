//todo Consegna dell'esercizio
// Dati due numeri interi (un numero di righe e un numero di colonne), restituisci una matrice (un array di array) riempita con zeri (0) della dimensione indicata.
//todo

//! Requisiti da rispettare
// Ad esempio, dati 2 e 3, restituisci:
// [
// [0, 0, 0],
// [0, 0, 0]
// ]
//!

//* Tempo di esecuzione:

//* 11 Minuti e 58 Secondi 

//*

//*Codice scritto senza utilizzo di ChatGpt

function buildMatrix(rows, cols) {

  let arrMatrix = []

  for(let i = 0; i < rows; i++) {
  arrMatrix.push([]);
  for(let j = 0; j < cols; j++) 
  arrMatrix[i].push(0)
  }

  return arrMatrix;
}

console.log(buildMatrix(2, 3))

//*

//* Codice scritto da ChatGpt

function buildMatrix(rows, cols) {
  const matrix = []

  for (let i = 0; i < rows; i++) {
    const row = []
    for (let j = 0; j < cols; j++) {
      row.push(0)
    }
    matrix.push(row)
  }

  return matrix
}

console.log(buildMatrix(2, 3))

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 9/10

//*

//* Pro e contro del mio codice

//* ✅ Pro

// Logica corretta
// Cicli chiari
// Nessun bug
// Soluzione da esame/colloquio OK

//! ❌ Contro

// Formattazione migliorabile (manca una graffa su nuova riga)
// Nome variabile un po’ verboso
// Esiste una versione più compatta (ma non obbligatoria)

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
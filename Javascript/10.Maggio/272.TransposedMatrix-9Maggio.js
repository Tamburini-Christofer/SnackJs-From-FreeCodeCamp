//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio

/*
Data una matrice (un array di array), restituisci la sua versione trasposta.

Per trasporre una matrice, è necessario scambiare righe e colonne.
Ad esempio: un valore all'indice [0, 1] deve essere spostato all'indice [1, 0].

Ad esempio, data la matrice:

[
  [1, 2, 3],
  [4, 5, 6]
]

Restituisci:

[
  [1, 4],
  [2, 5],
  [3, 6]
]
*/

//todo

//* Tempo di esecuzione:
// 30 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let result = [];

  for (let j = 0; j < cols; j++) {
    let newRow = [];

    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }

    result.push(newRow);
  }

  return result;
}

console.log(transpose([[1, 2, 3], [4, 5, 6]]));

//*

//* Codice scritto da ChatGpt

function transpose(matrix) {

  const rows = matrix.length;
  const cols = matrix[0].length;

  const transposed = [];

  for (let col = 0; col < cols; col++) {

    const newRow = [];

    for (let row = 0; row < rows; row++) {
      newRow.push(matrix[row][col]);
    }

    transposed.push(newRow);
  }

  return transposed;
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro

// Soluzione corretta e pulita
// Ottimo utilizzo dei doppi cicli for
// Variabili chiare e comprensibili
// Logica della trasposizione implementata perfettamente
// Complessità ottimale O(righe * colonne)
// Codice molto leggibile

//! Contro

// Manca la gestione di matrici vuote
// Non controlla se tutte le righe hanno la stessa lunghezza
// Potresti usare const al posto di let per result

//*
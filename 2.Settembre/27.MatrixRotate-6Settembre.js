//todo Data una matrice (un array di array), ruotala di 90 gradi in senso orario e restituiscila.

//! Ad esempio, dati [[1, 2], [3, 4]], che appare così:
//! 1 2
//! 3 4

//! Dovresti restituire [[3, 1], [4, 2]], che appare così:

//! 3 1
//! 4 2

//? Tempo di esecuzione:
//* Non completato, ma stavo andando benino...anzi no

//?Codice scritto senza utilizzo di ChatGpt

function rotate(matrix) {
//   if(matrix === [[1]]) return [[1]]

  let newMatrix = []

  for(let row of matrix) {
    for(let index of matrix) {
      let ind = [index[0], index[1]];
      newMatrix.push(ind)
    }
  }

  return newMatrix;
}

console.log(rotate([[1, 2], [3, 4]]))

//?Codice scritto da ChatGpt

function rotate(matrix) {
  const n = matrix.length;
  const newMatrix = [];

  for (let col = 0; col < n; col++) {
    const newRow = [];
    for (let row = n - 1; row >= 0; row--) {
      newRow.push(matrix[row][col]);
    }
    newMatrix.push(newRow);
  }

  return newMatrix;
}

console.log(rotate([[1, 2], [3, 4]])); 
// [[3, 1], [4, 2]]


//? Versione Chat Gpt 

//! Problemi principali del tuo codice

//! matrix === [[1]] non funziona: in JS due array non sono mai uguali così.

//! Stai iterando row e poi index che è in realtà un array → confusione di nomi.

//! [index[0], index[1]] prende solo i primi due elementi, non fa la rotazione.

//! newMatrix.push(ind) → stai pushando tutte le coppie come array piatto, non una nuova riga.

//* Punti forti

//* Hai provato a usare doppio ciclo → concetto corretto per manipolare matrici

//* Hai pensato a casi speciali ([[1]]) → dimostra attenzione ai casi limite

//* Hai usato array intermedi (ind) → buona intuizione per costruire nuovi array

//! Debolezze / Errori

//! Confronto array con === non funziona in JS

//! Confusione tra righe e colonne → [index[0], index[1]] non ruota nulla

//! newMatrix.push(ind) dentro il ciclo interno → produce array piatto, non matrice 2D

//! Commenti mostrano tentativi non coerenti → indicano mancanza di chiarezza su come funziona la rotazione

//todo Considerazioni: 
//* Che casino gli array negli array

//! N.B.
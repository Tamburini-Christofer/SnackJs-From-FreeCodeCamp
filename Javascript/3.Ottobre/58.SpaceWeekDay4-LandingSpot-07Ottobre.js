//todo  Nel quarto giorno della Settimana Spaziale, ti verrà fornita una matrice di numeri (un array di array) che rappresenta i potenziali punti di atterraggio per il tuo rover. Trova il punto di atterraggio più sicuro in base alle seguenti regole:

//! Ogni punto nella matrice conterrà un numero da 0 a 9, inclusi.
//! Qualsiasi 0 rappresenta un potenziale punto di atterraggio.
//! Qualsiasi numero diverso da 0 è troppo pericoloso per l'atterraggio. Più alto è il numero, più pericoloso è.
//! Il punto più sicuro è definito come la cella 0 le cui celle circostanti (fino a 4 vicine, ignorando le diagonali) presentano il pericolo totale più basso.
//! Ignora i vicini fuori dai limiti (angoli e bordi hanno semplicemente meno vicini).
//! Restituisci gli indici del punto di atterraggio più sicuro. Ci sarà sempre un solo punto più sicuro.
//! Ad esempio, dato:

// [
// [1, 0],
// [2, 0]
// ]

//! Restituisci [0, 1], gli indici per lo 0 nel primo array.

//? Tempo di esecuzione:
//*Non completato
//?Codice scritto senza utilizzo di ChatGpt

function findLandingSpot(matrix) {

  let point = []
  let index = 0;
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    let newSum = matrix[i]
    if(sum < newSum) sum = newSum
    for( let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0) {
        index = j
        point.push(index)
      }
    }
  }
  return sum;
}

console.log(findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]))

//?Codice scritto da ChatGpt

function findLandingSpot(matrix) {
  let safestSum = Infinity;
  let safestPoint = [];

  const dirs = [
    [-1, 0], [1, 0], // sopra, sotto
    [0, -1], [0, 1]  // sinistra, destra
  ];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      if (matrix[i][j] === 0) {
        let danger = 0;

        for (const [dx, dy] of dirs) {
          const x = i + dx;
          const y = j + dy;

          if (matrix[x]?.[y] !== undefined) {
            danger += matrix[x][y];
          }
        }

        if (danger < safestSum) {
          safestSum = danger;
          safestPoint = [i, j];
        }
      }
    }
  }

  return safestPoint;
}

console.log(findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]));

//* ✅ Pro

//* Rispetta tutte le regole del problema

//* Logica chiara e lineare

//* Gestisce bene bordi e angoli

//* Facile da leggere e debuggare

//* Funziona con qualsiasi matrice

//! ❌ Contro

//! Due cicli annidati → O(n·m)

//! Un array (dirs) solo per 4 direzioni

//! Non è la versione più compatta possibile

//todo Considerazioni: 

//* Le matrici è un argomento che devo approfondire meglio. Ho capito il concetto ma faccio ancora fatica a gestirle in 
//* modo fluido. Tuttavia, ci ho provato!

//! N.B.
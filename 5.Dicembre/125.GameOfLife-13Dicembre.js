//todo Consegna dell'esercizio
// Data una matrice (array di array) che rappresenta lo stato attuale nel Gioco della Vita di Conway, restituisci lo stato successivo della matrice usando queste regole:
//todo
//! Requisiti da rispettare
// Ogni cella è 1 (viva) o 0 (morta).
// I vicini di una cella sono fino a otto celle circostanti (verticalmente, orizzontalmente e diagonalmente).
// Le celle sui bordi hanno meno di otto vicini.
// Regole per l'aggiornamento di ogni cella:

// Qualsiasi cella viva con meno di due vicini vivi muore (sottopopolazione).
// Qualsiasi cella viva con due o tre vicini vivi sopravvive.
// Qualsiasi cella viva con più di tre vicini vivi muore (sovrapopolazione).
// Qualsiasi cella morta con esattamente tre vicini vivi diventa viva (riproduzione).
// Ad esempio, dato:

// [
// [0, 1, 0],
// [0, 1, 1],
// [1, 1, 0]
// ]
// ritorna:

// [
// [0, 1, 1],
// [0, 0, 1],
// [1, 1, 1]
// ]
// Ogni cella si aggiorna in base al numero di vicini attivi. Ad esempio, [0][0] rimane inattivo (2 vicini attivi), [0][1] rimane attivo (2 vicini attivi), [0][2] muore (3 vicini attivi) e così via.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function gameOfLife(grid) {

  let nuovaGriglia = grid.map(arr => [...arr]);

  for(let r = 0; r < grid.length; r++) {
    for(let c = 0; c < grid[r].length; c++) {
      let vicini = grid[r][c] === 0
      if(grid[r][c] === 1 && (vicini < 2 || vicini > 3)) nuovaGriglia[r][c] = 0
      else if(grid[r][c] === 0 && vicini === 3) nuovaGriglia[r][c] = 1
    }
  }

  return nuovaGriglia;

}
console.log(gameOfLife([[0, 1, 0], [0, 1, 1], [1, 1, 0]]))

//*

//* Codice scritto da ChatGpt

function gameOfLife(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const result = grid.map(row => [...row]);

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let liveNeighbors = 0;

      for (let [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 && nr < rows &&
          nc >= 0 && nc < cols &&
          grid[nr][nc] === 1
        ) {
          liveNeighbors++;
        }
      }

      if (grid[r][c] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        result[r][c] = 0;
      } else if (grid[r][c] === 0 && liveNeighbors === 3) {
        result[r][c] = 1;
      }
    }
  }

  return result;
}

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 1, 1],
    [1, 1, 0]
  ])
);

//*

//* Valutazione al codice proposta da ChatGpt
//! Voto 2/10
//*

//* Pro e contro del mio codice

//* Pro

// Usi una nuova griglia (ottimo)
// Cicli corretti su righe e colonne
// Struttura ordinata

//! Contro

// vicini = grid[r][c] === 0 ❌ (boolean, non un numero)
// Non conti nessun vicino
// Mancano le direzioni (8 celle intorno)
// Alcune regole non vengono mai applicate

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
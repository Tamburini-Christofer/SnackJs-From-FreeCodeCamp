//todo Consegna dell'esercizio
// La sfida di oggi è ispirata al videogioco Pong, uscito il 29 novembre 1972.
// Data una matrice (array di array) che include la posizione della pallina (2) e la posizione precedente della pallina (1), restituisci gli indici della matrice per la posizione successiva della pallina.

//todo
//! Requisiti da rispettare
// La pallina si muove sempre in linea retta.
// La direzione del movimento è determinata da come la pallina si è spostata da 1 a 2.
// I bordi della matrice sono considerati muri. Se la pallina colpisce:
// un muro superiore o inferiore, rimbalza invertendo la sua direzione verticale.
// un muro sinistro o destro, rimbalza invertendo la sua direzione orizzontale.
// un angolo, rimbalza invertendo entrambe le direzioni.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function getNextLocation(matrix) {

  let finderOne = matrix.flat().indexOf(1)
  let finderTwo = matrix.flat().indexOf(2)
  let movement;

  if(finderOne < finderTwo) movement = finderTwo - finderOne
  else  movement = finderOne - finderTwo

  let result = [];

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 2 && j < finderOne) result = [j + movement, i]
      if(matrix[i][j] === 2 && j > finderOne) result = [j - movement, i]
    }
  }
  return result;
}

console.log(getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]))

//*

//* Codice scritto da ChatGpt
function getNextLocation(matrix) {

  let rows = matrix.length
  let cols = matrix[0].length

  let row1, col1, row2, col2

  // Troviamo 1 e 2
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        row1 = i
        col1 = j
      }
      if (matrix[i][j] === 2) {
        row2 = i
        col2 = j
      }
    }
  }

  let dx = col2 - col1
  let dy = row2 - row1

  let nextRow = row2 + dy
  let nextCol = col2 + dx

  // Controllo muri
  if (nextRow < 0 || nextRow >= rows) {
    dy *= -1
    nextRow = row2 + dy
  }

  if (nextCol < 0 || nextCol >= cols) {
    dx *= -1
    nextCol = col2 + dx
  }

  return [nextRow, nextCol]
}

console.log(getNextLocation([[0,0,0,0],
                             [0,0,0,0],
                             [0,1,2,0],
                             [0,0,0,0]]))

//*

//* Valutazione al codice proposta da ChatGpt
//! Voto 3/10
//*

//* Pro e contro del mio codice

//* Pro

// Hai cercato di calcolare uno spostamento
// Hai usato loop correttamente
// Struttura base comprensibile

//! Contro

// Approccio concettualmente sbagliato (perdita coordinate)
// Non gestisce direzioni reali
// Nessuna logica di rimbalzo
// Non funziona nei casi generali
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
//todo Consegna dell'esercizio
// Dato un array con due numeri, il primo è il numero di righe e il secondo è il numero di colonne, restituisci una matrice (un array di array) riempita con i caratteri "X" e "O" della dimensione indicata.
//todo
//! Requisiti da rispettare
// I caratteri dovrebbero alternarsi come una scacchiera.
// La cella in alto a sinistra deve sempre essere "X".
// Ad esempio, dato [3, 3], restituisci:

// [
// ["X", "O", "X"],
// ["O", "X", "O"],
// ["X", "O", "X"]
// ]
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function createBoard(dimensions) {

  let result = [];
  let dimensionsArr = dimensions[1]
  let tot = dimensions[0] * dimensions[1]
  let isTrue = true
  
  for(let j = 0; j < tot; j++) {
    
    if(isTrue) result.push("X")
    else result.push("O")

    isTrue = !isTrue
  }

  let transform = result.reduce((acc, curr, i) => {
    if(i % dimensionsArr === 0) {
      acc.push([curr])
    }
    else {
      acc[acc.length-1].push(curr);
    }
    return acc
  }, [])

  for(let i = 0; i < transform.length; i++) {
    if(i % 2 === 0) transform[i].reverse()
  }
 
  return transform;
}

console.log(createBoard([3,3]))

//*

//* Codice scritto da ChatGpt

function createBoard([rows, cols]) {
  const board = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push((i + j) % 2 === 0 ? "X" : "O");
    }
    board.push(row);
  }

  return board;
}

console.log(createBoard([3, 3]));

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 7/10
//*

//* Pro e contro del mio codice

//* Pro

// Risultato corretto
// Usi bene reduce
// Ragionamento logico presente

//! Contro

// Overengineering
// Variabili inutili (tot, isTrue)
// Pattern ottenuto “a posteriori” invece che in modo diretto

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
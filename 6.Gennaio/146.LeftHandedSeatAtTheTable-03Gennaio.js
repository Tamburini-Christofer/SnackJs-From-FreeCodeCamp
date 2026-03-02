//todo Consegna dell'esercizio
// Data una matrice 4x2 (matrice di matrici) che rappresenta la disposizione dei posti a sedere per un pasto, determina quanti posti può occupare una persona mancina.
//todo

//! Requisiti da rispettare
// Una persona mancina non può sedersi dove si siederebbe una persona destrorsa, seduta immediatamente alla sua sinistra.
// Nella matrice data:
// Una "R" è un posto occupato da una persona destrorsa.
// Una "L" è un posto occupato da una persona mancina.
// Una "U" è un posto libero.
// Sono disponibili solo posti liberi.
// I posti nella fila superiore sono rivolti verso il basso, mentre quelli nella fila inferiore sono rivolti verso l'alto (come un tavolo), quindi sinistra e destra sono relative all'orientamento del posto.
// I posti d'angolo hanno solo un posto accanto. Ad esempio, nella matrice data:

// [
// ["U", "R", "U", "L"],
// ["U", "R", "R", "R"]
// ]
// Il posto in alto a sinistra non è utilizzabile perché c'è una persona destrorsa alla sua sinistra. Gli altri due posti liberi sono utilizzabili perché non c'è una persona destrorsa alla sua sinistra.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function findLeftHandedSeats(table) {

  let contatore = 0

  for(let i = 0; i < table.length; i++) {
    for(let j = 0; j < table[i].length; j++) {
      if(table[j] === "U" && table[1][4] !== "R") contatore++
      else if(table[j+1] !== "R" && table[j-1] !== "R" && table[j] === "U" ) contatore++ 
    }
  }

  return contatore;
}

console.log(findLeftHandedSeats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]))
//*

//* Codice scritto da ChatGpt
function findLeftHandedSeats(table) {
  let count = 0;

  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {

      if (table[i][j] !== "U") continue;

      // Riga sopra → sinistra = j - 1
      if (i === 0) {
        if (j === 0 || table[i][j - 1] !== "R") {
          count++;
        }
      }

      // Riga sotto → sinistra = j + 1
      if (i === 1) {
        if (j === table[i].length - 1 || table[i][j + 1] !== "R") {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(
  findLeftHandedSeats([
    ["U", "R", "U", "L"],
    ["U", "R", "R", "R"]
  ])
); // 👉 2
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 2/10
//todo

//* Pro e contro del mio codice

//* Pro

// Uso corretto di for
// Funzione con return
// Nome variabili comprensibile

//! Contro

// Accesso errato alla matrice
// Nessuna gestione dell’orientamento
// Condizioni sbagliate
// Indici fuori range

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
//todo Consegna dell'esercizio
// Data una stringa che rappresenta le curve di un tracciato di skeleton, determina il livello di difficoltà del tracciato.
//todo

//! Requisiti da rispettare
// La stringa data sarà composta solo dalle seguenti lettere:

// "L" per una curva a sinistra
// "R" per una curva a destra
// "S" per un rettilineo
// Ogni cambio di direzione aggiunge 15 punti (una "L" seguita da una "R" o viceversa).

// Tutte le altre curve aggiungono 5 punti ciascuna (tutte le altre "L" o "R").

// I rettilinei non aggiungono punti.

// La difficoltà del tracciato si basa sul punteggio totale. Restituisci:

// "Facile" se il totale è compreso tra 0 e 100
// "Media" se il totale è compreso tra 101 e 200
// "Difficile" se il totale è superiore a 200
//!

//* Tempo di esecuzione:
//* 8 Minuti e 48 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function getDifficulty(track) {

  let points = 0;

  for(let i = 0; i < track.length; i++) {
    if(track[i] === "L" && track[i+1] === "R" || track[i] === "R" && track[i+1] === "L") points += 15
    else if(track[i] === track[i+1] && track[i] !== "S" || track[i+1] !== "S") points += 5
  }

  if(points <= 100) return "Easy"
  else if(points <= 200) return "Medium" 
  else return "Hard"
}

console.log(getDifficulty("SLSLLSRRLSRLRL"))
//*

//* Codice scritto da ChatGpt
function getDifficulty(track) {

  let points = 0;

  for (let i = 0; i < track.length; i++) {

    if (
      (track[i] === "L" && track[i + 1] === "R") ||
      (track[i] === "R" && track[i + 1] === "L")
    ) {
      points += 15;
    } 
    else if (track[i] === "L" || track[i] === "R") {
      points += 5;
    }

  }

  if (points <= 100) return "Easy";
  if (points <= 200) return "Medium";
  return "Hard";
}

console.log(getDifficulty("SLSLLSRRLSRLRL"));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 7/10
//todo

//* Pro e contro del mio codice

//* Pro

// uso corretto del loop
// buona idea del controllo cambio direzione
// gestione difficoltà corretta

//! Contro 

// condizione logica sbagliata
// i+1 può uscire dal range
// controllo curve poco preciso

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
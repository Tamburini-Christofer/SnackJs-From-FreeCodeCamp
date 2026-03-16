//todo Consegna dell'esercizio
// Dati il ​​dislivello, la distanza orizzontale e la tipologia di una pista da sci, determina il livello di difficoltà della pista.
//todo

//! Requisiti da rispettare
// Per determinare il livello di difficoltà:

// Calcola la pendenza della pista dividendo il dislivello per la distanza.

// Quindi, calcola la pendenza corretta in base alla tipologia di pista:
// "Discendenza": moltiplica la pendenza per 1,2
// "Slalom": moltiplica la pendenza per 0,9
// "Slalom gigante": moltiplica la pendenza per 1,0
// Risultato:

// "Verde" se la pendenza corretta è inferiore o uguale a 0,1
// "Blu" se la pendenza corretta è maggiore di 0,1 e minore o uguale a 0,25
// "Nero" se la pendenza corretta è maggiore di 0,25
//!

//* Tempo di esecuzione:
//* 4 Minuti 
//*

//*Codice scritto senza utilizzo di ChatGpt
function getHillRating(drop, distance, type) {

  let calcDrop = drop / distance
  let result = 0

  switch(type) {
    case "Downhill": 
    result = calcDrop * 1.2
    break;

    case "Slalom": 
    result = calcDrop * 0.9
    break;

    case "Giant Slalom": 
    result = calcDrop * 1.0
    break;
  }

  if(result <= 0.1) return "Green"
  else if(result <= 0.25) return "Blue"
  else return "Black"
}

console.log(getHillRating(95, 900, "Slalom") )
//*

//* Codice scritto da ChatGpt
function getHillRating(drop, distance, type) {

  const steepness = drop / distance;

  let factor = 1;

  switch (type) {
    case "Downhill":
      factor = 1.2;
      break;
    case "Slalom":
      factor = 0.9;
      break;
    case "Giant Slalom":
      factor = 1.0;
      break;
  }

  const adjusted = steepness * factor;

  if (adjusted <= 0.1) return "Green";
  if (adjusted <= 0.25) return "Blue";
  return "Black";
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 9/10
//todo

//* Pro e contro del mio codice

//* Pro 

// codice molto chiaro
// switch usato bene
// variabili leggibili (calcDrop)
// logica delle soglie corretta
// segue esattamente la consegna

//! Contro 

// Piccole cose migliorabili:
// result può essere calcolato direttamente
// si può evitare una variabile in più
// si può rendere il codice leggermente più compatto

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
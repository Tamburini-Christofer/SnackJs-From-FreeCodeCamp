//todo Consegna dell'esercizio
// Dati due numeri interi, il par di una buca da golf e il numero di colpi effettuati da un giocatore in quella buca, restituisci il punteggio del giocatore utilizzando la terminologia del golf.
//todo

//! Requisiti da rispettare
// Restituisci:
// "Buca in uno!" se ha impiegato un colpo.
// "Eagle" se ha impiegato due colpi in meno del par.
// "Birdie" se ha impiegato un colpo in meno del par.
// "Par" se ha impiegato lo stesso numero di colpi del par.
// "Bogey" se ha impiegato un colpo in più del par.
// "Doppio bogey" se ha impiegato due colpi in più del par.
//!

//* Tempo di esecuzione:
//* 5 Minuti e 05 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function golfScore(par, strokes) {
  if(strokes === 1) return "Hole in one!"

  let result = par - strokes

  switch(result) {
    case -2:
    return "Double bogey"
    break;
    
    case -1:
    return "Bogey"
    break;

    case 0: 
    return "Par"
    break;

    case 1: 
    return "Birdie"
    break;

    case 2:
    return "Eagle"
    break;
  }
}

console.log(golfScore(4, 3))
//*

//* Codice scritto da ChatGpt
function golfScore(par, strokes) {
  if (strokes === 1) return "Hole in one!";

  let result = strokes - par;

  switch (result) {
    case -2:
      return "Eagle";
    case -1:
      return "Birdie";
    case 0:
      return "Par";
    case 1:
      return "Bogey";
    case 2:
      return "Double bogey";
    default:
      return "Score not defined";
  }
}

console.log(golfScore(4, 3));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 7/10
//todo

//* Pro e contro del mio codice

//* Pro

// Buona struttura
// Uso corretto di switch
// Hai gestito correttamente "Hole in one!"
// Codice pulito e leggibile

//! Contro

// Segni invertiti nei casi
// break inutili dopo return
// Nessun default (meglio aggiungerlo)

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
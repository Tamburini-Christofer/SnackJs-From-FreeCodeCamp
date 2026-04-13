//todo Consegna dell'esercizio
// Dati la posizione di partenza di uno snowboarder e una rotazione in gradi, determina la sua posizione di atterraggio.
//todo

//! Requisiti da rispettare
// La posizione di uno snowboarder può essere "Regular" o "Goofy".
// Le rotazioni per i trick sono multipli di 90 gradi. Un valore positivo indica una rotazione in senso orario, mentre un valore negativo indica una rotazione in senso antiorario.
// La posizione di atterraggio cambia ogni 180 gradi di rotazione.

// Ad esempio, dati "Regular" e 90 gradi, restituisci "Regular". Dati "Regular" e 180 gradi, restituisci "Goofy".
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function getLandingStance(startStance, rotation) {

  let result = startStance;
  let angle = 90

  for(let i = angle; i <= rotation; i++) {

  switch(result) {

    case "Regular":
    if(angle === rotation) result = "Regular"
    else angle += 90
    result = "Goofy"
    break;

    case "Goofy":
    if(angle === rotation) result = "Goofy"
    else angle += 90
    result = "Regular"
    break;
  }
}

  return result;

}

console.log(getLandingStance("Regular", 90))
//*

//* Codice scritto da ChatGpt
function getLandingStance(startStance, rotation) {

  let flips = Math.abs(rotation / 180) % 2;

  if(flips === 0) return startStance;

  return startStance === "Regular" ? "Goofy" : "Regular";
}

console.log(getLandingStance("Regular", 90));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 5/10
//todo

//* Pro e contro del mio codice

//* Pro

// Uso corretto di switch
// Hai capito che la stance si alterna
// Tentativo di gestire la rotazione gradualmente

//! Contro

// for inutile
// i mai usato
// logica dei 180° non applicata
// codice troppo complesso per un problema semplice
// non gestisce rotazioni negative

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
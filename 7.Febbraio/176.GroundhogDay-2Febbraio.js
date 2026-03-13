//todo Consegna dell'esercizio
// Oggi è il Giorno della Marmotta, in cui una marmotta predice il tempo in base al fatto che veda o meno la propria ombra.
//todo

//! Requisiti da rispettare
// Dato un valore che rappresenta l'apparizione della marmotta, restituisci la previsione corretta:

// Se il valore dato è booleano true (la marmotta ha visto la sua ombra), restituisci "Sembra che avremo altre sei settimane di inverno".

// Se il valore è booleano false (la marmotta non ha visto la sua ombra), restituisci "Sarà una primavera anticipata".

// Se il valore è qualsiasi altro (la marmotta non si è presentata), restituisci "Nessuna previsione per quest'anno".
//!

//* Tempo di esecuzione:
//* 3 minuti e 40 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function groundhogDayPrediction(appearance) {

  if(appearance === true) return "Looks like we'll have six more weeks of winter."
  else if(appearance === false) return "It's going to be an early spring."
  else return "No prediction this year."

}

console.log()
//*

//* Codice scritto da ChatGpt
function groundhogDayPrediction(appearance) {

  if (appearance === true) {
    return "Looks like we'll have six more weeks of winter."
  }

  if (appearance === false) {
    return "It's going to be an early spring."
  }

  return "No prediction this year."
}

console.log(groundhogDayPrediction(true))
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Controllo corretto di true
// ✔ Controllo corretto di false
// ✔ Gestione del caso restante
// ✔ Codice molto leggibile

//! Contro
// else if non necessario
// Se il primo if non è true, il secondo può essere semplicemente if.

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
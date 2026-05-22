//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato un array tridimensionale che rappresenta le finestre di disponibilità 
// di più persone, restituisci l'orario più vicino in cui tutti hanno un'ora libera. 
// Se tale orario non esiste, restituisci "None".
//todo

//* Tempo di esecuzione:
// 25 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function getMeetingTime(availability) {
  let currentSlots = availability[0];

  for (let p = 1; p < availability.length; p++) {
    let nextPerson = availability[p];
    let commonSlots = [];

    for (let i = 0; i < currentSlots.length; i++) {
      let start1 = currentSlots[i][0];
      let finish1 = currentSlots[i][1];

      for (let j = 0; j < nextPerson.length; j++) {
        let start2 = nextPerson[j][0];
        let finish2 = nextPerson[j][1];

        let maxStart = Math.max(start1, start2);
        let minFinish = Math.min(finish1, finish2);

        if (minFinish - maxStart >= 1) {
          commonSlots.push([maxStart, minFinish]);
        }
      }
    }

    currentSlots = commonSlots;

    if (currentSlots.length === 0) {
      return "None";
    }
  }

  return currentSlots[0][0];
}

console.log(
  getMeetingTime([
    [[10, 12], [15, 16]],
    [[11, 14], [15, 16]]
  ])
);
//*

//* Codice scritto da ChatGpt
function getMeetingTime(availability) {
  let common = availability[0];

  for (let i = 1; i < availability.length; i++) {
    let updated = [];

    for (let slot1 of common) {
      for (let slot2 of availability[i]) {

        let start = Math.max(slot1[0], slot2[0]);
        let end = Math.min(slot1[1], slot2[1]);

        if (end - start >= 1) {
          updated.push([start, end]);
        }
      }
    }

    common = updated;

    if (common.length === 0) {
      return "None";
    }
  }

  return common[0][0];
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// Codice corretto e funzionante
// Buona logica di intersezione degli orari
// Variabili chiare e leggibili
// Gestione corretta del caso "None"
// Struttura ordinata e facile da seguire
// Hai ragionato bene sul problema

//! Contro
// Molto verboso in alcuni punti
// Si potrebbe usare destructuring o for...of per renderlo più moderno
// Mancano controlli per input vuoti
// Alcuni nomi variabili sono lunghi/repetitivi

//*
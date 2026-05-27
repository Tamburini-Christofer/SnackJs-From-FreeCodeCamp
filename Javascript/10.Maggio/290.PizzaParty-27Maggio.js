//Prompt ChatGpt: questo è il modello. Invierò consena esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato un array con le ore lavorate oggi da ciascuna persona, calcola il numero di pizze da ordinare per una festa a base di pizza.
//
// Dividi le ore lavorate da ciascuna persona per 3 per ottenere il numero di fette.
// Non si può mangiare una fetta parziale, quindi arrotonda per eccesso il numero di fette di ogni persona al numero intero più vicino.
// Ogni persona ha diritto ad almeno due fette.
// Ogni pizza ha 8 fette. Arrotonda per eccesso il numero totale di pizze al numero intero più vicino.
//todo

//* Tempo di esecuzione:
// 15 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function getPizzasToOrder(hoursWorked) {
  let totalSlices = 0;

  for (let i = 0; i < hoursWorked.length; i++) {
    let slicesForPerson = Math.ceil(hoursWorked[i] / 3);

    slicesForPerson = Math.max(slicesForPerson, 2);
    totalSlices += slicesForPerson;
  }

  return Math.ceil(totalSlices / 8);
}

console.log(getPizzasToOrder([10, 9, 8, 2, 2, 6, 10]));

//*

//* Codice scritto da ChatGpt

function getPizzasToOrder(hoursWorked) {
  let totalSlices = 0;

  for (const hours of hoursWorked) {
    const slices = Math.max(Math.ceil(hours / 3), 2);
    totalSlices += slices;
  }

  return Math.ceil(totalSlices / 8);
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Hai seguito perfettamente tutti i requisiti della consegna
// - Uso corretto di Math.ceil e Math.max
// - Codice chiaro e leggibile
// - Buona gestione della logica minima delle 2 fette
// - Struttura ordinata e facile da capire

//! Contro
// - Nessun controllo su array vuoti o valori non validi
// - Si potrebbe rendere il codice leggermente più moderno usando for...of
// - Alcuni passaggi possono essere compattati per ridurre righe

//*
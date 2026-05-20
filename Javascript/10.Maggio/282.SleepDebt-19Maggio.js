//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Dato un array di ore di sonno dormite ogni notte fino ad oggi e un obiettivo di ore di sonno per notte, restituisci quante ore di sonno ti servono stanotte per recuperare il tuo debito di sonno.

Includi le ore di sonno di stanotte nel tempo totale necessario per recuperare.

Se hai dormito a sufficienza per raggiungere o superare l'obiettivo di stanotte, restituisci 0.
*/
//todo

//* Tempo di esecuzione:
// 10 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function sleepDebt(hoursSlept, targetHours) {

  let countHours = null + targetHours;

  for (let number of hoursSlept) {
    countHours += targetHours - number
  }

  return countHours > 0 ? countHours : 0;
}

console.log(sleepDebt([8, 9, 10, 9, 10, 7], 9))

//*

//* Codice scritto da ChatGpt

function sleepDebt(hoursSlept, targetHours) {

  let totalDebt = 0;

  for (let number of hoursSlept) {
    totalDebt += targetHours - number;
  }

  return totalDebt > 0 ? totalDebt : 0;
}

console.log(sleepDebt([8, 9, 10, 9, 10, 7], 9));

//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8/10
//todo

//* Pro e contro del mio codice

//* Pro
// Hai usato correttamente il ciclo for...of
// La logica del calcolo del debito è giusta
// Hai gestito bene il ritorno con operatore ternario
// Codice leggibile e semplice

//! Contro
// "null + targetHours" funziona, ma è poco chiaro: meglio inizializzare direttamente a 0
// Stai aggiungendo targetHours una volta in più rispetto al necessario
// Il risultato finale può essere errato in alcuni casi proprio per quell'aggiunta iniziale

//*
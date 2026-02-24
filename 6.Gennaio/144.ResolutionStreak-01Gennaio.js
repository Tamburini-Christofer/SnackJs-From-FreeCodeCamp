//todo Consegna dell'esercizio
// Dato un array di array, in cui ogni sottoarray rappresenta un giorno delle tue attività di risoluzione e contiene tre numeri interi: il numero di passi fatti quel giorno, i minuti di tempo trascorso davanti allo schermo quel giorno e il numero di pagine lette quel giorno, determina se stai mantenendo i tuoi propositi.
//todo

//! Requisiti da rispettare

// Il primo sottoarray rappresenta il giorno 1, il secondo il giorno 2 e così via.
// Una giornata è considerata un successo se vengono raggiunti tutti e tre i seguenti obiettivi:

// Hai percorso almeno 10.000 passi.
// Hai trascorso non più di 120 minuti davanti allo schermo.
// Hai letto almeno cinque pagine.
// Se tutti i giorni indicati sono stati raggiunti, restituisci "Risoluzione in linea: serie di N giorni". Dove N è il numero di giorni con successo.

// Se uno o più giorni non sono stati raggiunti, restituisci "Risoluzione non riuscita il giorno X: serie di N giorni". Dove X è il numero del giorno del primo giorno con successo e N è il numero di giorni con successo prima del primo giorno con successo.

//!

//* Tempo di esecuzione:
//* 10 Minuti e 27 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function resolutionStreak(days) {

  let goalPassi = 10000;
  let goalMinuti = 120;
  let goalPages = 5;

  let contatore = 0;
  let day = 0;

  for(let i = 0; i < days.length; i++) {
    day++
    if(days[i][0] >= goalPassi && days[i][1] <= goalMinuti && days[i][2] >= goalPages) contatore++
    else return `Resolution failed on day ${day}: ${contatore} day streak.`
  }

  return `Resolution on track: ${contatore} day streak.`;
}

console.log(resolutionStreak([[10000, 120, 5], [10950, 121, 11]]))
//*

//* Codice scritto da ChatGpt
function resolutionStreak(days) {

  const goalSteps = 10000;
  const goalMinutes = 120;
  const goalPages = 5;

  for (let i = 0; i < days.length; i++) {

    const [steps, minutes, pages] = days[i];

    if (steps >= goalSteps && minutes <= goalMinutes && pages >= goalPages) {
      continue;
    } else {
      return `Resolution failed on day ${i + 1}: ${i} day streak.`;
    }
  }

  return `Resolution on track: ${days.length} day streak.`;
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro

// Logica chiara
// Early return corretto
// Condizioni corrette (>=, <=, >=)
// Output conforme alla consegna

//! Contro

// day++ è inutile → puoi usare i + 1
// Variabili goalPassi, goalMinuti, goalPages potevano essere const
// Puoi rendere il codice più pulito destrutturando l’array

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
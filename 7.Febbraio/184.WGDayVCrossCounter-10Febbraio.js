//todo Consegna dell'esercizio
// Dato un array di tempi di arrivo per una gara di sci di fondo, convertili in tempi di distacco dal vincitore.
//todo

//! Requisiti da rispettare
// I tempi forniti sono stringhe nel formato "H:MM:SS".

// I tempi forniti saranno ordinati dal più veloce al più lento.

// Il tempo del vincitore (il più veloce) deve corrispondere a "0".
// Ogni altro tempo deve indicare il distacco dal vincitore, nel formato "+M:SS".

// Ad esempio, dati ["1:25:32", "1:26:10", "1:27:05"], restituisci ["0", "+0:38", "+1:33"].
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function getRelativeResults(results) {

  let resultSplit = results.map((v) => new Date(v).getSeconds())

  return resultSplit;
}

console.log(getRelativeResults(["1:25:32", "1:26:10", "1:27:05"]))
//*

//* Codice scritto da ChatGpt
function getRelativeResults(results) {

  const toSeconds = (time) => {
    const [h, m, s] = time.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  };

  const winner = toSeconds(results[0]);

  return results.map(time => {

    const diff = toSeconds(time) - winner;

    if(diff === 0) return "0";

    const minutes = Math.floor(diff / 60);
    const seconds = String(diff % 60).padStart(2,"0");

    return `+${minutes}:${seconds}`;
  });

}

console.log(getRelativeResults(["1:25:32", "1:26:10", "1:27:05"]));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 3/10
//todo

//* Pro e contro del mio codice

//* Pro

// uso corretto di map
// buona intuizione di convertire i tempi

//! Contro

// Date() non adatto
// logica della differenza mancante
// formato output non implementato

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
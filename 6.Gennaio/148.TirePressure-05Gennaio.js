//todo Consegna dell'esercizio
// Dato un array con quattro numeri che rappresentano la pressione in psi dei quattro pneumatici del tuo veicolo e un altro array di due numeri che rappresentano la pressione minima e massima in bar, restituisci un array di quattro stringhe che descrivono lo stato di ciascun pneumatico.
//todo

//! Requisiti da rispettare
// 1 bar equivale a 14,5038 psi.
// Restituisci un array con i seguenti valori per ciascun pneumatico:

// "Bassa" se la pressione è inferiore al minimo consentito.
// "Buona" se è compresa tra il minimo e il massimo consentito.
// "Alta" se è superiore al massimo consentito.
//!

//* Tempo di esecuzione:
//* 5 Minuti e 40 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function tireStatus(pressuresPSI, rangeBar) {

  let convertedBarMin = 14.5038 * rangeBar[0]
  let convertedBarMax = 14.5038 * rangeBar[1]
  let result = [];

  for(let i = 0; i < pressuresPSI.length; i++) {
    if(pressuresPSI[i] < convertedBarMin) result.push("Low")
    else if(pressuresPSI[i] > convertedBarMax) result.push("High")
    else result.push("Good")
  }

  return result;
}

console.log(tireStatus([32, 28, 35, 29], [2, 3]))
//*

//* Codice scritto da ChatGpt
function tireStatus(pressuresPSI, rangeBar) {
  const PSI_PER_BAR = 14.5038;
  const minPSI = rangeBar[0] * PSI_PER_BAR;
  const maxPSI = rangeBar[1] * PSI_PER_BAR;

  return pressuresPSI.map(pressure => {
    if (pressure < minPSI) return "Low";
    if (pressure > maxPSI) return "High";
    return "Good";
  });
}

console.log(tireStatus([32, 28, 35, 29], [2, 3]));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 
//todo

//* Pro e contro del mio codice

//* Pro

// Conversione corretta bar → psi
// Condizioni ordinate bene
// Codice chiaro e leggibile
// Gestione corretta dei limiti

//! Contro

// I nomi convertedBarMin/Max sono fuorvianti (sono in psi)
// Si può scrivere in modo più funzionale

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
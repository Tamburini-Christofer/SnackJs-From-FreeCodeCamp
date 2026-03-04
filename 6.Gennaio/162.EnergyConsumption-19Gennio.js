//todo Consegna dell'esercizio
// Considerando il numero di calorie bruciate durante un allenamento e il numero di wattora utilizzati dai tuoi dispositivi elettronici durante quell'allenamento, determina quale dei due ha consumato più energia.
//todo

//! Requisiti da rispettare
// Per confrontarli, converti entrambi i valori in joule utilizzando le seguenti conversioni:

// 1 caloria equivale a 4184 joule.
// 1 wattora equivale a 3600 joule.
// Restituisci:

// "Allenamento" se l'allenamento ha consumato più energia.
// "Dispositivi" se il dispositivo ha consumato più energia.
// "Uguale" se entrambi hanno consumato la stessa quantità di energia.
//!

//* Tempo di esecuzione:
//* 1 Minuto e 25 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function compareEnergy(caloriesBurned, wattHoursUsed) {

  let convertedCal = caloriesBurned * 4184;
  let convertedWatt = wattHoursUsed * 3600;

  if(convertedCal > convertedWatt) return "Workout"
  else if(convertedCal < convertedWatt) return "Devices"
  else return "Equal"
}

console.log(compareEnergy(250, 50))
//*

//* Codice scritto da ChatGpt
function compareEnergy(caloriesBurned, wattHoursUsed) {
  const workout = caloriesBurned * 4184;
  const devices = wattHoursUsed * 3600;

  return workout > devices
    ? "Workout"
    : workout < devices
    ? "Devices"
    : "Equal";
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 9/10
//todo

//* Pro e contro del mio codice

//* Pro:

// ✔ Conversioni corrette.
// ✔ Logica di confronto perfetta.
// ✔ Codice pulito e leggibile.
// ✔ Return chiari e immediati.

//! Contro:

// Potresti evitare variabili intermedie se vuoi renderlo più compatto.
// Manca un minimo di protezione input (ma nello snack va benissimo così).

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
//todo Consegna dell'esercizio
// Dato un numero intero che rappresenta la dimensione del tuo campo agricolo, "acri" o "ettari" che rappresentano l'unità di misura per la dimensione del tuo campo agricolo, e un tipo di coltura, determina quante piante di quel tipo puoi piantare nel tuo campo.
//todo

//! Requisiti da rispettare
// 1 acro equivale a 4046,86 metri quadrati.
// 1 ettaro equivale a 10.000 metri quadrati.
// Ecco un elenco delle colture che verranno fornite come input e quanto spazio occupa una singola pianta:
// Spazio per pianta:
// "mais" 1 metro quadrato
// "grano" 0,1 metri quadrati
// "soia" 0,5 metri quadrati
// "pomodori" 0,25 metri quadrati
// "lattuga" 0,2 metri quadrati
// Restituisci il numero di piante che possono essere piantate nel campo, arrotondato per difetto alla pianta intera più vicina.
//!

//* Tempo di esecuzione:
//* 9 Minuti e 58 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function getNumberOfPlants(fieldSize, unit, crop) {

  let unitConverted = 0
  let cropConverted = 0

  switch(unit) {
    case "acres":
    unitConverted = 4046.86 
    break;

    case "hectares":
    unitConverted = 10000
    break;
  }

  switch(crop) {
    case "corn":
    cropConverted = 1
    break;

    case "wheat":
    cropConverted = 0.1
    break;

    case "soybeans":
    cropConverted = 0.5
    break;

    case "tomatoes":
    cropConverted = 0.25
    break;

    case "lettuce":
    cropConverted = 0.2
    break;
  }

  return Math.floor(fieldSize * unitConverted / cropConverted)
}

console.log(getNumberOfPlants(3.75, "hectares", "tomatoes"))
//*

//* Codice scritto da ChatGpt
function getNumberOfPlants(fieldSize, unit, crop) {

  const unitMap = {
    acres: 4046.86,
    hectares: 10000
  };

  const cropMap = {
    corn: 1,
    wheat: 0.1,
    soybeans: 0.5,
    tomatoes: 0.25,
    lettuce: 0.2
  };

  if (!unitMap[unit] || !cropMap[crop]) {
    return "Invalid input";
  }

  const squareMeters = fieldSize * unitMap[unit];
  return Math.floor(squareMeters / cropMap[crop]);
}

console.log(getNumberOfPlants(3.75, "hectares", "tomatoes"));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro

// Struttura chiara
// Switch usati correttamente
// Calcolo preciso
// Codice leggibile
// Rispetta la consegna al 100%

//! Contro

// Se unit o crop non sono validi → ritorna NaN
// Due switch un po’ verbosi (si può rendere più elegante)
// Variabili inizializzate a 0 (rischioso se qualcosa non matcha)

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
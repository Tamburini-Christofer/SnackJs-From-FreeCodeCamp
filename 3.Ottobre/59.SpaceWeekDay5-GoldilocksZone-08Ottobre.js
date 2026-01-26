//todo  Per il quinto giorno della Settimana Spaziale, calcolerai la "zona Riccioli d'Oro" di una stella, ovvero la regione attorno a una stella in cui le condizioni sono "proprio ideali" per la presenza di acqua liquida.

//! Data la massa di una stella, restituisci un array con le distanze di inizio e fine della sua zona Riccioli d'Oro in Unità Astronomiche.
//! Per calcolare la zona Riccioli d'Oro:
//! Trova la luminosità della stella elevando la sua massa alla potenza di 3,5.
//! L'inizio della zona è 0,95 volte la radice quadrata della sua luminosità.
//! La fine della zona è 1,37 volte la radice quadrata della sua luminosità.
//! Restituisci le distanze arrotondate a due cifre decimali.
//! Ad esempio, dato 1 come massa, restituisci [0,95, 1,37].

//? Tempo di esecuzione:
//* 12 Minuti e 02 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function goldilocksZone(mass) {

  let luminosity = mass ** 3.5
  let startStar = (luminosity ** 0.5) * 0.95;
  let endStar = (luminosity ** 0.5) * 1.37;

  let calc = [Number(startStar.toFixed(2)), Number(endStar.toFixed(2))]
  return calc;

}

console.log(goldilocksZone(6))

//?Codice scritto da ChatGpt
//* Non usata


//* ✅ Pro

//* Formula matematica corretta

//* Variabili ben separate e leggibili

//*Arrotondamento pulito a 2 decimali

//* Ritorno chiaro come array [min, max]

//* Codice semplice e diretto

//! ❌ Contro

//! luminosity ** 0.5 ripetuto (può essere ottimizzato)

//! Nessun controllo su input non valido (es. numeri ≤ 0)

//! calc è una variabile evitabile

//? Versione Chat Gpt 

function goldilocksZone(mass) {
  const rootLuminosity = (mass ** 3.5) ** 0.5;

  return [
    Number((rootLuminosity * 0.95).toFixed(2)),
    Number((rootLuminosity * 1.37).toFixed(2))
  ];
}

console.log(goldilocksZone(6));


//todo Considerazioni: 

//! N.B.
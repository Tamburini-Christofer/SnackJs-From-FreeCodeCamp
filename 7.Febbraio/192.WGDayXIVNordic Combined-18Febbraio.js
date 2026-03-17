//todo Consegna dell'esercizio
// Dato un insieme di punteggi di salto per gli atleti, calcola i loro tempi di ritardo alla partenza per la prova di sci di fondo della Combinata Nordica.
//todo

//! Requisiti da rispettare
// L'atleta con il punteggio di salto più alto parte per primo (ritardo di 0 secondi). Tutti gli altri atleti partono più tardi in base alla differenza tra il loro punteggio di salto e il miglior salto.
// Per calcolare il ritardo per ciascun atleta, sottrai il punteggio di salto dell'atleta dal miglior punteggio di salto complessivo e moltiplica il risultato per 1,5. Arrotonda il ritardo per eccesso all'intero più vicino.
//!

//* Tempo di esecuzione:
//* 2 Minuti e 55 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function calculateStartDelays(jumpScores) {

  let migliore = Math.max(...jumpScores)
  let result = []

  for(let points of jumpScores) {
    result.push(Math.ceil((migliore - points) * 1.5))
  }

  return result;
}

console.log(calculateStartDelays([120, 110, 125]))
//*

//* Codice scritto da ChatGpt
function calculateStartDelays(jumpScores) {
  const bestScore = Math.max(...jumpScores);

  return jumpScores.map(score =>
    Math.ceil((bestScore - score) * 1.5)
  );
}

console.log(calculateStartDelays([120, 110, 125]));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 8.5 / 10
//todo

//* Pro e contro del mio codice

//* Pro

// Logica perfetta e centrata
// Uso corretto di Math.max e spread ✔️
// Math.ceil usato bene (richiesto dal testo)
// Codice semplice e leggibile
// Loop chiaro

//! Contro

// Puoi evitare il for → più moderno con .map()
// Variabile result non necessaria
// Nome variabile migliore ok, ma potresti usare inglese per coerenza (bestScore)

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
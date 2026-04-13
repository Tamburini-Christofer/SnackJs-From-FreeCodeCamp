//todo Consegna dell'esercizio
// Considerando la velocità a cui stai viaggiando in miglia orarie (MPH) e il limite di velocità in chilometri orari (KPH), determina se stai superando il limite di velocità e se riceverai un avvertimento o una multa.
//todo
//! Requisiti da rispettare
// 1 miglio equivale a 1,60934 chilometri.
// Se stai viaggiando a una velocità inferiore o uguale al limite di velocità, restituisci "Non supera il limite di velocità".
// Se stai viaggiando a 5 km/h o meno oltre il limite di velocità, restituisci "Avviso".
// Se stai viaggiando a più di 5 km/h oltre il limite di velocità, restituisci "Multa".
//!

//* Tempo di esecuzione:
//* 3 Minuti e 18 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function speedCheck(speedMph, speedLimitKph) {

  let convertedKm = speedMph * 1.60934

  if(convertedKm > speedLimitKph && convertedKm < speedLimitKph + 5) return "Warning"
  else if(convertedKm > speedLimitKph) return "Ticket"
  else return "Not Speeding"
  
}

console.log(speedCheck(65, 100))

//*

//* Codice scritto da ChatGpt

function speedCheck(speedMph, speedLimitKph) {
  const speedKph = speedMph * 1.60934;

  if (speedKph <= speedLimitKph) {
    return "Not Speeding";
  }

  if (speedKph <= speedLimitKph + 5) {
    return "Warning";
  }

  return "Ticket";
}

console.log(speedCheck(65, 100));

//*

//* Valutazione al codice proposta da ChatGpt
//* 7/10
//*

//* Pro e contro del mio codice

//* Pro

// Conversione corretta
// if / else if / else pulito
// Return diretto (bene)

//! Contro

// convertedKm < speedLimitKph + 5 ❌
// Esclude +5 esatto, che dovrebbe essere Warning
// Ordine delle condizioni migliorabile

//*
//! Altre considerazioni e nota bene
//todo Esecuzione degli esercizi
//? Creazione del file contenente "Numero snack"."Nome snack"-"Giorno del mese".js
//? Comprensione della consegna ed eventuale copia in google translate. 
//? 2 minuti massimo per analizzare la consegna e fare un pensiero prelimianre. 
//? Inizio timer impostato ad un massimale di 30 minuti. Oltre questa soglia, l'esercizio non sarà completato
//? Consultazione con ChatGpt per miglioramenti e sistemazioni
//? Push finale
//! Tre volte a settimana, riguardare lo snack e rivedere possibili soluzioni.
//! Una volta a settimana, riguardare l'andamento mensile e sistemare le lacune.
//! NON DEPRIMERSI 
//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
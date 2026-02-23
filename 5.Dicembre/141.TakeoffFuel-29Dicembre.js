//todo Consegna dell'esercizio
// Considerando il numero di galloni di carburante attualmente presenti nel tuo aereo e il numero di litri di carburante necessari per raggiungere la destinazione, determina quanti galloni di carburante aggiuntivi dovresti aggiungere.
//todo
//! Requisiti da rispettare
// 1 gallone equivale a 3,78541 litri.
// Se l'aereo ha già abbastanza carburante, restituisci 0.
// Puoi aggiungere solo galloni interi.
// Non includere decimali nel numero restituito.
//!

//* Tempo di esecuzione:
//* 10 Minuti e 40 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function fuelToAdd(currentGallons, requiredLiters) {

  let gallon = 3.78541;
  let gallonsConverted = currentGallons * gallon;
  let contatore = 0;

  while(gallonsConverted <= requiredLiters) {
    gallonsConverted = gallonsConverted + gallon
    contatore++
  }
  return contatore;
}

console.log(fuelToAdd(1000,50000))

//*

//* Codice scritto da ChatGpt

function fuelToAdd(currentGallons, requiredLiters) {
  const LITERS_PER_GALLON = 3.78541;
  const currentLiters = currentGallons * LITERS_PER_GALLON;

  if (currentLiters >= requiredLiters) return 0;

  const missingLiters = requiredLiters - currentLiters;
  return Math.ceil(missingLiters / LITERS_PER_GALLON);
}

console.log(fuelToAdd(1000, 50000));

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 6.5/10
//*

//* Pro e contro del mio codice

//* Pro

// Conversione corretta (3.78541 ✔️)
// Logica chiara
// Gestisci bene il caso “non basta”

//! ❌ Contro

// while inutile → poco efficiente
// Condizione <= → aggiunge 1 gallone in più
// Variabili poco chiare (contatore)
// Carattere ù finale → errore di sintassi ❌
// Approccio matematico mancante

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
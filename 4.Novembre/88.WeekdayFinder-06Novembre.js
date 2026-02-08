//todo Consegna dell'esercizio
// Data una data stringa nel formato AAAA-MM-GG, restituisce il giorno della settimana.
// I giorni di ritorno validi sono:

//todo

//! Requisiti da rispettare
// "Domenica"
// "Lunedì"
// "Martedì"
// "Mercoledì"
// "Giovedì"
// "Venerdì"
// "Sabato"
// Assicurati di ignorare i fusi orari.
//!

//* Tempo di esecuzione:

//* 4 Minuti e 43 Secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function getWeekday(dateString) {

  const days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
  
  let data = new Date(dateString)
  let dayName = days[data.getDay(data)]

  return dayName;
}

console.log (getWeekday("2112-12-21"))

//*

//* Codice scritto da ChatGpt

function getWeekday(dateString) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

  const date = new Date(dateString + "T00:00:00")
  return days[date.getDay()]
}

console.log(getWeekday("2112-12-21"))

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 7.5/10

//*

//* Pro e contro del mio codice

//* ✅ Pro

// Uso corretto di Date
// Array dei giorni corretto
// Soluzione semplice e leggibile

//! ❌ Contro

// getDay(data) è sbagliato → non prende argomenti
// Possibile problema di timezone con new Date(dateString)
// Nome variabile data poco chiaro

//*

//! Altre considerazioni e nota bene

// 💡 Perché così?
// "T00:00:00" evita problemi di timezone
// getDay() va chiamato senza parametri

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
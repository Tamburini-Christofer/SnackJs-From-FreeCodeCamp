//todo Consegna dell'esercizio
// Data una data nel formato "Giorno, mese, anno", restituisci la data nel formato "AAAA-MM-GG".
//todo
//! Requisiti da rispettare
// Il mese specificato sarà il nome completo del mese in inglese. Ad esempio: "Gennaio", "Febbraio", ecc.
// Nel valore restituito, aggiungi zeri iniziali al mese e al giorno, se necessario, per garantire due cifre.
// Ad esempio, dato "6 dicembre 2025", restituisci "2025-12-06".
//!

//* Tempo di esecuzione:
//* 13 Minuti e 29 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function formatDate(dateString) {

  let dataConverted = new Date(dateString)

  let year = dataConverted.getFullYear()
  let month = dataConverted.getMonth()+1
  let day = dataConverted.getDate()
  
  let dayPad = String(day).padStart(2, "0")
  let monthPad = String(month).padStart(2, "0") 

  let completeDate = `${year}-${monthPad}-${dayPad}`

  return completeDate;
}

console.log(formatDate("January 1, 2000"))
//*

//* Codice scritto da ChatGpt
function formatDate(dateString) {
  const months = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12"
  };

  let [monthName, rest] = dateString.split(" ");
  let [day, year] = rest.split(", ");

  let month = months[monthName];
  let dayPad = day.padStart(2, "0");

  return `${year}-${month}-${dayPad}`;
}

console.log(formatDate("January 1, 2000"));

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 8,5/10
//*

//* Pro e contro del mio codice

//* Pro

// Soluzione semplice e leggibile
// Padding fatto bene
// Ottimo uso dell’oggetto Date
// Codice ordinato

//! Contro

// new Date() può essere poco affidabile in alcuni ambienti (parsing automatico non sempre sicuro)
// Non controlli input non valido

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
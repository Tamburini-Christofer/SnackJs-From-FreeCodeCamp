//todo Consegna dell'esercizio
// Data una data nel formato "AAAA-MM-GG", restituisci il numero di giorni rimanenti fino al fine settimana.
//todo

//! Requisiti da rispettare
// Il fine settimana inizia di sabato.
// Se la data specificata è sabato o domenica, restituisci "È il fine settimana!".
// Altrimenti, restituisci "X giorni fino al fine settimana", dove X è il numero di giorni fino a sabato.
// Se X è 1, usa "giorno" (singolare) invece di "giorni" (plurale).
// Assicurati che il calcolo ignori il fuso orario locale.
//!

//* Tempo di esecuzione:

//* 8 Minuti e 37 Secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function daysUntilWeekend(dateString) {

  let data = new Date(dateString)
  let day = data.getDay()

  if(day === 5) return "1 day until the weekend."
  if(day >= 1 && day < 6) return `${6-day} days until the weekend.`
  if(day >= 6 || day === 0) return "It's the weekend!"
}

console.log(daysUntilWeekend("2026-11-29"))

//*

//* Codice scritto da ChatGpt

function daysUntilWeekend(dateString) {
  const [y, m, d] = dateString.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  const day = date.getUTCDay(); // 0 = Sun, 6 = Sat

  if (day === 6 || day === 0) return "It's the weekend!";

  const daysLeft = 6 - day;
  const label = daysLeft === 1 ? "day" : "days";

  return `${daysLeft} ${label} until the weekend.`;
}

console.log(daysUntilWeekend("2026-11-29"));

//*

//* Valutazione al codice proposta da ChatGpt

//? Voto 5/10

//*

//* Pro e contro del mio codice

//* Pro ✅

// Usi Date correttamente
// Buona distinzione weekday / weekend
// Output quasi corretto

//! Contro ❌

// Timezone bug: new Date("YYYY-MM-DD") usa UTC → getDay() usa locale
// Caso day === 5 è ridondante
// Non gestisci singolare/plurale
// day >= 6 || day === 0 è poco pulito
// Nessun return di fallback (best practice)

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
//todo Consegna dell'esercizio
// Dati una data di inizio e una data di fine, restituisci il numero di giorni lavorativi tra le due.
//todo

//! Requisiti da rispettare
// Le date fornite sono nel formato "AAAA-MM-GG".

// I giorni feriali sono giorni lavorativi (dal lunedì al venerdì).
// I giorni del fine settimana non sono giorni lavorativi (sabato e domenica).
// Includi sia la data di inizio che quella di fine nel calcolo.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function countBusinessDays(start, end) {

  let lavorativi = 0

  let dateStartDay = new Date (start).getDate();
  let dateEndDay = new Date(end).getDate();

  while(dateStartDay <= dateEndDay)  {
  let isWeekend = (dateStartDay === 0 || dateStartDay === 6)

  if(!isWeekend) lavorativi++
  
  dateStartDay + 1;
  }


  return lavorativi;
}

console.log(countBusinessDays("2026-02-24", "2026-02-26"))
//*

//* Codice scritto da ChatGpt
function countBusinessDays(start, end) {
  let count = 0;

  let current = new Date(start);
  let last = new Date(end);

  while (current <= last) {
    let day = current.getDay(); // 0 = domenica, 6 = sabato

    if (day !== 0 && day !== 6) {
      count++;
    }

    current.setDate(current.getDate() + 1); // vai al giorno dopo
  }

  return count;
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 3/10
//todo

//* Pro e contro del mio codice

//! Contro

// getDate() ❌ → prende giorno del mese, non giorno settimana
// dateStartDay === 0 || 6 ❌ → sempre falso
// loop infinito:
// dateStartDay + 1; // non cambia nulla ❌
// Non stai usando davvero le date

//* Pro

// Hai capito che serve un loop 👍
// Hai provato a gestire weekend 👍

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
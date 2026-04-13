//todo Consegna dell'esercizio
// Dato un array dei tuoi log di accesso, determina se hai raggiunto il tuo obiettivo di disintossicazione digitale.
//todo

//! Requisiti da rispettare
// Ogni log è una stringa nel formato "AAAA-MM-GG HH:mm:ss".

// Hai raggiunto il tuo obiettivo di disintossicazione digitale se entrambe le seguenti affermazioni sono vere:

// Non hai effettuato l'accesso più di una volta in un periodo di quattro ore.
// Non hai effettuato l'accesso più di due volte in un singolo giorno.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function digitalDetox(logs) {

  let resultHours = []
  let resultDays = []
  let isTrue = true

  for(let date of logs) {
    resultHours.push(new Date(date).getHours())
    resultDays.push(new Date(date).getDate())
  }

  for(let i = 0; i < resultHours.length; i++) {
    if(resultHours[i+1] - resultHours[i] <= 0 ) isTrue = false
  }

  for(let i = 0; i < resultDays.length; i++) {
    if(resultDays[i] === resultDays[i+1] && resultDays[i+1] === resultDays[i+2]) isTrue = false
  }
  return isTrue
}

console.log(digitalDetox(["2026-02-01 08:00:00", "2026-02-01 12:30:00"]))
//*

//* Codice scritto da ChatGpt
function digitalDetox(logs) {

  let dates = logs.map(log => new Date(log))

  for (let i = 0; i < dates.length - 1; i++) {

    let diffHours = (dates[i+1] - dates[i]) / (1000 * 60 * 60)

    if (diffHours < 4) return false
  }

  let count = {}

  for (let date of dates) {

    let day = date.toISOString().split("T")[0]

    count[day] = (count[day] || 0) + 1

    if (count[day] > 2) return false
  }

  return true
}

console.log(digitalDetox(["2026-02-01 08:00:00", "2026-02-01 12:30:00"]))
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 5/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Hai usato Date correttamente
// ✔ Hai separato ore e giorni
// ✔ Hai usato cicli per confrontare i login
// ✔ Struttura leggibile

//! Contro
// Controllo delle 4 ore sbagliato

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
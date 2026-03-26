//todo Consegna dell'esercizio
// Calcolare il costo totale dei biglietti in base a giorno, orario e quantità
//todo

//* Tempo di esecuzione:
// 20 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt (FIXATO)
function getMovieNightCost(day, showtime, numberOfTickets) {

  let hour = parseInt(showtime.split(":")[0])
  let extraHour = showtime.slice(-2)

  switch(day) {

    case "Monday":
    case "Wednesday":
    case "Thursday":
      if ((hour < 5 && extraHour === "pm") || extraHour === "am") {
        return `$${((10 * numberOfTickets) - (2 * numberOfTickets)).toFixed(2)}`
      } else {
        return `$${(10 * numberOfTickets).toFixed(2)}`
      }

    case "Tuesday":
      return `$${(5 * numberOfTickets).toFixed(2)}`

    case "Friday":
    case "Saturday":
    case "Sunday":
      if ((hour < 5 && extraHour === "pm") || extraHour === "am") {
        return `$${((12 * numberOfTickets) - (2 * numberOfTickets)).toFixed(2)}`
      } else {
        return `$${(12 * numberOfTickets).toFixed(2)}`
      }
  }
}
//*

//* Codice scritto da ChatGpt (versione pulita)
function getMovieNightCostClean(day, showtime, numberOfTickets) {

  let [time, period] = showtime.split(/(am|pm)/)
  let hour = parseInt(time.split(":")[0])

  if (period === "pm" && hour !== 12) hour += 12
  if (period === "am" && hour === 12) hour = 0

  let price

  if (day === "Tuesday") price = 5
  else if (["Friday", "Saturday", "Sunday"].includes(day)) price = 12
  else price = 10

  if (day !== "Tuesday" && hour < 17) price -= 2

  return `$${(price * numberOfTickets).toFixed(2)}`
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 7 / 10
//todo

//* Pro e contro del mio codice

//* Pro
// - Funziona correttamente ora
// - Hai ridotto duplicazioni usando più case insieme
// - Buona gestione output

//! Contro
// - Logica orario ancora un po' fragile
// - Condizione poco leggibile
// - Si può semplificare molto (vedi versione clean)
//*
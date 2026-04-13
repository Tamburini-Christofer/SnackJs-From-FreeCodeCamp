//todo Consegna dell'esercizio
// Dati due timestamp, il primo che indica quando un utente ha terminato un esame
// e il secondo che indica l'ora corrente, determinare se l'utente può sostenere
// nuovamente l'esame (devono passare almeno 48 ore).
//todo

//* Tempo di esecuzione:
// 12 minuti e 15 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function canRetake(finishTime, currentTime) {

  let fTimeHours = new Date(finishTime).getHours()
  let cTimeHours = new Date(currentTime).getHours()

  let fTimeMinutes = new Date(finishTime).getMinutes() / 60
  let cTimeMinutes = new Date(currentTime).getMinutes() / 60

  let fTimeDay = new Date(finishTime).getDate() * 24 + fTimeHours + fTimeMinutes
  let cTimeDay = new Date(currentTime).getDate() * 24 + cTimeHours + cTimeMinutes

  if(cTimeDay - fTimeDay >= 48) return true
  else return false
}

console.log(canRetake("2026-03-23T11:50:00", "2026-03-25T11:49:59") )
//*

//* Codice scritto da ChatGpt
function canRetake(finishTime, currentTime) {
  const finish = new Date(finishTime);
  const current = new Date(currentTime);

  const diffMs = current - finish;
  const diffHours = diffMs / (1000 * 60 * 60);

  return diffHours >= 48;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 6.5 / 10
//todo

//* Pro e contro del mio codice

//* Pro
// - Hai ragionato bene sulla conversione in ore
// - Codice leggibile
// - Buon uso di Date base

//! Contro
// - ERRORE LOGICO: usi getDate() (giorno del mese), non il tempo reale → rompe tra mesi diversi
// - Ignori secondi (potrebbe dare risultati sbagliati)
// - Molte chiamate ripetute a new Date() (inefficiente)
// - Soluzione troppo complicata per un problema semplice
// - Non gestisce bene differenze reali di timestamp

//*
//todo Consegna dell'esercizio
// Dato un dato stringa di data, restituisci la data tra 9 mesi.
// Le stringhe di input e di output hanno il formato "AAAA-MM-GG".
// Se il mese tra nove mesi non contiene il numero del giorno originale,
// restituisci l'ultimo giorno di quel mese.
//todo

//* Tempo di esecuzione:
// 12 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function getDueDate(dateStr) {

  let dataYe = new Date(dateStr).getFullYear()
  let dataMo = new Date(dateStr).getMonth() + 10
  let dataDay = new Date(dateStr).getDate()
  let dateComplete = [dataMo > 12 ? dataYe + 1 : dataYe, String((dataMo > 12 ? dataMo -= 12 : dataMo)).padStart(2, "0"), (dataMo === 2 && dataDay > 28 ? dataDay - 1 : dataDay)].join("-")

  return dateComplete;
}

console.log(getDueDate("2025-05-29"))
//*

//* Codice scritto da ChatGpt
function getDueDate(dateStr) {
  const date = new Date(dateStr);

  // aggiungo 9 mesi
  date.setMonth(date.getMonth() + 9);

  return date.toISOString().slice(0, 10);
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
6/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Buon uso di Date base
// - Hai gestito manualmente mese e anno
// - Uso corretto di padStart
// - Logica compatta

// //! Contro
// - +10 mesi invece di +9 (bug logico)
// - Gestione febbraio errata (non consideri anni bisestili)
// - Non gestisci mesi con 30 giorni (es: 31 → aprile)
// - Codice poco leggibile (troppa logica in una riga)
// - Crei più volte new Date inutilmente
// - Non scalabile per altri casi

//*
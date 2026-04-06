//todo Consegna dell'esercizio
// Dato un timestamp Unix in millisecondi, restituisci il giorno della settimana.
// I giorni validi da restituire sono:
// "Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"
// Assicurati di ignorare i fusi orari.
//todo

//* Tempo di esecuzione:
// 6 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function getDayOfWeek(timestamp) {

  let data = new Date(timestamp).getDay() + 1

  switch(data) {
    case 1: 
    return "Sunday"
    break;
    case 2: 
    return "Monday"
    break;
    case 3: 
    return "Tuesday"
    break;
    case 4: 
    return "Wednesday"
    break;
    case 5: 
    return "Thursday"
    break;
    case 6: 
    return "Friday"
    break;
    case 7: 
    return "Saturday"
    break;
  }
}

console.log(getDayOfWeek(1766246400000))
//*

//* Codice scritto da ChatGpt
function getDayOfWeek(timestamp) {
  const days = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato"
  ];

  return days[new Date(timestamp).getUTCDay()];
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 6.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta di base
// - Uso corretto di Date
// - Switch chiaro e leggibile

//! Contro
// - Giorni in inglese invece che in italiano
// - Errore logico: getDay() va da 0 a 6, aggiungere +1 rompe la corrispondenza
// - Non stai ignorando i fusi orari (serve getUTCDay())
// - Codice più lungo del necessario (array molto meglio)
// - Break inutili dopo return

//*
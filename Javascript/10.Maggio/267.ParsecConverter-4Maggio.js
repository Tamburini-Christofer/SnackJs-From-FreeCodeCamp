//todo Consegna dell'esercizio
// Se i parsec sono dispari → tempo (1 parsec = 2 ore)
// Se pari → distanza (2 parsec = 6 anni luce)
// Restituire il valore convertito come intero
//todo

//* Tempo di esecuzione:
// 2 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function convertParsecs(parsecs) {
  return parsecs % 2 === 0 ? parsecs * 3 : parsecs * 2
}
//*

//* Codice scritto da ChatGpt
function convertParsecs(parsecs) {
  if (parsecs % 2 === 0) {
    // distanza: 2 parsec = 6 anni luce → 1 = 3
    return parsecs * 3;
  } else {
    // tempo: 1 parsec = 2 ore
    return parsecs * 2;
  }
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Super veloce ⚡
// - Logica corretta
// - Ternario usato bene
// - Hai capito subito le conversioni

//! Contro
// - Poco leggibile senza commenti (non si capisce subito perché *3)
// - Meglio esplicitare i casi (più chiaro in colloquio)
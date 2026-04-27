//todo Consegna dell'esercizio
// Data una parola, restituisci il suo punteggio utilizzando:
// A = 1, B = 2, ... Z = 26 (case insensitive)
//todo

//* Tempo di esecuzione:
// 3 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function getWordScore(word) {

  let score = 0

  for(let i = 0; i < word.length; i++) {
    score += word[i].toLowerCase().charCodeAt() - 96
  }

  return score;
}

console.log(getWordScore("hi"))
//*

//* Codice scritto da ChatGpt
function getWordScore(word) {
  return word
    .toLowerCase()
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Chiaro e leggibile
// - Logica corretta
// - Uso corretto di charCodeAt
// - Buon controllo del ciclo

//! Contro
// - toLowerCase() dentro il loop (inefficiente)
// - Più lungo del necessario
// - Non sfrutta metodi moderni (reduce)

//*
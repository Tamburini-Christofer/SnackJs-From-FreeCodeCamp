//todo Consegna dell'esercizio
// Data una stringa, verificare che NON ci siano caratteri consecutivi uguali
//todo

//* Tempo di esecuzione:
// 4 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function hasNoRepeats(str) {

  let isTrue = true;

  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i+1]) return false
  }

  return isTrue
}

console.log(hasNoRepeats("hello world"))
//*

//* Codice scritto da ChatGpt
function hasNoRepeats(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return false
  }
  return true
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Super veloce (4 min 🔥)
// - Logica perfetta
// - Early return corretto (ottimo)
// - Codice semplice e leggibile
// - Complessità O(n)

//! Contro
// - Variabile `isTrue` inutile (puoi direttamente fare return true)
// - Iteri fino alla fine anche se l’ultimo confronto è inutile (i < length - 1 sarebbe più preciso)

//*
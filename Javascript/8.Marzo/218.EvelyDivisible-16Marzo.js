//todo Consegna dell'esercizio
// Dati due interi, determinare se il primo è divisibile per il secondo
//todo

//* Tempo di esecuzione:
// 40 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function isEvenlyDivisible(a, b) {
  return a % b === 0;
}
//*

//* Codice scritto da ChatGpt
function isEvenlyDivisible(a, b) {
  return b !== 0 && a % b === 0;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Super semplice e diretto ✔
// - Perfettamente corretto nella maggior parte dei casi ✔
// - Ottima velocità di scrittura ✔

//! Contro
// - Non gestisce divisione per 0 (edge case)
//*
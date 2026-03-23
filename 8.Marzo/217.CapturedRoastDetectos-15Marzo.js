//todo Consegna dell'esercizio
// Dato un array di pezzi degli scacchi ancora presenti,
// calcolare il valore totale dei pezzi catturati.
// Se il Re è stato catturato → "Checkmate"
//todo

//* Tempo di esecuzione:
// 14 minuti e 14 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function getCapturedValue(pieces) {

  let pawnCount = (8 - pieces.filter((p) => p === "P").length) * 1
  let rockCount = (2 - pieces.filter((p) => p === "R").length) * 5
  let knightCount = (2 - pieces.filter((p) => p === "N").length) * 3
  let bishopCount = (2 - pieces.filter((p) => p === "B").length) * 3
  let queenCount = (1 - pieces.filter((p) => p === "Q").length) * 9
  let kingCount = (1 - pieces.filter((p) => p === "K").length)

  let contatore = Math.abs(pawnCount + rockCount + knightCount + bishopCount + queenCount)

  if(kingCount === 1) return "Checkmate"
  else return contatore;
}
//*

//* Codice scritto da ChatGpt
function getCapturedValue(pieces) {
  const values = { P: 1, R: 5, N: 3, B: 3, Q: 9, K: 0 }
  const max = { P: 8, R: 2, N: 2, B: 2, Q: 1, K: 1 }

  for (let piece of pieces) {
    max[piece]--
  }

  if (max.K === 1) return "Checkmate"

  let total = 0
  for (let key in max) {
    total += max[key] * values[key]
  }

  return total
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta ✔
// - Facile da leggere ✔
// - Uso corretto di filter ✔
// - Gestione corretta del caso "Checkmate" ✔

//! Contro
// - Ripeti molte volte filter → poco efficiente
// - Codice poco scalabile (hardcoded)
// - Nome variabile "rockCount" → typo (rook)
// - Math.abs inutile (i valori non diventano negativi)
//*
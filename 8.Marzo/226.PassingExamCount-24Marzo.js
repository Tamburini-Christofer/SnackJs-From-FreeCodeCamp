//todo Consegna dell'esercizio
// Dato un array di punteggi e una soglia,
// restituire quanti studenti hanno superato l’esame
//todo

//* Tempo di esecuzione:
// 45 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function passingCount(scores, passingScore) {
  return scores.filter((s) => s >= passingScore).length;
}
//*

//* Codice scritto da ChatGpt
function passingCount(scores, passingScore) {
  let count = 0

  for (let score of scores) {
    if (score >= passingScore) count++
  }

  return count
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 10/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Super pulito e moderno
// - Uso perfetto di filter()
// - Una sola riga → molto elegante
// - Leggibilità altissima
// - Complessità O(n)
// - Tempo assurdo (45s ⚡)

//! Contro
// - Leggermente meno performante del for (ma trascurabile)
// - Usa memoria extra (array temporaneo)

//*
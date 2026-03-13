// //todo Consegna dell'esercizio
// Dato un array di numeri interi che rappresentano le monete che hai in tasca, dove ogni numero intero corrisponde al valore di una moneta in centesimi, restituisci l'importo totale nel formato "$D.CC".
//todo

//! Requisiti da rispettare
// 100 centesimi equivalgono a 1 dollaro.
// Nel valore restituito, includi uno zero iniziale per gli importi inferiori a un dollaro e sempre esattamente due cifre per i centesimi.
//!

//* Tempo di esecuzione:
//* 2 Minuti e 04 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function countChange(change) {
  return `\$${(change.reduce((acc, i) => acc + i) / 100).toFixed(2)}`
}

console.log(countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10]))
//*

//* Codice scritto da ChatGpt
function countChange(change) {
  const total = change.reduce((acc, coin) => acc + coin, 0)
  return `$${(total / 100).toFixed(2)}`
}

console.log(countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10]))
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 9/10
//todo

//* Pro e contro del mio codice

//*Pro

// ✔ Uso corretto di reduce()
// ✔ Conversione corretta / 100
// ✔ Uso corretto di toFixed(2)
// ✔ Template string corretto
// ✔ Codice compatto ed elegante

//! Contro
// reduce senza valore iniziale

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
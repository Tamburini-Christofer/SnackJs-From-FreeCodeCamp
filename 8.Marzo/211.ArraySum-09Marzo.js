//todo Consegna dell'esercizio
// Dato un array di numeri, restituisci la somma di tutti i numeri.
//todo

//* Tempo di esecuzione:
// 19 secondi
//*


//*Codice scritto senza utilizzo di ChatGpt
function sumArray(numbers) {
  return numbers.reduce((acc, i) => acc + i, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
//*

//* Codice scritto da ChatGpt
function sumArray(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4, 5]));
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Sintassi concisa con reduce
// - Funziona correttamente per qualsiasi array numerico
// - Facile da leggere

//! Contro
// - Non gestisce array vuoti o valori non numerici (ma reduce con initial value evita errori)
//*
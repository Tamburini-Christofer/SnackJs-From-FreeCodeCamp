//todo Consegna dell'esercizio
// Dato un numero intero n, restituisci l'n-esimo numero nella sequenza di Fibonacci.
//todo

//! Requisiti da rispettare
// La sequenza di Fibonacci è una serie di numeri in cui ogni numero è la somma dei due precedenti. I primi 10 numeri della sequenza sono 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
//!

//* Tempo di esecuzione:
//* 9 minuti e 30 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function nthFibonacci(n) {

  let fibonacciSequence = [0,1];

  for(let i = 0; i < n; i++) {
    let result = fibonacciSequence[i] + fibonacciSequence[i+1]
    fibonacciSequence.push(result)
  }

  return fibonacciSequence[n-1];
}

console.log(nthFibonacci(10))
//*

//* Codice scritto da ChatGpt
function nthFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 6.5/10
//todo

//* Pro e contro del mio codice

//* Pro

// Capisci la sequenza
// Usi correttamente array e loop
// Nessun errore sintattico

//! Contro

// Loop sbagliato (i < n è troppo)
// Spreco di memoria
// Non gestisci casi base (n = 0, n = 1)
// Soluzione più complessa del necessario

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
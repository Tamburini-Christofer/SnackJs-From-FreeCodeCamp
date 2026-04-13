//todo Consegna dell'esercizio
// Dato un array di numeri interi sequenziali, con i multipli di 3 e 5 sostituiti,
// determina se si tratta di una sequenza FizzBuzz valida.
//todo

//* Tempo di esecuzione:
// 20 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function isFizzBuzz(arr) {

  let isTrue = [];
  let start = arr[0] === "Fizz" && arr[1] === "Buzz" ? arr[2] - 2 :  
              arr[0] === "Fizz" ? arr[1] - 1 : 
              arr[0] === "Buzz" ? arr[1] - 2 : 
              arr[0] === "FizzBuzz" ? arr[1] - 1 : 
              arr[0];

  for(let i = start; i < arr.length + start; i++) {
    if(i % 3 === 0 && i % 5 === 0) isTrue.push("FizzBuzz")
    else if(i % 5 === 0) isTrue.push("Buzz")
    else if(i % 3 === 0) isTrue.push("Fizz")
    else isTrue.push(i)
  }

  return isTrue.join("") === arr.join("")
}
//*

//* Codice scritto da ChatGpt
function isFizzBuzz(arr) {
  // Trova il numero iniziale cercando il primo numero valido
  let start;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      start = arr[i] - i;
      break;
    }
  }

  // Se non trovi numeri, fallback
  if (start === undefined) return false;

  for (let i = 0; i < arr.length; i++) {
    let num = start + i;
    let expected;

    if (num % 3 === 0 && num % 5 === 0) expected = "FizzBuzz";
    else if (num % 3 === 0) expected = "Fizz";
    else if (num % 5 === 0) expected = "Buzz";
    else expected = num;

    if (arr[i] !== expected) return false;
  }

  return true;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 7/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica FizzBuzz corretta
// - Buon tentativo di calcolare lo start dinamicamente
// - Codice funzionante in alcuni casi semplici

//! Contro
// - Calcolo dello start fragile (troppi casi hardcoded)
// - Non gestisce bene tutti i possibili input
// - Uso di join() rischioso (può dare falsi positivi)
// - Poco leggibile (ternari annidati)
// - Non early return → meno efficiente

//*
// //todo Consegna dell'esercizio
// Data una stringa, restituisci una nuova stringa in cui ogni lettera è maiuscola se il suo indice è un numero di Fibonacci, e minuscola altrimenti.

// La successione di Fibonacci è una serie di numeri in cui ogni numero è la somma dei due precedenti. I primi 10 numeri della successione sono 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

// Il primo carattere si trova all'indice 0.
// Se l'indice di un carattere non alfabetico è un numero di Fibonacci, lascialo invariato.
//todo

//* Tempo di esecuzione:
// Non indicato
//*

//*Codice scritto senza utilizzo di ChatGpt
function capitalizeFibonacci(str) {

  let fibonacciSequence = [0,1];
  let result = ""

  for(let i = 1; i < str.length; i++) {    
    fibonacciSequence.push(fibonacciSequence[i-1] + fibonacciSequence[i])
  }

  for(let j = 0; j < str.length; j++) {
      if(j === fibonacciSequence[j]) result += str[j].toUpperCase()
      else if(j !== fibonacciSequence[j]) result += str[j]
  }

  return result;
}

console.log(capitalizeFibonacci("hello world"))
//*

//* Codice scritto da ChatGpt
function capitalizeFibonacci(str) {
  let fib = [0, 1];

  while (fib[fib.length - 1] < str.length) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  let fibSet = new Set(fib);
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (fibSet.has(i)) {
      if (/[a-z]/i.test(char)) result += char.toUpperCase();
      else result += char;
    } else {
      if (/[a-z]/i.test(char)) result += char.toLowerCase();
      else result += char;
    }
  }

  return result;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 6/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Buona idea generare la sequenza di Fibonacci
// - Codice semplice e leggibile
// - Struttura logica chiara

// //! Contro
// - Controllo errato: j === fibonacciSequence[j]
// - Generazione Fibonacci non corretta
// - Non gestisce minuscole fuori dai Fibonacci
// - Non gestisce caratteri non alfabetici
// - Duplicati nella sequenza non considerati
// //*
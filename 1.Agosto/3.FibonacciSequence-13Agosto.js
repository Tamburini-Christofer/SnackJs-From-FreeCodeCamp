//todo Dato un array contenente i primi due numeri di una sequenza di Fibonacci e un intero che rappresenta la lunghezza della sequenza, restituisci un array contenente la sequenza della lunghezza indicata.

//!La sequenza di Fibonacci è una serie di numeri in cui ogni numero è la somma dei due precedenti. 
//! Partendo da 0 e 1, i primi 10 numeri della sequenza sono 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
//! La funzione deve gestire sequenze di qualsiasi lunghezza maggiore o uguale a zero.
//! Se la lunghezza è zero, restituisci un array vuoto.
//! Si noti che i numeri iniziali fanno parte della sequenza.

//? Tempo di esecuzione:
//* 9 minuti e 48 secondi

//?Codice scritto senza utilizzo di ChatGpt

function fibonacciSequence(startSequence, length) {
  if(length === 0) return []
  if(length === 1) return [startSequence[0]]
  if(length === 2) return startSequence

  let result = [...startSequence]

  for(let i = 0; i < length - 2; i++) {
    let sum = result[i] + result[i+1]
    result.push(sum)
  }

  return result;
}

console.log(fibonacciSequence([0, 1], 20))

//?Codice scritto da ChatGpt

//* Nessun utilizzo

//* Logica chiara e corretta

//* Gestisci bene i casi limite (length 0, 1, 2)

//* Uso corretto di array e ciclo

//* Codice leggibile

//! Potresti validare che startSequence abbia almeno 2 numeri

//! Il ciclo funziona, ma puoi renderlo leggermente più esplicito partendo da i = 2

//todo Considerazioni: 

//* Fibonacci ormai mi esce dal deretano

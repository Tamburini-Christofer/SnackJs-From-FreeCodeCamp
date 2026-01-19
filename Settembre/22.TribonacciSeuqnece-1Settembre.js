//todo La sequenza di Tribonacci è una serie di numeri in cui ogni numero è la somma dei tre precedenti. 
//todo Partendo da 0, 0 e 1, i primi 10 numeri della sequenza sono 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

//! Dato un array contenente i primi tre numeri di una sequenza di Tribonacci e un intero che rappresenta la lunghezza della sequenza, restituisci un array contenente la sequenza della lunghezza indicata.
//! La funzione deve gestire sequenze di qualsiasi lunghezza maggiore o uguale a zero.
//! Se la lunghezza è zero, restituisci un array vuoto.
//! Si noti che i numeri iniziali fanno parte della sequenza.

//? Tempo di esecuzione:
//* 11 Minuti e 48 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function tribonacciSequence(startSequence, length) {
  if(length === 1) return [startSequence[0]]
  if(length === 2) return [startSequence[0], startSequence[1]]
  if(length === 3) return startSequence

  let tribonacciSequence = [...startSequence]
  let isEmpty = true

  for(let i = 2; i < length - 1; i++) {
    let sequence = tribonacciSequence[i - 2] + tribonacciSequence[i - 1] + tribonacciSequence[i]
    tribonacciSequence.push(sequence)
    isEmpty = false
  }

  if(isEmpty) return []
  else return tribonacciSequence
}

console.log(tribonacciSequence([0, 0, 1], 20))

//?Codice scritto da ChatGpt
//* Nessuna chat usata

//* Logica della tribonacci corretta

//* Gestisci bene i casi length 1–2–3

//* Uso corretto di push

//* Output giusto per l’esempio

//? Cosa migliorare ⚠️

//? Nome variabile uguale al nome funzione

//? let tribonacciSequence = [...]

//? → confonde (shadowing)

//? isEmpty inutile

//? Il for parte sempre se length > 3

//? Indice del ciclo poco chiaro

//? Funziona, ma è più leggibile partire da 3

//? Controlli iniziali ridondanti

//? Puoi semplificare molto

//? Versione Chat Gpt 

function tribonacciSequence(startSequence, length) {
  if (length <= 0) return [];
  if (length <= 3) return startSequence.slice(0, length);

  const result = [...startSequence];

  for (let i = 3; i < length; i++) {
    result.push(result[i - 1] + result[i - 2] + result[i - 3]);
  }

  return result;
}


//todo Considerazioni: 

//! N.B.
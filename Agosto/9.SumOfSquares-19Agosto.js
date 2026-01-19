//todo Dato un numero intero positivo fino a 1.000, restituisci la somma di tutti i numeri interi al quadrato da 1 fino al numero.

//? Tempo di esecuzione:
//* 3 Minuti e 49 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function sumOfSquares(n) {
  let result = 0;

  for(let i = 0; i <= n; i++) {
    let squares = result + i * i
    result = squares

  }

  return result;
}

console.log(sumOfSquares(5))

//?Codice scritto da ChatGpt
//* Nessun aiuto di chat richiesto

//* Ciclo giusto (0 → n)

//* Accumulatore usato correttamente

//* Codice chiaro

//! squares è inutile

//! Puoi semplificare l’assegnazione

//? Versione Chat Gpt 
function sumOfSquares(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i * i;
  }
  return result;
}

//todo Considerazioni: 

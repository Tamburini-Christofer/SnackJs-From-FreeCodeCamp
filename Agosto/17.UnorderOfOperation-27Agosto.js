//todo Dato un array di interi e un array di operatori stringa, applica le operazioni ai numeri in sequenza da sinistra a destra. Ripeti le operazioni secondo necessità fino a quando non hai utilizzato tutti i numeri. Restituisci il risultato finale.

//! Ad esempio, dati [1, 2, 3, 4, 5] e ['+', '*'], restituisci il risultato della valutazione di 1 + 2 * 3 + 4 * 5 da sinistra a destra, ignorando l'ordine standard delle operazioni.
//! Gli operatori validi sono +, -, *, / e %.

//? Tempo di esecuzione:
//* Non completato

//?Codice scritto senza utilizzo di ChatGpt
function evaluate(numbers, operators) {

  let resultString = []
  let result = resultString;

  for(let i = 0; i < numbers.length; i++) {
  for(let j = 0; j < operators.length ; j++) {
    resultString.push(numbers[i])
    resultString.push(operators[j])
  }}

  return result;
}

console.log(evaluate([5, 6, 7, 8, 9], ['+', '-']))

//?Codice scritto da ChatGpt
function evaluate(numbers, operators) {
  let result = numbers[0]; //! ok, l'approccio è totalmente diverso
  let opIndex = 0;

  for (let i = 1; i < numbers.length; i++) { //! Un solo ciclo e parte da 1
    const op = operators[opIndex]; 

    if (op === "+") result += numbers[i]; //! Quanti if!!!
    else if (op === "-") result -= numbers[i];
    else if (op === "*") result *= numbers[i];
    else if (op === "/") result /= numbers[i];
    else if (op === "%") result %= numbers[i];

    opIndex = (opIndex + 1) % operators.length;
  }

  return result;
}

console.log(evaluate([5, 6, 7, 8, 9], ['+', '-'])); // 7

//! Non esegui nessuna operazione matematica

//! Doppio for inutile

//! Costruisci un array/stringa invece di un risultato numerico

//! La logica richiesta non è rispettata

//* Hai capito che servono numeri + operatori

//* Buona base di cicli

//? Versione Chat Gpt 

function evaluate(numbers, operators) {
  return numbers.slice(1).reduce(
    (res, n, i) =>
      operators[i % operators.length] === "+" ? res + n :
      operators[i % operators.length] === "-" ? res - n :
      operators[i % operators.length] === "*" ? res * n :
      operators[i % operators.length] === "/" ? res / n :
      res % n,
    numbers[0]
  );
}

//todo Considerazioni: 

//* Questo esercizio ha utilizzato il mio unico neurone al 100%

//! N.B.
//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Data una stringa che rappresenta un'equazione matematica, determina se è corretta.
// Il lato sinistro può contenere fino a tre numeri interi positivi e gli operatori +, -, * e /.
// L'equazione sarà data nel formato: "numero operatore numero = numero".
// Segui l'ordine standard delle operazioni.
//todo

//* Tempo di esecuzione:
// 9 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function isValidEquation(equation) {
  return eval(equation.replace("=", "==="))
}
//*

//* Codice scritto da ChatGpt
function isValidEquation(equation) {
  const [left, right] = equation.split("=");

  let tokens = left.trim().split(" ");

  // prima gestiamo * e /
  let stack = [Number(tokens[0])];

  for (let i = 1; i < tokens.length; i += 2) {
    let op = tokens[i];
    let num = Number(tokens[i + 1]);

    if (op === "*") {
      stack[stack.length - 1] *= num;
    } else if (op === "/") {
      stack[stack.length - 1] /= num;
    } else {
      stack.push(op);
      stack.push(num);
    }
  }

  // poi + e -
  let result = stack[0];
  for (let i = 1; i < stack.length; i += 2) {
    let op = stack[i];
    let num = stack[i + 1];

    if (op === "+") result += num;
    else result -= num;
  }

  return result === Number(right.trim());
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: 6.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Soluzione molto veloce e semplice
// - Funziona correttamente nella maggior parte dei casi
// - Hai capito bene il problema e lo hai risolto in poco tempo

//! Contro
// - Uso di eval() (non sicuro)
// - Non controlla input strani o errori
// - Non dimostra logica sulle priorità delle operazioni
// - Poco scalabile per problemi più complessi

//*
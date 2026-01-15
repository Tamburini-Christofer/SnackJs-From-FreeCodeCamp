//todo Dato un numero intero da zero a 20, restituisci il fattoriale di quel numero. 
//todo  l fattoriale di un numero è il prodotto di tutti i numeri compresi tra 1 e il numero dato.

//! Il fattoriale di zero è 1.

//? Tempo di esecuzione:
//* 3 Minuti e 33 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function factorial(n) {
  if(n === 0) return 1

  let tot = 1;
  for(let i = 1; i <= n; i++) {
    let result = tot * i
    tot = result
  }
  return tot;
}

console.log(factorial(5))

//?Codice scritto da ChatGpt
//* Nessun arichiesta a ChatGpt

//* Gestione corretta del caso base n === 0

//* Ciclo chiaro e leggibile

//* Variabili usate in modo corretto

//! result è inutile: puoi moltiplicare direttamente tot

//! Manca il controllo su numeri negativi

//? Versione Chat Gpt 
function factorial(n) {
  if (n < 0) return "Numero non valido";
  let tot = 1;
  for (let i = 1; i <= n; i++) {
    tot *= i;
  }
  return tot;
}

//todo Considerazioni: 

//* Sono molto soddisfatto del tempo impiegato. 

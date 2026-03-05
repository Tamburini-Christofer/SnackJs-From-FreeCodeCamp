//todo Consegna dell'esercizio
// Dato un numero intero, restituisci una stringa in base alle seguenti regole:
//todo

//! Requisiti da rispettare
// Se il numero è divisibile per 3, restituisci "Fizz".
// Se il numero è divisibile per 5, restituisci "Buzz".
// Se il numero è divisibile sia per 3 che per 5, restituisci "FizzBuzz".
// Altrimenti, restituisci il numero specificato come stringa.
//!

//* Tempo di esecuzione:
//* 2 Minuti e 06 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function fizzBuzzMini(n) {
   if(n % 3 === 0 && n % 5 === 0) return "FizzBuzz"
   else if(n % 3 === 0) return "Fizz"
   else if(n % 5 === 0) return "Buzz"
   else return String(n)
}

console.log(fizzBuzzMini(4))
//*

//* Codice scritto da ChatGpt
function fizzBuzzMini(n) {

  if(n % 3 === 0 && n % 5 === 0) return "FizzBuzz"
  if(n % 3 === 0) return "Fizz"
  if(n % 5 === 0) return "Buzz"

  return String(n)

}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 10/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Logica perfetta
// ✔ Controllo corretto del caso 3 e 5 insieme prima
// ✔ Codice chiaro e leggibile
// ✔ Uso corretto di String(n)
// ✔ Nessun bug

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
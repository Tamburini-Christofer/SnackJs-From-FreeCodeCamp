//todo Consegna dell'esercizio
// Dato un numero intero positivo, restituisci "Dispari" se è un numero dispari e "Pari" se è pari.
//todo

//* Tempo di esecuzione:
//* 45 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function oddOrEven(n) {

  return n % 2 === 0 ? "Even" : "Odd"
}

console.log(oddOrEven(1))
//*

//* Codice scritto da ChatGpt

//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 10/10
//todo

//* Pro e contro del mio codice
function oddOrEven(n) {
  if (typeof n !== "number" || n < 0) {
    return "Invalid input";
  }

  return n % 2 === 0 ? "Even" : "Odd";
}
//* Pro

// Pulito
// Super leggibile
// Uso corretto del ternario
// Nessun codice inutile

//! Contro

// Nessuno per questa consegna
// (Solo opzionale: potresti validare l’input se non fosse garantito positivo)

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
//todo Consegna dell'esercizio
// Data una stringa, restituisci una nuova stringa composta dalla stringa data con una copia invertita di se stessa aggiunta alla fine.
//todo

//* Tempo di esecuzione:
//* 48 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function mirror(str) {
  let reverse = str.split("").reverse().join("")
  return str+reverse;
}

console.log(mirror("freeCodeCamp"))
//*

//* Codice scritto da ChatGpt
function mirror(str) {
  return str + str.split("").reverse().join("")
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 10/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Logica corretta
// ✔ Uso corretto di split("")
// ✔ Uso corretto di reverse()
// ✔ Uso corretto di join("")
// ✔ Codice pulito e leggibile
// ✔ Complessità ottima

//! Contro

// L’unica cosa migliorabile (minima):
// la variabile reverse è opzionale

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
//todo Consegna dell'esercizio
// Data una stringa che rappresenta il nome di una variabile, convertila in maiuscolo seguendo le seguenti regole:
//todo

//! Requisiti da rispettare
// Tutte le consonanti devono essere convertite in maiuscolo.
// Tutte le vocali (a, e, i, o, u in ogni caso) devono essere convertite in minuscolo.
// Tutti i trattini (-) devono essere convertiti in caratteri di sottolineatura (_).
//!

//* Tempo di esecuzione:
//* 6 Minuti e 19 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function toConsonantCase(str) {

  let vocals = ["a", "e", "i", "o", "u"]

  return str.toLowerCase().split("").map(((n) => vocals.includes(n) ? n.toLowerCase() : n.toUpperCase())).join("").replaceAll("-", "_")
}

console.log(toConsonantCase("_hElLO-WOrlD-"))
//*

//* Codice scritto da ChatGpt
function toConsonantCase(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  return str
    .split("")
    .map(char => {
      if (char === "-") return "_";
      if (vowels.includes(char.toLowerCase())) return char.toLowerCase();
      if (/[a-z]/i.test(char)) return char.toUpperCase();
      return char;
    })
    .join("");
}

console.log(toConsonantCase("_hElLO-WOrlD-"));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 8/10
//todo

//* Pro e contro del mio codice

//* Pro:

// ✔ Hai capito bene la trasformazione lettere → maiuscole/minuscole.
// ✔ Usi map() in modo corretto.
// ✔ Gestione dei trattini con replaceAll corretta.
// ✔ Codice leggibile.

//! Contro:

// Stai facendo toLowerCase() su tutta la stringa e poi ancora sui vocali (ridondante).
// Il nome vocals (meglio vowels).
// La sostituzione del - la fai dopo: potresti gestirla direttamente nel map() rendendo tutto più coerente.

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
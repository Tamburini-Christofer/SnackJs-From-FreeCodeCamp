//todo Consegna dell'esercizio
// Data una stringa, restituisce una nuova stringa in cui tutte le vocali vengono convertite in maiuscolo e tutti gli altri caratteri alfabetici vengono convertiti in minuscolo.
//todo

//! Requisiti da rispettare
// Le vocali sono "a", "e", "i", "o" e "u" in ogni caso.
// I caratteri non alfabetici devono rimanere invariati.
//!

//* Tempo di esecuzione:
//* 9 Minuti e 40 secondi
//*
//*Codice scritto senza utilizzo di ChatGpt
function vowelCase(str) {
  
  let vocals = ["a","e","i","o","u"]

  let vOwElcAsE = str.toLowerCase().split("").map((l) => vocals.includes(l) ?  l.toUpperCase() : l.toLowerCase()).join("")

  return vOwElcAsE;
}

console.log(vowelCase("HEAD~1"))
//*

//* Codice scritto da ChatGpt
function vowelCase(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  return str
    .toLowerCase()
    .split("")
    .map(char =>
      vowels.includes(char) ? char.toUpperCase() : char
    )
    .join("");
}

console.log(vowelCase("HEAD~1")); // hEAd~1
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 9/10
//todo

//* Pro e contro del mio codice

//* Pro

// Uso corretto di map
// Logica semplice e leggibile
// Nessun if annidato
// Rispetta perfettamente la consegna

//! Contro

// toLowerCase() viene chiamato due volte (micro-ottimizzazione)
// Nome variabile poco leggibile (ok per esercizio, meno in produzione)

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto


async function fetchFunction () {
  try{
  const data = await fetch(url)
  const dataRes = await data.json()
  }
  catch{

  }

}

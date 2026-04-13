//todo Consegna dell'esercizio
// Oggi inizia l'era dei Giochi Olimpici Invernali del 2026. Nei prossimi 17 giorni vi aspettano delle sfide di programmazione ispirate a questo evento.
//todo

//! Requisiti da rispettare
// Per la prima sfida, vi verrà fornito un codice paese di due lettere e dovrete restituire l'emoji della bandiera corrispondente.
//!

//* Tempo di esecuzione:
//* 7 Minuti e 15 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function getFlag(code) {
  let flags = code.split("").map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...flags)
}

console.log(getFlag("AL"))
//*

//* Codice scritto da ChatGpt
function getFlag(code) {
  let flags = code.split("").map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...flags)
}

console.log(getFlag("AL"))
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 9/10
//todo

//* Pro e contro del mio codice

//* Pro

// Codice molto leggibile
// Usa map() invece di loop inutili
// Ottimo uso di spread operator
// Logica corretta al 100%

//! Contro

// Piccoli miglioramenti possibili:
// Non gestisce minuscole ("it" non funziona correttamente).
// Non controlla se la stringa è lunga 2 caratteri.

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
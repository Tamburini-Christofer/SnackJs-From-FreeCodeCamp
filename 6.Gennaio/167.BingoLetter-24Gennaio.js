//todo Consegna dell'esercizio
// Dato un numero, restituisci la lettera del bingo associata (in maiuscolo). I numeri del bingo sono raggruppati come segue:
//todo

//! Requisiti da rispettare
// Lettera Numero Intervallo
// "B" 1-15
// "I" 16-30
// "N" 31-45
// "G" 46-60
// "O" 61-75
//!

//* Tempo di esecuzione:
//* 4 minuti e 19 Secondi (perchè ho provato con le Regex)
//*

//*Codice scritto senza utilizzo di ChatGpt
function getBingoLetter(n) {

 if(n < 15) return "B"
 else if(n < 30) return "I"
 else if(n < 45) return "N"
 else if(n < 60) return "G"
 else return "O"
}

console.log(getBingoLetter(75))
//*

//* Codice scritto da ChatGpt
function getBingoLetter(n) {

 if(n >= 1 && n <= 15) return "B"
 else if(n <= 30) return "I"
 else if(n <= 45) return "N"
 else if(n <= 60) return "G"
 else if(n <= 75) return "O"
 else return null

}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 5/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Logica semplice e leggibile
// ✔ Uso corretto degli if
// ✔ Funzione pulita

//! Contro / Errori
// ❌ Range sbagliati

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
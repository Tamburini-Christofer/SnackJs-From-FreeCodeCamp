//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato un numero del bingo, restituisci il numero successivo in sequenza.
// Se è l’ultimo ("O75"), ricomincia da "B1".
//todo

//* Tempo di esecuzione:
// 8 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function getNextBingoNumber(n) {
  let number = Number(n.slice(1, 3)) + 1

    if(number <= 15) return        `B${number}`
    else if(number <= 30) return   `I${number}`
    else if(number <= 45) return   `N${number}`
    else if (number <= 60) return  `G${number}`
    else if(number <= 75) return   `O${number}`
    else return `B${number - 75}`

}

console.log(getNextBingoNumber("O75"))
//*

//* Codice scritto da ChatGpt
function getNextBingoNumber(n) {
  let number = Number(n.slice(1)) + 1;

  if (number > 75) return "B1";

  if (number <= 15) return `B${number}`;
  if (number <= 30) return `I${number}`;
  if (number <= 45) return `N${number}`;
  if (number <= 60) return `G${number}`;
  return `O${number}`;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta
// - Gestione del caso limite (O75)
// - Codice leggibile

//! Contro
// - slice(1,3) poco flessibile
// - else if non necessari
// - Gestione del reset meno chiara rispetto a number > 75

//*
//todo Consegna dell'esercizio
// Given an array of playing cards, return a new array with the numeric value of each card.
// A = 1, 2-10 = valore numerico, J Q K = 10
//todo

//* Tempo di esecuzione:
// 11 minuti e 35
//*

//*Codice scritto senza utilizzo di ChatGpt
function cardValues(cards) {

  let cardsConverted = cards.join("").replace(/[SCDH]/g, " ").split(" ")

  let result = []; 

  for(let i = 0; i < cards.length; i++) {
    if(cardsConverted[i] === "A") result.push(Number(1))
    else if(cardsConverted[i] > 1 && cardsConverted[i] <= 10) result.push(Number(cardsConverted[i]))
    else if(cardsConverted[i] === "J" || cardsConverted[i] === "Q" || cardsConverted[i] === "K") result.push(Number(10))
  }

  return result;
}
//*

//* Codice scritto da ChatGpt
function cardValues(cards) {
  return cards.map(card => {
    let value = card.slice(0, -1);

    if (value === "A") return 1;
    if (["J", "Q", "K"].includes(value)) return 10;
    return Number(value);
  });
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 6.5 / 10
//todo

//* Pro e contro del mio codice

//* Pro
// - Hai capito la logica dei valori (A, numeri, figure)
// - Uso corretto di loop e condizioni
// - Soluzione funzionante in molti casi
// - Buona gestione base delle stringhe

//! Contro
// - join + replace + split è fragile (può rompere facilmente)
// - Perdi il legame tra carta e valore originale
// - Condizione numerica poco sicura (stringhe vs numeri)
// - Codice più complesso del necessario
// - Non scalabile / poco leggibile

//*
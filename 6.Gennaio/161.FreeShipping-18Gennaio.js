//todo Consegna dell'esercizio
// Dato un array di stringhe che rappresentano gli articoli nel tuo carrello e un numero che indica l'importo minimo d'ordine per avere diritto alla spedizione gratuita, determina se gli articoli nel tuo carrello hanno diritto alla spedizione gratuita.
//todo

//! Requisiti da rispettare
// L'array specificato conterrà gli articoli dall'elenco seguente:

// Prezzo dell'articolo
// "camicia" 34,25
// "jeans" 48,50
// "scarpe" 75,00
// "cappello" 19,95
// "calzini" 15,00
// "giacca" 109,95

//!

//* Tempo di esecuzione:
//* 9 minuti e 11 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function getsFreeShipping(cart, minimum) {

  let cardTot = 0;

  for(let articolo of cart) {
    switch(articolo) {
      case "shirt":
      cardTot += 34.25
      break;

      case "jeans":
      cardTot += 48.50
      break;

      case "shoes":
      cardTot += 75.00
      break;

      case "hat":
      cardTot += 19.95
      break;

      case "socks":
      cardTot += 15.00
      break;

      case "jacket":
      cardTot += 109.95
      break;
    }
  }

  if(cardTot < minimum) return true
  else return false
}

console.log(getsFreeShipping(["hat", "socks"], 50))
//*

//* Codice scritto da ChatGpt
function getsFreeShipping(cart, minimum) {

  const prices = {
    shirt: 34.25,
    jeans: 48.50,
    shoes: 75.00,
    hat: 19.95,
    socks: 15.00,
    jacket: 109.95
  };

  let total = 0;

  for (let item of cart) {
    total += prices[item] || 0;
  }

  return total >= minimum;
}

console.log(getsFreeShipping(["hat", "socks"], 50)); // false
console.log(getsFreeShipping(["shoes"], 50)); // true
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 5/10
//todo

//* Pro e contro del mio codice

//* Pro:

// Logica del totale corretta.
// Uso corretto dello switch.
// Codice leggibile.

//! Contro:

// ❌ Logica finale sbagliata: stai restituendo true quando il totale è minore del minimo.
// ❌ switch poco scalabile (se aggiungi prodotti diventa lungo).
// ❌ Nessuna gestione di item non validi.
// ❌ Nome variabile cardTot (probabilmente volevi cartTot).

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
//todo Consegna dell'esercizio
// Un mazzo di carte da gioco standard contiene 13 carte uniche per ogni seme. Dato un numero intero che rappresenta il numero di carte da pescare dal mazzo, restituisci il numero di combinazioni uniche di carte che puoi pescare.
//todo

//! Requisiti da rispettare
// L'ordine non ha importanza. Pescare la carta A e poi la carta B è come pescare la carta B e poi la carta A.
// Ad esempio, dato 52, restituisci 1. C'è una sola combinazione di 52 carte da pescare da un mazzo di 52 carte. E dato 2, restituisci 1326. Ci sono 1326 combinazioni di carte che puoi ottenere pescando 2 carte dal mazzo.
//!

//* Tempo di esecuzione:

//* Non completato

//*

//*Codice scritto senza utilizzo di ChatGpt

function combinations(cards) {
  if(cards === 52) return 1
  if(cards === 1) return 52

  let cardsDeck = 13 * 4;
  let results = cardsDeck ** cards / cards + (cardsDeck / 2 - cardsDeck) 

  return results;
}

console.log(combinations(5))

//*

//* Codice scritto da ChatGpt

function combinations(cards) {
  if (cards > 52) return 0
  if (cards === 0 || cards === 52) return 1

  let result = 1

  for (let i = 1; i <= cards; i++) {
    result = result * (52 - (cards - i)) / i
  }

  return Math.round(result)
}

console.log(combinations(2)) // 1326
console.log(combinations(5))


//*

//* Valutazione al codice proposta da ChatGpt

//! Voto 3/10

//*

//* Pro e contro del mio codice

//* ✅ Pro

// Hai gestito alcuni casi limite (52, 1)
// Hai capito che l’ordine non conta

//! ❌ Contro

// Formula matematica sbagliata
// Uso errato degli operatori (**, divisioni a caso)
// Non stai davvero calcolando combinazioni
// Risultati completamente sballati per quasi tutti i valori

//*

//! Altre considerazioni e nota bene

//todo Esecuzione degli esercizi

//? Creazione del file contenente "Numero snack"."Nome snack"-"Giorno del mese".js
//? Comprensione della consegna ed eventuale copia in google translate. 
//? 2 minuti massimo per analizzare la consegna e fare un pensiero prelimianre. 
//? Inizio timer impostato ad un massimale di 30 minuti. Oltre questa soglia, l'esercizio non sarà completato
//? Consultazione con ChatGpt per miglioramenti e sistemazioni
//? Push finale

//! Tre volte a settimana, riguardare lo snack e rivedere possibili soluzioni.
//! Una volta a settimana, riguardare l'andamento mensile e sistemare le lacune.

//! NON DEPRIMERSI 

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
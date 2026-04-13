//todo Consegna dell'esercizio
// Considerando una certa quantità di denaro e una serie di articoli che desideri acquistare, determina quanti di essi puoi permetterti.
//todo
//! Requisiti da rispettare
// L'importo specificato sarà nel formato ["Importo", "Codice Valuta"]. Ad esempio: ["150,00", "USD"] o ["6000", "JPY"].
// Ogni articolo della serie che desideri acquistare sarà nello stesso formato.
// Utilizza i seguenti tassi di cambio per convertire i valori:

// Valuta 1 Unità Equivale a
// USD 1,00 USD
// EUR 1,10 USD
// GBP 1,25 USD
// JPY 0,0070 USD
// CAD 0,75 USD
// Se puoi permetterti tutti gli articoli nell'elenco, restituisci "Comprali tutti!".
// Altrimenti, restituisci "Compra i primi X articoli", dove X è il numero di articoli che puoi permetterti se acquistati nell'ordine indicato.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function buyItems(funds, items) {

  let budget = Number(funds[0])
  let valueConverted = 0;
        switch(funds[1]) {
        case "USD": budget *= 1.00 
        break;
        case "EUR":budget *= 1.10
        break;
        case "GBP": budget *= 1.25
        break;
        case "JPY": budget *= 0.0070
        break;
        case "CAD": budget *= 0.75
        break;
        }

  let contatore = 0;

  for(let i = 0; i < items.length; i++) {
      switch(items[i][1]) {
        case "USD": valueConverted += Number(items[i][0]) * 1.10
        break;
        case "EUR": valueConverted += Number(items[i][0]) * 1.10
        break;
        case "GBP": valueConverted += Number(items[i][0]) * 1.10
        break;
        case "JPY": valueConverted += Number(items[i][0]) * 1.10
        break;
        case "CAD": valueConverted += Number(items[i][0]) * 1.10
        break;  
      }
      contatore++  
      if(valueConverted >= budget) return `Buy the first ${contatore} items.` 
  }
    return "Buy them all!"
}

console.log(buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]))

//*

//* Codice scritto da ChatGpt

function buyItems(funds, items) {
  const rates = {
    USD: 1.00,
    EUR: 1.10,
    GBP: 1.25,
    JPY: 0.0070,
    CAD: 0.75
  };

  let budget = Number(funds[0]) * rates[funds[1]];
  let spent = 0;
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    const priceUSD = Number(items[i][0]) * rates[items[i][1]];

    if (spent + priceUSD > budget) {
      return `Buy the first ${count} items.`;
    }

    spent += priceUSD;
    count++;
  }

  return "Buy them all!";
}

console.log(
  buyItems(
    ["150.00", "USD"],
    [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]
  )
);

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 6/10 
//*

//* Pro e contro del mio codice

//* Pro

// Buona logica generale
// Uso corretto di for
// Conversione dei fondi fatta bene
// Ritorni anticipati corretti

//! Contro

// Conversioni errate
// Poco riutilizzabile
// Condizione di confronto sbagliata
// Leggibilità migliorabile

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


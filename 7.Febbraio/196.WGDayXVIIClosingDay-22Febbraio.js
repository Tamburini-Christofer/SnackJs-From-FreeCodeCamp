//todo Consegna dell'esercizio
// Dato un array bidimensionale di vincitori di medaglie, restituire il numero di medaglie vinte da ciascun paese in formato CSV.
//todo

//! Requisiti da rispettare
// Nell'array fornito, ogni sotto-array rappresenta un singolo evento: [vincitore_oro, vincitore_argento, vincitore_bronzo]

// La stringa CSV restituita deve avere il seguente formato, con la prima riga contenente le intestazioni:

// Paese,Oro,Argento,Bronzo,Totale
// nome_paese,conteggio_oro,conteggio_argento,conteggio_bronzo,totale_medaglie
// Separare le righe con il carattere di nuova riga ("\n").
// Non inserire spazi intorno alle virgole o alla fine delle righe.
// Ordinare la stringa CSV restituita in base al numero di medaglie d'oro, dal più alto al più basso. Se due paesi hanno lo stesso numero di medaglie d'oro, ordinarli alfabeticamente.

// Separare le righe con il carattere di nuova riga ("\n"). Ad esempio, dato:

// [
// [ ["USA", "CAN", "NOR"],
// [ ["NOR", "USA", "CAN"],
// [ ["USA", "NOR", "SWE"]
// ]
// Restituisci:

// "Paese,Oro,Argento,Bronzo,Totale\nUSA,2,1,0,3\nNOR,1,1,1,3\nCAN,0,1,1,2\nSWE,0,0,1,1"
// Che una volta stampato appare così:

// Paese,Oro,Argento,Bronzo,Totale
// USA,2,1,0,3
// NOR,1,1,1,3
// CAN,0,1,1,2
// SWE,0,0,1,1
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function countMedals(winners) {

  let objectInfo = []

  for(let i = 0; i < winners.length; i++) {
   for(let j= 0; j < winners[i].length; j++) {
   if(winners[i][0]) objectInfo.push(winners[i][j], 2)
   if(winners[i][1]) objectInfo.push(winners[i][j], 1)
   if(winners[i][2]) objectInfo.push(winners[i][j], 0)
  }
  }

  let infoSet = new Set(objectInfo)
 
  return infoSet;
}

console.log(countMedals([["USA", "CAN", "NOR"], ["NOR", "USA", "CAN"], ["USA", "NOR", "SWE"]]))
//*

//* Codice scritto da ChatGpt
function countMedals(winners) {
  let medals = {};

  for (let event of winners) {
    let [gold, silver, bronze] = event;

    if (!medals[gold]) medals[gold] = { gold: 0, silver: 0, bronze: 0 };
    if (!medals[silver]) medals[silver] = { gold: 0, silver: 0, bronze: 0 };
    if (!medals[bronze]) medals[bronze] = { gold: 0, silver: 0, bronze: 0 };

    medals[gold].gold++;
    medals[silver].silver++;
    medals[bronze].bronze++;
  }

  let result = Object.entries(medals).map(([country, m]) => {
    let total = m.gold + m.silver + m.bronze;
    return { country, ...m, total };
  });

  // ordinamento
  result.sort((a, b) => {
    if (b.gold !== a.gold) return b.gold - a.gold;
    return a.country.localeCompare(b.country);
  });

  // CSV
  let csv = "Country,Gold,Silver,Bronze,Total";

  for (let r of result) {
    csv += `\n${r.country},${r.gold},${r.silver},${r.bronze},${r.total}`;
  }

  return csv;
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 2/10
//todo

//* Pro e contro del mio codice

//! Contro


// objectInfo è un array → ti serve un oggetto mappa, non lista
// push(winners[i][j], 2) → struttura senza senso ❌
// I 3 if sono sempre veri → logica sbagliata
// Set inutile qui
// Non stai:
// contando
// ordinando
// creando CSV

//* Pro

// Hai usato i loop giusti 👍
// Hai capito che devi iterare eventi e posizioni

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
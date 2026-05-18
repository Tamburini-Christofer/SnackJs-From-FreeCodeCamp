//todo Consegna dell'esercizio
/*
Data una lettera del bingo, restituisci l'intervallo di numeri associato.

"B" 1-15
"I" 16-30
"N" 31-45
"G" 46-60
"O" 61-75

Restituisci un array con tutti i numeri dell’intervallo.
*/
//todo

//* Tempo di esecuzione:
/*
5 minuti
*/
//*

//* Codice scritto senza utilizzo di ChatGPT

function getBingoRange(letter) {

  let letterConv = 0;

  switch(letter) {
    case "B":
      letterConv = 15;
      break;
    case "I":
      letterConv = 30;
      break;
    case "N":
      letterConv = 45;
      break;
    case "G":
      letterConv = 60;
      break;
    case "O":
      letterConv = 75;
      break;
  }

  let result = [];

  for(let i = letterConv - 14; i < letterConv + 1; i++) {
    result.push(i);
  }

  return result;
}

//*

//* Codice scritto da ChatGPT

function getBingoRangeGPT(letter) {

  const ranges = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75]
  };

  const [start, end] = ranges[letter];

  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

//*

//todo Valutazione al MIO codice proposta da ChatGPT

//* Voto
/*
8/10
*/
//todo

//* Pro e contro del mio codice

//* Pro
/*
- Logica corretta e funzionante
- Soluzione compatta
- Uso efficace del loop per generare range
- Struttura chiara con switch
*/

//! Contro
/*
- Switch più lungo del necessario
- Dipendenza da un valore “offset” (letterConv - 14)
- Mancanza di validazione input
- Meno scalabile rispetto a una mappa range
*/
//*
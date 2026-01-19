//todo Dato un numero intero che rappresenta il numero di candele con cui inizi e un numero intero che rappresenta il numero di candele bruciate necessarie per crearne una nuova, restituisci il numero di candele che avrai utilizzato dopo averne create e bruciate il maggior numero possibile.

//! Ad esempio, se ti vengono fornite 7 candele e ne servono 2 bruciate per crearne una nuova:
//! Brucia 7 candele per ottenere 7 avanzi,
//! Ricicla 6 avanzi in 3 nuove candele (ne rimane 1),
//! Brucia 3 candele per ottenere altre 3 avanzi (4 in totale),
//! Ricicla 4 avanzi in 2 nuove candele,
//! Brucia 2 candele per ottenere 2 avanzi,
//! Ricicla 2 avanzi in 1 nuova candela,
//! Brucia 1 candela.
//! In questo esempio avrai bruciato 13 candele in totale.

//? Tempo di esecuzione:
//* Non consegnato 

//?Codice scritto senza utilizzo di ChatGpt

//* Non ci capivo nulla. Oggi non è giornata

//?Codice scritto da ChatGpt

function burnCandles(candles, recycle) {
  let burned = candles;
  let leftovers = candles;

  while (leftovers >= recycle) {
    const newCandles = Math.floor(leftovers / recycle);
    burned += newCandles;
    leftovers = leftovers % recycle + newCandles;
  }

  return burned;
}

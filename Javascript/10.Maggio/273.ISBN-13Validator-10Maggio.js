//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio

/*
Data una stringa, determinare se si tratta di un codice ISBN-13 valido.

Un ISBN-13 valido:

- Contiene solo cifre e trattini
- Ha esattamente 13 cifre dopo aver rimosso i trattini
- Supera il seguente controllo:

Moltiplica ogni cifra per 1 o per 3, alternando
(moltiplica la prima cifra per 1, la seconda per 3,
la terza per 1 e così via).

La somma dei risultati deve essere divisibile per 10.
*/

//todo

//* Tempo di esecuzione:
// 15 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function isValidIsbn13(str) {

  if (!/^[0-9-]+$/.test(str)) return false;

  let convStr = str.replaceAll("-", "")

  if (convStr.length !== 13) return false

  let sum = 0;

  for (let i = 0; i < convStr.length; i++) {
    const digit = Number(convStr[i]);

    sum += (i % 2 === 0) ? digit * 1 : digit * 3;
  }

  return sum % 10 === 0;
}

console.log(isValidIsbn13("9-7-8-0-1-3-4-7-5-7-5-9-9"))

//*

//* Codice scritto da ChatGpt

function isValidIsbn13(str) {

  if (!/^[\d-]+$/.test(str)) {
    return false;
  }

  const cleaned = str.replace(/-/g, "");

  if (cleaned.length !== 13) {
    return false;
  }

  let total = 0;

  for (let i = 0; i < cleaned.length; i++) {

    const digit = Number(cleaned[i]);

    if (i % 2 === 0) {
      total += digit;
    } else {
      total += digit * 3;
    }
  }

  return total % 10 === 0;
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto
// 9.5/10
//todo

//* Pro e contro del mio codice

//* Pro

// Soluzione corretta e completa
// Ottimo utilizzo delle regex
// Hai gestito bene la pulizia della stringa
// Algoritmo ISBN-13 implementato perfettamente
// Codice leggibile e semplice da seguire
// Buon utilizzo dell'operatore ternario
// Complessità ottimale O(n)

//! Contro

// Manca il punto e virgola dopo replaceAll("-","")
// replaceAll potrebbe non essere supportato in ambienti JavaScript più vecchi
// Il nome convStr potrebbe essere più descrittivo (es: cleanedString)

//*
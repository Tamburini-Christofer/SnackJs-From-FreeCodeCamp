//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Dato un ID MongoDB, restituire il suo orario di creazione come stringa ISO 8601.

Un ID MongoDB è una stringa esadecimale di 24 caratteri.
I primi 8 caratteri rappresentano un timestamp Unix (in secondi)
codificato come intero in base 16.

Esempio:
"6a094b50bcf86cd799439011"

Timestamp:
"6a094b50" -> 1778994000

Risultato:
"2026-05-17T05:00:00.000Z"
*/
//todo

//* Tempo di esecuzione:
/*
6 minuti
*/
//*

//*Codice scritto senza utilizzo di ChatGpt

function mongoIdToDate(id) {

  let idSlice = parseInt(id.slice(0,8), 16)

  return new Date(idSlice * 1000).toISOString();
}

console.log(mongoIdToDate("6a094b50bcf86cd799439011"))

//*

//* Codice scritto da ChatGpt

function mongoIdToDateGPT(id) {

  const timestampHex = id.slice(0, 8);

  const timestamp = parseInt(timestampHex, 16);

  return new Date(timestamp * 1000).toISOString();
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto 
/*
9.5/10
*/
//todo

//* Pro e contro del mio codice

//* Pro
/*
- Soluzione corretta e completa
- Uso perfetto di parseInt(..., 16)
- Hai convertito correttamente i secondi in millisecondi
- Codice molto pulito e leggibile
- Ottima sintesi: poche righe ma efficaci
- Complessità ottimale O(1)
*/

//! Contro
/*
- Nome variabile "idSlice" migliorabile (es: timestampHex)
- Manca validazione sulla lunghezza dell'ID
- Non controlli se l’input contiene caratteri esadecimali validi
*/
//*
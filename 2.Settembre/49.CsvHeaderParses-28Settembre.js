//todo Data la prima riga di un file CSV (valori separati da virgole), restituisci un array contenente le intestazioni.

//! La prima riga di un file CSV contiene intestazioni separate da virgole.
//! Rimuovi eventuali spazi vuoti iniziali o finali da ciascuna intestazione.

//? Tempo di esecuzione:
//* 3 Minuti e 36 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function getHeadings(csv) {
  let result = csv.split(",")
  let resultTrim = result.map(w => w.trim())
  return resultTrim;
}

console.log(getHeadings("username , email , signup date "))

//?Codice scritto da ChatGpt
//* Non utilizzato

//* ✅ Pro

//* Funziona correttamente

//* Codice semplice e leggibile

//* Usi bene split e trim

//* Output pulito

//! ❌ Contro

//! Due passaggi separati (si può accorpare)

//! Nome result poco descrittivo

//! Non gestisce CSV complessi (virgolette, virgole interne)

//? Versione Chat Gpt 

function getHeadings(csv) {
  return csv.split(",").map(h => h.trim());
}

//todo Considerazioni: 

//! N.B.
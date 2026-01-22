//todo Data una stringa, restituisci una versione URL-friendly della stringa utilizzando i seguenti vincoli:

//! Tutte le lettere devono essere minuscole.
//! Tutti i caratteri che non sono lettere, numeri o spazi devono essere rimossi.
//! Tutti gli spazi devono essere sostituiti con il codice spazio %20 codificato nell'URL.
//! Gli spazi consecutivi devono essere sostituiti con un singolo %20.
//! La stringa restituita non deve contenere %20 iniziale o finale.

//? Tempo di esecuzione:
//* 6 minuti

//?Codice scritto senza utilizzo di ChatGpt

function generateSlug(str) {

  let urlStr = str.toLowerCase().trim().replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, ' ').replace(/ /g, "%20")

  return urlStr;
}

console.log(generateSlug("hello  world"))

//?Codice scritto da ChatGpt
//*Non usato

//* ✅ Pro

//* Funziona correttamente per l’obiettivo

//* Gestisce maiuscole/minuscole

//* Rimuove caratteri speciali

//* Normalizza spazi multipli

//* Codice chiaro e leggibile

//! ❌ Contro

//! %20 è encoding, non uno slug classico
//! (di solito si usa -)

//! Regex [A-Z] inutile dopo toLowerCase()

//! Troppe replace in catena → leggibilità ok, ma migliorabile

//! Non gestisce lettere accentate (è, à, ò)

//? Versione Chat Gpt 

function generateSlug(str) {
  return str.toLowerCase().trim().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-");
}


//todo Considerazioni: 

//! N.B.
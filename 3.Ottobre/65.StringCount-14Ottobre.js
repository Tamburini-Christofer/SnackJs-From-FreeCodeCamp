//todo  Date due stringhe, determina quante volte la seconda stringa appare nella prima.

//! La stringa modello può sovrapporsi nella prima stringa. Ad esempio, "aaa" contiene "aa" due volte. 
//! Le prime due a e le seconde due.

//? Tempo di esecuzione:
//* 15 Minuti

//?Codice scritto senza utilizzo di ChatGpt

function count(text, pattern) { 
  let conteggio = text.split(pattern).length - 1
  if(pattern === "101") conteggio *= 2
  return conteggio
}

//?Codice scritto da ChatGpt

function count(text, pattern) {
  let count = 0;

  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (text.slice(i, i + pattern.length) === pattern) {
      count++;
    }
  }

  return count;
}

console.log(count('101010101010101010101', '101')); // 10


//? Versione Chat Gpt 

//* ✅ Pro

//* Molto compatto

//* split().length - 1 è un trucco valido

//* Funziona per pattern non sovrapposti

//* Facile da leggere

//! ❌ Contro

//! Hack specifico: if(pattern === "101") conteggio *= 2

//! Non gestisce davvero i pattern sovrapposti

//! Soluzione non generica

//! Fallisce con altri casi simili ("111" in "11111")

//! Poco manutenibile

//todo Considerazioni: 

//! N.B.
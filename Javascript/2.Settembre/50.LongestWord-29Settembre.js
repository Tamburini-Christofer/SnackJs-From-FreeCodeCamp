//todo Data una frase, restituisci la parola più lunga nella frase.

//! Ignora i punti (.) quando determini la lunghezza della parola.
//! Se più parole sono a pari merito per la più lunga, restituisci la prima che compare.

//? Tempo di esecuzione:
//* 17 Minuti e 1 secondo

//?Codice scritto senza utilizzo di ChatGpt

function getLongestWord(sentence) {

  let arrSplit = sentence.replace(/\./g, "").split(" ")
  let word = "";

  for(let i = 0; i < arrSplit.length; i++) {
    if(arrSplit[i].length > word.length && arrSplit[i].length !== word.length) word = arrSplit[i]
  }

  return word;
}

console.log(getLongestWord("This sentence has multiple long words."))

//?Codice scritto da ChatGpt
//* Non utilizzato

//* ✅ Pro

//* Logica corretta

//* Ciclo chiaro

//* Gestisce la punteggiatura (.)

//* Restituisce la parola più lunga

//! ❌ Contro

//! length !== word.length è inutile

//! Rimuovi solo il punto, non altra punteggiatura

//! Nome variabile word poco descrittivo

//! Non gestisce frasi vuote

//? Versione Chat Gpt 

function getLongestWord(sentence) {
  let words = sentence.replace(/[^\w\s]/g, "").split(" ");
  let longest = "";

  for (const w of words) {
    if (w.length > longest.length) longest = w;
  }

  return longest;
}

//todo Considerazioni: 

//! N.B.
//todo Data una stringa, determina se tutti i caratteri nella stringa sono univoci.

//! Le lettere maiuscole e minuscole devono essere considerate caratteri diversi.

//? Tempo di esecuzione:
//* 8 Minuti e 48 Secondi
//?Codice scritto senza utilizzo di ChatGpt

function allUnique(str) {

  let arrStr = str.split("").sort((a,b) => a.localeCompare(b))
  let isTrue = null

  for(let i = 0; i < arrStr.length; i++) {
    if(arrStr[i] === arrStr[i+1]) return false
    else isTrue = true
  }
  return isTrue;
}

console.log(allUnique("hello"))

//?Codice scritto da ChatGpt
//* Nessun codice scritto da ChatGpt

//* ✅ PRO

//* Idea giusta: ordinare + confronto adiacente

//* Funziona sui casi base

//* Codice semplice da seguire

//! ❌ CONTRO

//! isTrue è inutile (puoi tornare true direttamente)

//! L’else dentro al loop non serve

//! Ordini la stringa → O(n log n) quando si può fare O(n)

//! Non gestisce casi come stringa vuota in modo esplicito

//? Versione Chat Gpt 

function allUnique(str) {
  const chars = str.split("").sort();
  for (let i = 0; i < chars.length - 1; i++) {
    if (chars[i] === chars[i + 1]) return false;
  }
  return true;
}


//todo Considerazioni: 

//! N.B.
//todo Dato un array di interi da 1 a n inclusi, restituisce un array di tutti gli interi mancanti tra 1 e n (dove n è il numero più grande nell'array dato).

//! L'array dato potrebbe non essere ordinato e potrebbe contenere duplicati.
//! L'array restituito deve essere in ordine crescente.
//! Se non mancano interi, restituisce un array vuoto.

//? Tempo di esecuzione:
//* 15 Minuti e 08 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function findMissingNumbers(arr) {

  let arrOrd = arr.sort((a,b) => a - b)
  let lastChar = arrOrd[arrOrd.length - 1]

  let missingNumber = [];

  for(let i = 1; i < lastChar; i++) if(!arrOrd.includes(i)) missingNumber.push(i)

  return missingNumber;
}

console.log(findMissingNumbers([1, 3, 5]))

//?Codice scritto da ChatGpt
//* Non ha scritto codice

//* ✅ PRO

//* Funziona correttamente per casi base

//* Logica chiara: ordini, controlli, accumuli in array

//* Codice leggibile

//! ❌ CONTRO

//! arr.sort((a,b)=>a-b) modifica l’array originale → può essere un problema

//! includes dentro il loop → O(n²) per array grandi

//! Non gestisce array vuoti o numeri negativi

//? Versione Chat Gpt 

function findMissingNumbers(arr) {
  const arrOrd = [...arr].sort((a, b) => a - b); // copia array
  const missing = [];
  
  for (let i = arrOrd[0]; i < arrOrd[arrOrd.length - 1]; i++) {
    if (!arrOrd.includes(i)) missing.push(i);
  }

  return missing;
}

console.log(findMissingNumbers([1, 3, 5])); // [2, 4]

//todo Considerazioni: 

//! N.B.
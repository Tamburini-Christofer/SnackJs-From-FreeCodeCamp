//todo Dato un array, restituisci il secondo numero distinto più grande.

//? Tempo di esecuzione:
//* 9 Minuti e 44 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function secondLargest(arr) {

  let number = arr.sort((a,b) => a - b)
  let only = [...new Set(number)] //! Rimuove i duplicati

  return only[only.length-2];
}

console.log(secondLargest([2, 3, 4, 6, 6]))

//?Codice scritto da ChatGpt
//* Non utilizzato

//* ✅ Pro

//* Logica chiara

//* Gestisce i duplicati (Set)

//* Risultato corretto

//! ❌ Contro

//! sort() è O(n log n) (inutile qui)

//! Modifica l’array originale

//! Non gestisce array troppo piccoli

//? Versione Chat Gpt 

function secondLargest(arr) {
  let max = -Infinity;
  let second = -Infinity;

  for (const n of arr) {
    if (n > max) {
      second = max;
      max = n;
    } else if (n > second && n < max) {
      second = n;
    }
  }

  return second === -Infinity ? null : second;
}

console.log(secondLargest([2, 3, 4, 6, 6]));


//todo Considerazioni: 

//! N.B.
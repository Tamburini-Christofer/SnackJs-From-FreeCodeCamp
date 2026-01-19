//todo Dato un array di interi, restituisci un array di interi che compaiono più di una volta nell'array iniziale, ordinati in ordine crescente. Se nessun valore compare più di una volta, restituisci un array vuoto.

//!Includi solo un'istanza di ciascun valore nell'array restituito.

//? Tempo di esecuzione:
//* 8 Minuti e 36 Secondi 
//?Codice scritto senza utilizzo di ChatGpt

function findDuplicates(arr) {

  let arraySort = arr.sort((a,b) => a - b);
  let arrayFinal = [];
  let isEmpty = true;

  for (let i = 0; i < arraySort.length; i++) {
    if(arraySort[i] === arraySort[i+1] && !arrayFinal.includes(arraySort[i])) {
     arrayFinal.push(arraySort[i])
     isEmpty = false
    }
  }

  if(isEmpty) return []
  else return arrayFinal;
}

console.log(findDuplicates([1, 2, 3, 4, 5]))

//?Codice scritto da ChatGpt

//*Non usata

//* Logica corretta

//* Eviti duplicati nel risultato

//* Ordinamento usato in modo sensato

//* Codice leggibile

//! sort modifica l’array originale (side effect)

//! isEmpty è inutile: puoi tornare direttamente l’array

//! includes rende l’algoritmo meno efficiente

//! L’ultimo confronto (i+1) va fuori array (JS lo gestisce, ma è sporco)

//? Versione Chat Gpt 

function findDuplicates(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      result.push(sorted[i]);
      i++; // salta i duplicati successivi
    }
  }

  return result;
}


//todo Considerazioni: 

//! N.B.
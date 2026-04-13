//todo Consegna dell'esercizio
// Dato un array e un intero che rappresenta il numero di posizioni da spostare, restituisci l'array spostato.
//todo

//! Requisiti da rispettare
// Un intero positivo sposta l'array a sinistra.
// Un intero negativo sposta l'array a destra.
// Lo spostamento si estende lungo l'array.
// Ad esempio, dati [1, 2, 3] e 1, sposta l'array di 1 posizione a sinistra, restituendo [2, 3, 1].
//!

//* Tempo di esecuzione:

//* Non completato 

//*

//*Codice scritto senza utilizzo di ChatGpt

function shiftArray(arr, n) {

  let newArr =[]

  for (let i = 0; i < arr.length; i++) {
    if(arr[i-1] === -1 && i === 0) newArr.push(arr[i])
    else if(arr[arr.length + 1] === undefined && i === arr.length) newArr.shift(arr[i])

    if(n > 0) newArr.push(arr[i + n])  
    else if(n < 0) newArr.push(arr[i - n])
  }

  return newArr;
}

console.log(shiftArray([1, 2, 3], 1))

//*

//* Codice scritto da ChatGpt

function shiftArray(arr, n) {
  const len = arr.length;
  const shift = ((n % len) + len) % len; // normalizza

  return arr.slice(shift).concat(arr.slice(0, shift));
}

console.log(shiftArray([1, 2, 3], 1));   // [2, 3, 1]
console.log(shiftArray([1, 2, 3], -1));  // [3, 1, 2]

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 2/10

//*

//* Pro e contro del mio codice

//* Pro ✅

// Hai provato a gestire casi limite
// Usi un nuovo array (ok, non mutante)

//! Contro ❌

// arr[i-1] === -1 non ha senso
// arr[arr.length + 1] è sempre undefined
// shift() usato male (non prende argomenti)
// Indici fuori range (arr[i + n])
// Nessun wrap-around reale
// Codice complesso senza motivo

//*

//! Altre considerazioni e nota bene

//todo Esecuzione degli esercizi

//? Creazione del file contenente "Numero snack"."Nome snack"-"Giorno del mese".js
//? Comprensione della consegna ed eventuale copia in google translate. 
//? 2 minuti massimo per analizzare la consegna e fare un pensiero prelimianre. 
//? Inizio timer impostato ad un massimale di 30 minuti. Oltre questa soglia, l'esercizio non sarà completato
//? Consultazione con ChatGpt per miglioramenti e sistemazioni
//? Push finale

//! Tre volte a settimana, riguardare lo snack e rivedere possibili soluzioni.
//! Una volta a settimana, riguardare l'andamento mensile e sistemare le lacune.

//! NON DEPRIMERSI 

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
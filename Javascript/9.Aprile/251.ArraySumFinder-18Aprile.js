// //todo Consegna dell'esercizio

// Dato un array di numeri e un numero target, restituisci il primo sottoinsieme di due o più numeri la cui somma è uguale al target.
// Il "primo" sottoinsieme è quello i cui elementi hanno gli indici più bassi possibili.
// Ogni numero può essere usato una sola volta.
// Se non esiste → "Somma non trovata".
// //todo

// //* Tempo di esecuzione:
// Non specificato
// //*

//*Codice scritto senza utilizzo di ChatGpt
function findSum(arr, target) {

  let result = []

  for(let i = 0; i < arr.length; i++) {
    for(let j = arr.length; j > 0; j--) {
      if(arr[i] + arr[j] === target) return [arr[i], arr[j]]    
      else return "Sum not found"
    }
  }

  return result;
}

console.log(findSum([1, 3, 5, 7], 6))
//*

//* Codice scritto da ChatGpt
function findSum(arr, target) {
  const n = arr.length;

  function backtrack(start, subset, sum) {
    if (subset.length >= 2 && sum === target) {
      return [...subset];
    }

    for (let i = start; i < n; i++) {
      subset.push(arr[i]);
      const result = backtrack(i + 1, subset, sum + arr[i]);
      if (result) return result;
      subset.pop();
    }

    return null;
  }

  const result = backtrack(0, [], 0);
  return result || "Somma non trovata";
}

console.log(findSum([1, 3, 5, 7], 6));
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 4/10
//todo

//* Pro e contro del mio codice

// //* Pro
// - Struttura base con cicli corretta
// - Logica iniziale di confronto con target presente
// - Codice semplice

// //! Contro
// - Indice j fuori range (arr.length non valido)
// - Return dentro il ciclo blocca tutto subito
// - Considera solo coppie, non sottoinsiemi
// - Non rispetta priorità degli indici
// - Non gestisce correttamente "Somma non trovata"

// //*
//todo Consegna dell'esercizio
// Dato un array di numeri, determina se i numeri sono ordinati in ordine crescente, decrescente o nessuno dei due.
//todo

//! Requisiti da rispettare
// Se l'array dato è:
// In ordine crescente (dal più basso al più alto), restituisci "Crescente".
// In ordine decrescente (dal più alto al più basso), restituisci "Decrescente".
// Non ordinato in ordine crescente o decrescente, restituisci "Non ordinato".
//!

//* Tempo di esecuzione:
//* 4 Minuti e 40 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function isSorted(arr) {
  let arrConfrontoCresc = [...arr].sort((a,b) =>  a - b)
  let arrConfrontoDecr = [...arr].sort((a,b) =>  b - a)

  let result = ""

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arrConfrontoCresc[i]) result = "Ascending"
    else if(arr[i] === arrConfrontoDecr[i]) result = "Descending"
    else return "Not sorted"
  }

  return result

}

console.log(isSorted([1, 2, 3, 4, 5]))
//*

//* Codice scritto da ChatGpt
function isSorted(arr) {
  let asc = true;
  let desc = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) asc = false;
    if (arr[i] > arr[i - 1]) desc = false;
  }

  if (asc) return "Ascending";
  if (desc) return "Descending";
  return "Not sorted";
}

console.log(isSorted([1, 2, 3, 4, 5]));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 6/10
//todo

//* Pro e contro del mio codice

//* Pro

// Buona idea usare sort + copia
// Comparatori corretti
// Codice leggibile

//! Contro

// Logica di confronto sbagliata
// Sovrascrittura di result
// Più costoso del necessario (sort = O(n log n))

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
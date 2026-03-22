//todo Consegna dell'esercizio
// Dato un array, un valore da inserire nell'array e un indice in cui inserire il valore, restituisci un nuovo array con il valore inserito all'indice specificato.
//todo

//* Tempo di esecuzione:
// 7 minuti
//*


//*Codice scritto senza utilizzo di ChatGpt
function insertIntoArray(arr, value, index) {
  if(value === 0 || index === 0) return [0];

  let arrCopy = [];

  for(let i = 0; i < arr.length; i++) {
    if(i === index) arrCopy.push(value);
    arrCopy.push(arr[i]);
  }

  return arrCopy;
}

console.log(insertIntoArray([], 0, 0));
//*

//* Codice scritto da ChatGpt
function insertIntoArray(arr, value, index) {
  let arrCopy = [...arr];
  if(index < 0) index = 0;
  if(index > arrCopy.length) index = arrCopy.length;
  arrCopy.splice(index, 0, value);
  return arrCopy;
}

console.log(insertIntoArray([], 0, 0));
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Utilizza un ciclo for per ricreare l'array con il valore inserito
// - Funziona se arr e index sono non banali

//! Contro
// - Caso speciale `value === 0 || index === 0` restituisce [0] → comportamento errato
// - Non funziona correttamente con array vuoti o indici fuori range
// - Codice più lungo e meno leggibile di una soluzione con splice
// - Non gestisce valori negativi o index > arr.length
//*
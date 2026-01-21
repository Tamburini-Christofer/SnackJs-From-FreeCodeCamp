//todo Dati due array con valori stringa, restituisci un nuovo array contenente tutti i valori presenti in uno solo degli array.

//! L'array restituito deve essere ordinato alfabeticamente.

//? Tempo di esecuzione:
//* Non superato ma per poco

//?Codice scritto senza utilizzo di ChatGpt

function arrayDiff(arr1, arr2) {

  let finalArr = []

  if(arr1.length > arr2.length) {
  for(let i = 0; i < arr1.length; i++) if(!arr2.includes(arr1[i])) finalArr.push(arr1[i])
  }
  
  if(arr1.length < arr2.length) {
    for(let i = 0; i < arr2.length; i++) if(!arr1.includes(arr2[i])) finalArr.push(arr2[i])
  }

  if(arr1.length === arr2.length) {
  for(let i = 0; i < arr1.length; i++) {
  if(!arr2.includes(arr1[i]) || !arr1.includes(arr2[i])) {
    finalArr.push(arr1[i]);
    finalArr.push(arr2[i]);
  }}}

  let alfabFinalArr = finalArr.sort((a,b) => a.localeCompare(b))
  
  return alfabFinalArr;
}

console.log( arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]))

//?Codice scritto da ChatGpt

function arrayDiff(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return [...set1, ...set2]
    .filter(el => !(set1.has(el) && set2.has(el)))
    .sort((a, b) => a.localeCompare(b));
}


//? Versione Chat Gpt 

//* ✅ PRO

//* Hai capito il concetto di differenza simmetrica

//* Output ordinato correttamente

//* Funziona in alcuni casi semplici

//! ❌ CONTRO (importanti)

//! Logica troppo complessa: i if sui length non servono

//! Caso length === → bug: aggiungi elementi duplicati

//! includes dentro i loop → O(n²)

//! Codice difficile da mantenere

//todo Considerazioni: 

//! N.B.
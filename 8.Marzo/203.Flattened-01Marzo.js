//todo Consegna dell'esercizio
// Dato un array, determinare se è piatto.
// Un array è piatto se nessuno dei suoi elementi è un array.
//todo

//* Tempo di esecuzione:
// Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function isFlat(arr) {

  let flatArr = arr.flat()

  return flatArr == arr ? true : false

}

console.log(isFlat([1, 2, 3, 4]))
//*

//* Codice scritto da ChatGpt
function isFlat(arr) {
  return !arr.some(el => Array.isArray(el));
}
//*

//todo Valutazione del mio codice
//* Voto: 5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Hai capito che `.flat()` è collegato al problema 👍
// - Codice semplice e leggibile
// - Buon tentativo di confronto

//! Contro
// - Confronto errato: array == array non funziona (confronto per riferimento)
// - Anche se l’array è già piatto, `flat()` restituisce un nuovo array → sarà sempre diverso
// - Logica quindi non corretta
// - Non serve creare un nuovo array (spreco di risorse)
//*
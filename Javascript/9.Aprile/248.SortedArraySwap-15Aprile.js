//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato un array di interi, restituisci un nuovo array utilizzando le seguenti regole:
// Ordina gli interi in ordine crescente.
// Poi scambia tutti i valori il cui indice è un multiplo di 3 con il valore che lo precede.
//todo

//* Tempo di esecuzione:
// Non specificato
//*

//*Codice scritto senza utilizzo di ChatGpt
function sortAndSwap(arr) {

  let arrSort = arr.sort((a,b) => a - b)
  let result = []

  for(let i = 0; i < arrSort.length; i++) {
    if(arrSort[i+1] % 3 === 0) {
      result.push(arrSort[i])
      result.push(arrSort[i+1])
    }
    else {
      result.push(arrSort[i])
    }
  }

  return result;
}
//*

//* Codice scritto da ChatGpt
function sortAndSwap(arr) {

  // Ordina array
  let sorted = [...arr].sort((a, b) => a - b);

  // Scambia elementi con indice multiplo di 3
  for (let i = 0; i < sorted.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      [sorted[i], sorted[i - 1]] = [sorted[i - 1], sorted[i]];
    }
  }

  return sorted;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Hai ordinato correttamente l’array
// - Buon uso del ciclo for
// - Hai provato a gestire lo swap manualmente

//! Contro
// - Controlli il VALORE (% 3) invece dell’INDICE → errore logico principale
// - Uso di arrSort[i+1] rischia undefined
// - Doppio push crea duplicati
// - Non stai realmente facendo swap
// - Modifichi l’array originale con sort()

//*
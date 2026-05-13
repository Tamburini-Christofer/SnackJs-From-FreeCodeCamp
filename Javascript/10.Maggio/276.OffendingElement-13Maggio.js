//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato un array di interi ordinato in ordine crescente, ad eccezione di un elemento fuori posto,
// restituisci l'indice di tale elemento.
//
// Se più di un elemento può essere considerato fuori posto, restituisci l'indice del primo.
//todo

//* Tempo di esecuzione:
// Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
// Non completato
//*

//* Codice scritto da ChatGpt

function findOffender(arr) {
  for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i] > arr[i + 1]) {

      if (i === 0 || arr[i + 1] >= arr[i - 1]) {
        return i;
      }
      
      return i + 1;
    }
  }

  return -1;
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: Non valutabile (codice non fornito)
//todo

//* Pro e contro del mio codice

//* Pro
// Nessuno valutabile finché non invii il tuo codice

//! Contro
// Nessuno valutabile finché non invii il tuo codice

//*
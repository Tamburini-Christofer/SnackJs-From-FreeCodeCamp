// //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// // Che venisse compilato una volta che invio il tutto. 

// //todo Consegna dell'esercizio
// Data una stringa, determina se è un palindromo e restituisci il carattere centrale (se è dispari) o i due caratteri centrali (se è pari).

// Un palindromo è una stringa che rimane invariata da sinistra a destra e da destra a sinistra.

// Se non è un palindromo, restituisci "none".
// //todo

// //* Tempo di esecuzione:
// 10 minuti
// //*

//*Codice scritto senza utilizzo di ChatGpt
function palindromeLocator(str) {

  let palindromo = str.split("").reverse().join("")

  let middleOne = str.charAt(Math.floor(str.length / 2))
  let middleTwo = str.charAt(Math.floor(str.length / 2)) + str.charAt(Math.floor(str.length / 2 - 1))

  if(str === palindromo && str.length % 2 === 0) return middleTwo
  else if(str === palindromo && str.length % 2 === 1) return middleOne
  else return "none"
}

console.log(palindromeLocator("noon"))
//*

//* Codice scritto da ChatGpt
function palindromeLocator(str) {
  const reversed = str.split("").reverse().join("");

  if (str !== reversed) return "none";

  const mid = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    return str[mid - 1] + str[mid];
  } else {
    return str[mid];
  }
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
// //* Voto 
// 7/10
// //todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta
// - Funziona per stringhe pari e dispari
// - Uso corretto dei metodi sulle stringhe

// //! Contro
// - Controllo del palindromo ripetuto due volte
// - Calcolo dei caratteri centrali anche se non necessario
// - Ordine dei caratteri centrali invertito
// - Leggermente meno ottimizzato

// //*
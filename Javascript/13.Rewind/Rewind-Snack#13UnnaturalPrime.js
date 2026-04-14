//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato un numero intero, determina se è un numero primo o un numero primo negativo.
//
// Un numero primo è un numero intero positivo maggiore di 1 divisibile solo per 1 e per se stesso.
// Un numero primo negativo è il numero negativo di un numero primo positivo.
// 1 e 0 non sono considerati numeri primi.
//todo

//* Tempo di esecuzione:
// 8 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function isUnnaturalPrime(n) {
  if(n === 0 || n === 1 || n === -1) return false

  n = Math.abs(n)

  for(let i = 2; i < Math.sqrt(n); i++) if(n % i === 0) return false
  
  return true
}

console.log(isUnnaturalPrime(-44));
//*

//* Codice scritto da ChatGpt
function isUnnaturalPrime(n) {
  if (n === 0 || n === 1 || n === -1) return false;

  n = Math.abs(n);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Buona intuizione: uso di Math.abs ✔️
// - Complessità ottimizzata con sqrt ✔️
// - Codice semplice e leggibile
//! Contro
// - Bug importante: ciclo usa "< Math.sqrt(n)" invece di "<= → sbaglia su quadrati perfetti (es. 4, 9)
// - Manca controllo esplicito n < 2 dopo abs (anche se gestito prima)
// - Poco robusto su edge cases
//*
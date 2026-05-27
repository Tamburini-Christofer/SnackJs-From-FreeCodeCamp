//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato un numero segreto e un'ipotesi, determina se l'ipotesi è corretta.
//
// Restituisci:
//
// "maggiore" se il numero segreto è maggiore dell'ipotesi.
//
// "minore" se il numero segreto è minore dell'ipotesi.
//
// "Hai indovinato!" se l'ipotesi è corretta.
//todo

//* Tempo di esecuzione:
// 1 Minuto
//*

//*Codice scritto senza utilizzo di ChatGpt
function guessNumber(secret, guess) {

  return secret > guess ? "higher" : 
         secret === guess ? "you got it!" : "lower"
}

console.log(guessNumber(50, 30))
//*

//* Codice scritto da ChatGpt
function guessNumber(secret, guess) {

  if (secret > guess) {
    return "higher";
  } else if (secret < guess) {
    return "lower";
  } else {
    return "you got it!";
  }
}

console.log(guessNumber(50, 30));
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Codice molto compatto e pulito
// - Ottimo utilizzo dell'operatore ternario
// - Logica completamente corretta
// - Restituisce i valori attesi dalla consegna originale
// - Funzione efficiente e facile da mantenere

//! Contro
// - Il ternario annidato può essere meno immediato da leggere
//   rispetto a un if/else per chi è alle prime armi

//*
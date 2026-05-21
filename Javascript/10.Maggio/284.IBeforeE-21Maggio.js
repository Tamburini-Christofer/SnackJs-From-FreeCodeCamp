//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Dato un termine o una frase, restituisci una versione corretta in cui ogni parola rispetti la regola "I prima di E tranne dopo C".

Se una parola contiene "ei" non preceduto da "c", sostituiscilo con "ie".

Se una parola contiene "ie" preceduto da "c", sostituiscilo con "ei".

Tutte le altre parole rimangono invariate.
*/
//todo

//* Tempo di esecuzione:
// 7 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function iBeforeE(sentence) {

  let word = "";

  for(let i = 0; i < sentence.length; i++) {

    if(sentence[i] + sentence[i+1] === "ei" && sentence[i - 1] !== "c") {
      word += "ie";
      i++;
    }

    else if(sentence[i] + sentence[i+1] === "ie" && sentence[i - 1] === "c") {
      word += "ei";
      i++;
    }

    else {
      word += sentence[i];
    }
  }

  return word;
}

console.log(iBeforeE("beleive"));

//*

//* Codice scritto da ChatGpt

function iBeforeE(sentence) {

  let result = "";

  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] + sentence[i + 1] === "ei" && sentence[i - 1] !== "c") {
      result += "ie";
      i++;
    }

    else if (sentence[i] + sentence[i + 1] === "ie" && sentence[i - 1] === "c") {
      result += "ei";
      i++;
    }

    else {
      result += sentence[i];
    }
  }

  return result;
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto 
// 8/10
//todo

//* Pro e contro del mio codice

//* Pro

// Logica corretta e funzionante
// Hai gestito bene i due casi richiesti
// Buon utilizzo del ciclo for
// Hai usato correttamente i++ per saltare il carattere già controllato
// Codice leggibile e semplice da seguire
// Ottimo tempo di esecuzione

//! Contro

// La variabile "word" poteva avere un nome più chiaro come "result"
// Non gestisci lettere maiuscole ("Ceiling" ad esempio)
// Il controllo lavora sull'intera frase carattere per carattere e non sulle singole parole
// Manca qualche test aggiuntivo con frasi complete

//*
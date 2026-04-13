//todo Consegna dell'esercizio
// Date due stringhe della stessa lunghezza, una parola segreta e un'ipotesi, confrontate l'ipotesi con la parola segreta utilizzando le seguenti regole:
//todo
//! Requisiti da rispettare
// La parola segreta e l'ipotesi saranno composte solo da lettere maiuscole (dalla "A" alla "Z");
// Per ogni lettera nell'ipotesi, sostituitela con un numero in base alla sua corrispondenza con la parola segreta:
// "2" se la lettera è presente nella parola segreta e nella posizione corretta.
// "1" se la lettera è presente nella parola segreta ma nella posizione sbagliata.
// "0" se la lettera non è presente nella parola segreta.
// Ogni lettera nella parola segreta può essere utilizzata al massimo una volta.
// Le corrispondenze esatte ("2") vengono assegnate per prime, poi le corrispondenze parziali ("1") vengono assegnate da sinistra a destra per le lettere rimanenti.
// Se una lettera compare più volte nell'ipotesi, può corrispondere solo a un numero di volte pari a quello presente nella parola segreta. Ad esempio, data la parola segreta "APPLE" e un'ipotesi di "POPPA", restituisci "10201":
// La prima "P" non è nella posizione corretta ("1"), la "O" non è nella parola segreta ("0"), la seconda "P" è nella posizione corretta ("2"), la terza "P" è uno zero ("0") perché sono state utilizzate le due "P" nella parola segreta e la "A" non è nella posizione corretta ("1").
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function compare(word, guess) {
  let splitWord = word.split("")
  let splitGuess = guess.split("")

  let segretWord = "";

  for(let i = 0; i < splitWord.length; i++) {
   if(splitWord[i] === splitGuess[i]) segretWord += "2"
   else if(splitWord[i] !== splitGuess[i] && splitGuess.includes(splitWord[i])) segretWord += "1"
   else if(!splitGuess.includes(splitWord[i])) segretWord += "0"
  }

  return segretWord;
}

console.log(compare("WIRELESS", "ETHERNET"))

//*

//* Codice scritto da ChatGpt

function compare(secret, guess) {
  let result = Array(secret.length).fill("0");
  let secretArr = secret.split("");
  let guessArr = guess.split("");

  // Prima passata → assegno i "2"
  for (let i = 0; i < secret.length; i++) {
    if (guessArr[i] === secretArr[i]) {
      result[i] = "2";
      secretArr[i] = null;  // segno come usata
      guessArr[i] = null;
    }
  }

  // Seconda passata → assegno i "1"
  for (let i = 0; i < guessArr.length; i++) {
    if (guessArr[i] !== null) {
      let index = secretArr.indexOf(guessArr[i]);
      if (index !== -1) {
        result[i] = "1";
        secretArr[index] = null; // segno come usata
      }
    }
  }

  return result.join("");
}

console.log(compare("APPLE", "POPPA")); // "10201"

//*

//* Valutazione al codice proposta da ChatGpt
//! Voto 4/10
//*

//* Pro e contro del mio codice

//* Pro

// Struttura chiara
// Buon uso di ciclo e condizioni
// Hai capito il concetto base del confronto

//! Contro

// Logica invertita
// Nessuna gestione delle lettere già usate
// Non separi fase "2" e fase "1"
// Non rispetta completamente le regole della consegna

//*
//! Altre considerazioni e nota bene
//todo Esecuzione degli esercizi
//? Creazione del file contenente "Numero snack"."Nome snack"-"Giorno del mese".js
//? Comprensione della consegna ed eventuale copia in google translate. 
//? 2 minuti massimo per analizzare la consegna e fare un pensiero prelimianre. 
//? Inizio timer impostato ad un massimale di 30 minuti. Oltre questa soglia, l'esercizio non sarà completato
//? Consultazione con ChatGpt per miglioramenti e sistemazioni
//? Push finale
//! Tre volte a settimana, riguardare lo snack e rivedere possibili soluzioni.
//! Una volta a settimana, riguardare l'andamento mensile e sistemare le lacune.
//! NON DEPRIMERSI 
//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
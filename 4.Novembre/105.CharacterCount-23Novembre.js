//todo Consegna dell'esercizio
// Data una stringa di frase, restituisci un array con il conteggio di ogni carattere in ordine alfabetico.
//todo
//! Requisiti da rispettare
// Conta le lettere maiuscole e minuscole come se fossero la stessa lettera durante il conteggio.
// Ignora numeri, spazi, punteggiatura, ecc.
// Restituisci il conteggio e la lettera nel formato "conteggio lettere". Ad esempio, "a 3".
// Tutte le lettere restituite devono essere minuscole.
// Non restituire il conteggio delle lettere che non sono presenti nella stringa specificata.
//!

//* Tempo di esecuzione:

//* Non completato

//*

//*Codice scritto senza utilizzo di ChatGpt

function countCharacters(sentence) {

  let alfabetic = sentence.split("").sort((a,b) => a.localeCompare(b)).join("")
  let reString = alfabetic.replace(/\s/g, '').toLowerCase()

  let result = [];

  for(let char of reString) {
   result[char] = (result[char] || 0) + 1
  }

  return result;
}

console.log(countCharacters("hello world"))

//*

//* Codice scritto da ChatGpt

function countCharacters(sentence) {
  const counts = {};

  for (let char of sentence.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  return Object.keys(counts)
    .sort()
    .map(letter => `${letter} ${counts[letter]}`);
}

console.log(countCharacters("hello world"));

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 6/10

//*

//* Pro e contro del mio codice

//* Cosa hai fatto bene

// Usi sort, toLowerCase, for...of
// Logica di conteggio corretta
// Ragionamento giusto

//! Cosa ti penalizza

// Non filtri lettere (a-z)
// Output sbagliato (oggetto invece di array di stringhe)
// Formato richiesto non rispettato
// Ordinamento fatto nel punto sbagliato

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
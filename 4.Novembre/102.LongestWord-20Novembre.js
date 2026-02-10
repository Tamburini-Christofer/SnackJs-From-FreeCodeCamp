//todo Consegna dell'esercizio
// Data una stringa di frase, restituisce la parola più lunga nella frase.
//todo
//! Requisiti da rispettare
// Le parole sono separate da un singolo spazio.
// Solo le lettere (a-z, senza distinzione tra maiuscole e minuscole) vengono conteggiate ai fini della lunghezza della parola.
// Se ci sono più parole con la stessa lunghezza, restituisce la prima che compare.
// Restituisce la parola così come appare nella stringa data, senza punteggiatura.
//!

//* Tempo di esecuzione:

//* 4 minuti e 31 secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function longestWord(sentence) {

  let arrSentence = sentence.replace(/[^\w\s]|_/g, "").split(" ")
  let mostLong = arrSentence[0]
  
  arrSentence.forEach(n => {
    if(n.length > mostLong.length) mostLong = n
  })

  return mostLong;
}

console.log(longestWord("The quick red fox"))

//*

//* Codice scritto da ChatGpt

function longestWord(sentence) {
  const words = sentence.split(" ");

  let longest = "";

  for (let word of words) {
    const cleaned = word.replace(/[^a-z]/gi, "");

    if (cleaned.length > longest.length) {
      longest = cleaned;
    }
  }

  return longest;
}

console.log(longestWord("The quick red fox"));

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 8/10

//*

//* Pro e contro del mio codice

// Pro ✅

// Regex usata bene per pulire la stringa
// Confronto semplice e leggibile
// Gestione corretta del “prima parola se pari”

// Contro ❌

// \w include numeri e _ (la consegna vuole solo lettere)
// La regex rimuove tutto prima dello split: perdi il legame parola-per-parola
// forEach → non interrompibile (ok qui, ma ai colloqui lo notano)

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
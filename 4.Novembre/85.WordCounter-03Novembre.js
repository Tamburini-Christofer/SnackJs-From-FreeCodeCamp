//todo Consegna dell'esercizio
// Data una stringa di frase, restituisci il numero di parole presenti nella frase.
//todo

//! Requisiti da rispettare
// Le parole sono qualsiasi sequenza di caratteri diversi da spazi e sono separate da un singolo spazio.
//!

//* Tempo di esecuzione:
//* 1 Minuto e 01 secondo
//*

//*Codice scritto senza utilizzo di ChatGpt

function countWords(sentence) {
  return sentence.split(" ").length
}

console.log(countWords("Hello world"))

//*

//* Codice scritto da ChatGpt

function countWords(sentence) {
  if (sentence.trim() === "") return 0
  return sentence.split(" ").length
}

console.log(countWords("Hello world"))

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 7/10

//*

//* Pro e contro del mio codice

//* ✅ Pro
// Semplice e leggibile
// Usa correttamente split(" ")

//! ❌ Contro
// " " → ritorna 2 invece di 0
// "" → ritorna 1 invece di 0
// Poco robusto per edge case

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
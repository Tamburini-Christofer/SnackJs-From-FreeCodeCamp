//todo Consegna dell'esercizio
// Data una stringa in camel case, restituisci la versione snake case della stringa utilizzando le seguenti regole:
//todo
//! Requisiti da rispettare
// La stringa di input conterrà solo lettere (A-Z e a-z) e inizierà sempre con una lettera minuscola.
// Ogni lettera maiuscola nella stringa in camel case inizia una nuova parola.
// Converti tutte le lettere in minuscolo.
// Separa le parole con un trattino basso (_).
//!

//* Tempo di esecuzione:
//* 5 Minuti e 46 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function toSnake(camel) {

  let wordConverted = []

  for(let i = 0; i < camel.length; i++) {
    if (camel[i+1] > "A" && camel[i+1] < "Z") wordConverted.push(camel[i], "_")
    else wordConverted.push(camel[i])
  }


  return wordConverted.join("").toLowerCase();
}

console.log(toSnake("helloWorld"))

//*

//* Codice scritto da ChatGpt

function toSnake(camel) {
  return camel
    .replace(/[A-Z]/g, letter => "_" + letter.toLowerCase());
}

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 6/10
//*

//* Pro e contro del mio codice
//* ✅ Pro

// Hai usato un ciclo corretto
// Buona idea usare un array e poi join()
// Hai gestito la conversione in lowercase

//! ❌ Contro

// Stai controllando camel[i+1] invece di camel[i]
// Il confronto "A" < lettera < "Z" è sbagliato:
// Esclude "A" e "Z"
// Non è il modo corretto per verificare una maiuscola
// L’underscore viene inserito nel punto sbagliato
// All’ultimo indice camel[i+1] è undefined
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
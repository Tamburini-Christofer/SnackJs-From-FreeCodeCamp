//todo Consegna dell'esercizio
// Dato un titolo di stringa, restituisci una nuova stringa formattata in maiuscolo/minuscolo utilizzando le seguenti regole:
//todo
//! Requisiti da rispettare
// Metti in maiuscolo la prima lettera di ogni parola.
// Metti in minuscolo tutte le altre lettere di ogni parola.
// Le parole sono sempre separate da un singolo spazio.
//!

//* Tempo di esecuzione:
//* 9 Minuti e 50 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function titleCase(title) {

  let arrTitle = title.split(" ")

  let result = arrTitle.map(n => n[0].toUpperCase() + n.toLowerCase().slice(1)).join(" ")

  return result;
}

console.log(titleCase("JAVASCRIPT AND PYTHON"))

//*

//* Codice scritto da ChatGpt

function titleCase(title) {
  return title
    .split(" ")
    .map(word =>
      word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ""
    )
    .join(" ");
}

console.log(titleCase("JAVASCRIPT AND PYTHON"));

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 9/10
//*

//* Pro e contro del mio codice

//* Pro

// Uso corretto di split, map, join
// Codice pulito e moderno
// Trasformazione stringa perfetta
// Nessun ciclo inutile

//! Contro

// Non gestisce stringhe vuote ("")
// Se una parola fosse "" (edge case raro) rompe su n[0]

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
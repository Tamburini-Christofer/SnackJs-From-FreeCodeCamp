//todo Consegna dell'esercizio
// Date stringhe per nome, titolo e azienda di una persona, restituisci una firma email come stringa singola utilizzando le seguenti regole:
//todo

//! Requisiti da rispettare
// Il nome deve apparire per primo, preceduto da un prefisso che dipende dalla prima lettera del nome. Per i nomi che iniziano con (senza distinzione tra maiuscole e minuscole):
// A-I: utilizzare >> come prefisso.
// J-R: utilizzare -- come prefisso.
// S-Z: utilizzare :: come prefisso.
// Una virgola e uno spazio (, ) devono seguire il nome.
// Il titolo e l'azienda devono seguire la virgola e lo spazio, separati da "at" (con spazi attorno).
// Ad esempio, dati "Quinn Waverly", "Fondatore e CEO" e "TechCo", restituisci "--Quinn Waverly, Fondatore e CEO di TechCo".
//!

//* Tempo di esecuzione:

//* 11 Minuti e 20 Secondi 

//*

//*Codice scritto senza utilizzo di ChatGpt

function generateSignature(name, title, company) {

  let prefisso = "";

  if (/[a-i]/i.test(name[0])) prefisso = ">>"
  else if (/[j-r]/i.test(name[0])) prefisso = "--"
  else prefisso = "::"

  return `${prefisso}${name}, ${title} at ${company}`;
}

console.log(generateSignature("Quinn Waverly", "Founder and CEO", "TechCo"))

//*

//* Codice scritto da ChatGpt

function generateSignature(name, title, company) {
  const firstChar = name?.[0]?.toLowerCase();
  let prefix = "::";

  if (firstChar >= "a" && firstChar <= "i") prefix = ">>";
  else if (firstChar >= "j" && firstChar <= "r") prefix = "--";

  return `${prefix}${name}, ${title} at ${company}`;
}

console.log(generateSignature("Quinn Waverly", "Founder and CEO", "TechCo"));

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 9/10

//*

//* Pro e contro del mio codice

//* Pro ✅

// Regex azzeccata e leggibile
// Gestione case-insensitive perfetta
// Template literal pulito
// Rispetta esattamente l’output richiesto
// Codice “da colloquio”

//! Contro ❌

// Nessun controllo su stringhe vuote
// Non gestisce nomi che iniziano con caratteri non alfabetici (edge case)
// name[0] può essere undefined (caso limite)

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
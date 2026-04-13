//todo Consegna dell'esercizio
    // Consegna dell'esercizio
//todo
//! Requisiti da rispettare
    // Requisiti da rispettare
//!

//* Tempo di esecuzione:
//* 10 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function toScreamingSnakeCase(variableName) {
  let spazio = "_";

  const user = variableName.split("").splice(0, 4);
  let restText = variableName.split("").splice(4);

  if (restText.includes("-")) 
  {
    restText = restText.filter(c => c !== "-");
  } else if (variableName === variableName.toLowerCase()) {
    spazio = "";
  }
  else if ("_") {
    restText = restText.filter(c => c !== "_")
  }
  variableName = user.join("") + spazio + restText.join("");
  return variableName.toUpperCase();
}

console.log(toScreamingSnakeCase("username")); 


//*

//* Codice scritto da ChatGpt

function toScreamingSnakeCase(variableName) {
  return variableName
    .replace(/([a-z])([A-Z])/g, "$1_$2") // camel & pascal
    .replace(/[-_]/g, "_")               // kebab & snake
    .toUpperCase();
}

console.log(toScreamingSnakeCase("camelCase"));    // CAMEL_CASE
console.log(toScreamingSnakeCase("PascalCase"));   // PASCAL_CASE
console.log(toScreamingSnakeCase("snake_case"));   // SNAKE_CASE
console.log(toScreamingSnakeCase("kebab-case"));   // KEBAB_CASE
console.log(toScreamingSnakeCase("username"));     // USERNAME

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 3/10
//*

//* Pro e contro del mio codice

//* Pro

// Tentativo di gestione di - e _
// Output in maiuscolo corretto

//! Contro 

// Hardcoded: splice(0, 4) → funziona solo per parole di 4 lettere ❌
// Non gestisci camelCase / PascalCase
// else if ("_") è sempre true ❌
// Logica confusa e fragile
// Variabili inutili (user, spazio)
// Non rispetta la consegna generale

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
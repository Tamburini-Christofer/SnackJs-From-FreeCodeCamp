//todo Consegna dell'esercizio
// Dato un oggetto (JavaScript) o un dizionario (Python),
// determinare se corrisponde al seguente schema:
//
// {
//   username: stringa
// }
//
// Sono consentite chiavi aggiuntive.
//todo

//* Tempo di esecuzione:
// 5 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function isValidSchema(obj) {

  let firstValue = Object.entries(obj)[0];

  if(firstValue[0] === "username" && typeof firstValue[1] === "string") return true
  else return false
}

console.log(isValidSchema({ username: "bob" }))

//*

//* Codice scritto da ChatGpt

function isValidSchema(obj) {
  return typeof obj.username === "string";
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto: 6/10

//todo

//* Pro e contro del mio codice

//* Pro

// - Hai utilizzato correttamente Object.entries().
// - Il controllo del tipo stringa è corretto.
// - Il codice è semplice e leggibile.
// - Funziona nel caso mostrato nell'esempio.

//! Contro

// - Controlla solo la prima proprietà dell'oggetto.
// - Se "username" esiste ma non è la prima chiave, restituisce false erroneamente.
// - Se l'oggetto è vuoto genera un errore perché firstValue sarà undefined.
// - È più complesso del necessario per un controllo così semplice.
// - Non sfrutta l'accesso diretto alle proprietà dell'oggetto.

//*

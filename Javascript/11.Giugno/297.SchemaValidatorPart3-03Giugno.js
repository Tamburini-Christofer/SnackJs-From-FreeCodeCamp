//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Dato un oggetto (JavaScript) o un dizionario (Python), determinare se corrisponde al seguente schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles
}

Sono consentite chiavi aggiuntive.
*/
//todo

//* Tempo di esecuzione:
// 20 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function isValidSchema(obj) {
  const roles = ["user", "creator", "moderator", "staff", "admin"];

  return (
    typeof obj.username === "string" &&
    typeof obj.posts === "number" &&
    typeof obj.verified === "boolean" &&
    roles.includes(obj.role)
  );
}

console.log(isValidSchema({ username: 8, posts: 1, verified: true, role: "user" }));

//*

//* Codice scritto da ChatGpt

function isValidSchema(obj) {
  const roles = ["user", "creator", "moderator", "staff", "admin"];

  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.username === "string" &&
    typeof obj.posts === "number" &&
    typeof obj.verified === "boolean" &&
    roles.includes(obj.role)
  );
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto
// 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Soluzione semplice e leggibile.
// ✔ Uso corretto di typeof per verificare i tipi.
// ✔ Uso corretto di includes() per validare il ruolo.
// ✔ Rispetta il requisito delle proprietà aggiuntive.
// ✔ Complessità ottimale O(1).

//! Contro

// ❌ Non verifica che il parametro ricevuto sia effettivamente un oggetto.
// ❌ Se viene passato null genera un errore perché tenta di accedere alle proprietà.
// ❌ Non protegge da input non validi come undefined o altri tipi primitivi.

//*

// Valutazione generale:
// Soluzione corretta e adatta a superare il kata. Manca solo una piccola validazione iniziale dell'oggetto per essere più robusta.
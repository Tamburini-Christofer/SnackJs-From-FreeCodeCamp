//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Creare una funzione che verifichi se un oggetto rispetta uno schema predefinito.
// username deve essere una stringa
// posts deve essere un numero
// verified deve essere un booleano
// role deve essere uno tra: user, creator, moderator, staff, admin
// supporter è opzionale ma, se presente, deve essere un booleano
//todo

//* Tempo di esecuzione:
// 16 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function isValidSchema(obj) {

  let roles = ["user", "creator", "moderator", "staff", "admin"]

  if(typeof obj.username !== "string" ||
     typeof obj.posts !== "number" ||
     typeof obj.verified !== "boolean" ||
     !roles.includes(obj.role)) {
        return false
      }

      if(obj.supporter !== undefined && typeof obj.supporter !== "boolean") {
        return false
     }

      return true
}

console.log(isValidSchema({ username: "rudolph", posts: 15, verified: true, role: "creator" }))

//*

//* Codice scritto da ChatGpt

function isValidSchema(obj) {
  const validRoles = ["user", "creator", "moderator", "staff", "admin"];

  return (
    typeof obj.username === "string" &&
    typeof obj.posts === "number" &&
    typeof obj.verified === "boolean" &&
    validRoles.includes(obj.role) &&
    (obj.supporter === undefined || typeof obj.supporter === "boolean")
  );
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// Codice corretto e funzionante.
// Gestione corretta della proprietà opzionale supporter.
// Buon utilizzo di typeof e includes.
// Logica chiara e facilmente leggibile.
// Ottima organizzazione dei controlli con ritorni immediati.

//! Contro
// La variabile roles potrebbe essere dichiarata con const invece di let.
// L'indentazione potrebbe essere leggermente migliorata per una maggiore leggibilità.
// Manca un controllo che verifichi che obj sia effettivamente un oggetto valido prima di accedere alle proprietà.
// Alcuni controlli potrebbero essere condensati in un'unica espressione booleana per ridurre il codice.

//* Considerazioni
// Per un tempo di 16 minuti il risultato è molto buono.
// La soluzione dimostra una buona comprensione di:
// - Controllo dei tipi con typeof
// - Proprietà opzionali
// - Utilizzo di array e includes()
// - Strutture condizionali
//
// Codice assolutamente da livello Junior in formazione avanzata.
//*
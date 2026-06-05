//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato un oggetto, verificare che rispetti il seguente schema:
//
// {
//   username: string,
//   posts: number,
//   verified: boolean,
//   role: "user" | "creator" | "moderator" | "staff" | "admin",
//   supporter?: boolean,
//   badges: string[]
// }
//
// supporter è opzionale.
// badges deve essere un array di stringhe (anche vuoto).
// Sono consentite chiavi aggiuntive.
//todo

//* Tempo di esecuzione:
// 5 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function isValidSchema(obj) {

  let roles = ["user", "creator", "moderator", "staff", "admin"]

  if(typeof obj.username !== "string" ||
     typeof obj.posts !== "number" ||
     typeof obj.verified !== "boolean" ||
     !roles.includes(obj.role) || 
     typeof obj.badges !== "object") {
        return false
      }

      if(obj.supporter !== undefined && typeof obj.supporter !== "boolean") {
        return false
     }
     
      for(let values of obj.badges) {
        if(typeof values !== "string") return false
      }

      return true
}

console.log(isValidSchema({ username: "rudolph", posts: 15, verified: true, role: "creator" }))

//*

//* Codice scritto da ChatGpt

function isValidSchema(obj) {
  const roles = ["user", "creator", "moderator", "staff", "admin"];

  if (
    typeof obj.username !== "string" ||
    typeof obj.posts !== "number" ||
    typeof obj.verified !== "boolean" ||
    !roles.includes(obj.role) ||
    !Array.isArray(obj.badges)
  ) {
    return false;
  }

  if (
    obj.supporter !== undefined &&
    typeof obj.supporter !== "boolean"
  ) {
    return false;
  }

  return obj.badges.every(badge => typeof badge === "string");
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// Soluzione corretta nella logica generale.
// Gestione corretta del campo opzionale supporter.
// Verifica dei valori consentiti per role.
// Controllo di ogni elemento presente in badges.
// Codice semplice da leggere.
// Ottima velocità di esecuzione: 5 minuti.

//! Contro
// badges viene controllato con typeof obj.badges === "object".
// Questo permette anche valori non validi come:
// null
// {}
//
// Sarebbe più corretto usare Array.isArray(obj.badges).
//
// Se badges fosse null il ciclo for...of genererebbe un errore.
// Manca un controllo iniziale che obj sia effettivamente un oggetto valido.
// roles potrebbe essere dichiarato con const invece di let.

//* Considerazioni
// In soli 5 minuti hai prodotto una soluzione quasi completa.
// L'unico vero errore tecnico è il controllo di badges tramite typeof.
// Hai però dimostrato di aver capito:
//
// - Controllo dei tipi primitivi
// - Proprietà opzionali
// - Validazione tramite includes()
// - Iterazione degli array con for...of
//
// Prestazione molto buona per tempi così brevi.
//*
//todo Consegna dell'esercizio
/*
Dato un oggetto (JavaScript) o un dizionario (Python), determinare se corrisponde al seguente schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

UserProfile = {
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean,
  badges: string[]
}

{
  users: UserProfile[]
}

Il simbolo della barra verticale (|) indica "oppure".
Il ruolo deve essere uno dei valori di Roles elencati.
Il punto interrogativo (?) dopo supporter indica che il campo è facoltativo, ma se esiste assume il tipo specificato.
UserProfile[] indica un array di oggetti UserProfile. Un array vuoto è valido.
Sono consentite chiavi aggiuntive.
*/
//todo

//* Tempo di esecuzione:
// 20 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function isValidUserProfile(obj) {

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

function isValidSchema(rootObj) {
  if (typeof rootObj !== 'object' || rootObj === null || !Array.isArray(rootObj.users)) {
    return false;
  }

  for (const user of rootObj.users) {
    if (!isValidUserProfile(user)) {
      return false; 
    }
  }

  return true;
}

//*

//* Codice scritto da ChatGpt
/*
Migliorie suggerite:

- Verificare che obj non sia null.
- Verificare che badges sia effettivamente un array.
- Verificare che ogni elemento di users sia un oggetto valido.
- Utilizzare Array.every() per una validazione più compatta.
*/
//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto
// 8/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Logica generale corretta.
// ✔ Hai suddiviso il problema in due funzioni.
// ✔ Gestione corretta del campo opzionale supporter.
// ✔ Controllo corretto dei valori ammessi per role.
// ✔ Verifica corretta del contenuto dell'array badges.
// ✔ Gestione corretta dell'array users.
// ✔ Consente proprietà aggiuntive come richiesto dalla consegna.

//! Contro

// ❌ typeof obj.badges !== "object" accetta anche oggetti normali;
//    sarebbe meglio usare Array.isArray(obj.badges).
//
// ❌ Se obj è null, il codice genera errore.
//
// ❌ Non viene verificato che ogni elemento di users sia effettivamente
//    un oggetto prima di passarlo a isValidUserProfile.
//
// ❌ posts potrebbe essere NaN e verrebbe comunque accettato
//    perché typeof NaN === "number".
//
// ❌ Alcuni controlli potrebbero essere resi più leggibili con Array.every().

//*

// Considerazione finale:
// Ottima soluzione da colloquio junior.
// Hai compreso bene il concetto di schema validation e hai risolto
// l'esercizio senza complicarlo inutilmente.
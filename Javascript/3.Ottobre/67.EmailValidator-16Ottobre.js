//todo Data una stringa, determina se si tratta di un indirizzo email valido utilizzando i seguenti vincoli:

//! Deve contenere esattamente un simbolo @.
//! La parte locale (prima della @):
//! Può contenere solo lettere (a-z, A-Z), cifre (0-9), punti (.), caratteri di sottolineatura (_) o trattini (-).
//! Non può iniziare o terminare con un punto.
//! La parte del dominio (dopo la @):
//! Deve contenere almeno un punto.
//! Deve terminare con un punto seguito da almeno due lettere.
//! Né la parte locale né quella del dominio possono contenere due punti consecutivi.

//? Tempo di esecuzione:
//* Non completato

//?Codice scritto senza utilizzo di ChatGpt

function validate(email) {
  if(!email.includes("@") || 
      email[0] === "."    ||
      email[email.length - 1] === ".") return false

  let symbolEmail = email.indexOf("@")

  for(let i = 0; i < symbolEmail; i++) {
    if("[a-zA-Z0-9.-_!]".includes(email[i])) return true
    else if((email[i] && email[i+1]) === ".") return false
    else return false
  }

  for(let j = symbolEmail; j < email.length; j++) 
  if(!".".includes(email[j]) && (email[j] && email[j+1]) === ".") return false
}

console.log(validate("develop.ment_user@c0D!NG.R.CKS"))

//* ✅ PRO

//* Hai spezzato il problema in local part / domain

//* Usi includes, indexOf, cicli → buona base JS

//* Stai pensando ai casi limite (. all’inizio/fine)

//* Ottimo esercizio di logica 💪

//! ❌ CONTRO

//! ❌ "[a-zA-Z0-9.-_!]" non valida nulla (è solo testo)

//! ❌ return true troppo presto → non controlli tutto

//! ❌ Controllo .. sbagliato

//! ❌ Non garantisci un solo @

//! ❌ Funzione può restituire undefined

//! ❌ Regole richieste non tutte coperte

//! ❌ Codice fragile e difficile da mantenere

//?Codice scritto da ChatGpt

function validate(email) {
  // 1. esattamente un @
  if (email.split("@").length !== 2) return false;

  let [local, domain] = email.split("@");

  // 2. local part
  if (
    local.startsWith(".") ||
    local.endsWith(".") ||
    local.includes("..")
  ) return false;

  if (!/^[a-zA-Z0-9._-]+$/.test(local)) return false;

  // 3. domain part
  if (
    !domain.includes(".") ||
    domain.includes("..")
  ) return false;

  if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain)) return false;

  return true;
}


//? Versione Chat Gpt 

//todo Considerazioni: 

//! N.B.
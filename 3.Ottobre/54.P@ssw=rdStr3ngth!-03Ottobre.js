//todo Data una stringa di password, restituisce "debole", "medio" o "forte" in base alla sicurezza della password.


//! Una password viene valutata in base alle seguenti regole:
//! È lunga almeno 8 caratteri.
//! Contiene sia lettere maiuscole che minuscole.
//! Contiene almeno un numero.
//! Contiene almeno un carattere speciale da questo set: !, @, #, $, %, ^, & o *.
//! Restituisce "debole" se la password soddisfa meno di due delle regole. Restituisce "medio" se la password soddisfa 2 o 3 delle regole. Restituisce "forte" se la password soddisfa tutte e 4 le regole.

//? Tempo di esecuzione:
//* Non completato

//?Codice scritto senza utilizzo di ChatGpt

function checkStrength(password) {
  
  let regoleMin = "abcdefghilmnopqrstuvzjyk";
  let regoleMan = "ABCDEFGHILMNOPQRSTUVZJYK";
  let regoleNum = "0123456789";
  let regoleSym = "!@#$%^&*";

  let contatore = 0;

  if(password.length >= 8) contatore++
  if(password.includes(regoleMin) && regoleMan.includes(regoleMan)) contatore++
  if(password.includes(regoleNum)) contatore++
  if(password.includes(regoleSym)) contatore++

  if(contatore < 2) return contatore
  if(contatore > 2 && contatore <= 3) return "medium"
  if(contatore === 4) return "strong"

}

console.log(checkStrength("pass!!!"))

//?Codice scritto da ChatGpt

function checkStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[!@#$%^&*]/.test(password)) score++;

  if (score <= 2) return "weak";
  if (score <= 4) return "medium";
  return "strong";
}

console.log(checkStrength("pass!!!"));

//* ✅ PRO

//* Hai separato bene le regole (minuscole, maiuscole, numeri, simboli)

//* Usi un contatore (approccio corretto)

//* Controlli la lunghezza della password

//* Ragionamento da esercizio serio 💪

//! ❌ CONTRO (importanti)

//! for (i < 4) inutile → le condizioni vengono contate 4 volte

//! password.includes(regoleMin) ❌
//! → includes controlla stringhe intere, non singoli caratteri

//! regoleMan.includes(regoleMan) ❌ sempre true

//! contatore cresce in modo sballato

//! Ritorni numeri o stringhe → output incoerente

//! 🧠 Problema chiave

//!Devi verificare se la password contiene almeno un carattere di ogni gruppo
//! → serve some() o una regex.

//? Versione Chat Gpt 

function checkStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[!@#$%^&*]/.test(password)) score++;

  if (score <= 2) return "weak";
  if (score <= 4) return "medium";
  return "strong";
}


//todo Considerazioni: 

//* Ok, ci ero arrivato, ma non conoscevo il .test

//! N.B.
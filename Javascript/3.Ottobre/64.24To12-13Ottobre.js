//todo Data una stringa che rappresenta un'ora del giorno nel formato a 24 ore "HHMM", restituisci l'ora nel suo equivalente formato a 12 ore "H:MM AM" o "H:MM PM".

//! L'input fornito sarà sempre una stringa di quattro cifre nel formato a 24 ore, da "0000" a "2359".

//? Tempo di esecuzione:
//* 19 Minuti e 33 Secondi 

//?Codice scritto senza utilizzo di ChatGpt

function to12(time) {

  let hour = time.split("").splice(0,2).join("")
  let minute = time.split("").splice(2).join("")
  let mop = "" 
  
  if(hour < 12) mop = "AM"

  if(hour > 12) {
    mop = "PM";
    hour -= 12
    }

  if(Number(hour) === 0) hour = 12  

  let completeHour = `${Number(hour)}:${minute} ${mop}` 

  return completeHour;
}

console.log(to12("0030"))

//?Codice scritto da ChatGpt
//* Non usato 

//* ✅ Pro

//* Logica AM / PM quasi corretta

//* Uso delle stringhe template ✔️

//* Funziona per diversi casi comuni

//* Codice leggibile per un junior

//! ❌ Contro

//! split().splice() è inutile e costoso

//! hour è stringa → confronti numerici poco chiari

//! Caso 12:xx gestito male (manca PM)

//! Nessuna validazione input

//! Minuti non normalizzati ("30" ok, "3" no)

//! Più conversioni del necessario

//? Versione Chat Gpt 

function to12(time) {
  let hour = Number(time.slice(0, 2));
  let minute = time.slice(2);
  let mop = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  return `${hour}:${minute} ${mop}`;
}

console.log(to12("0030")); // 12:30 AM


//todo Considerazioni: 

//! N.B.
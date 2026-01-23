//todo Data una stringa di undici cifre, restituisci la stringa come numero di telefono in questo formato: "+D (DDD) DDD-DDDD".

//!

//? Tempo di esecuzione:
//* 5 Minuti e 40 secondi

//?Codice scritto senza utilizzo di ChatGpt

function formatNumber(number) {

  let prefisso = number[0]
  let numeroParentesi = number.slice(1,4)
  let preNumero = number.slice(4,7)
  let postNumero = number.slice(7)


  return `+${prefisso} (${numeroParentesi}) ${preNumero}-${postNumero}`;
}

console.log(formatNumber("05552340182"))

//?Codice scritto da ChatGpt
//* Non utilizzato

//* ✅ Pro

//* Funzione semplice e leggibile

//* Restituisce correttamente il formato desiderato

//* Usa template string in modo chiaro

//* Buona separazione delle parti del numero

//! ❌ Contro

//! Funziona solo con numeri a 11 cifre

//! Nessun controllo su input più corto o più lungo

//! Non gestisce numeri con spazi o simboli già presenti

//! Variabili poco descrittive (preNumero, postNumero)

//! Hardcoded, poco flessibile per altri formati

//? versione Chat Gpt

function formatNumber(number) {
  if (!/^\d{11}$/.test(number)) return null; // solo numeri 11 cifre //! i numeri di telefono sono sempre a 11 cifre

  const [prefisso, ...rest] = number;
  const numeroParentesi = rest.slice(0, 3).join("");
  const preNumero = rest.slice(3, 6).join("");
  const postNumero = rest.slice(6).join("");

  return `+${prefisso} (${numeroParentesi}) ${preNumero}-${postNumero}`;
}

console.log(formatNumber("05552340182"));


//todo Considerazioni: 

//! N.B.
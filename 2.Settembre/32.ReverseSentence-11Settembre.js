//todo Data una stringa di parole, restituisci una nuova stringa con le parole in ordine inverso.
//todo Ad esempio, la prima parola dovrebbe essere alla fine della stringa restituita e l'ultima parola dovrebbe essere all'inizio della stringa restituita.

//! Nella stringa data, le parole possono essere separate da uno o più spazi.
//! La stringa restituita deve contenere un solo spazio tra le parole.

//? Tempo di esecuzione:
//* 9 Minuti e 59 secondi 

//?Codice scritto senza utilizzo di ChatGpt

function reverseSentence(sentence) {

  let reverse = sentence.split(" ").reverse().join(" ").trim().replace(/\s+/g, ' ')

  return reverse;
}

console.log(reverseSentence("npm  install  sudo"))

//?Codice scritto da ChatGpt
//* Non usato codice di ChatGpt

//* ✅ PRO

//* Funziona correttamente

//* Gestisce spazi multipli

//* Codice compatto e leggibile

//* Usa bene le string methods

//! ❌ CONTRO

//! trim() è quasi ridondante (già sistemi gli spazi)

//! Tutta la logica su una riga → meno leggibile da mantenere

//! Nessun controllo input (stringa vuota / non stringa)

//? Versione Chat Gpt 

function reverseSentence(sentence) {
  return sentence
    .trim()
    .split(/\s+/)
    .reverse()
    .join(" ");
}


//todo Considerazioni: 

//! N.B.
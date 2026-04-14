//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato un messaggio segreto e un numero intero che rappresenta il numero di lettere utilizzate per spostare il messaggio e codificarlo,
// restituisci la stringa decodificata.
//
// Un numero positivo indica che il messaggio è stato spostato in avanti nell'alfabeto.
// Un numero negativo indica che il messaggio è stato spostato all'indietro nell'alfabeto.
// La distinzione tra maiuscole e minuscole è importante.
// I caratteri non alfabetici non devono essere decodificati.
//todo

//* Tempo di esecuzione:
// 20 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function decode(message, shift) {
  let result = message.split("").map(c => { 
      const code = c.charCodeAt(0);

      if (code >= 65 && code <= 90)
        return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);

      if (code >= 97 && code <= 122)
        return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);

      return c;
    });

  return result.join("")
}

console.log(decode("Zqd xnt njzx?", -1));
//*

//* Codice scritto da ChatGpt
function decode(message, shift) {
  return message
    .split("")
    .map(c => {
      const code = c.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
      }

      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
      }

      return c;
    })
    .join("");
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica perfetta per il Caesar cipher
// - Gestione corretta maiuscole/minuscole
// - Ottimo uso di charCodeAt e fromCharCode
// - Mantieni i caratteri non alfabetici ✔️
// - Codice pulito e leggibile
//! Contro
// - Manca validazione input (shift non numero, stringa vuota ecc.)
// - Piccola ripetizione tra maiuscole e minuscole (si può astrarre)
//*
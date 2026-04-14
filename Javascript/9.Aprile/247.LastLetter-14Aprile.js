//todo Consegna dell'esercizio
// Data una stringa, restituisci la lettera che compare per ultima nell'alfabeto.
// Se due o più lettere sono uguali per l'ultima posizione, restituisci la prima.
// Ignora tutti i caratteri non alfabetici.
//todo

//* Tempo di esecuzione:
// 16 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function getLastLetter(str) {
  let mostLetter = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (/[a-zA-Z]/.test(char)) {
      if (mostLetter === "" || char.toLowerCase() > mostLetter.toLowerCase()) {
        mostLetter = char;
      }
    }
  }

  return mostLetter;
}
//*

//* Codice scritto da ChatGpt
function getLastLetter(str) {
  let result = "";

  for (let char of str) {
    if (/[a-z]/i.test(char)) {
      if (!result || char.toLowerCase() > result.toLowerCase()) {
        result = char;
      }
    }
  }

  return result;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// ✔ Logica corretta e completa
// ✔ Gestione corretta dei caratteri non alfabetici
// ✔ Rispetta il requisito della prima occorrenza
// ✔ Buona leggibilità

//! Contro
// ❌ Regex leggermente ripetitiva (si può semplificare con /[a-z]/i)
// ❌ Nome variabile migliorabile (mostLetter → maxLetter)
// ❌ Si può rendere più moderno con for...of

//*
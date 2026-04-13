//todo Data una stringa, rimuovi tutti gli spazi dalla stringa, inserisci due spazi tra ogni carattere, converti tutte le lettere alfabetiche in maiuscolo e restituisci il risultato.

//! I caratteri non alfabetici devono rimanere invariati (ad eccezione degli spazi).

//? Tempo di esecuzione:
//* 4 minuti e 49 secondi

//?Codice scritto senza utilizzo di ChatGpt

function spaceJam(s) {
  let result = s.toUpperCase().replace(/ /g, '').split("").join("  ")

  return result;
}

console.log(spaceJam("freeCodeCamp"))

//?Codice scritto da ChatGpt

//*Nessun utilizzo

//* Soluzione compatta ed efficace

//* Uso corretto di toUpperCase

//* Regex giusta per rimuovere gli spazi

//* Trasformazione finale chiara

//! Puoi evitare split("").join() usando direttamente una regex per inserire gli spazi
//todo Considerazioni: 

//* Sono orgoglioso del tempo utilizzato :)

//!N.B. Sei un dislessico di merda, quindi ricordati di non confondere la dicitura Reduce con Result e Replace


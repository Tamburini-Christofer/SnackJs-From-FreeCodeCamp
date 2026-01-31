//todo Ricordate gli iPod? Il primo modello è uscito 24 anni fa, il 23 ottobre 2001.

//! Dato un array di oggetti brano che rappresentano la playlist del vostro iPod, restituite un array con i titoli dei due brani più ascoltati, con il brano più ascoltato per primo.

//! Ogni oggetto avrà una proprietà "title" (stringa) e una proprietà "plays" (intero).

//? Tempo di esecuzione:
//* 7 Minuti e 30 secondi

//?Codice scritto senza utilizzo di ChatGpt

function favoriteSongs(playlist) {

  let sortObj = playlist.sort((a,b) => b.plays - a.plays)
  let twoSong = [sortObj[0].title, sortObj[1].title]
  
  return twoSong;
}

console.log( favoriteSongs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ]))

//?Codice scritto da ChatGpt
//* Non usata 

//* ✅ Pro

//* Semplice e leggibile

//* Usa correttamente sort con confronto numerico

//* Restituisce l’output richiesto nell’ordine giusto

//! ❌ Contro

//! sort() modifica l’array originale (side effect ⚠️)

//! Non gestisce casi limite (playlist < 2 canzoni)

//! Ordina tutto l’array anche se servono solo le prime 2 (meno efficiente su array grandi)

//? Versione Chat Gpt 

let sortObj = [...playlist].sort((a,b) => b.plays - a.plays)

//todo Considerazioni: 

//! N.B.
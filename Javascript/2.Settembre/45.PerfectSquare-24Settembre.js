//todo Dato un numero intero, determina se è un quadrato perfetto.

//! Un numero è un quadrato perfetto se puoi moltiplicare un numero intero per se stesso per ottenere il numero. 
//! Ad esempio, 9 è un quadrato perfetto perché puoi moltiplicare 3 per se stesso per ottenerlo.

//? Tempo di esecuzione:
//* 6 Minuti e 54 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function isPerfectSquare(n) {
  if(n === 0 || n === 1) return true

  for(let i = 0; i < n; i++) if(i * i === n) return true
  
  return false
}

console.log(isPerfectSquare(9))

//?Codice scritto da ChatGpt
//* Non utilizzato

//* Pro

//* Facile da capire

//* Nessuna funzione “avanzata”

//! Contro

//! Molto lenta con numeri grandi

//! Ciclo inutile fino a n

//! Non gestisce numeri negativi

//! Poco elegante

//? Versione Chat Gpt 

//todo Considerazioni: 

//! N.B.
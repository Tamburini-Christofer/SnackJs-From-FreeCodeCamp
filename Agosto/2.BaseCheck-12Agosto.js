//todo Data una stringa che rappresenta un numero e una base intera da 2 a 36, ​​determinare se il numero è valido in quella base.

//! La stringa può contenere numeri interi e caratteri maiuscoli o minuscoli.
//! Il controllo non deve fare distinzione tra maiuscole e minuscole.
//! La base può essere qualsiasi numero da 2 a 36.
//! Un numero è valido se ogni carattere è una cifra valida nella base specificata.
//! Esempio di cifre valide per le basi:
//! Base 2: 0-1
//! Base 8: 0-7
//! Base 10: 0-9
//! Base 16: 0-9 e A-F
//! Base 36: 0-9 e A-Z

//? Tempo di esecuzione:
//* 30 Minuti (massimo consentito prima dell'utilizzo di ChatGpt per la risposta e la spiegazione)

//?Codice scritto senza utilizzo di ChatGpt

function isValidNumber(n, base) {
  n.toLowerCase()
  let baseNumber = n.split("")
  switch(base) {
  case (base > 2 && base < 8):

  if(baseNumber.every() === 0 || 1) return true
  break;

  case (base > 8 && base < 10):

  if(baseNumber.every() >= 0 && baseNumber.every() <= 7) return true
  break

  case (base > 10 && base < 16):
  if(baseNumber.every() >= 0 && baseNumber.every() <= 9) return true
  break;

  case (base > 16 && base < 36):
  if(baseNumber.every() >= 0 && baseNumber.every() <= 9 && "abcdef".includes(n)) return true
  break;

  case (base > 36):
  if(baseNumber.every() >= 0 && baseNumber.every() <= 9 && "abcdefghilmnopqrstuvz".includes(n)) return true
  break;
  }

}

console.log(isValidNumber("10101", 2))

//?Codice scritto da ChatGpt

function isValidNumber(n, base) {
  const digits = "0123456789abcdefghijklmnopqrstuvwxyz"; //! Visto che tanto avrei dovuto comparare prima la stringa, conveniva fare una variabile 
  n = n.toLowerCase(); //! Se non lo assegni ad una variabile, il LowerCase non serve a nulla

  const allowed = digits.slice(0, base); //! slice(0, base) prende i primi base caratteri

  return n.split("").every(char => allowed.includes(char)); n.split("") //! trasforma la stringa in un array di caratteri
    //!every(...) → controlla che tutti gli elementi rispettino la condizione allowed.includes(char) → verifica se il carattere è valido per quella base
}

console.log(isValidNumber("10101", 2)); 

//* Hai intuito il problema delle basi numeriche

//* Hai provato a gestire casi diversi

//* Buona iniziativa con every e controlli

//! switch usato in modo errato

//! every() non compreso del tutto

//! Logica troppo complicata per il problema

//! Stringhe immutabili (toLowerCase())

//todo Considerazioni: 

//* L'esercizio è stato approcciato nel modo errato. Ho pensato subito a risolverlo usando le casistiche 
//* di uno "switch", ma a volte la soluzione è più semplice del previsto. 

//!N.B. RIPASSARE LO SWITCH 
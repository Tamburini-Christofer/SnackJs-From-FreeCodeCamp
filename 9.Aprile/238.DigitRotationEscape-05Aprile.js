//todo Consegna dell'esercizio
// Dato un numero intero positivo, determinare se esso, o una qualsiasi delle sue rotazioni,
// è divisibile per il numero delle sue cifre.
// Una rotazione consiste nello spostare la prima cifra alla fine.
// Controllare prima la rotazione 0 (numero originale).
// Restituire il numero della prima rotazione valida, altrimenti "nessuno".
//todo

//* Tempo di esecuzione:
// non specificato
//*

//*Codice scritto senza utilizzo di ChatGpt
function getRotation(n) {

  let result = 0;
  let rot = [n];

  for(let i = 0; i < rot.length; i++) {
    if(rot % rot.length === 0) {
      result++;
      rot = [rot.slice(1, -1), rot[0]]
    }
  }

  return rot;
}
//*

//* Codice scritto da ChatGpt
function getRotation(n) {
  let str = n.toString();
  let len = str.length;

  for (let i = 0; i < len; i++) {
    let num = parseInt(str);

    if (num % len === 0) {
      return num;
    }

    // rotazione
    str = str.slice(1) + str[0];
  }

  return "nessuno";
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 3/10
//todo

//* Pro e contro del mio codice

//* Pro
// Hai iniziato a ragionare sulle rotazioni
// Struttura base della funzione presente
// Tentativo di usare ciclo e condizioni

//! Contro
// rot è un array ma lo usi come numero → errore logico
// rot % rot.length non ha senso
// rotazioni implementate in modo errato (slice sbagliato)
// ciclo non funziona (rot.length non cambia)
// non converti il numero in stringa (fondamentale per rotazioni)
// result inutile e mai usato davvero
// return sbagliato (ritorni rot invece del numero corretto)
//*
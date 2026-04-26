//todo Consegna dell'esercizio
// Partendo da "fizzbuzz":
// - Applica FizzBuzz sulle posizioni delle lettere ad ogni step
// - Continua finché il numero di "z" ≥ numero dato
// - Restituisci il numero di passaggi
//todo

//* Tempo di esecuzione:
// 25 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function explodeFizzbuzz(targetZCount) {
  let currentStr = "fizzbuzz"

  let indice = 0
  let contZ = (str) => (str.match(/z/g)).length

  while (contZ(currentStr) < targetZCount) {
    let nextString = ""
    indice++

   for (let i = 0; i < currentStr.length; i++) {
      let position = i + 1;

      if (position % 3 === 0 && position % 5 === 0) {
        nextString += "fizzbuzz";
      } else if (position % 3 === 0) {
        nextString += "fizz";
      } else if (position % 5 === 0) {
        nextString += "buzz";
      } else {
        nextString += currentStr[i];
      }
    }

    currentStr = nextString;
  }
    return indice
}

console.log(explodeFizzbuzz(9))
//*

//* Codice scritto da ChatGpt
function explodeFizzbuzz(targetZ) {
  let str = "fizzbuzz";
  let steps = 0;

  const countZ = (s) => (s.match(/z/g) || []).length;

  while (countZ(str) < targetZ) {
    let next = "";
    steps++;

    for (let i = 0; i < str.length; i++) {
      let pos = i + 1;

      if (pos % 15 === 0) next += "fizzbuzz";
      else if (pos % 3 === 0) next += "fizz";
      else if (pos % 5 === 0) next += "buzz";
      else next += str[i];
    }

    str = next;
  }

  return steps;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: 8.5 / 10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta e completa ✅
// - Hai gestito bene il loop evolutivo
// - Ottima intuizione su FizzBuzz applicato a stringhe
// - Codice leggibile

//! Contro
// - Bug potenziale: match(/z/g) può tornare null → crash
// - Condizione %3 && %5 meno ottimizzata (meglio %15)
// - Variabili migliorabili (indice, contZ naming)
// - Performance: stringa cresce tantissimo (non scalabile)

//*
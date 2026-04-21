// //todo Consegna dell'esercizio
// Data una stringa di parole, restituisci solo le parole con un numero dispari di lettere.
// Le parole sono separate da uno spazio.
// Restituisci le parole separate da un singolo spazio.
// //todo

// //* Tempo di esecuzione:
// 30 secondi
// //*

//*Codice scritto senza utilizzo di ChatGpt
function getOddWords(str) {
  return str.split(" ").filter((w) => w.length % 2 === 1).join(" ");
}

console.log(getOddWords("This is a super good test"))
//*

//* Codice scritto da ChatGpt
function getOddWords(str) {
  const words = str.split(" ");
  let result = [];

  for (let word of words) {
    if (word.length % 2 !== 0) {
      result.push(word);
    }
  }

  return result.join(" ");
}

console.log(getOddWords("This is a super good test"));
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
9/10
//todo

// //* Pro e contro del mio codice

// //* Pro
// - Soluzione molto pulita e compatta
// - Uso corretto di split, filter e join
// - Logica perfettamente centrata sul problema
// - Ottima leggibilità per chi conosce JS moderno

// //! Contro
// - Meno “didattico” per chi è alle prime armi
// - Non gestisce casi edge (stringa vuota o spazi multipli)

// //*
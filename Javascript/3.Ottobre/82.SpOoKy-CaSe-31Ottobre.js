//todo Data una stringa che rappresenta il nome di una variabile, convertila in "maiuscolo/minuscolo spettrale" utilizzando i seguenti vincoli:

//! Sostituisci tutti i caratteri di sottolineatura (_) e i trattini (-) con una tilde (~).
//! Scrivi in ​​maiuscolo la prima lettera della stringa e tutte le altre lettere successive. Ignora il carattere tilde durante il conteggio. Scrivi in ​​minuscolo tutte le altre lettere.
//! Ad esempio, dato hello_world, restituisci HeLlO~wOrLd.

//? Tempo di esecuzione:
//* Non completato

//?Codice scritto senza utilizzo di ChatGpt

function spookify(boo) {

  let word = []

  for(let i = 0; i < boo.length; i++) {
    if(i % 2 === 0) word.push(boo[i].toUpperCase())
    if(i % 2 === 1) word.push(boo[i].toLowerCase())
  }

  let completeWord = word.join("").replace("_", "~")

  return completeWord;
}

console.log(spookify("hello_world"))

//?Codice scritto da ChatGpt

function spookify(boo) {
  let result = []
  let count = 0

  for (let i = 0; i < boo.length; i++) {
    let char = boo[i]

    if (char === "_" || char === "-") {
      result.push("~")
      continue
    }

    if (count % 2 === 0) {
      result.push(char.toUpperCase())
    } else {
      result.push(char.toLowerCase())
    }

    count++
  }

  return result.join("")
}

console.log(spookify("hello_world")) // HeLlO~wOrLd

//* ✅ PRO

//* Logica chiara e lineare, facile da leggere

//* Uso corretto di toUpperCase() e toLowerCase()

//* Separazione dei caratteri in array prima di unirli → buona pratica

//! ❌ CONTRO

//! .replace("_", "~") sostituisce solo il primo _, non tutti

//! Non gestisce il -, richiesto dal task

//! Conta _ nel calcolo pari/dispari → sbaglia la capitalizzazione

//! La capitalizzazione non ignora i separatori come richiesto

//! Funziona solo per stringhe semplici → poco robusto

//todo Considerazioni: 

//! N.B.
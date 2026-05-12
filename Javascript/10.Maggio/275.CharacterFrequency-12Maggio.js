//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Data una stringa, restituisci un oggetto (JavaScript) o un dizionario (Python) 
// che associa a ciascun carattere il numero di volte in cui compare.
//todo

//* Tempo di esecuzione:
// 8 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function getFrequency(str) {

  let strSpl = str.split("")
  let mapStr = new Map()

  strSpl.forEach(letter => {
       if(mapStr.has(letter)) {
        mapStr.set(letter, mapStr.get(letter) + 1);
    }
    else mapStr.set(letter, 1);
  })

  return Object.fromEntries(mapStr);
}

console.log(getFrequency("test"))

//*

//* Codice scritto da ChatGpt

function getFrequency(str) {
  const frequency = {};

  for (const letter of str) {
    frequency[letter] = (frequency[letter] || 0) + 1;
  }

  return frequency;
}

console.log(getFrequency("test"));

//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// Uso corretto di Map
// Logica chiara e leggibile
// Corretta conversione finale in oggetto
// Buon utilizzo di forEach
// Codice funzionante e ordinato

//! Contro
// split("") è evitabile perché una stringa è già iterabile
// Map è un po’ eccessiva per questo esercizio semplice
// Si può scrivere in modo più compatto
// Mancano const al posto di let dove le variabili non cambiano riferimento

//*
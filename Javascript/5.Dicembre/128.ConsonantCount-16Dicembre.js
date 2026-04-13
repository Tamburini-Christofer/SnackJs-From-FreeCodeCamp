//todo Consegna dell'esercizio
// Data una stringa e un numero di riferimento, determina se la stringa contiene esattamente il numero di consonanti di riferimento.
//todo
//! Requisiti da rispettare
// Le consonanti sono tutti caratteri alfabetici, ad eccezione di "a", "e", "i", "o" e "u".
// Ignora cifre, punteggiatura, spazi e altri caratteri non alfabetici durante il conteggio.
//!

//* Tempo di esecuzione:
//* 7 minmuti e 37 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function hasConsonantCount(text, target) {

  let removeSignText = text.replace(/[^a-zA-Z\s]/g, '').split(" ").join("")

  let conteggio = 0;
  let vocals = ["a","e","i","o","u"]

  for(let i = 0; i < removeSignText.length; i++) {
    if(!vocals.includes(removeSignText[i])) conteggio++
  }

  if(conteggio === target) return true
  else return false
}

console.log(hasConsonantCount("freeCodeCamp Rocks!", 11))

//*

//* Codice scritto da ChatGpt

function hasConsonantCount(text, target) {
  const letters = text
    .toLowerCase()
    .replace(/[^a-z]/g, "");

  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of letters) {
    if (!vowels.includes(char)) {
      count++;
    }
  }

  return count === target;
}

console.log(hasConsonantCount("freeCodeCamp Rocks!", 11));

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 7/10
//*

//* Pro e contro del mio codice

//* Pro

// Regex per rimuovere i caratteri non validi ✔️
// Ciclo semplice e chiaro
// Uso di includes
// Rispetta quasi tutte le regole

//! Contro

// Non converti in lowercase → le vocali maiuscole vengono contate ❌
// .split(" ").join("") inutile (puoi evitare gli spazi già in regex)
// if (...) return true else return false ridondante

//*
//! Altre considerazioni e nota bene
//todo Esecuzione degli esercizi
//? Creazione del file contenente "Numero snack"."Nome snack"-"Giorno del mese".js
//? Comprensione della consegna ed eventuale copia in google translate. 
//? 2 minuti massimo per analizzare la consegna e fare un pensiero prelimianre. 
//? Inizio timer impostato ad un massimale di 30 minuti. Oltre questa soglia, l'esercizio non sarà completato
//? Consultazione con ChatGpt per miglioramenti e sistemazioni
//? Push finale
//! Tre volte a settimana, riguardare lo snack e rivedere possibili soluzioni.
//! Una volta a settimana, riguardare l'andamento mensile e sistemare le lacune.
//! NON DEPRIMERSI 
//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
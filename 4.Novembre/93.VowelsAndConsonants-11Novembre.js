//todo Consegna dell'esercizio
// Data una stringa, restituisce un array con il numero di vocali e il numero di consonanti nella stringa.
//todo

//! Requisiti da rispettare
// Le vocali sono composte da a, e, i, o, u in ogni caso.
// Le consonanti sono composte da tutte le altre lettere in ogni caso.
// Ignora tutti i caratteri non alfabetici.
// Ad esempio, dato "Hello World", restituisce [3, 7].
//!

//* Tempo di esecuzione:

//* 9 minuti e 39 Secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function count(str) {
  let minWord = str.toLowerCase().replace(/[\s+/.,@!?]/g, "")

  let contatoreV = 0
  let contatoreC = 0
  let vocals = ["a","e","i","o","u"]


  for(let i = 0; i < minWord.length; i++) {
    if(vocals.includes(minWord[i])) contatoreV++
    else contatoreC++
  }

  return [contatoreV, contatoreC];
}

console.log(count("Hello, World!"))

//*

//* Codice scritto da ChatGpt

function count(str) {
  let vowels = 0;
  let consonants = 0;

  for (let char of str.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      if ("aeiou".includes(char)) vowels++;
      else consonants++;
    }
  }

  return [vowels, consonants];
}

console.log(count("Hello, World!")); // [3, 7]

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 7/10

//*

//* Pro e contro del mio codice

//* Pro ✅

// toLowerCase() corretto
// Buona distinzione vocali/consonanti
// Codice leggibile
// Output corretto per "Hello, World!"

//! Contro ❌

// Regex incompleta: numeri e altri simboli passano
// Stai contando come consonanti caratteri non lettere
// replace(/[\s+/.,@!?]/g, "") è fragile
// Nome variabili migliorabile (vocals → vowels)

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
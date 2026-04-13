//todo Consegna dell'esercizio
// Data una stringa contenente cifre e altri caratteri, restituisce la somma di tutti i numeri nella stringa.
//todo
//! Requisiti da rispettare
// Considera le cifre consecutive come un unico numero. Ad esempio, "13" conta come 13, non come 1 + 3.
// Ignora tutti i caratteri non numerici.
//!

//* Tempo di esecuzione:
//* 19 Minuti e 40 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function stringSum(str) {

  let onlyNumber = str.replace(/\D/g, " ").split(" ")
  let result = 0;

  for(let i = 0; i < onlyNumber.length; i++) {
     if(onlyNumber[i] !== "") result += (Number(onlyNumber[i]))
  }

  return result;
}

console.log(stringSum("10cats5dogs2birds"))

//*

//* Codice scritto da ChatGpt

function stringSum(str) {
  const numbers = str.replace(/\D/g, " ").split(" ");
  let result = 0;

  for (let n of numbers) {
    if (n !== "") result += Number(n);
  }

  return result;
}

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 8.5/10
//*

//* Pro e contro del mio codice

//* ✅ Pro

// Regex usata bene (\D)
// Gestisci correttamente numeri multi-cifra ✔️
// Codice chiaro e leggibile
// Nessun hardcoding

//! ❌ Contro (minori)

// replace + split crea array inutili
// Ciclo for verboso
// Si può rendere più compatto

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
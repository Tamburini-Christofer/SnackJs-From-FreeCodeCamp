//todo Consegna dell'esercizio
// Dato un array, determina se si tratta di una sequenza FizzBuzz corretta da 1 all'ultimo elemento dell'array. Una sequenza è corretta se:
//todo
//! Requisiti da rispettare
// I numeri multipli di 3 vengono sostituiti con "Fizz"
// I numeri multipli di 5 vengono sostituiti con "Buzz"
// I numeri multipli sia di 3 che di 5 vengono sostituiti con "FizzBuzz"
// Tutti gli altri numeri rimangono interi in ordine crescente, a partire da 1.
// L'array deve iniziare da 1 e non deve avere elementi mancanti o in eccesso.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function isFizzBuzz(sequence) {

  let isTrue = true;

  for(let i = 1; i < sequence.length; i++) {
  
    if((i % 3 === 0 && i % 5 === 0) !== "FizzBuzz") isTrue = false
    else if((i % 3 === 0) !== "Fizz") isTrue = false
    else if((i % 5 === 0) !== "Buzz") isTrue = false
    else if((i !== sequence[i]) && (sequence[i] !== "Fizz") || (sequence[i] !== "Buzz")) isTrue = false
    
    if(isTrue === false) return false
  }

  return isTrue;
}

console.log(isFizzBuzz([1, 2, "Fizz", 4]))

//*

//* Codice scritto da ChatGpt

function isFizzBuzz(sequence) {

  if (sequence[0] !== 1) return false

  for (let i = 0; i < sequence.length; i++) {
    let expected = ""

    const number = i + 1

    if (number % 3 === 0) expected += "Fizz"
    if (number % 5 === 0) expected += "Buzz"

    if (!expected) expected = number

    if (sequence[i] !== expected) return false
  }

  return true
}

//*

//* Valutazione al codice proposta da ChatGpt

//*Voto 4/10

//*

//* Pro e contro del mio codice

//* ✅ Pro

// Buon tentativo di controllo condizionale
// Hai pensato a interrompere subito se falso
// Struttura generale presente

//! ❌ Contro

// Confronti logici errati
// Indici sbagliati
// Condizione finale logicamente scorretta
// Troppo complesso rispetto al necessario
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
//todo Consegna dell'esercizio
// Dato un numero intero (n), restituisci un array di numeri interi da 1 a n (inclusi), sostituendo i numeri multipli di:
//todo
//! Requisiti da rispettare
// 3 con "Fizz".
// 5 con "Buzz".
// 3 e 5 con "FizzBuzz".
//!

//* Tempo di esecuzione:
//* 4 minuti e 47 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function fizzBuzz(n) {

  let result = []

  for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz")
    else if(i % 3 === 0) result.push("Fizz")
    else if(i % 5 === 0) result.push("Buzz")
    else result.push(i)
  }
  
  return result;
}

console.log(fizzBuzz(20))

//*

//* Codice scritto da ChatGpt

function fizzBuzz(n) {
  const result = []

  for (let i = 1; i <= n; i++) {
    let value = ""

    if (i % 3 === 0) value += "Fizz"
    if (i % 5 === 0) value += "Buzz"

    result.push(value || i)
  }

  return result
}


//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 10/10
//*

//* Pro e contro del mio codice

//* ✅ Pro

// Logica perfetta
// Ordine condizioni corretto
// Codice leggibile
// Nessuna ridondanza
// Pronto per un interview base

//! ❌ Contro

// Nessuna gestione input negativo (ma spesso non richiesta)
// È la versione “classica”, non la più flessibile

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
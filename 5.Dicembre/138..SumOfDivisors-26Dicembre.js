//todo Consegna dell'esercizio
// Dato un numero intero positivo, restituisci la somma di tutti i suoi divisori.
//todo
//! Requisiti da rispettare
// Un divisore è qualsiasi numero intero che divide il numero in modo uniforme (il resto è 0).
// Conta ogni divisore una sola volta.
// Ad esempio, dato 6, restituisci 12 perché i divisori di 6 sono 1, 2, 3 e 6 e la loro somma è 12.
//!

//* Tempo di esecuzione:
//* 2 Minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function sumDivisors(n) {

  let result = 0;

  for(let i = 0; i <= n; i++) if(n % i === 0) result += i

  return result;
}

console.log(sumDivisors(6))

//*

//* Codice scritto da ChatGpt

function sumDivisors(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result += i;
  }

  return result;
}

console.log(sumDivisors(6)); // 12

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 6/10
//*

//* Pro e contro del mio codice

//* Pro

// Logica generale corretta (uso di %)
// Variabili chiare
// Ritorni il risultato giusto per caso, non per sicurezza

//! Contro

// Errore critico: i = 0 → divisione per zero ❌
// Loop inefficiente (controlli numeri inutili)
// Manca protezione sugli input

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
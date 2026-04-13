//todo Consegna dell'esercizio
// Dati due numeri interi, restituisci il minimo comune multiplo (mcm) dei due numeri.
//todo
//! Requisiti da rispettare
// Il mcm di due numeri è il più piccolo intero positivo multiplo di entrambi i numeri. Ad esempio, dati 4 e 6, restituisci 12 perché:
// I multipli di 4 sono 4, 8, 12 e così via.
// I multipli di 6 sono 6, 12, 18 e così via.
// 12 è il più piccolo numero multiplo di entrambi.
//!

//* Tempo di esecuzione:

//* 16 Minuti e 26 Secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function lcm(a, b) {

  let resultA = 0;
  let resultB = 0;

  for(let i = 1; i < 100; i++) {
    resultA = a * i;
  for(let j = 1; j < 100; j++) {
    resultB = b * j;
    if(resultA === resultB) return resultA
  }}
}

console.log(lcm(4, 6))

//*

//* Codice scritto da ChatGpt

function lcm(a, b) {
  function gcd(x, y) {
    while (y !== 0) {
      [x, y] = [y, x % y];
    }
    return x;
  }

  return Math.abs(a * b) / gcd(a, b);
}

console.log(lcm(4, 6)); // 12

//*

//* Valutazione al codice proposta da ChatGpt

//? Voto 5/10

//*

//* Pro e contro del mio codice

//* Pro ✅

// Idea corretta: confrontare i multipli
// Ritorni appena trovi il risultato (bene)
// Codice facile da seguire

//! Contro ❌

// Limite hardcoded a 100 → bug grave
// Doppio for → complessità inutile
// Se non trova nulla → ritorna undefined
// Non gestisce input grandi o casi limite

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
//todo Consegna dell'esercizio
// Dati due numeri interi positivi che rappresentano la larghezza e l'altezza di un rettangolo, determina quanti rettangoli possono essere contenuti in quello dato.
//todo

//! Requisiti da rispettare
// Conta solo i rettangoli con larghezza e altezza intere.
// Ad esempio, dati 1 e 3, restituisci 6. Tre rettangoli 1x1, due rettangoli 1x2 e un rettangolo 1x3.
//!

//* Tempo di esecuzione:

//* Non completato

//*

//*Codice scritto senza utilizzo di ChatGpt

function countRectangles(width, height) {

  let totRett = 0;
  let rett = width * height

  for(let i = 1; i <= rett; i++) { 
  totRett = Math.ceil(totRett + rett / i)
  }

  return totRett;
}

console.log(countRectangles(3, 2))

//*

//* Codice scritto da ChatGpt
function countRectangles(width, height) {
  return (width * (width + 1) / 2) * (height * (height + 1) / 2);
}

console.log(countRectangles(3, 2)); // 18
console.log(countRectangles(1, 3)); // 6

//*

//* Valutazione al codice proposta da ChatGpt

//! Voto 2/10 

//*

//* Pro e contro del mio codice

//* Pro ✅

// Hai capito che il problema è matematico
// Provi a generalizzare (bene l’idea)

//! Contro ❌

// rett = width * height è fuori contesto
// Math.ceil usato senza senso matematico
// Il ciclo non rappresenta rettangoli
// Output errato già da casi semplici
// Soluzione non difendibile a colloquio

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
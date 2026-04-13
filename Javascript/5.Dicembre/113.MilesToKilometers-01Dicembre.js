//todo Consegna dell'esercizio
// Data una distanza in miglia come numero, restituisci la distanza equivalente in chilometri.
//todo
//! Requisiti da rispettare
// L'input sarà sempre un numero non negativo.
// 1 miglio equivale a 1,60934 chilometri.
// Arrotonda il risultato a due cifre decimali.
// Rimuovi gli zeri finali non necessari dal risultato arrotondato.
//!

//* Tempo di esecuzione:
//* 1 Minuto e 15 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function convertToKm(miles) {

  let converted = (miles * 1.60934).toFixed(2)

  return converted;
}

console.log(convertToKm(21))

//*

//* Codice scritto da ChatGpt

function convertToKm(miles) {
  let km = miles * 1.60934;
  let rounded = Number(km.toFixed(2));
  return rounded;
}

console.log(convertToKm(21));

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 7/10
//*

//* Pro e contro del mio codice
//* ✅ Cosa hai fatto bene

// Formula corretta
// Arrotondamento a 2 decimali corretto
// Codice pulito e semplice

//! ❌ Problemi

// toFixed() restituisce una stringa, non un numero
// Non rimuove gli zeri finali inutili (10.50 → dovrebbe diventare 10.5)
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
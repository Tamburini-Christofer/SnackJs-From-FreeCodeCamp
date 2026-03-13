//todo Consegna dell'esercizio
// Data una stringa, restituiscila così com'è se è lunga 20 caratteri o meno. Se è più lunga di 20 caratteri, troncala ai primi 17 caratteri e aggiungi "..." alla fine (in modo che la lunghezza totale sia di 20 caratteri) e restituisci il risultato.
//todo

//* Tempo di esecuzione:
//* 1 Minuto e 43 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function truncateText(text) {
  if(text.length <= 20) return text
  else return text.slice(0,17) + "..."
}

console.log(truncateText("This string should get truncated."))
//*

//* Codice scritto da ChatGpt
function truncateText(text) {
  if (text.length <= 20) return text
  return text.slice(0, 17) + "..."
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 10/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Controllo corretto della lunghezza
// ✔ slice(0,17) corretto
// ✔ "..." aggiunto correttamente
// ✔ Codice molto leggibile
// ✔ Complessità ottima

//! Contro

// Nessun errore logico.
// L’unica micro-ottimizzazione possibile è evitare l'else.

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
//todo Consegna dell'esercizio
// Dato un timestamp (numero di millisecondi dall'epoca Unix), restituisci:
//todo

//! Requisiti da rispettare
// "odd" se il giorno del mese per quel timestamp è dispari.
// "even" se il giorno del mese per quel timestamp è pari.
// Ad esempio, dato 1769472000000, un timestamp per il 27 gennaio 2026, restituisci "odd" perché il numero del giorno (27) è un numero dispari.
// Nota: il timestamp è in millisecondi e dovresti usare la data nel fuso orario UTC, non nell'ora locale.
//!

//* Tempo di esecuzione:
//* 3 Minuti e 22 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function oddOrEvenDay(timestamp) {

  let dateGet = new Date(timestamp)
  let dayGet = dateGet.getUTCDate()

  if(dayGet % 2 === 0) return "even"
  else return "odd"
}

console.log(oddOrEvenDay(6739456780000))
//*

//* Codice scritto da ChatGpt
function oddOrEvenDay(timestamp) {

  const day = new Date(timestamp).getUTCDate()

  if(day % 2 === 0) return "even"
  return "odd"

}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 9/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Uso corretto di Date(timestamp)
// ✔ Hai usato getUTCDate() (perfetto per la consegna)
// ✔ Logica modulo % 2 corretta
// ✔ Codice leggibile
// ✔ Funzione chiara

//! Piccoli miglioramenti

// 🔸 else non necessario dopo return
// 🔸 Variabili un po' verbose (dateGet, dayGet)

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
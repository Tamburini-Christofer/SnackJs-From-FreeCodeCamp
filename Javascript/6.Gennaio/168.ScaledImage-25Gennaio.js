//todo Consegna dell'esercizio
// Data una stringa che rappresenta la larghezza e l'altezza di un'immagine e un numero per scalare l'immagine, restituisce la larghezza e l'altezza scalate.
//todo

//! Requisiti da rispettare
// La stringa di input è nel formato "LxA". Ad esempio, "800x600".
// La scala è un numero per cui moltiplicare la larghezza e l'altezza.
// Restituisce le dimensioni scalate nello stesso formato "LxA".
//!

//* Tempo di esecuzione:
//* 1 Minuti e 22 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function scaleImage(size, scale) {
  return size.split("x").map((n) => n * scale).join("x")
}

console.log(scaleImage("800x600", 2))
//*

//* Codice scritto da ChatGpt
function scaleImage(size, scale) {
  return size
    .split("x")
    .map(n => Number(n) * scale)
    .join("x");
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 9/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Soluzione molto pulita
// ✔ Ottimo uso di split → map → join
// ✔ Codice compatto e leggibile
// ✔ JavaScript converte automaticamente la stringa in numero (n * scale)
// ✔ Nessun codice inutile

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
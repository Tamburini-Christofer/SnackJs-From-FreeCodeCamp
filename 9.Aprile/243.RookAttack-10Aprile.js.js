//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Date due stringhe che indicano la posizione di due torri su una scacchiera,
// determina se possono attaccarsi a vicenda.
// Le torri si attaccano se sono sulla stessa riga o colonna.
//todo

//* Tempo di esecuzione:
// 2 minuti e 22 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function rookAttack(rook1, rook2) {

  let colOne = rook1.slice(0,1)
  let colTwo = rook2.slice(0,1)

  let celOne = rook1.slice(1)
  let celTwo = rook2.slice(1)

  return colOne === colTwo || celOne === celTwo

  return c;
}

console.log(rookAttack("A1", "A8"))
//*

//* Codice scritto da ChatGpt
function rookAttack(rook1, rook2) {
  const col1 = rook1[0];
  const col2 = rook2[0];

  const row1 = rook1.slice(1);
  const row2 = rook2.slice(1);

  return col1 === col2 || row1 === row2;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Soluzione corretta e pulita
// - Logica semplice e diretta
// - Ottimo tempo di esecuzione

//! Contro
// - return c; inutile (codice morto)
// - Nomi variabili migliorabili (cel → row)

//*
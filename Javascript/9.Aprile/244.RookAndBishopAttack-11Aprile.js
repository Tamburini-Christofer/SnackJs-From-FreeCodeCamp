//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Data la posizione di una Torre e di un Alfiere, determina se uno dei due può attaccare l’altro.
// Torre: stessa riga o colonna.
// Alfiere: diagonale.
// Ritorna "Torre", "Alfiere" o "Nessuno".
//todo

//* Tempo di esecuzione:
// 6 minuti e 42 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function rookBishopAttack(rook, bishop) {

  let colRook = rook.slice(0,1)
  let colBishop = bishop.slice(0,1)

  let rowRook = rook.slice(1)
  let rowBishop = bishop.slice(1)

  if(colRook === colBishop) return "rook"
  else if(rowBishop % rowRook === 0 || rowRook % rowBishop === 0) return "bishop"
  else return "neither"
}

console.log(rookBishopAttack("A1", "A5"))
//*

//* Codice scritto da ChatGpt
function rookBishopAttack(rook, bishop) {
  const colR = rook.charCodeAt(0);
  const colB = bishop.charCodeAt(0);

  const rowR = Number(rook.slice(1));
  const rowB = Number(bishop.slice(1));

  // Torre
  if (colR === colB || rowR === rowB) return "Torre";

  // Alfiere (diagonale)
  if (Math.abs(colR - colB) === Math.abs(rowR - rowB)) return "Alfiere";

  return "Nessuno";
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 6/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Buona struttura base
// - Hai separato correttamente riga e colonna
// - Codice leggibile

//! Contro
// - Logica alfiere sbagliata (non è una divisione ma differenza assoluta)
// - Non controlli la riga per la torre (solo colonna)
// - Output non conforme ("rook" invece di "Torre")
// - Mancata conversione numerica delle righe

//*
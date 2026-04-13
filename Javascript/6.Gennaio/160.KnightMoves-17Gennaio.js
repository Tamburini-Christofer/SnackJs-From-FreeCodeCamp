//todo Consegna dell'esercizio
// Data la posizione di un cavallo su una scacchiera, restituisci il numero di caselle valide in cui il cavallo può muoversi.
//todo

//! Requisiti da rispettare

// Una scacchiera standard è 8x8, con colonne etichettate dalla A alla H (da sinistra a destra) e righe etichettate dalla 1 alla 8 (dal basso verso l'alto). Si presenta così:

// A8 B8 C8 D8 E8 F8 G8 H8
// A7 B7 C7 D7 E7 F7 G7 H7
// A6 B6 C6 D6 E6 F6 G6 H6
// A5 B5 C5 D5 E5 F5 G5 H5
// A4 B4 C4 D4 E4 F4 G4 H4
// A3 B3 C3 D3 E3 F3 G3 H3
// A2 B2 C2 D2 E2 F2 G2 H2
// A1 B1 C1 D1 E1 F1 G1 H1
// Un cavallo si muove a "L": due caselle in una direzione (orizzontale o verticale) e una casella nella direzione perpendicolare.

// Ciò significa che un cavallo può muoversi fino a otto posizioni possibili, ma meno quando si trova vicino ai bordi della scacchiera. Ad esempio, se un cavallo si trova in A1, può muoversi solo in B3 o C2.

//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function knightMoves(position) {

  let contatore = 0;

  const scacchiera = [
  ["A8","B8","C8","D8","E8","F8","G8","H8"],
  ["A7","B7","C7","D7","E7","F7","G7","H7"],
  ["A6","B6","C6","D6","E6","F6","G6","H6"],
  ["A5","B5","C5","D5","E5","F5","G5","H5"], 
  ["A4","B4","C4","D4","E4","F4","G4","H4"], 
  ["A3","B3","C3","D3","E3","F3","G3","H3"],
  ["A2","B2","C2","D2","E2","F2","G2","H2"],
  ["A1","B1","C1","D1","E1","F1","G1","H1"]
];

  for(let i = 0; i < scacchiera.length; i++) {
    for(let j = 0; j < scacchiera[i].length; j++) {
      if(scacchiera[i][j] === position && typeof scacchiera[i-1][j+2] === "string") contatore++
      if(scacchiera[i][j] === position && typeof scacchiera[i+1][j+2] === "string") contatore++
      if(scacchiera[i][j] === position && typeof scacchiera[i-1][j-2] === "string") contatore++
      if(scacchiera[i][j] === position && typeof scacchiera[i+1][j-2] === "string") contatore++

      if(scacchiera[i][j] === position && typeof scacchiera[i-2][j+1] === "string") contatore++
      if(scacchiera[i][j] === position && typeof scacchiera[i+2][j+1] === "string") contatore++
      if(scacchiera[i][j] === position && typeof scacchiera[i-2][j-1] === "string") contatore++
      if(scacchiera[i][j] === position && typeof scacchiera[i+2][j-1] === "string") contatore++
    }
  }

  return contatore;
}

console.log(knightMoves("A1"))
//*

//* Codice scritto da ChatGpt
function knightMoves(position) {
  const cols = ["A","B","C","D","E","F","G","H"];
  const rows = ["1","2","3","4","5","6","7","8"];

  // Trasforma la posizione in coordinate numeriche
  const x = cols.indexOf(position[0]);
  const y = rows.indexOf(position[1]);

  // Tutti i possibili movimenti del cavallo
  const moves = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1]
  ];

  let count = 0;

  for (let [dx, dy] of moves) {
    const nx = x + dx;
    const ny = y + dy;
    // Controlla se siamo dentro la scacchiera
    if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) count++;
  }

  return count;
}

console.log(knightMoves("A1")); // 2
console.log(knightMoves("D4")); // 8
console.log(knightMoves("H8")); // 2
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 6/10
//todo

//* Pro e contro del mio codice

//* Pro:

// Hai capito correttamente la logica dei movimenti del cavallo e li hai tutti elencati.
// Hai creato la scacchiera in modo chiaro e leggibile.
// Il codice funziona in alcuni casi e restituisce un numero corretto per posizioni centrali.

//! Contro:

// Non gestisci i bordi correttamente: se i-1 o j-2 vanno fuori dall’array, ottieni undefined, ma il controllo typeof scacchiera[i-1][j-2] === "string" evita errori solo parzialmente.
// Ripetizione di codice: stai scrivendo 8 if quasi identici. Questo rende difficile la manutenzione.
// Non hai separato la logica di movimento dalle verifiche, rendendo il codice verboso.
// Scacchiera fissa come array 2D con stringhe: più semplice sarebbe usare coordinate numeriche per calcoli.

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
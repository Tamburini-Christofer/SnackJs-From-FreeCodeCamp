// //todo Consegna dell'esercizio
// Dato un carattere, determina se la sua rappresentazione binaria a 8 bit può essere trovata nella griglia,
// orizzontalmente o verticalmente, in entrambe le direzioni.
// //todo

// //* Tempo di esecuzione:
// 17 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function isInCrossword(char) {

  let convertedLetter = char.charCodeAt()
  let convertedBinary = convertedLetter.toString(2).padStart(8, '0')

  const righeBinario = [
    "01000001",
    "01101111",
    "01000100",
    "01100101",
    "01010010",
    "01010100",
    "01101000",
    "10101110"
  ];
  const colonneBinario = [
    "00000001",
    "11111110",
    "01010011",
    "00001100",
    "01000011",
    "01110101",
    "01001001",
    "11010000"
  ];

  const righeBinarioReverse = righeBinario.map((n) => n.split("").reverse().join(""))
  const colonneBinarioReverse = colonneBinario.map((n) => n.split("").reverse().join(""))

  const completo = [...righeBinario, ...colonneBinario, ...righeBinarioReverse, ...colonneBinarioReverse];

  return completo.includes(convertedBinary);
}

console.log(isInCrossword("I"))
//*

//* Codice scritto da ChatGpt
function isInCrossword(char) {
  const grid = [
    [0,1,0,0,0,0,0,1],
    [0,1,1,0,1,1,1,1],
    [0,1,0,0,0,1,0,0],
    [0,1,1,0,0,1,0,1],
    [0,1,0,1,0,0,1,0],
    [0,1,0,1,0,1,0,0],
    [0,1,1,0,1,0,0,0],
    [1,0,1,0,1,1,1,0]
  ];

  const target = char.charCodeAt(0).toString(2).padStart(8, '0');

  const lines = [];

  // righe
  for (let row of grid) {
    lines.push(row.join(""));
    lines.push(row.slice().reverse().join(""));
  }

  // colonne
  for (let i = 0; i < 8; i++) {
    let col = "";
    for (let j = 0; j < 8; j++) {
      col += grid[j][i];
    }
    lines.push(col);
    lines.push(col.split("").reverse().join(""));
  }

  return lines.includes(target);
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
8 / 10
//todo

//* Pro e contro del mio codice

// //* Pro
// - Idea molto intelligente: hai già preparato righe e colonne
// - Codice compatto e veloce
// - Uso corretto di binary conversion
// - Gestione anche dei reverse 👍

// //! Contro
// - Le colonne sono hardcoded → poco scalabile
// - Se cambia la griglia, devi rifare tutto a mano
// - Non costruisci davvero la griglia (meno “realistico”)
// - Piccolo errore: reverse("") non serve parametro
// - Meno flessibile rispetto a soluzione dinamica

// //*
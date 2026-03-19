//todo Consegna dell'esercizio
// Data una matrice (array di array) e uno shift,
// spostare tutti i valori come se fosse un array continuo.
// Shift positivo → destra
// Shift negativo → sinistra
// Con effetto "circolare" (loop).
//todo

//* Tempo di esecuzione:
// Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function shiftMatrix(matrix, shift) {

  let result = [] 

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(shift > 0 && matrix[i][j] !== matrix[matrix.length[matrix.length]]) {
        for(let k = 0; k < shift; k++) result.push(matrix[i][j])}
      else if(shift > 0 && matrix[i][j] !== matrix[matrix.length[matrix.length]]) result.unshift(matrix[i][j])
    }
  }

  return result;
}

console.log(shiftMatrix([[1, 2, 3], [4, 5, 6]], 1))
//*

//* Codice scritto da ChatGpt
function shiftMatrix(matrix, shift) {
  const flat = matrix.flat();
  const n = flat.length;

  const k = ((shift % n) + n) % n;

  const shifted = flat.slice(-k).concat(flat.slice(0, n - k));

  const result = [];
  let index = 0;

  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      result[i].push(shifted[index++]);
    }
  }

  return result;
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto: 4/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Buon tentativo di iterare tutta la matrice
// - Hai intuito che serve manipolare l’ordine degli elementi
// - Uso di push/unshift coerente con l’idea di shift

//! Contro
// - Logica dello shift non corretta
// - Condizione errata (bug grave su matrix.length)
// - Non gestisci il caso negativo
// - Non tratti i dati come sequenza continua (errore chiave dell’esercizio)
// - Output non nel formato richiesto (matrice)
// - Codice incompleto (non arriva a soluzione)
//*
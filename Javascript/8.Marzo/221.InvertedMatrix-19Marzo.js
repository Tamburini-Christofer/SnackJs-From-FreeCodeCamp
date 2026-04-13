//todo Consegna dell'esercizio
// Data una matrice (array di array) con due valori distinti,
// restituisci una nuova matrice in cui i valori sono invertiti
//todo

//* Tempo di esecuzione:
// 10 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function invertMatrix(matrix) {

  let valore1 = matrix[0][0]
  let valore2 = matrix[0][1]

  let result = []

  for(let i = 0; i < matrix.length; i++) {
    let res = []
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === valore1) res.push(valore2)
      else if(matrix[i][j] === valore2) res.push(valore1)
    }
    result.push(res)
  }

  return result;
}

console.log(invertMatrix([["a", "b"], ["a", "a"]]))
//*

//* Codice scritto da ChatGpt
function invertMatrix(matrix) {
  const valori = [...new Set(matrix.flat())]
  const [valore1, valore2] = valori

  return matrix.map(row =>
    row.map(el => el === valore1 ? valore2 : valore1)
  )
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica chiara e facile da capire
// - Buon uso dei cicli annidati
// - Funziona correttamente sul caso base
// - Tempo di esecuzione ottimo (O(n))

//! Contro
// - Assumi che i due valori siano in matrix[0][0] e matrix[0][1] (non sempre vero)
// - Non gestisce casi con disposizione diversa dei valori
// - Codice un po' più verboso del necessario
// - Manca un fallback (se ci sono più o meno di 2 valori)

//*
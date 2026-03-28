//todo Consegna dell'esercizio
// Dato un intero n, restituisci come array l'n-esima riga del triangolo di Pascal.
// Ogni riga inizia e finisce con 1, e ogni valore interno è la somma dei due precedenti.
//todo

//* Tempo di esecuzione:
// Non specificato
//*

//*Codice scritto senza utilizzo di ChatGpt
function pascalRow(n) {

  let result = [1,1]

  for(let i = 0; i < n; i++) {
    for(let j = 1; j < result.length; j++)  {
      result = [1, result[2] + result[j], 1]
    }
  }

  return result;
}
//*

//* Codice scritto da ChatGpt
function pascalRow(n) {
  if (n === 0) return [1];

  let row = [1];

  for (let i = 1; i <= n; i++) {
    let newRow = [1];

    for (let j = 1; j < row.length; j++) {
      newRow.push(row[j - 1] + row[j]);
    }

    newRow.push(1);
    row = newRow;
  }

  return row;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 3/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Hai capito che la riga parte e finisce con 1
// - Buon tentativo di usare i cicli annidati

//! Contro
// - Logica non corretta per costruire la riga
// - Sovrascrivi result in modo sbagliato
// - Uso errato degli indici (result[2] non ha senso qui)
// - Non costruisci progressivamente le righe precedenti
// - Mancano casi base (es: n = 0)
//*
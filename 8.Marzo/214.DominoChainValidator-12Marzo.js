//todo Consegna dell'esercizio
// Dato un array bidimensionale che rappresenta una sequenza di tessere del domino, determinare se forma una catena valida.
// Ogni elemento dell'array rappresenta una tessera del domino e sarà un array di due numeri da 1 a 6 (inclusi).
// Affinché la catena sia valida, il secondo numero di ogni tessera del domino deve corrispondere al primo numero della tessera successiva.
// Il primo numero della prima tessera e l'ultimo numero dell'ultima tessera non devono necessariamente corrispondere a nulla.
//todo

//* Tempo di esecuzione:
// 10 minuti e 42 secondi
//*


//*Codice scritto senza utilizzo di ChatGpt
function isValidDominoChain(dominoes) {

  let isTrue = true
  let i = 0;

  while(i < dominoes.length - 1) {
    if(dominoes[i][1] === dominoes[i+1][0]) isTrue = true
    else return false
    i++
  }

  return isTrue
}

console.log(isValidDominoChain([[1, 3], [3, 6], [6, 5]]));
//*

//* Codice scritto da ChatGpt
function isValidDominoChain(dominoes) {
  for (let i = 0; i < dominoes.length - 1; i++) {
    if (dominoes[i][1] !== dominoes[i + 1][0]) {
      return false;
    }
  }
  return true;
}

console.log(isValidDominoChain([[1, 3], [3, 6], [6, 5]]));
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta per verificare la catena
// - Funziona con array di qualsiasi lunghezza
// - Gestione semplice con while

//! Contro
// - Variabile `isTrue` inutile (può essere rimossa)
// - Codice leggermente più lungo di una soluzione con for loop
// - Non gestisce array vuoti o non bidimensionali (ma requisito implicito)
//*
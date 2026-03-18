//todo Consegna dell'esercizio
// Data una matrice 5x5 che rappresenta la "casa" al termine di un round di curling, determina quale squadra segna e quanti punti ottiene.
//todo

//! Requisiti da rispettare
// La struttura della matrice:

// La cella centrale (indice [2, 2]) è il "pulsante".

// Le 8 celle che circondano direttamente il pulsante rappresentano l'anello 1.
// E le 16 celle sul bordo esterno della casa rappresentano l'anello 2.
// Nella matrice data:

// "" rappresenta uno spazio vuoto.

// "R" rappresenta uno spazio con una pietra rossa.

// "Y" rappresenta uno spazio con una pietra gialla.

// Regole di punteggio:

// Solo una squadra può segnare per round.
// La squadra con la pietra più vicina al pulsante segna.
// La squadra che segna guadagna 1 punto per ogni sua pietra che è più vicina al pulsante rispetto alla pietra più vicina dell'avversario.
// Più basso è il numero dell'anello, più vicina è la pietra al centro.
// Se le pietre più vicine di entrambe le squadre sono alla stessa distanza dal centro, nessuna squadra segna.

// Valore di ritorno:

// Una stringa nel formato "squadra: numero_di_punti". Ad esempio: "R: 2".

// oppure "Nessun punto assegnato" se nessuna delle due squadre ha segnato punti.
// Ad esempio, dato:

// [
// [ [".", ".", "R", ".", "."],
// [ [".", "R", ".", ".", "."],
// [[Y", ".", ".", ".", "."],
// [ [".", "R", ".", ".", "."],
// [ [".", ".", ".", ".", "."]
// ]
// Restituisci "R: 2". Le due pietre rosse nell'anello 1 sono a pari merito per la distanza più ravvicinata e sono le uniche due pietre più vicine di quelle gialle.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function scoreCurling(house) {
  
  let contatoreRed = 0;
  let contatoreYellow = 0;
  let parita = 0;

  let ringOne = [house[0], house[1][0], house[1][5], house[2][0], house[2][5], house[3][0], house[3][5], house[4][0], house[4][5], house[5]]
  let ringTwo = [house[1][1], house[1][2], house[1][3], house[2][1], house[2][3], house[3][1], house[3][2], house[3][3]]

  for(let i = 0; i < house.length; i++) {
    for(let j = 0; j < house[i].length; j++){
      if(house[0][j] === "R" && !ringOne.includes("Y")) contatoreRed++
      else if(house[0][j] === "Y" && !ringOne.includes("R")) contatoreYellow++
      else parita++

      if(house[1][j] === "R" && ringOne.includes("R") && !ringTwo.includes("Y")) contatoreRed++
      else if(house[1][j] === "R" && ringTwo.includes("L")) contatoreYellow++
      else parita++

      
      if(house[2][j] === "R" && ringOne.includes("R") && !ringTwo.includes("Y")) contatoreRed++
      else if(house[2][j] === "R" && ringTwo.includes("L")) contatoreYellow++
      else parita++

      if(house[3][j] === "R" && ringOne.includes("R") && !ringTwo.includes("Y")) contatoreRed++
      else if(house[1][j] === "R" && ringTwo.includes("L")) contatoreYellow++
      else parita++

      
      if(house[4][j] === "R" && ringOne.includes("R") && !ringTwo.includes("Y")) contatoreRed++
      else if(house[2][j] === "R" && ringTwo.includes("L")) contatoreYellow++
      else parita++

      if(house[5][j] === "R" && !ringOne.includes("Y")) contatoreRed++
      else if(house[5][j] === "Y" && !ringOne.includes("R")) contatoreYellow++
      else parita++
    }}

    if(contatoreRed > contatoreYellow) return `R: ${contatoreRed}`
    else if(contatoreRed < contatoreYellow) return `Y: ${contatoreYellow}`
    else return "No points awarded" 
}

console.log(scoreCurling([[".", ".", "R", ".", "."], [".", "R", ".", ".", "."], ["Y", ".", ".", ".", "."], [".", "R", ".", ".", "."], [".", ".", ".", ".", "."]]))
//*

//* Codice scritto da ChatGpt
function scoreCurling(house) {
  let red = [];
  let yellow = [];

  function getRing(i, j) {
    if (i === 2 && j === 2) return 0;

    if (
      i >= 1 && i <= 3 &&
      j >= 1 && j <= 3
    ) return 1;

    return 2;
  }

  // raccolta distanze (ring)
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (house[i][j] === "R") red.push(getRing(i, j));
      if (house[i][j] === "Y") yellow.push(getRing(i, j));
    }
  }

  if (!red.length && !yellow.length) return "No points awarded";

  let bestRed = Math.min(...red, Infinity);
  let bestYellow = Math.min(...yellow, Infinity);

  if (bestRed === bestYellow) return "No points awarded";

  if (bestRed < bestYellow) {
    let score = red.filter(r => r < bestYellow).length;
    return `R: ${score}`;
  } else {
    let score = yellow.filter(r => r < bestRed).length;
    return `Y: ${score}`;
  }
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 3/10
//todo

//* Pro e contro del mio codice

//! Contro

// Indici sbagliati (house[5] non esiste in una 5x5 ❌)
// Ring1 e Ring2 invertiti ❌
// Logica completamente sbagliata:
// controlli tipo includes("Y") non bastano
// non stai confrontando distanze reali
// Ripeti condizioni inutili dentro il doppio for
// parita inutile
// Non stai determinando la pietra più vicina per ogni team

//* Pro

// Hai provato a separare i ring (idea giusta 👍)
// Hai usato cicli annidati (giusto approccio)

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
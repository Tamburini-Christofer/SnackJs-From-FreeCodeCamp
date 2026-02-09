//todo Consegna dell'esercizio
// Data una matrice (un array di array) di singole lettere e una parola da trovare, restituisci gli indici di inizio e fine della parola nella matrice.
//todo

//! Requisiti da rispettare
// La matrice data verrà riempita con tutte le lettere minuscole (a-z).
// La ​​parola da trovare sarà sempre presente nella matrice una sola volta.
// La parola da trovare sarà sempre in linea retta in una di queste direzioni:
// da sinistra a destra
// da destra a sinistra
// dall'alto in basso
// dall'alto in basso
// Ad esempio, data la matrice:

// [
// ["a", "c", "t"],
// ["t", "a", "t"],
// ["c", "t", "c"]
// ]
// E la parola "cat", restituisci:

// [[0, 1], [2, 1]]
// Dove [0, 1] sono gli indici per la "c" (inizio della parola) e [2, 1] sono gli indici per la "t" (fine della parola).
//!

//* Tempo di esecuzione:

//* Non concluso 

//*

//*Codice scritto senza utilizzo di ChatGpt

function findWord(matrix, word) {

  let firstCar = word[0]
  let finalCar = word.charAt(word.length - 1)

  let result = []
  

  for (let i = 0; i < matrix.length; i++) {
    if(matrix[i].includes(firstCar)) result.push(matrix.indexOf(matrix[i]))
    if(matrix[i].includes(finalCar)) result.push(matrix.indexOf(matrix[i]))
    for(let j = 0; j < word.length; j++) {
      if(matrix[i][j].includes(firstCar)) result.push(matrix.indexOf(matrix[j]))
      if(matrix[i][j].includes(finalCar)) result.push(matrix.indexOf(matrix[j]))  
    }
  }
  let newResult = [...new Set(result)]
  return result;

}

console.log(findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat"))
//*


//* Codice scritto da ChatGpt

function findWord(matrix, word) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Orizzontale
  for (let i = 0; i < rows; i++) {
    if (matrix[i].join("").includes(word)) return true;
  }

  // Verticale
  for (let c = 0; c < cols; c++) {
    let colWord = "";
    for (let r = 0; r < rows; r++) {
      colWord += matrix[r][c];
    }
    if (colWord.includes(word)) return true;
  }

  return false;
}

console.log(
  findWord(
    [["a","c","t"],["t","a","t"],["c","t","c"]],
    "cat"
  )
);


//*

//* Valutazione al codice proposta da ChatGpt

//! Voto 3/10

//*

//* Pro e contro del mio codice

//* Pro ✅

// Buon uso di includes
// Usi Set per rimuovere duplicati
// Codice leggibile

//! Contro ❌

// matrix.indexOf(matrix[i]) è inutile (hai già i)
// matrix[i][j].includes(...) è sbagliato: è una stringa singola
// Loop su word.length senza senso
// Non controlli sequenze di lettere
// newResult non viene mai usato
// La funzione non trova davvero la parola

//*

//! Altre considerazioni e nota bene

//todo Esecuzione degli esercizi

//? Creazione del file contenente "Numero snack"."Nome snack"-"Giorno del mese".js
//? Comprensione della consegna ed eventuale copia in google translate. 
//? 2 minuti massimo per analizzare la consegna e fare un pensiero prelimianre. 
//? Inizio timer impostato ad un massimale di 30 minuti. Oltre questa soglia, l'esercizio non sarà completato
//? Consultazione con ChatGpt per miglioramenti e sistemazioni
//? Push finale

//! Tre volte a settimana, riguardare lo snack e rivedere possibili soluzioni.
//! Una volta a settimana, riguardare l'andamento mensile e sistemare le lacune.

//! NON DEPRIMERSI 

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
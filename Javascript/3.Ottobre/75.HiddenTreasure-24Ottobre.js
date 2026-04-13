//todo  Dato un array 2D che rappresenta una mappa del fondale oceanico che include un tesoro nascosto e un array con le coordinate ([riga, colonna]) per la prossima immersione della tua ricerca del tesoro, restituisci "Vuoto", "Trovato" o "Recuperato" utilizzando le seguenti regole:

//! L'array 2D specificato conterrà esattamente un tesoro non recuperato, che occuperà più celle.

//! Ogni cella dell'array 2D conterrà uno dei seguenti valori:

//! "-": Nessun tesoro.
//! "O": Una parte del tesoro che non è stata trovata.
//! "X": Una parte del tesoro che è già stata trovata.
//! Se il luogo dell'immersione non contiene tesori, restituisci "Vuoto".

//! Se il luogo dell'immersione trova un tesoro, ma almeno un'altra parte del tesoro rimane non trovata, restituisci "Trovato".

//! Se il luogo dell'immersione trova l'ultima parte non trovata del tesoro, restituisci "Recuperato".

//! Ad esempio, dati:

//! [
//! [ "-", "X"],
//![ "-", "X"],
//! [ "-", "O"]
//! ]
//! E [2, 1] per le coordinate del luogo dell'immersione, restituisci "Recuperato" perché l'immersione ha trovato l'ultima parte non trovata del tesoro.

//? Tempo di esecuzione:
//* Non compeltato 

//?Codice scritto senza utilizzo di ChatGpt

function dive(map, coordinates) {

    let w = coordinates[0]
    let h = coordinates[1]

    let valoreW = map[w][h]

    if(valoreW === "X") return "Recovered";
    if(valoreW === "O") return "Found";
    if(valoreW === "-") return "Empty";

    console.log(valoreW,valoreH)
}

console.log(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]))

//?Codice scritto da ChatGpt

function dive(map, coordinates) {
  const [row, col] = coordinates;
  const cell = map[row][col];

  if (cell === "-") return "Empty";

  // conta le parti NON trovate, escludendo la cella colpita
  let remainingO = 0;

  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      if (!(r === row && c === col) && map[r][c] === "O") {
        remainingO++;
      }
    }
  }

  if (cell === "O" && remainingO === 0) return "Recovered";
  return "Found";
}

//* ✅ Pro

//* Codice chiaro e leggibile

//* Accesso corretto a riga/colonna (map[w][h])

//* Gestisci bene i 3 simboli base (-, O, X)

//! ❌ Contro (importanti)

//! Logica incompleta:
//! "Recovered" non dipende solo dalla cella "X" → devi controllare se esistono ancora "O" nella mappa

//! "Found" è sbagliato: dovrebbe scattare solo se rimangono altre parti non trovate

//! console.log(valoreW,valoreH) → bug (valoreH non esiste)

//! Nessuna gestione di coordinate fuori range

//? Versione Chat Gpt 

//todo Considerazioni: 

//! N.B.
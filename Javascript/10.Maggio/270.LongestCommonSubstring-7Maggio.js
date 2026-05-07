//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Data una stringa, restituisci la sottostringa più lunga che compare più di una volta.

Le sottostringhe possono sovrapporsi.
*/
//todo

//* Tempo di esecuzione:
// 25 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function getLongestSubstring(str) {
  const n = str.length;
  
  for (let len = n - 1; len > 0; len--) {

    const visti = new Set();
    
    for (let i = 0; i <= n - len; i++) {

      const sottostringa = str.substring(i, i + len);
      
      if (visti.has(sottostringa)) {
        return sottostringa; 
      }
      
      visti.add(sottostringa);
    }
  }
  
  return "";
}

console.log(
  getLongestSubstring(
    "the quick brown fox jumped over the lazy dog that the quick brown fox jumped over"
  )
)

//*

//* Codice scritto da ChatGpt

function getLongestSubstring(str) {

  let longest = "";

  for (let i = 0; i < str.length; i++) {

    for (let j = i + 1; j <= str.length; j++) {

      let sub = str.slice(i, j);

      if (
        str.indexOf(sub) !== str.lastIndexOf(sub) &&
        sub.length > longest.length
      ) {
        longest = sub;
      }
    }
  }

  return longest;
}

console.log(
  getLongestSubstring(
    "the quick brown fox jumped over the lazy dog that the quick brown fox jumped over"
  )
)

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto 
// 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro

// Ottima logica generale
// Soluzione efficiente rispetto a molte alternative brute force
// Uso corretto di Set per controllare duplicati
// Gestione corretta delle sottostringhe sovrapposte
// Restituisce subito il risultato appena trova la più lunga
// Codice leggibile e ben organizzato

//! Contro

// I nomi misti italiano/inglese possono rendere il codice meno uniforme
// La complessità rimane alta su stringhe molto grandi
// Manca qualche commento per spiegare il ragionamento

//*
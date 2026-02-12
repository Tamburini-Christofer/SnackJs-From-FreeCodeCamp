//todo Consegna dell'esercizio
// Data una stringa, restituisci il numero di permutazioni distinte che possono essere formate a partire dai suoi caratteri.
//todo
//! Requisiti da rispettare
// Una permutazione è qualsiasi riordinamento dei caratteri nella stringa.
// Non contare le permutazioni duplicate.
// Se la stringa contiene caratteri ripetuti, le disposizioni ripetute devono essere conteggiate una sola volta.
// La stringa conterrà solo lettere (A-Z, a-z).
// Ad esempio, dato "abb", restituisci 3 perché ci sono tre modi unici per disporre le lettere: "abb", "bab" e "bba".
//!

//* Tempo di esecuzione:
//* Non completato 
//*

//*Codice scritto senza utilizzo di ChatGpt
//! Unico caso che non sapevo proprio come iniziare 
//*

//* Codice scritto da ChatGpt
function countPermutations(str) {

  // funzione fattoriale
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  // lunghezza totale
  let total = factorial(str.length);

  // conto le ripetizioni
  let counts = {};

  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }

  // divido per i fattoriali delle ripetizioni
  for (let key in counts) {
    total /= factorial(counts[key]);
  }

  return total;
}

console.log(countPermutations("abb"));   // 3
console.log(countPermutations("abc"));   // 6
console.log(countPermutations("aabb"));  // 6

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
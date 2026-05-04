//todo Consegna dell'esercizio
// Dato un array di parole, restituisci un array bidimensionale
// delle parole raggruppate in anagrammi.
//todo

//* Tempo di esecuzione:
// 26 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function groupAnagrams(words) {
  let map = new Map();

  for (let word of words) {
    let sorted = word.split('').sort().join('');

    if (!map.has(sorted)) {
      map.set(sorted, []);
    }

    map.get(sorted).push(word);
  }

  return Array.from(map.values());
}
//*

//* Codice scritto da ChatGpt
// (uguale al tuo perché è già corretto e ottimale)
function groupAnagrams(words) {
  const map = new Map();

  for (const word of words) {
    const key = word.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }

  return [...map.values()];
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta e completa
// - Uso ottimo di Map
// - Codice leggibile
// - Complessità buona per il problema

//! Contro
// - Nome variabile "sorted" ok ma poteva essere più descrittivo (es. "sortedWord")
// - Piccolo miglioramento possibile con destructuring o sintassi più moderna
// - Manca gestione edge cases (array vuoto, input non valido)
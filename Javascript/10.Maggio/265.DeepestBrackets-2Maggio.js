//todo Consegna dell'esercizio
// Data una stringa con parentesi (), [], {},
// restituisci il contenuto delle parentesi più profonde.
//todo

//* Tempo di esecuzione:
// 25 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function getDeepestContent(str) {
  let maxDepth = -1;
  let currentDepth = 0;
  let results = {};

  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      currentDepth++;
     
      if (!results[currentDepth]) results[currentDepth] = "";
      
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }
    } else if (char === ')' || char === ']' || char === '}') {
      currentDepth--;
    } else {
      if (currentDepth > 0) {
        results[currentDepth] += char;
      }
    }
  }

  return results[maxDepth] ? results[maxDepth].trim() : "";
}
//*

//* Codice scritto da ChatGpt
// versione leggermente più semplice (senza oggetto)
function getDeepestContent(str) {
  let maxDepth = 0;
  let currentDepth = 0;
  let current = "";
  let result = "";

  for (let char of str) {
    if ("([{".includes(char)) {
      currentDepth++;
      current = "";
    } else if (")]}".includes(char)) {
      if (currentDepth === maxDepth) result = current;
      currentDepth--;
    } else {
      if (currentDepth > 0) {
        current += char;
        if (currentDepth >= maxDepth) {
          maxDepth = currentDepth;
          result = current;
        }
      }
    }
  }

  return result.trim();
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 7/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica funzionante 👍
// - Gestione della profondità corretta
// - Idea intelligente: salvare per livello

//! Contro
// - Usi un oggetto quando non serve (overkill)
// - Mischi tutti i caratteri dello stesso livello (rischio bug in casi più complessi)
// - Non separi bene i diversi gruppi annidati
// - Codice un po’ più complesso del necessario
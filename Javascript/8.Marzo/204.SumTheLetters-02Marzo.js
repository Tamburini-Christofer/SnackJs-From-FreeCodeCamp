//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato una stringa, restituire la somma delle sue lettere.
// Le lettere vanno da A-Z (maiuscole o minuscole)
// Valori: A=1, B=2, ..., Z=26
// Ignorare tutti i caratteri non alfabetici.
//todo

//* Tempo di esecuzione:
// 10 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function sumLetters(str) {

  let convStr = str.toLowerCase()

  let resultCount = 0;

  for(let i = 0; i < convStr.length; i++) {
    if(/[a-z]/.test(convStr[i])) resultCount += (convStr[i].charCodeAt() - 96)
  }

  return resultCount;
}

console.log(sumLetters("Hello"))  
//*

//* Codice scritto da ChatGpt
function sumLetters(str) {
  return str
    .toLowerCase()
    .split("")
    .reduce((sum, char) => {
      if (char >= "a" && char <= "z") {
        return sum + (char.charCodeAt(0) - 96);
      }
      return sum;
    }, 0);
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8/10
//todo

//* Pro e contro del mio codice

//* Pro
// ✔ Logica corretta e funzionante
// ✔ Buon uso di charCodeAt
// ✔ Gestione corretta dei caratteri non validi
// ✔ Codice leggibile

//! Contro
// ❌ Regex dentro il loop (leggermente meno performante)
// ❌ Variabile intermedia (convStr) evitabile
// ❌ Si può scrivere in modo più compatto (reduce)

//*
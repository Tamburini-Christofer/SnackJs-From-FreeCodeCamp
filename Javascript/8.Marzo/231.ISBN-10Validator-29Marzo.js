//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Data una stringa, determina se si tratta di un ISBN-10 valido.
// Dopo aver rimosso i trattini:
// - I primi 9 caratteri devono essere cifre
// - L'ultimo può essere cifra o "X"
// Moltiplica ogni cifra per la sua posizione (1→10)
// Se la somma è divisibile per 11 → valido
//todo

//* Tempo di esecuzione:
// 20 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function isValidIsbn10(str) {

  let remStr = str.replaceAll("-", "")
  if (!/^[0-9]{9}[0-9X]$/.test(remStr)) return false;

  let result = 0;

  for(let i = 0; i < remStr.length; i++) {
    let pos = 0;
    if(remStr[i] === "X") result += 10 * pos
    else result += remStr[i] * pos;
    pos++
  }

  return result % 11 === 0;
}

console.log(isValidIsbn10("0-306-40615-1"))
//*

//* Codice scritto da ChatGpt
function isValidIsbn10(str) {
  let remStr = str.replace(/-/g, "");

  if (!/^[0-9]{9}[0-9X]$/.test(remStr)) return false;

  let result = 0;

  for (let i = 0; i < 10; i++) {
    let value = remStr[i] === "X" ? 10 : Number(remStr[i]);
    result += value * (i + 1);
  }

  return result % 11 === 0;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 6.5 / 10
//todo

//* Pro e contro del mio codice

//* Pro
// Regex corretta
// Buona struttura generale
// Uso corretto della validazione iniziale
// Logica quasi completa

//! Contro
// Variabile pos resettata ad ogni ciclo (errore principale)
// Non usi la posizione corretta (i + 1)
// "X" moltiplicato per 0 → inutile
// Conversione numero poco chiara

//*
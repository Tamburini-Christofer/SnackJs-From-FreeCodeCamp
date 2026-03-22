//todo Consegna dell'esercizio
// Data una stringa di parole, restituisci una nuova stringa in cui ogni parola è sostituita dalla sua lunghezza.
// Le parole nella stringa data saranno separate da un singolo spazio.
// Mantieni gli spazi nella stringa restituita.
// Ad esempio, data "hello world", restituisci "5 5".
//todo

//* Tempo di esecuzione:
// 2 minuti e 10 secondi
//*


//*Codice scritto senza utilizzo di ChatGpt
function convertWords(str) {

  let strSplit = str.split(" ").map((n) => n.length).join(" ")

  return strSplit;
}

console.log(convertWords("hello world"));
//*

//* Codice scritto da ChatGpt
function convertWords(str) {
  return str
    .split(" ")
    .map(word => word.length)
    .join(" ");
}

console.log(convertWords("hello world"));
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 10/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Soluzione concisa e chiara
// - Funziona correttamente per qualsiasi stringa di parole
// - Mantiene gli spazi come richiesto

//! Contro
// - Nessuno rilevante
//*
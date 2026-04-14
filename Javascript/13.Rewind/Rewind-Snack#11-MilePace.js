//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dati un numero di miglia percorse e il tempo impiegato per percorrerle nel formato "MM:SS" (minuti:secondi),
// restituisci una stringa che rappresenta il tempo medio impiegato per percorrere ogni miglio,
// sempre nel formato "MM:SS".
// Aggiungi zeri iniziali quando necessario.
//todo

//* Tempo di esecuzione:
// 16 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function millePace(n, stringa) {
  let minuti = Number(stringa.split(":")[0]); 
  let secondi = Number(stringa.split(":")[1]); 

  let secondiTotali = minuti * 60 + secondi; 
  let paceSeconds = Math.floor(secondiTotali / n); 

  let paceMin = String(Math.floor(paceSeconds / 60)).padStart(2, "0");
  let paceSec = String(paceSeconds % 60).padStart(2, "0");

  return `${paceMin}:${paceSec}`;
}

console.log(millePace(1, "06:45"));
//*

//* Codice scritto da ChatGpt
function millePace(n, stringa) {
  const [minuti, secondi] = stringa.split(":").map(Number);

  const totaleSecondi = minuti * 60 + secondi;
  const mediaSecondi = Math.floor(totaleSecondi / n);

  const mm = String(Math.floor(mediaSecondi / 60)).padStart(2, "0");
  const ss = String(mediaSecondi % 60).padStart(2, "0");

  return `${mm}:${ss}`;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta e chiara
// - Buon uso di split e conversione numerica
// - Gestione corretta del formato MM:SS con padStart
// - Codice leggibile
//! Contro
// - Ripeti due volte split invece di destrutturare
// - Variabili migliorabili (nomi leggermente più descrittivi)
// - Mancano controlli su input (formato o divisione per 0)
//*
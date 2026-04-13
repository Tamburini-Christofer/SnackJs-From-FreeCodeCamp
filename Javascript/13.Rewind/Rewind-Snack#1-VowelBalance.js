//todo Consegna dell'esercizio
// Data una stringa, determina se il numero di vocali nella prima metà della stringa
// è uguale al numero di vocali nella seconda metà.
// Se la lunghezza è dispari, ignora il carattere centrale.
//todo

//* Tempo di esecuzione:
// 12 minuti e 36 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function isBalanced(s) {

  let firstPart = 0;
  let secondPart = 0;
  let vocals = "aeiouAEIOU"

  let middle = Math.floor(s.length / 2)

  for(let i = 0; i < middle; i++) if(vocals.includes(s[i])) firstPart++

  for(let j = s.length % 2 === 1 ? middle + 1 : middle; j < s.length; j++) if(vocals.includes(s[j])) secondPart++

  return firstPart === secondPart ? true : false;
}
//*

//* Codice scritto da ChatGpt
function isBalanced(s) {
  const vowels = "aeiouAEIOU";
  const mid = Math.floor(s.length / 2);

  let first = 0;
  let second = 0;

  for (let i = 0; i < mid; i++) {
    if (vowels.includes(s[i])) first++;
  }

  for (let i = s.length % 2 ? mid + 1 : mid; i < s.length; i++) {
    if (vowels.includes(s[i])) second++;
  }

  return first === second;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// ✔ Logica corretta al 100%
// ✔ Gestione perfetta del caso dispari
// ✔ Codice compatto e leggibile
// ✔ Buon uso di includes()

//! Contro
// ❌ Ternario finale inutile (può essere semplificato)
// ❌ Nomi variabili migliorabili (vocals → vowels)
// ❌ Mancano le graffe nei for (meno leggibile a lungo termine)

//*
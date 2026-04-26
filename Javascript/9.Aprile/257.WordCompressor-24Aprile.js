//todo Consegna dell'esercizio
// Data una stringa, restituisci una versione compressa:
// - Prima occorrenza della parola → invariata
// - Occorrenze successive → posizione della prima (partendo da 1)
//todo

//* Tempo di esecuzione:
// 3 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function compress(str) {

  let strSpl = str.split(" ")

  let result = [];

  for(let i = 0; i < strSpl.length; i++) {
    if(!result.includes(strSpl[i])) result.push(strSpl[i])
    else if(result.includes(strSpl[i])) result.push(result.indexOf(strSpl[i]) + 1)
  }

  return result.join(" ");
}

console.log(compress("practice makes perfect and perfect practice makes perfect"))
//*

//* Codice scritto da ChatGpt
function compress(str) {
  const words = str.split(" ");
  const map = {};
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (!(words[i] in map)) {
      map[words[i]] = i + 1;
      result.push(words[i]);
    } else {
      result.push(map[words[i]]);
    }
  }

  return result.join(" ");
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: 7.5 / 10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta ✅
// - Facile da leggere
// - Risolve l’esercizio velocemente
// - Buon uso di array e metodi base

//! Contro
// - Poco efficiente (includes + indexOf → O(n²))
// - result usato sia come output che memoria (meno pulito)
// - Ripeti includes due volte (ridondante)
// - Non scalabile su stringhe lunghe

//*
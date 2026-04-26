//todo Consegna dell'esercizio
// Data una stringa compressa:
// - Le parole restano uguali
// - I numeri vanno sostituiti con la parola alla posizione indicata (partendo da 1)
//todo

//* Tempo di esecuzione:
// 22 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function decompress(str) {
  let splitStr = str.split(" ");
  let result = [];

  for (let i = 0; i < splitStr.length; i++) {
    let word = splitStr[i];

    if (!/\d/.test(word)) {
      result.push(word);
    } 

    else {
      let index = parseInt(word) - 1; 
      result.push(result[index]);
    }
  }

  return result.join(" "); 
}

console.log(decompress("practice makes perfect and 3 1 2 3"));
//*

//* Codice scritto da ChatGpt
function decompress(str) {
  const tokens = str.split(" ");
  const result = [];

  for (let token of tokens) {
    if (isNaN(token)) {
      result.push(token);
    } else {
      result.push(result[Number(token) - 1]);
    }
  }

  return result.join(" ");
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: 8 / 10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta ✅
// - Buona gestione dei riferimenti
// - Uso corretto di parseInt
// - Codice chiaro e leggibile

//! Contro
// - Regex inutile complessa per il check (basta isNaN)
// - /\\d/ può dare falsi positivi (es: "a1")
// - Variabili migliorabili (splitStr → meno pulita)
// - Leggermente più verboso del necessario

//*
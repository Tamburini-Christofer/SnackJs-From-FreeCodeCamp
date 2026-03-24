//todo Consegna dell'esercizio
// Data una stringa di chicchi (' = 1, - = 2, . = 3),
// calcolare la media e restituire il livello di tostatura
//todo

//* Tempo di esecuzione:
// 4 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function detectRoast(beans) {

  let resultMedia = 0;

  for(let i = 0; i < beans.length; i++) {
   if(beans[i] === "\'") resultMedia++
   else if(beans[i] === "\-") resultMedia += 2
   else if(beans[i] === "\.") resultMedia += 3
  }

  if(resultMedia / beans.length < 1.75) return "Light"
  else if(resultMedia / beans.length <= 2.5) return "Medium"
  else return "Dark"
}

console.log(detectRoast("-'-''''''..-'.''-'.'"))
//*

//* Codice scritto da ChatGpt
function detectRoast(beans) {
  const values = {
    "'": 1,
    "-": 2,
    ".": 3
  }

  const total = [...beans].reduce((sum, b) => sum + values[b], 0)
  const avg = total / beans.length

  if (avg < 1.75) return "Light"
  if (avg <= 2.5) return "Medium"
  return "Dark"
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Molto veloce (4 min 🔥)
// - Logica perfettamente corretta
// - Uso chiaro del ciclo for
// - Facile da leggere
// - Complessità ottima O(n)

//! Contro
// - Escape inutili ("\-", "\.") → non servono
// - Ripeti il calcolo della media 3 volte
// - Output non coerente con consegna italiana ("Light" ecc.)
// - Si può rendere più scalabile con una mappa

//*
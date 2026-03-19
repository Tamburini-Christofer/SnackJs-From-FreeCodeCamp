//todo Consegna dell'esercizio
// Data una stringa senza punti,
// aggiungere un punto:
// - prima di ogni spazio che precede una maiuscola
// - alla fine della stringa
//todo

//* Tempo di esecuzione:
//  16 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function addPunctuation(sentences) {
  
  let result = sentences.split(" ")
  let resultFinal = [] 
  
  for(let word of result) {
    if(/^[A-Z]/.test(word) && word !== result[0])  {
      resultFinal.push(".")
      resultFinal.push(word) 
      }
    else resultFinal.push(word)
  }

  resultFinal.push(".")

  return resultFinal.join(" ").replaceAll(" .", ".");
}

console.log(addPunctuation("Hello world It's nice today"))
//*

//* Codice scritto da ChatGpt
function addPunctuation(sentences) {
  let result = sentences.replace(/ ([A-Z])/g, ". $1");
  return result + ".";
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto: 8/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta 👍
// - Buon uso delle regex per individuare le maiuscole
// - Hai gestito bene il primo elemento (caso edge)
// - Soluzione funzionante e leggibile
// - Buon ragionamento step-by-step

//! Contro
// - Soluzione più lunga del necessario (si può fare in 1 riga)
// - Uso di array + join + replaceAll → un po’ pesante
// - replaceAll usato per correggere un effetto collaterale
// - Approccio meno “elegante” rispetto a regex diretta
//*
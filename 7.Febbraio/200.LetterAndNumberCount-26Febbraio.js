//todo Consegna dell'esercizio
// Data una stringa, restituisci un messaggio con il conteggio di lettere e numeri che contiene.
// Le lettere vanno da A a Z e da a a z.
// I numeri vanno da 0 a 9.
// Ignora tutti gli altri caratteri.
// Restituisci "La stringa contiene X lettere e Y numeri.", con gestione singolare/plurale.
//todo

//* Tempo di esecuzione:
// 8 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function countLettersAndNumbers(str) {

  let contatoreLett = 0;
  let contatoreNumber = 0;

  for(let i = 0; i < str.length; i++) {
    if(/[a-z]/i.test(str[i])) contatoreLett++
    else if(/\d/i.test(str[i])) contatoreNumber++
  }

  if(contatoreNumber === 1 && contatoreLett === 1) return `The string has ${contatoreLett} letter and ${contatoreNumber} number.`;
  else if(contatoreLett === 1) return `The string has ${contatoreLett} letter and ${contatoreNumber} numbers.`;
  else if(contatoreNumber === 1) return `The string has ${contatoreLett} letters and ${contatoreNumber} number.`;

  return `The string has ${contatoreLett} letters and ${contatoreNumber} numbers.`;
}

console.log(countLettersAndNumbers("helloworld123"))
//*

//* Codice scritto da ChatGpt
function countLettersAndNumbers(str) {
  let letters = 0;
  let numbers = 0;

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) letters++;
    else if (/[0-9]/.test(char)) numbers++;
  }

  const letterWord = letters === 1 ? "lettera" : "lettere";
  const numberWord = numbers === 1 ? "numero" : "numeri";

  return `La stringa contiene ${letters} ${letterWord} e ${numbers} ${numberWord}.`;
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto: 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta e funzionante
// - Uso corretto delle regex
// - Gestione singolare/plurale completa
// - Codice chiaro e leggibile
// - Tempo ottimo (8 minuti 🔥)

//! Contro
// - Ripetizione nelle condizioni finali (si può semplificare)
// - Output in inglese invece che richiesto in italiano
// - Uso di if/else lungo invece di variabili per singolare/plurale
//*
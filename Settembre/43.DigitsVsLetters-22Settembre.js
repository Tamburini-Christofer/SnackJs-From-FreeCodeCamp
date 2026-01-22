//todo Data una stringa, restituisce "cifre" se la stringa ha più cifre che lettere, "lettere" se ha più lettere che cifre e "pareggio" se ha lo stesso numero di cifre e lettere.

//! Le cifre sono composte da 0 a 9.
//! Le lettere sono composte da a-z, maiuscole o minuscole.
//! Ignora qualsiasi altro carattere.

//? Tempo di esecuzione:
//* 6 minuti e 35 secondi

//?Codice scritto senza utilizzo di ChatGpt

function digitsOrLetters(str) {
  str.toLowerCase()
  let contatoreLet = 0;
  let contatoreNum = 0;

  let letters = "abcdefghilmnopqrstuvzywkjABCDEFGHILMNOPQRSTUVZWKYJ"
  let numbers = "0123456789"

  for(let i = 0; i < str.length; i++) {
    if(letters.includes(str[i])) contatoreLet++
    if(numbers.includes(str[i])) contatoreNum++
  }

  if(contatoreLet > contatoreNum) return "letters"
  if(contatoreLet < contatoreNum) return "digits"
  else return "tie"

}

console.log(digitsOrLetters("abc123!@#DEF"))

//?Codice scritto da ChatGpt
//* Non usata

//* ✅ Pro

//* Logica corretta

//* Ignora correttamente i caratteri speciali

//* Gestione chiara dei tre casi (letters / digits / tie)

//* Ciclo semplice e comprensibile

//! ❌ Contro

//! str.toLowerCase() non ha effetto (manca assegnazione)

//! Stringa letters incompleta e disordinata

//! Doppio controllo includes poco efficiente

//! Codice più complesso del necessario

//? Versione Chat Gpt 

function digitsOrLetters(str) {
  let letters = 0;
  let digits = 0;

  for (const char of str) {
    if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") letters++;
    else if (char >= "0" && char <= "9") digits++;
  }

  if (letters > digits) return "letters";
  if (digits > letters) return "digits";
  return "tie";
}

//todo Considerazioni: 

//! N.B.
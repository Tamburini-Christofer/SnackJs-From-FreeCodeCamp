//todo Data una parola o una frase e una stringa di lettere minuscole, determina se la parola o la frase utilizza almeno una volta tutte le lettere dell'insieme dato e nessun'altra lettera.

//! Ignora i caratteri non alfabetici nella parola o nella frase.
//! Ignora la distinzione tra maiuscole e minuscole nella parola o nella frase.

//? Tempo di esecuzione:
//* Non completato

//?Codice scritto senza utilizzo di ChatGpt

function isPangram(sentence, letters) {
  let sentenceLow = sentence.toLowerCase().split("")
  let lettersLow = letters.toLowerCase().split("")

  for(let i = 0; i < lettersLow.length; i++) {
    if(lettersLow[i].includes(sentenceLow) && lettersLow[i] !== "!" && lettersLow[i] !== "." && lettersLow[i] !== " " ) return true
    else return false
  }

}

console.log(isPangram("hello", "helo"))

//?Codice scritto da ChatGpt

function isPangram(sentence, letters) {
  const sentenceLow = sentence.toLowerCase();

  for (let char of letters.toLowerCase()) {
    if (!sentenceLow.includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("hello", "helo")); 

//! includes usato nel verso sbagliato

//! return nel for rompe la logica

//! confronto array vs stringa

//? Versione Chat Gpt 

//todo Considerazioni: 

//! N.B. RIPETERE I CICLI FOR OF 
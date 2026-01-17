//todo Data una stringa, restituisci la sua versione camel case utilizzando le seguenti regole:

//! Le parole nell'argomento stringa sono separate da uno o più caratteri del seguente set: spazio ( ), trattino (-) o carattere di sottolineatura (_). 
//! Trattare qualsiasi sequenza di questi come un'interruzione di parola.
//! La prima parola deve essere tutta in minuscolo. Ogni parola successiva deve iniziare con una lettera maiuscola, con il resto in minuscolo.
//! Tutti gli spazi e i separatori devono essere rimossi.

//? Tempo di esecuzione:
//* 22 Minuti e 24 secondi

//?Codice scritto senza utilizzo di ChatGpt
function toCamelCase(s) {
  s = s.toLowerCase();

  let word = [];
  let segni = " _-";
  let maiuscolo = false;

  for (let i = 0; i < s.length; i++) {
    if (segni.includes(s[i])) {
      maiuscolo = true;
    } else {
      word.push(maiuscolo ? s[i].toUpperCase() : s[i]);
      maiuscolo = false;
    }
  }

  return word.join("");
}

console.log(toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"));

//?Codice scritto da ChatGpt
//* Non è stata usata

//? Versione Chat Gpt 

//todo Considerazioni: 

//! N.B.
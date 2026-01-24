//todo Data una stringa di messaggio segreto e un numero intero che rappresenta il numero di lettere utilizzate per spostare il messaggio e codificarlo, 
//todo restituisci la stringa decodificata.

//! Un numero positivo indica che il messaggio è stato spostato in avanti nell'alfabeto.
//! Un numero negativo indica che il messaggio è stato spostato indietro nell'alfabeto.
//! Le maiuscole/minuscole sono importanti: i caratteri decodificati devono mantenere le stesse maiuscole/minuscole delle loro controparti codificate.
//! I caratteri non alfabetici non devono essere decodificati.

//? Tempo di esecuzione:
//* 30 minuti e non risolto completamente 

//?Codice scritto senza utilizzo di ChatGpt
function decode(message, shift) {

  let word = [];
  let wordPlus= [];
  let result = 0;
  let stringaRicostruita = ""

  for(let i = 0; i < message.length; i++) {
    if(message[i] === "!" 
    || message[i] === "?" 
    || message[i] === "." 
    || message[i] === " "
    ) word.push(message[i])
    else word.push(message.charCodeAt(i));
  }

  for(let j = 0; j < word.length; j++) {
    if(word[j] > 0 || word[j] !== "!" 
    || word[j] !== "?") result = word[j] + shift;

    if(word[j] < 0 || word[j] !== "!" 
    || word[j] !== "?") result = word[j] - shift;

    if(word[j] === "!" 
    || word[j] === "?" 
    || word[j] === "." 
    || word[j] === " ") result = word[j];

    wordPlus.push(result)
  }

  for (let l = 0; l < wordPlus.length; l++) {
  stringaRicostruita += String.fromCharCode(wordPlus[l]);
}

  return stringaRicostruita;
}

console.log(decode("Xlmw mw e wigvix qiwweki.", 4));

//?Codice scritto da ChatGpt
function decode(message, shift) {
  return message
    .split("") //! Ok, prima li ha splittati in un array, così da poterli mappare
    .map(c => { //! Poi li ha mappati
      const code = c.charCodeAt(0);

      // Maiuscole A-Z
      if (code >= 65 && code <= 90)
        return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65); //! Qui aggiungereun "grazie al cazzo". Non sapevo che le maiuscole
    //!andavano da 65 e 90, stessa cosa per le minuscole

      // Minuscole a-z
      if (code >= 97 && code <= 122)
        return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);

      // Altri caratteri
      return c;
    })
    .join("");
}


//* Hai capito l’uso di charCodeAt / fromCharCode

//* Gestisci punteggiatura e spazi

//* Logica di base del Caesar cipher centrata

//! Condizioni logiche (|| vs &&)

//! Troppi array intermedi → più bug

//! Decodifica anche caratteri non alfabetici

//? Versione Chat Gpt 

//todo Considerazioni: 

//* L'esercizio è stato più tosto del prevvisto. Ero giunto ad una conclusione, ma mancavano gli elementi per renderla effettiva

//! N.B.
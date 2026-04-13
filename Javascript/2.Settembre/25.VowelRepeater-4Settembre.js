//todo Data una stringa, restituisci una nuova versione della stringa in cui ogni vocale è duplicata una volta in più rispetto alla vocale precedente incontrata. 

//! Ad esempio, la prima vocale nella frase dovrebbe rimanere invariata. La seconda vocale dovrebbe apparire due volte di seguito. La terza vocale dovrebbe apparire tre volte di seguito e così via.

//! Le lettere a, e, i, o e u, maiuscole o minuscole, sono considerate vocali.
//! La vocale originale dovrebbe mantenere la sua forma originale.
//! Le vocali ripetute dovrebbero essere minuscole.
//! Tutti i caratteri non vocalici dovrebbero mantenere la loro forma originale.

//? Tempo di esecuzione:
//* Non completato, ma ero vicino

//?Codice scritto senza utilizzo di ChatGpt

function repeatVowels(str) {

  let vocals = "aeiouAEIOU";
  let contatore = 1;
  let finalWord = []

  for(let i = 0; i < str.length; i++) {
    if(vocals.includes(str[i])) {
      for(let j = 1; j <= contatore; j++) {
      finalWord.push(str[j].toLowerCase())
      } 
      contatore++
      
    } else if ((!vocals.includes(str[i]))) finalWord.push(str[i])
  }

  return finalWord;
}

console.log(repeatVowels("hello world"))

//?Codice scritto da ChatGpt

function repeatVowels(str) {
  let vocals = "aeiouAEIOU";
  let count = 1;
  let finalWord = ""; //! Il primo errore è stato quello di fare un array

  for (let i = 0; i < str.length; i++) {
    if (vocals.includes(str[i])) {
      finalWord += str[i].toLowerCase().repeat(count); //! ok, questa mi mancava proprio
      count++;
    } else {
      finalWord += str[i];
    }
  }

  return finalWord;
}

console.log(repeatVowels("hello world"));

//* ✅ Cose giuste

//* Uso corretto di includes() per riconoscere le vocali

//* Cicli for annidati: idea sensata per la ripetizione

//* Incremento progressivo (contatore) → buona intuizione logica

//* Funzione leggibile e con nomi chiari

//! ❌ Errori

//! Indice sbagliato: str[j] invece di str[i] (errore classico)

//! finalWord come array quando il risultato è una stringa

//! else if inutile → bastava else

//! toLowerCase() applicato solo lì (poco coerente)

//? Versione Chat Gpt 

function repeatVowels(str) {
  const vowels = "aeiou";
  let seen = {};
  let result = "";

  for (let char of str.toLowerCase()) {
    if (!char.match(/[a-z]/)) {
      result += char;
      continue;
    }

    if (vowels.includes(char)) {
      seen[char] = (seen[char] || 0) + 1;
      result += char.repeat(seen[char]);
    } else {
      result += char;
    }
  }

  return result;
}

console.log(repeatVowels("hello world"));


//todo Considerazioni: 

//* Ero così vicino da poterlo risolvere

//! N.B.
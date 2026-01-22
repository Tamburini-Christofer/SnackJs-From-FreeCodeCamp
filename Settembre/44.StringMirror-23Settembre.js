//todo Date due stringhe, determina se la seconda stringa è speculare alla prima.

//! Una stringa è considerata speculare se contiene le stesse lettere in ordine inverso.
//! Tratta le lettere maiuscole e minuscole come distinte.
//! Ignora tutti i caratteri non alfabetici.

//? Tempo di esecuzione:
//* 14 Minuti e 57 secondi

//?Codice scritto senza utilizzo di ChatGpt

function isMirror(str1, str2) {

  let str2Reverse = str2.split("").reverse().join("").replace(/-/g, ' ').replace(/!/g, '');

  if(str2Reverse === str1) return true
  else return false
}

console.log(isMirror("Hello World", "!dlroW !olleH"))

//?Codice scritto da ChatGpt
//* Non usata

//* ✅ Pro

//* Idea giusta: reverse + confronto

//* Uso corretto di split / reverse / join

//* Caso di test centrato

//! ❌ Contro

//! Trasformi solo str2, confronto sbilanciato

//! Regole “hardcoded” (-, !) → poco generico

//! Sensibile a maiuscole/minuscole

//! if/else inutile

//? Versione Chat Gpt 

function isMirror(str1, str2) {
  const normalize = s =>
    s.toLowerCase().replace(/[^a-z0-9]/g, "");

  return normalize(str1) ===
         normalize(str2).split("").reverse().join("");
}


//todo Considerazioni: 

//! N.B.
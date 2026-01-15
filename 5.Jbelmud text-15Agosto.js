//todo Data una stringa, restituisci una versione confusa di quella stringa in cui ogni parola viene trasformata utilizzando i seguenti vincoli:

//! La prima e l'ultima lettera delle parole rimangono al loro posto.
//! Tutte le lettere tra la prima e l'ultima lettera vengono ordinate alfabeticamente.
//! Le stringhe di input non conterranno punteggiatura e saranno interamente in minuscolo.

//? Tempo di esecuzione:
//* Non concluso

//?Codice scritto senza utilizzo di ChatGpt

function jbelmu(text) {
  let firstChar = text[0]
  let lastChar = text.split("").splice(1).pop()
  let word = text.split(" ").splice(1)
  let wordRandom = word.sort((a,b) => b.localeCompare(a))

  return wordRandom;
}

console.log(jbelmu("hello world"))

//?Codice scritto da ChatGpt

function jumbleWords(s) {
  return s
    .split(" ")
    .map(word => {  //!Perchè pensare ad un forEach? Che ti ha fatto di male il map?
      if (word.length <= 2) return word;

      const middle = word
        .slice(1, -1)
        .split("")
        .sort()
        .join(""); //!Qui avevo capito come fare, ma mi sono perso sull'applciazione

      return word[0] + middle + word[word.length - 1];
    })
    .join(" ");
}

console.log(jumbleWords("coding is fun")); 

//* Hai provato a separare stringa e lettere

//* Stai usando split, sort, localeCompare (bene sperimentare)

//! Stai lavorando sulle parole, non sulle lettere interne

//! firstChar e lastChar non vengono mai usati

//! splice(1) rompe la struttura della parola

//! L’ordinamento richiesto è alfabetico delle lettere centrali, non delle parole

//! Non ricomponi la stringa finale corretta

//todo Considerazioni: 

//* Iniziamo con il dire che ho sbagliato approccio nei confronti dell'esercizio. 
//* Mi sono totalmente focalizzato sulla separazione della frase e non della parola, poichè come sempre non seguo bene le istruzioni.

//!N.B. MENO FRETTA E PIU' LOGICA. LEGGI BENE LA CONSEGNA
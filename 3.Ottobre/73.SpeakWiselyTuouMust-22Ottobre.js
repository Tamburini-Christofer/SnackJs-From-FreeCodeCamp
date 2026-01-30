//todo  Data una frase, restituiscine una versione che sembri il consiglio di un saggio insegnante, usando le seguenti regole:

//! Le parole sono separate da un singolo spazio.
//! Trova la prima occorrenza di una delle seguenti parole nella frase: "have", "must", "are", "will", "can".
//! Sposta tutte le parole che precedono e includono quella parola alla fine della frase e:
//! Mantieni l'ordine delle parole quando le sposti.
//! Scrivile tutte in minuscolo.
//! Aggiungi una virgola e uno spazio prima di esse.
//! Scrivi in ​​maiuscolo la prima lettera della nuova prima parola della frase.
//! Tutte le frasi date termineranno con un singolo segno di punteggiatura. Mantieni la punteggiatura originale della frase e spostala alla fine della nuova frase.
//! Restituisci la nuova frase, assicurati che ci sia un singolo spazio tra ogni parola e nessuno spazio all'inizio o alla fine della frase.
//! Ad esempio, dato "Devi parlare saggiamente", restituisci "Parla saggiamente, devi".

//? Tempo di esecuzione:
//* Non completato

//?Codice scritto senza utilizzo di ChatGpt

function wiseSpeak(sentence) {

  let wordArray = sentence.split(" ")
  let wordS = ["have", "must", "are", "will", "can"];
  let finalWord = []

  for (let i = 0; i < wordArray.length; i++) {
    if(wordArray[i] && !wordS.includes(wordArray[i])) finalWord.unshift(wordArray[i])
    if(wordS.includes(wordArray[i])) finalWord.push(wordArray[i])
      for(let j = 0; j < wordArray[0].length; j++) {
      if(".!?".includes(wordArray[i][j])) finalWord.push(wordArray[i][j])
  }}

  let final = finalWord.join(" ").toLowerCase()
  
  return final;
}

console.log(wiseSpeak ("You can do it!"))

//?Codice scritto da ChatGpt

function wiseSpeak(sentence) {
  const punctuation = sentence.slice(-1)
  const words = sentence.slice(0, -1).split(" ")
  const triggers = ["have", "must", "are", "will", "can"]

  const index = words.findIndex(w => triggers.includes(w.toLowerCase()))

  const firstPart = words.slice(0, index + 1).join(" ").toLowerCase()
  const secondPart = words.slice(index + 1)

  const result =
    secondPart.join(" ") +
    ", " +
    firstPart +
    punctuation

  return result[0].toUpperCase() + result.slice(1)
}

console.log(wiseSpeak("You can do it!"))


//* ✅ PRO

//* Hai spezzato correttamente la frase in parole

//* Hai individuato le parole chiave corrette

//* Tentativo di gestire la punteggiatura (buona intuizione)

//* Usi array e cicli con sicurezza

//! ❌ CONTRO (importanti)

//! ❌ Non preservi l’ordine delle parole spostate (unshift rompe tutto)

//! ❌ Sposti parole singole, non blocchi di frase

//! ❌ La virgola richiesta non viene aggiunta correttamente

//! ❌ La capitalizzazione finale non è gestita

//! ❌ Il ciclo sulla punteggiatura è sbagliato (wordArray[0].length)

//! ❌ Logica troppo complessa per un problema di slicing

//! ❌ Output non conforme all’esempio

//todo Considerazioni: 

//* Non ci ho capito un cazzo della traccia

//! N.B.
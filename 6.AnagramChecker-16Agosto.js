//todo Date due stringhe, determina se sono anagrammi l'una dell'altra (contengono gli stessi caratteri in qualsiasi ordine).

//! Ignora maiuscole e minuscole e spazi vuoti.

//? Tempo di esecuzione:
//* 16 Minuti e 11 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function areAnagrams(str1, str2) {
  let str1Correct = str1.toLowerCase().split("")
  let str2Correct = str2.toLowerCase().split("")
  let ordStr1 = str1Correct.sort((a,b) => a.localeCompare(b))
  let ordStr2 = str2Correct.sort((a,b) => a.localeCompare(b))
  let str1Final = ordStr1.join("")
  let str2Final = ordStr2.join("")

  return str1Final === str2Final
}

console.log(areAnagrams("listen", "silent"))

//?Codice scritto da ChatGpt

//* Non è stata utilizzata Chat

//todo Considerazioni: 

//* Logica corretta per gli anagrammi

//* Normalizzi il case

//* Ordini e confronti in modo chiaro

//* Codice leggibile

//! Non gestisci spazi o caratteri non alfabetici

//! Puoi evitare localeCompare (non serve qui)

//! Puoi comprimere qualche passaggio


//todo Consegna dell'esercizio
// Il 4 novembre 2001, Google ha lanciato la sua ricerca di immagini, consentendo agli utenti di trovare immagini utilizzando i termini di ricerca. In questa sfida, imiterai la ricerca di immagini.
// Dato un array di nomi di immagini e un termine di ricerca, restituisci un array di nomi di immagini contenenti il ​​termine di ricerca.
//todo

//! Requisiti da rispettare
// Ignora la distinzione tra maiuscole e minuscole quando cerchi la corrispondenza con i termini di ricerca.
// Restituisci le immagini nello stesso ordine in cui appaiono nell'array di input.
//!

//* Tempo di esecuzione:

//* 8 Minuti e 42 Secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function imageSearch(images, term) {
  let minTerm = term.toLowerCase()

  let arrWord = []
  
  for(let i = 0; i < images.length; i++) {
    let min = images[i].toLowerCase()
    if(min.includes(minTerm)) arrWord.push(images[i])
  }
  
  return arrWord;
}

console.log(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"))

//*

//* Codice scritto da ChatGpt

function imageSearch(images, term) {
  const search = term.toLowerCase()

  return images.filter(image =>
    image.toLowerCase().includes(search)
  )
}

console.log(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"))

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 9/10

//*

//* Pro e contro del mio codice

//* ✅ Pro

// Case-insensitive fatto bene (toLowerCase)
// Usa includes correttamente
// Ordine preservato
// Codice chiaro e leggibile

//! ❌ Contro

// Può essere scritto in modo più idiomatico (JS moderno)
// Variabili con nomi migliorabili (min, arrWord)

//*

//! Altre considerazioni e nota bene

//todo Esecuzione degli esercizi

//? Creazione del file contenente "Numero snack"."Nome snack"-"Giorno del mese".js
//? Comprensione della consegna ed eventuale copia in google translate. 
//? 2 minuti massimo per analizzare la consegna e fare un pensiero prelimianre. 
//? Inizio timer impostato ad un massimale di 30 minuti. Oltre questa soglia, l'esercizio non sarà completato
//? Consultazione con ChatGpt per miglioramenti e sistemazioni
//? Push finale

//! Tre volte a settimana, riguardare lo snack e rivedere possibili soluzioni.
//! Una volta a settimana, riguardare l'andamento mensile e sistemare le lacune.

//! NON DEPRIMERSI 

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
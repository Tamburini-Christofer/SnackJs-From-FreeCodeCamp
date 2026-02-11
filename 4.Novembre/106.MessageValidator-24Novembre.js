//todo Consegna dell'esercizio
// Data una stringa di messaggio e una stringa di convalida, determina se il messaggio è valido.
//todo
//! Requisiti da rispettare
// Un messaggio è valido se ogni parola del messaggio inizia con la lettera corrispondente nella stringa di convalida, in ordine.
// Le lettere non fanno distinzione tra maiuscole e minuscole.
// Le parole del messaggio sono separate da spazi singoli.
//!

//* Tempo di esecuzione:

//* 5 Minuti e 10 Secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function isValidMessage(message, validator) {
  let minValidator = validator.toLowerCase()

  let arrMessage = message.split(" ")
  let result = arrMessage.map(n => n[0].toLowerCase())

  if(result.join("") === minValidator) return true
  else return false
}

console.log(isValidMessage("hello world", "hw"))

//*

//* Codice scritto da ChatGpt

function isValidMessage(message, validator) {
  const words = message.split(" ")
  
  if (words.length !== validator.length) return false
  
  return words
    .map(word => word[0].toLowerCase())
    .join("") === validator.toLowerCase()
}


//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 8,5/10

//*

//* Pro e contro del mio codice

//* ✅ Pro

// Codice chiaro
// Ben strutturato
// Usa map in modo corretto
// Case-insensitive gestito bene
// Zero complicazioni inutili

//! ❌ Contro

// Non controlli esplicitamente che il numero di parole = lunghezza validator
// (anche se il confronto finale lo copre indirettamente)
// Può rompersi se message è stringa vuota
// Puoi evitare la variabile minValidator rendendo il codice più compatto

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
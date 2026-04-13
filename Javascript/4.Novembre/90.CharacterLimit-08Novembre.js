//todo Consegna dell'esercizio
// In questa sfida, ti verrà fornita una stringa e dovrai determinare se rientra in un post sui social media. Restituisci le seguenti stringhe in base alle regole fornite:
//todo

//! Requisiti da rispettare
// "post breve" se rientra nel limite di 40 caratteri.
// "post lungo" se supera i 40 caratteri e rientra nel limite di 80 caratteri.
// "post non valido" se è troppo lungo per rientrare in uno dei due limiti.
//!

//* Tempo di esecuzione:

//* 2 Minuti e 08 Secondi 

//*

//*Codice scritto senza utilizzo di ChatGpt

function canPost(message) {
  if(message.length < 40) return "short post" 
  if(message.length > 40 && message.length < 80) return "long post" 
  if(message.length > 80) return "invalid post" 
}

console.log(canPost("Hello world") )

//*

//* Codice scritto da ChatGpt

function canPost(message) {
  if (message.length <= 40) return "short post"
  if (message.length <= 80) return "long post"
  return "invalid post"
}

console.log(canPost("Hello world"))

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 6.5/10

//*

//* Pro e contro del mio codice

//* ✅ Pro

// Logica chiara
// Condizioni leggibili
// Output corretto nei casi semplici

//! ❌ Contro

// 40 e 80 non sono gestiti correttamente
// Se message.length === 40 → ritorna undefined
// Se message.length === 80 → ritorna undefined
// Manca un return finale di sicurezza

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
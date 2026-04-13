//todo Consegna dell'esercizio
// La sfida di oggi è ispirata al lancio di ChatGPT il 30 novembre 2022.
// Data una stringa di una o più frasi, determina se è stata generata dall'IA utilizzando le seguenti regole:
//todo

//! Requisiti da rispettare
// Contiene due o più trattini (-).
// Contiene due o più coppie di parentesi (()). Il testo può essere all'interno delle parentesi.
// Contiene tre o più parole con 7 o più lettere.
// Le parole sono separate da un singolo spazio e sono composte solo da lettere (A-Z). Non includere punteggiatura o altri elementi non letterali come parte di una parola.
// Se la frase fornita soddisfa una qualsiasi delle regole sopra indicate, restituisci "IA", altrimenti restituisci "Umano".
//!

//* Tempo di esecuzione:
//* 14 minuti 
//*

//*Codice scritto senza utilizzo di ChatGpt

function detectAI(text) {

  let sortWord = text.replace(/!/g).split(" ").sort((a,b) => a.localeCompare(b))
  let contatore = 0;
  let contatorePa = 0;

  for(let i = 0; i < sortWord.length; i++) {
    if(sortWord[i] === "-" && sortWord[i+1] === "-") return "AI"
    else if(sortWord[i].length > 7) contatore++
    else if("()".includes(sortWord[i])) contatorePa++; 
  } 

  console.log(contatorePa)

  if(contatorePa >= 2) return "AI"
  if(contatore >= 3) return "AI"
  else return "Human"
  
}

console.log(detectAI("The (excited) student was (coding) in the library."))

//*

//* Codice scritto da ChatGpt

function detectAI(text) {

  // 1️⃣ Controllo trattini
  let dashCount = (text.match(/-/g) || []).length
  if (dashCount >= 2) return "AI"

  // 2️⃣ Controllo parentesi
  let parenthesisCount = (text.match(/\([^)]*\)/g) || []).length
  if (parenthesisCount >= 2) return "AI"

  // 3️⃣ Controllo parole lunghe
  let cleaned = text.replace(/[^a-zA-Z ]/g, "")
  let words = cleaned.split(" ")

  let longWords = 0
  for (let word of words) {
    if (word.length >= 7) longWords++
  }

  if (longWords >= 3) return "AI"

  return "Human"
}

console.log(detectAI("The (excited) student was (coding) in the library."))

//*

//* Valutazione al codice proposta da ChatGpt
//! Voto 4/10
//*

//* Pro e contro del mio codice

//* Pro

// Hai provato a contare condizioni diverse
// Struttura logica leggibile
// Buon tentativo di usare loop e contatori

//! Contro

// Approccio non aderente alla consegna
// Trattini e parentesi gestiti in modo errato
// Non pulisci le parole
// Ordinamento inutile

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

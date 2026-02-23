//todo Consegna dell'esercizio
// Data una stringa che potrebbe includere del testo in corsivo in Markdown, restituisci la stringa HTML equivalente.
//todo
//! Requisiti da rispettare
// Il testo in corsivo in Markdown è qualsiasi testo che inizia e termina con un singolo asterisco (*) o un singolo trattino basso (_).
// Non possono esserci spazi tra il testo e l'asterisco o il trattino basso, ma possono esserci spazi nel testo stesso.
// Converti tutte le occorrenze in corsivo in tag HTML i e restituisci la stringa.
// Ad esempio, dato "*Questo è corsivo*", restituisci "<i>Questo è corsivo</i>".
// Nota: la console potrebbe non visualizzare i tag HTML nelle stringhe durante la registrazione dei messaggi. Controlla la console del browser per visualizzare i log con i tag inclusi.
//!

//* Tempo di esecuzione:
//* Non compeltato 
//*

//*Codice scritto senza utilizzo di ChatGpt

function parseItalics(markdown) {
  let control = /[^*]+[a-zA-z0-9]+[$*_]/;
  if(!control.test(markdown)) return markdown

  let convertedTag = markdown.replace("*", "<i>").replace("*", "</i>").replace("_", "<i>").replace("_", "</i>").replace("*", "<i>").replace("*", "</i>")

  return convertedTag;
}

console.log(parseItalics("_ This is also not italic_"))

//*

//* Codice scritto da ChatGpt

function parseItalics(markdown) {
  return markdown.replace(/(\*|_)([^*_]+?)\1/g, "<i>$2</i>");
}

console.log(parseItalics("*This is italic*"));
// <i>This is italic</i>

console.log(parseItalics("_This is also italic_"));
// <i>This is also italic</i>

console.log(parseItalics("_ This is not italic_"));
// resta invariato

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 3.5/10
//*

//* Pro e contro del mio codice

//* ✅ Pro

// Tentativo di usare regex ✔️
// Usi replace() ✔️

//! ❌ Contro (importanti)

// Regex control non valida per la consegna ❌
// replace("*", ...) sostituisce solo la prima occorrenza
// Stai facendo replace manuali a catena (fragile)
// Non gestisce più occorrenze
// Non controlla lo spazio dopo * o _
// Logica non generalizzata

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
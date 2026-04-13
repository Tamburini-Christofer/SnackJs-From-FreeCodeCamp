//todo Consegna dell'esercizio
// Data una stringa che include un blockquote in Markdown, restituisce la stringa HTML equivalente.
//todo
//! Requisiti da rispettare
// Un blockquote in Markdown è qualsiasi riga che:
// Inizia con zero o più spazi
// È seguita da un segno di maggiore (>)
// Quindi, uno o più spazi
// E infine, il testo del blockquote.
// Restituisce il testo del blockquote circondato dai tag HTML di apertura e chiusura del blockquote.
// Ad esempio, dato "> Questa è una citazione", restituisce <blockquote>Questa è una citazione</blockquote>.
// Nota: la console potrebbe non visualizzare i tag HTML nelle stringhe durante la registrazione dei messaggi. Controlla la console del browser per visualizzare i log con i tag inclusi.
//!

//* Tempo di esecuzione:
//* 7 Minuti e 10 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function parseBlockquote(markdown) {

  let markdownSost = markdown.trim().split(">").join("").trim();
  let final = `<blockquote>${markdownSost}</blockquote>`

  return final;
}

console.log(parseBlockquote("  >    So  Is  This"))

//*

//* Codice scritto da ChatGpt

function parseBlockquote(markdown) {
  const text = markdown.replace(/^\s*>\s+/, "");
  return `<blockquote>${text}</blockquote>`;
}

console.log(parseBlockquote("  >    So  Is  This"));

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 6/10
//*

//* Pro e contro del mio codice

//* Pro

// Codice semplice e leggibile
// Output HTML corretto nel caso base

//! Contro

// Logica troppo aggressiva (split(">"))
// Non conforme alle regole Markdown
// Poco scalabile

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
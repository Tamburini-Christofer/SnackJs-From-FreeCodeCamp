//todo Consegna dell'esercizio
// Data una stringa di un'immagine in Markdown, restituisci la stringa HTML equivalente.
//todo
//! Requisiti da rispettare
// Un'immagine Markdown ha il seguente formato: "![testo alternativo](url_immagine)". Dove:
// testo alternativo è la descrizione dell'immagine (il valore dell'attributo alt).
// url_immagine è l'URL di origine dell'immagine (il valore dell'attributo src).
// Restituisci una stringa del tag HTML img con src impostato sull'URL dell'immagine e alt impostato sul testo alternativo.
// Ad esempio, dato "![Gatto carino](cat.png)" restituisci '<img src="cat.png" alt="Gatto carino">';
// Assicurati che il tag, l'ordine degli attributi, la spaziatura e l'utilizzo delle virgolette siano gli stessi di cui sopra.
// Nota: la console potrebbe non visualizzare i tag HTML nelle stringhe durante la registrazione dei messaggi: controlla la console del browser per visualizzare i log con i tag inclusi.
//!

//* Tempo di esecuzione:
//* 11 Minuti e 45 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function parseImage(markdown) {

  let imgUrl = markdown.split("").join("").split("(")[1].replace(")", "").trim()
  let imgAlt = markdown.split("").join("").split("[")[1].replace("]", "").split("(")[0]

  return `<img src="${imgUrl}" alt="${imgAlt}">`;
}

console.log(parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)"))

//*

//* Codice scritto da ChatGpt

function parseImage(markdown) {
  const match = markdown.match(/!\[(.*?)\]\((.*?)\)/);
  return `<img src="${match[2]}" alt="${match[1]}">`;
}

console.log(
  parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)")
);

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 6.5/10
//*

//* Pro e contro del mio codice

//*  Pro

// Ragionamento giusto
// Output corretto
// Template literal usato bene

// //! Contro

// Codice ridondante
// Poco robusto
// Parsing “a forza bruta”

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
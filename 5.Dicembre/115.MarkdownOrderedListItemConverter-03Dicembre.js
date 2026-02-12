//todo Consegna dell'esercizio
// Data una stringa che rappresenta un elemento di un elenco ordinato in Markdown, restituisci la stringa HTML equivalente.
//todo
//! Requisiti da rispettare
// Un elemento di un elenco ordinato valido in Markdown deve:
// Iniziare con zero o più spazi, seguito da
// Un numero (1 o maggiore) e un punto (.), seguito da
// Almeno uno spazio, e poi
// Il testo dell'elemento di elenco.
// Se la stringa non ha il formato esatto sopra indicato, restituisci "Formato non valido". In caso contrario, racchiudi il testo dell'elemento di elenco tra tag li e restituisci la stringa.
// Ad esempio, dato "1. Il mio elemento", restituisci "<li>Il mio elemento</li>".
// Nota: la console potrebbe non visualizzare i tag HTML nelle stringhe durante la registrazione dei messaggi. Controlla la console del browser per visualizzare i log con i tag inclusi.
//!

//* Tempo di esecuzione:
//* 27 Minuti e 24 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function convertListItem (string) {

    let stringValue = string.trim().split(".")[0]
    let stringTag = string.split(".")[1]
    let stringConverted = `<li>${stringTag.trim()}</li>`;

    for(let i = 0; i < string.length; i++) 
    if(string[i] === stringValue[0] && string[i+1] !== ".") 
    return "Invalid format"

    if(stringValue.match(/[a-zA-Z]/g) || stringValue === "") return "Invalid format"

    return stringConverted

}

console.log(convertListItem("1 . invalid item"))
//*

//* Codice scritto da ChatGpt

function convertListItem(string) {

  let trimmed = string.trimStart();

  let dotIndex = trimmed.indexOf(".");

  if (dotIndex === -1) return "Invalid format";

  let numberPart = trimmed.slice(0, dotIndex);
  let rest = trimmed.slice(dotIndex + 1);

  if (Number(numberPart) < 1 || !Number.isInteger(Number(numberPart))) {
    return "Invalid format";
  }

  if (rest.length === 0 || rest[0] !== " ") {
    return "Invalid format";
  }

  let text = rest.trim();

  if (text === "") return "Invalid format";

  return `<li>${text}</li>`;
}

console.log(convertListItem("1. My item"));

//*

//* Valutazione al codice proposta da ChatGpt
//? Voto 5/10
//*

//* Pro e contro del mio codice
//* ✅ Pro

// Buon tentativo di validazione
// Hai usato trim()
// Hai cercato di separare numero e testo

//! ❌ Contro

// Logica fragile
// Split sbagliato per questo tipo di problema
// Validazione incompleta
// Può rompersi facilmente

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


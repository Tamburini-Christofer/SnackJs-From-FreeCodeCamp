 //todo Consegna dell'esercizio
// Data una stringa che rappresenta un'intestazione Markdown, restituisci l'intestazione HTML equivalente.
//todo
//! Requisiti da rispettare
// Un'intestazione Markdown valida deve:
// Iniziare con zero o più spazi, seguita da
// da 1 a 6 caratteri cancelletto (#) di seguito, quindi
// da almeno uno spazio. E infine,
// il testo dell'intestazione.
// Il numero di simboli cancelletto determina il livello dell'intestazione. Ad esempio, un simbolo cancelletto corrisponde a un tag h1 e sei simboli cancelletto corrispondono a un tag h6.
// Se la stringa specificata non ha il formato esatto sopra indicato, restituisci "Formato non valido".
// Ad esempio, dato "# Intestazione di livello 1", restituisci "<h1>Intestazione di livello 1</h1>".
// Nota: la console potrebbe non visualizzare i tag HTML nelle stringhe durante la registrazione dei messaggi. Controlla la console del browser per visualizzare i log con i tag inclusi.
//!

//* Tempo di esecuzione:

//* 19 Minuti e 24 Secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function convert(heading) {
  if(!heading.includes("#")) return "Invalid format"

  let contatore = 1;

  for(let i = 0; i < heading.length; i++) {
    if(heading[i] === "#" && heading[i+1] === "") return "Invalid format"
    if(heading[i] === "#" && heading[i] === heading[i+1]) contatore++
  }
  let headingConverter = heading.split("#").join("").trim()

  if(contatore > 5) return "Invalid format"
  return `<h${contatore}>${headingConverter}</${contatore}>`;
}

console.log(convert("##### My level 5 heading"))

//*

//* Codice scritto da ChatGpt

function convert(heading) {
  const trimmed = heading.trimStart();

  const match = trimmed.match(/^(#{1,6})\s+(.+)$/);
  if (!match) return "Invalid format";

  const level = match[1].length;
  const text = match[2];

  return `<h${level}>${text}</h${level}>`;
}

console.log(convert("##### My level 5 heading"));

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 6/10

//*

//* Pro e contro del mio codice

//* Pro ✅

// Buona idea usare un contatore
// Ritorno corretto dell’HTML
// Controllo sul limite massimo (> 5)

//! Contro ❌

// Non gestisce spazi iniziali
// heading[i+1] === "" è inutile (non succede mai)
// Conta # ovunque, non solo all’inizio
// Non verifica lo spazio obbligatorio dopo i #
// .split("#") rimuove anche # nel testo (bug)

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
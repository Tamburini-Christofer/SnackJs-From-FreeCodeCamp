//todo Consegna dell'esercizio
// Data una stringa che rappresenta un nome file, restituisci l'estensione del file.
//todo

//! Requisiti da rispettare
// L'estensione è la parte del nome file che segue l'ultimo punto (.).
// Se il nome file non contiene un punto o termina con un punto, restituisci "none".
// L'estensione deve essere restituita così com'è, mantenendo la distinzione tra maiuscole e minuscole.
//!

//* Tempo di esecuzione:

//* 10 minuti e 20 secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function getExtension(filename) {
  if(!filename.includes(".") || filename[filename.length-1] === (".")) return "none"

  let extension = filename.split(".");
  if(extension.length === 2) return extension[1]
  if(extension.length === 3) return extension[2]
}

console.log(getExtension("archive.tar.gz"))

//*

//* Codice scritto da ChatGpt

function getExtension(filename) {
  const lastDot = filename.lastIndexOf(".");

  if (lastDot === -1 || lastDot === filename.length - 1) {
    return "none";
  }

  return filename.slice(lastDot + 1);
}

console.log(getExtension("archive.tar.gz")); // gz

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 6/10

//*

//* Pro e contro del mio codice

//* Pro ✅

// Controlli correttamente i casi "." e finale
// Logica chiara
// Usa split correttamente

//! Contro ❌

// Non generalizza (.tar.backup.gz fallisce)
// if(extension.length === 2/3) è fragile
// Manca un return di default
// Soluzione poco “da colloquio”

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
//todo Consegna dell'esercizio
// Benvenuti alla 100a sfida giornaliera di coding!
//todo

//! Requisiti da rispettare
// Data una stringa, ripeti i suoi caratteri fino a ottenere un risultato lungo esattamente 100 caratteri. Se le tue ripetizioni superano i 100 caratteri, taglia i caratteri in eccesso in modo che siano esattamente 100.
//!

//* Tempo di esecuzione:

//* 14 Minuti e 24 Secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function oneHundred(chars) {

  let word = ""
  let i = 0;

  while(i < 100) {
    word += chars
    i++
  }

  let result = word.slice(0,100)
  return result
  
}

console.log(oneHundred("One hundred "))

//*

//* Codice scritto da ChatGpt

function oneHundred(str) {
  return str.repeat(Math.ceil(100 / str.length)).slice(0, 100);
}

console.log(oneHundred("One hundred "));


//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 7/10

//*

//* Pro e contro del mio codice

//* Pro ✅

// Rispetta la consegna
// Usa slice correttamente
// Output giusto
// Logica semplice

//! Contro ❌

// Ripeti 100 volte anche se non serve
// Concatenazioni inutili (performance)
// Loop scollegato dalla lunghezza reale
// Poco elegante per colloquio
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
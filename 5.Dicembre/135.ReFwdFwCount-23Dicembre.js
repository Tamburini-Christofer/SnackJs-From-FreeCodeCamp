//todo Consegna dell'esercizio
// Data una stringa che rappresenta l'oggetto di un'email, determina quante volte l'email è stata inoltrata o a cui è stata data risposta.
//todo
//! Requisiti da rispettare
// Per semplicità, considera un'email inoltrata o a cui è stata data risposta se la stringa contiene uno dei seguenti marcatori (senza distinzione tra maiuscole e minuscole):
// "fw:"
// "fwd:"
// "re:"
// Restituisci il numero totale di occorrenze di questi marcatori.
//!

//* Tempo di esecuzione:
//* 7 Minuti e 26 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function emailChainCount(subject) {
  let lowStr = subject.toLowerCase().split(":")

  let contatore = 0;

  lowStr.forEach(n => {
    let nTrim = n.trim()
    if(nTrim === "re" || nTrim === "fwd" || nTrim === "fw") contatore++
  })


  return contatore;
}

console.log(emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes"))

//*

//* Codice scritto da ChatGpt

function emailChainCount(subject) {
  const matches = subject.match(/\b(re|fw|fwd):/gi);
  return matches ? matches.length : 0;
}

console.log(
  emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes")
);

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 7/10
//*

//* Pro e contro del mio codice

//* Pro

// Semplice
// Leggibile
// Approccio corretto al problema

//! Contro

// Poco robusto
// Non sfrutta le regex (qui ideali)
// Dipende troppo dal formato perfetto

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
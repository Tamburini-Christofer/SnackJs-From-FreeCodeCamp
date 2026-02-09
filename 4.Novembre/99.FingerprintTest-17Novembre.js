//todo Consegna dell'esercizio
// Date due stringhe che rappresentano le impronte digitali, determinare se corrispondono utilizzando le seguenti regole:
//todo

//! Requisiti da rispettare
// Ogni impronta digitale sarà composta solo da lettere minuscole (a-z).
// Due impronte digitali sono considerate corrispondenti se:
// Hanno la stessa lunghezza.
// Il numero di caratteri diversi non supera il 10% della lunghezza dell'impronta digitale.
//!

//* Tempo di esecuzione:

//* 18 Minuti e 46 secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function isMatch(fingerprintA, fingerprintB) {
  if(fingerprintA.length !== fingerprintB.length) return false

  let contatore = 0;
  let totCar = Math.floor(fingerprintA.length / 10)

  for(let i = 0; i < fingerprintA.length; i++) {
    if(fingerprintB[i] !== fingerprintA[i]) contatore++
  }

  if(contatore > totCar) return false
  else return true
}

console.log(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat"))

//*

//* Codice scritto da ChatGpt

function isMatch(fingerprintA, fingerprintB) {
  if (fingerprintA.length !== fingerprintB.length) return false;

  const maxDiff = fingerprintA.length * 0.1;
  let diff = 0;

  for (let i = 0; i < fingerprintA.length; i++) {
    if (fingerprintA[i] !== fingerprintB[i]) {
      diff++;
      if (diff > maxDiff) return false; // early exit
    }
  }

  return true;
}

console.log(
  isMatch(
    "thequickbrownfoxjumpsoverthelazydog",
    "thequickbrownfoxjumpsoverthehazycat"
  )
);

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto 8/10

//*

//* Pro e contro del mio codice

//* Pro ✅

// Controllo lunghezza giusto
// Confronto carattere per carattere corretto
// Early return sensato
// Codice leggibile

//! Contro ❌

// Math.floor(length / 10) è ambiguo
// (10% va calcolato come length * 0.1)
// Potresti fermarti prima se superi il limite
// Nomi variabili migliorabili

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
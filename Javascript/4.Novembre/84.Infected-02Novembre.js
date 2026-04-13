//todo Consegna dell'esercizio
//Il 2 novembre 1988 fu rilasciato il primo worm di Internet di grandi dimensioni, che infettò circa il 10% dei computer connessi a Internet dopo solo un giorno.
// In questa sfida, ti viene fornito il numero di giorni trascorsi dal rilascio di un worm e devi determinare quanti computer sono infetti utilizzando le seguenti regole:
//todo

//! Requisiti da rispettare
// Il giorno 0, il primo computer è infetto.
// Ogni giorno successivo, il numero di computer infetti raddoppia.
// Ogni 3 giorni, viene applicata una patch dopo la diffusione del virus, che riduce il numero di computer infetti del 20%. Arrotonda il numero di computer patchati al numero intero più vicino.
// Ad esempio, il giorno:

// Giorno 0: 1 computer in totale è infetto.
// Giorno 1: 2 computer in totale sono infetti.
// Giorno 2: 4 computer in totale sono infetti.
// Giorno 3: 8 computer in totale sono infetti. Quindi, applica la patch: 8 infetti * 20% = 1,6 computer patchati. Arrotonda 1,6 a 2. 8 computer infetti - 2 patchati = 6 computer totali infetti dopo il giorno 3.
// Restituisci il numero totale di computer infetti dopo il numero di giorni specificato.    
//!

//* Tempo di esecuzione:

//* 12 Minuti e 40 secondi

//*

//*Codice scritto senza utilizzo di ChatGpt
   
function infected(days) {

  let infected = 1

  for(let i = 1; i <= days; i++) {
    infected *= 2
    if(i % 3 === 0) {
      let path = Math.ceil((infected * 20) / 100);
      infected -= path
    }
  }
  return infected;
}

//*

//* Codice scritto da ChatGpt

function infected(days) {
  let infected = 1

  for(let i = 1; i <= days; i++) {
    infected *= 2
    if(i % 3 === 0) {
      let path = Math.ceil((infected * 20) / 100);
      infected -= path
    }
  }
  return infected;
}

//*

//* Valutazione al codice proposta da ChatGpt

//* Voto: 8/10

//*

//* Pro e contro del mio codice

//* Pro:

// Logica generale corretta: raddoppio ogni giorno, patch ogni 3 giorni.
// Uso corretto di Math.ceil per arrotondare verso l’alto.

//! Contro:

// Il problema dice di arrotondare al numero intero più vicino, quindi non sempre verso l’alto (Math.round e non Math.ceil).
// Se il giorno di patch ha un numero frazionario esatto di 0.5, Math.round arrotonda correttamente al numero più vicino.
// Per esempio, giorno 3: 8 infetti * 20% = 1.6 → arrotondato a 2, quindi qui funziona. Ma in generale, Math.ceil non sempre coincide con "numero più vicino".

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
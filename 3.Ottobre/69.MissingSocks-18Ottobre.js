//todo  Dato un numero intero che rappresenta il numero di paia di calzini con cui hai iniziato e un altro intero che rappresenta il numero di cicli di lavaggio effettuati, restituisci il numero di paia di calzini complete che possiedi attualmente utilizzando i seguenti vincoli:

//! Ogni 2 cicli di lavaggio, perdi un singolo calzino.
//! Ogni 3 cicli di lavaggio, trovi un singolo calzino mancante.
//! Ogni 5 cicli di lavaggio, un singolo calzino si consuma e deve essere buttato via.
//! Ogni 10 cicli di lavaggio, acquisti un paio di calzini.
//! Non puoi mai avere meno di zero calzini totali.
//! Le regole possono sovrapporsi. Ad esempio, al ciclo di lavaggio 10, perderai un singolo calzino, butterai via un singolo calzino e comprerai un nuovo paio di calzini.
//! Restituisci il numero di paia di calzini complete.

//? Tempo di esecuzione:
//* 20 Minuti 

//?Codice scritto senza utilizzo di ChatGpt

function sockPairs(pairs, cycles) {
  if(pairs < 2) return 0
  if(pairs === 2) return 1

  let socks = pairs * 2
  let cyclesThree = 1;
  let cyclesFive = 1;
  let cyclesTen = 1;

  for(let i = 1; i < cycles; i ++) {
    if(i % 2 === 0) socks--
    if(i === (3 * cyclesThree)) {
      socks++;
      cyclesThree++
    }
    if(i === (5 * cyclesFive)) {
      socks--;
      cyclesFive++;
  }
    if(i === (10 * cyclesTen)) {
      socks++;
      cyclesTen++
    }
  }

  return Math.round(socks / 2)

}

console.log(sockPairs(5, 11))

//?Codice scritto da ChatGpt
//* non usata 

//* ✅ PRO

//* Hai capito bene le regole che si sovrappongono

//* Gestisci tutto per ciclo (approccio corretto)

//* Eviti numeri negativi implicitamente

//* Logica coerente e funzionante in molti casi

//* Buon ragionamento “da simulazione” 💪

//! ❌ CONTRO

//! ❌ pairs < 2 e pairs === 2 → casi speciali inutili

//! ❌ cyclesThree / Five / Ten → contatori superflui

//! ❌ Usi Math.round → rischio errore logico (meglio Math.floor)

//! ❌ Non blocchi mai esplicitamente socks < 0

//! ❌ Codice più complesso del necessario

//? Versione Chat Gpt 

function sockPairs(pairs, cycles) {
  let socks = pairs * 2;

  for (let i = 1; i <= cycles; i++) {
    if (i % 2 === 0) socks--;
    if (i % 3 === 0) socks++;
    if (i % 5 === 0) socks--;
    if (i % 10 === 0) socks += 2;

    if (socks < 0) socks = 0;
  }

  return Math.floor(socks / 2);
}


//todo Considerazioni: 

//! N.B.
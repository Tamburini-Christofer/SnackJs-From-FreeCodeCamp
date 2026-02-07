//todo Consegna dell'esercizio
//Dati una stringa di messaggio, una stringa di chiave segreta e un numero di firma, determina se la firma è valida utilizzando questo metodo di codifica:
//todo

//! Requisiti da rispettare
// Le lettere nel messaggio e nella chiave segreta hanno questi valori:
// le lettere da a a z hanno valori rispettivamente da 1 a 26.
// le lettere da A a Z hanno valori rispettivamente da 27 a 52.
// Tutti gli altri caratteri non hanno valore.
// Calcola la firma sommando il messaggio più la somma della chiave segreta.
// Ad esempio, dati il ​​messaggio "foo" e la chiave segreta "bar", la firma sarebbe 57:
//!

//* Tempo di esecuzione:

//* Non completato

//*

//*Codice scritto senza utilizzo di ChatGpt

function verify(message, key, signature) {

  for(let i = 0; i < message.length; i++) {
  if(message.match(/[A-Z]/g)) totStringa = totStringa + (message.charCodeAt(i) - 38)
  else if(message.match(/[a-z]/g)) totStringa = totStringa + (message.charCodeAt(i) - 96)
  }
  for(let i = 0; i < key.length; i++) {
  if(key.match(/[A-Z]/g)) totStringaKey = totStringaKey + (key.charCodeAt(i) - 38)
  else if(key.match(/[a-z]/g)) totStringaKey = totStringaKey + (key.charCodeAt(i) - 96)
  }

  let totStringa = 0;
  let totStringaKey = 0;

  let tot = totStringa + totStringaKey

  if(tot !== signature) 
  return tot
  else return true

}

console.log(verify("foo", "bar", 57))

//*

//* Codice scritto da ChatGpt

function verify(message, key, signature) {
  let totStringa = 0;
  let totStringaKey = 0;

  for (let i = 0; i < message.length; i++) {
    let c = message[i];
    if (c >= 'A' && c <= 'Z') totStringa += c.charCodeAt(0) - 38;
    else if (c >= 'a' && c <= 'z') totStringa += c.charCodeAt(0) - 96;
  }

  for (let i = 0; i < key.length; i++) {
    let c = key[i];
    if (c >= 'A' && c <= 'Z') totStringaKey += c.charCodeAt(0) - 38;
    else if (c >= 'a' && c <= 'z') totStringaKey += c.charCodeAt(0) - 96;
  }

  let tot = totStringa + totStringaKey;
  return tot === signature;
}

console.log(verify("foo", "bar", 57));           // true
console.log(verify("foo", "bar", 54));           // false
console.log(verify("freeCodeCamp", "Rocks", 238)); // true
console.log(verify("Is this valid?", "No", 210));  // false
console.log(verify("Is this valid?", "Yes", 233)); // true
console.log(verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514)); // true


//*

//* Valutazione al codice proposta da ChatGpt

//! Voto: 4/10

//*

//* Pro e contro del mio codice

// Pro:

// Hai capito l’idea di usare charCodeAt.
// Struttura della funzione chiara.
// Contro:

// Inizializzazione delle variabili dopo l’uso.
// Uso errato di match su tutta la stringa invece che sul singolo carattere.
// Possibile undefined/NaN se il messaggio contiene caratteri non alfabetici.

//*

//! Altre considerazioni e nota bene

// Analisi del tuo codice

// Stai usando variabili totStringa e totStringaKey dopo i cicli for. Devono essere inizializzate prima dei cicli.
// Dentro i cicli usi message.match(/[A-Z]/g) e key.match(/[A-Z]/g) che controllano tutta la stringa, non il singolo carattere: quindi il risultato sarà sempre vero se c’è almeno una maiuscola in tutta la stringa, sbagliando il calcolo.
// Non hai mai considerato caratteri non alfabetici correttamente (ok, in teoria li ignori).
// Il ritorno return tot in caso di errore funziona, ma probabilmente vuoi restituire false o la somma calcolata per debug.
// Il codice funziona solo per alcune stringhe, ma per l’esempio "foo" e "bar" potrebbe dare NaN se non correggi i punti sopra.

//todo Considerazioni personali
// E' importante ripassare le Regex e il metodo match
//!

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

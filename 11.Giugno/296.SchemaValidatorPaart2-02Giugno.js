//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Dato un oggetto (JavaScript) o un dizionario (Python), determinare se corrisponde al seguente schema:

{
  username: stringa,
  posts: numero,
  verified: booleano
}

Sono consentite chiavi aggiuntive.
*/
//todo

//* Tempo di esecuzione:
// 10 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function isValidSchema(obj) {

  let objConv = Object.entries(obj)

    if(objConv[0][0] === "username" && typeof objConv[0][1] === "string" &&
       objConv[1][0] === "posts" && typeof objConv[1][1] === "number" &&
       objConv[2][0] === "verified" && typeof objConv[2][1] === "boolean") return true
    else return false
}

console.log(isValidSchema({ username: "alice", posts: 10, verified: false }))

//*

//* Codice scritto da ChatGpt

function isValidSchema(obj) {
  return (
    typeof obj.username === "string" &&
    typeof obj.posts === "number" &&
    typeof obj.verified === "boolean"
  );
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto
// 7/10
//todo

//* Pro e contro del mio codice

//* Pro
// ✔ Hai utilizzato correttamente Object.entries()
// ✔ Controlli correttamente il tipo di dato di ogni proprietà
// ✔ Il codice è semplice da leggere
// ✔ Risolve il caso mostrato nell'esempio

//! Contro
// ❌ Dipende dall'ordine delle proprietà nell'oggetto
// ❌ Fallisce se esistono chiavi aggiuntive prima delle tre richieste
// ❌ Non verifica direttamente l'esistenza delle proprietà tramite il loro nome
// ❌ Se manca una proprietà può generare errori accedendo a indici inesistenti
// ❌ La consegna specifica che sono consentite chiavi aggiuntive, ma il tuo approccio può fallire in tali casi

//*
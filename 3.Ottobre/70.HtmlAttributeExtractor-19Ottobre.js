//todo  Data una stringa di un elemento HTML valido, restituisci gli attributi dell'elemento utilizzando i seguenti criteri:

//! Ti verrà fornito un solo elemento.
//! Gli attributi saranno nel formato: attributo="valore".
//! Restituisci un array di stringhe con ogni proprietà e valore dell'attributo, separati da una virgola, in questo formato: ["attributo1, valore1", "attributo2, valore2"].
//! Restituisci gli attributi nell'ordine in cui sono specificati.
//! Se non vengono trovati attributi, restituisci un array vuoto.

//? Tempo di esecuzione:
//* Non completato 

//?Codice scritto senza utilizzo di ChatGpt

function extractAttributes(element) {

    let regex = /\s(\w+)=/;
    let primoValore = element.match(regex)[1]
    let regexValore = /\s(\w+)/;
    let secondoValore = element.match(regexValore)[0]

    return {primoValore, secondoValore}
}

console.log(extractAttributes('<span class="red"></span>'))

//?Codice scritto da ChatGpt

function extractAttributes(element) {
  const regex = /(\w+)="([^"]*)"/g
  const result = []
  let match

  while ((match = regex.exec(element)) !== null) {
    result.push(`${match[1]}, ${match[2]}`)
  }

  return result
}

console.log(extractAttributes('<span class="red"></span>'))

//* ✅ PRO

//* Hai capito che le regex sono la strada giusta

//* Usi match() correttamente

//* Il codice è leggibile e ordinato

//* Buona intuizione nel separare nome e valore

//! ❌ CONTRO

//! Prende solo il primo attributo (niente g)

//! regexValore non prende il valore dell’attributo, ma solo testo dopo uno spazio

//! Se non ci sono attributi → errore (match è null)

//! Non rispetta il formato richiesto (array, non oggetto)

//! Non gestisce più attributi

//! Regex troppo generiche (\w+ non copre data-*, aria-*)

//todo Considerazioni: 

//! N.B.
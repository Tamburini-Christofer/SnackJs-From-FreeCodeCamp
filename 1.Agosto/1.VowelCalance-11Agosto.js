//todo Data una stringa, determina se il numero di vocali nella prima metà della stringa è uguale al numero di vocali nella seconda metà.

//! La stringa può contenere qualsiasi carattere. 
//! Le lettere a, e, i, o e u, sia maiuscole che minuscole, sono considerate vocali.
//! Se la stringa contiene un numero dispari di caratteri, ignora il carattere centrale 

//? Tempo di esecuzione:
//* 30 Minuti (massimo consentito prima dell'utilizzo di ChatGpt per la risposta e la spiegazione)

//?Codice scritto senza utilizzo di ChatGpt

function isBalanced(s) {
  let sx = 0;
  let dx = 0; 
  let middle = s.length / 2

  for(let i = 0; i < s.length; i++) {
    if(i < middle && "aeiouAEIOU".includes(i)) sx++
    else if(i > middle && "aeiouAEIOU".includes(i)) dx++
  }
  if(sx === dx) return true
}


console.log(isBalanced("Kitty Ipsum"))

//?Codice scritto da ChatGpt

function isBalanced(s) {
  let vowels = "aeiouAEIOU";    //!Chat Gpt crea una variabile che contenga le vocali
  let sx = 0;
  let dx = 0;
  let middle = Math.floor(s.length / 2);  //!Chat Gpt utilizza Math.floor. Arrotonda sempre per difetto all'intero inferiore

  for (let i = 0; i < s.length; i++) {
    if (i < middle && vowels.includes(s[i])) sx++;  //!L'errore che facevo principale è utilizzare il valore di i, non dell'indice di s
    else if (i >= s.length - middle && vowels.includes(s[i])) dx++; //!L'errore che facevo principale è utilizzare il valore di i, non dell'indice di s
  }

  return sx === dx;
}

console.log(isBalanced("Kitty Ipsum")); 

//* Logica giusta fin dall’inizio

//* Hai capito metà sinistra/destra

//* Buon uso di contatori

//! Da migliorare

//! Attenzione a cosa controlli (s[i] vs i)

//! Gestione casi limite (lunghezza dispari)

//! N.b. LEGGI BENE LA CONSEGNA PRIMA D'INIZIARE A SCRIVERE CODICE 

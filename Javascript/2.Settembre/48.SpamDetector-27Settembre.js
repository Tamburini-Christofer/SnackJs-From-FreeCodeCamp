//todo Dato un numero di telefono nel formato "+A (BBB) ​​CCC-DDDD", dove ogni lettera rappresenta una cifra, come segue:

//! A rappresenta il prefisso internazionale e può essere composto da un numero qualsiasi di cifre.
//! BBB rappresenta il prefisso locale e sarà sempre composto da tre cifre.
//! CCC e DDDD rappresentano il numero locale e saranno sempre rispettivamente di tre e quattro cifre.
//! Determina se si tratta di un numero spam in base ai seguenti criteri:

//! Il prefisso internazionale è lungo più di 2 cifre o non inizia con uno zero (0).
//! Il prefisso locale è maggiore di 900 o minore di 200.
//! La somma delle prime tre cifre del numero locale compare tra le ultime quattro cifre del numero locale.
//! Il numero presenta la stessa cifra quattro o più volte di seguito (ignorando i caratteri di formattazione).

//? Tempo di esecuzione:
//* Non completato ma per poco

//?Codice scritto senza utilizzo di ChatGpt

function isSpam(number) {
  let numberArr = number.replace(/[)+(-]/g, "").split(" ")
  let convertNumber = numberArr.map(Number)
  
  for(let i = 0; i < numberArr.length; i++) {
    if(convertNumber[0] !== 0 ||
       convertNumber[0] > 1   ||
       convertNumber[1] < 200 || 
       convertNumber[1] > 900 
       ) return true
      else return false
  }
}

console.log(isSpam("+0 (555) 135-0192"))

//?Codice scritto da ChatGpt

function isSpam(number) {
  // rimuove simboli inutili
  let clean = number.replace(/[()+-]/g, "");
  let parts = clean.split(" ");

  let country = parts[0];        // stringa
  let area = Number(parts[1]);   // numero
  let local = parts[2];          // es: 1350192

  let first3 = local.slice(0, 3);
  let last4 = local.slice(3);

  // 1️⃣ country code
  if (country.length > 2 || country[0] !== "0") return true;

  // 2️⃣ area code
  if (area < 200 || area > 900) return true;

  // 3️⃣ somma prime 3 cifre dentro ultime 4
  let sum = [...first3].reduce((a, b) => a + Number(b), 0);
  if (last4.includes(sum.toString())) return true;

  // 4️⃣ stesso numero 4 volte di fila
  let onlyDigits = number.replace(/\D/g, "");
  if (/(\d)\1{3,}/.test(onlyDigits)) return true;

  return false;
}

console.log(isSpam("+0 (555) 135-0192"));


//* ✅ Pro del tuo codice

//* Hai capito come scomporre la stringa

//* Usi replace e split correttamente

//* Tentativo giusto di convertire in numeri

//* Logica delle condizioni impostata

//! ❌ Contro del tuo codice

//! for inutile (return al primo giro)

//! Country code gestito male (può avere più cifre)

//! map(Number) perde gli zeri iniziali

//! Controllo convertNumber[0] !== 0 sempre vero

//! Mancano 2 regole su 4

//! Non ignori davvero i caratteri di formattazione

//! Codice fragile su input non perfetti

//? Versione Chat Gpt 

//todo Considerazioni: 

//* Grazie chat per avermi complicato la vita con le regex!

//! N.B.
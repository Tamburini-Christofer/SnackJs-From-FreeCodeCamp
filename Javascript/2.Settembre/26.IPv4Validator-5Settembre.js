//todo Data una stringa, determina se si tratta di un indirizzo IPv4 valido. Un indirizzo IPv4 valido è composto da quattro numeri interi separati da punti (.). 
//todo Ogni numero deve soddisfare le seguenti condizioni:
 
//! È compreso tra 0 e 255 inclusi.
//! Non deve contenere zeri iniziali (ad esempio, 0 è consentito, 01 no).
//! Sono consentiti solo caratteri numerici.

//? Tempo di esecuzione:
//* 26 minuti e 23 secondi

//?Codice scritto senza utilizzo di ChatGpt

function isValidIPv4(ipv4) {
  let lastChar = ipv4.slice(-1)
  if(lastChar === ".") return false

  let ipvNumber = ipv4.split(".")
  let ipvNumberArr = ipvNumber.map(Number)

  for(let i = 0; i < 4; i++) {
    if(ipvNumberArr[i] >= 0 && ipvNumberArr[i] < 255) return true
    else return false
  }
}

console.log(isValidIPv4("192.168.101."))

//?Codice scritto da ChatGpt
//* Non utilizzata

//* ✅ Pro

//* Buona idea controllare il punto finale

//* Uso corretto di split(".")

//* Tentativo giusto di convertire in numeri (map(Number))

//* Struttura chiara e leggibile

//! ❌ Contro / Errori

//! return nel for → esci al primo numero (errore grave)

//! Non controlli che ci siano esattamente 4 blocchi

//! 255 escluso (< 255 invece di <= 255)

//! Non gestisci NaN (es. "abc")

//! Accetta numeri vuoti ("192..1.1")

//! Non blocca numeri negativi o con spazi

//? Versione Chat Gpt 

function isValidIPv4(ipv4) {
  const parts = ipv4.split(".");
  if (parts.length !== 4) return false;

  for (let part of parts) {
    if (part === "") return false;
    if (!/^\d+$/.test(part)) return false;

    const num = Number(part);
    if (num < 0 || num > 255) return false;
  }

  return true;
}

console.log(isValidIPv4("192.168.101.1"));   // true
console.log(isValidIPv4("192.168.101."));    // false
console.log(isValidIPv4("256.1.1.1"));       // false


//todo Considerazioni: 

//! N.B.
//todo  Per il secondo giorno della Settimana Spaziale, vi verrà fornita una stringa in cui ogni carattere rappresenta la lettura della luminosità di una stella. 
//todo Determinate se le letture hanno rilevato un esopianeta utilizzando il metodo del transito. Il metodo del transito si verifica quando un pianeta passa davanti a una stella, riducendone la luminosità osservata.


//! Le letture della luminosità sono composte solo dai caratteri 0-9 e dalla A alla Z, dove ogni lettura corrisponde ai seguenti valori numerici:
//! I caratteri 0-9 corrispondono ai livelli di luminosità 0-9.
//! I caratteri A-Z corrispondono ai livelli di luminosità 10-35.
//! Una stella è considerata un esopianeta se una singola lettura è inferiore o uguale all'80% della media di tutte le letture. Ad esempio, se la luminosità media di una stella è 10, si considera che abbia un esopianeta se una singola lettura è pari o inferiore a 8.

//? Tempo di esecuzione:
//* Non completato 

//?Codice scritto senza utilizzo di ChatGpt

function hasExoplanet(readings) {

  let tot = []
  const lettereMaiuscole = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];


  for (let i = 0; i < readings.length; i++) {
    if(typeof readings[i] === "number")  tot.push(readings[i])
    if(typeof readings[i] === "string") {
      let indice = lettereMaiuscole.indexOf(readings[i])
      tot.push(indice + 10)
    }
  }
  let totVal = tot.reduce((acc,init) => acc+init, 0)
  let totValMe = ((totVal / tot.length) / 100) * 80;

  for(let j = 0; j < tot.length; j++) 
  if(tot[j] > totValMe) return tot
  if(tot[j] < totValMe) return false
}

console.log(hasExoplanet("665544554"))

//?Codice scritto da ChatGpt

function hasExoplanet(readings) {
  const values = readings.split("").map(c =>
    isNaN(c) ? c.charCodeAt(0) - 55 : Number(c)
  );

  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const threshold = avg * 0.8;

  return values.some(v => v <= threshold);
}

console.log(hasExoplanet("665544554")); // true

//! ❌ Problemi principali

//! readings è una stringa, ma la tratti come array misto

//! Controllo typeof inutile → sono sempre caratteri

//! Conversione lettere ok, ma troppo verbosa

//! Formula 80% sbagliata

//! for finale ritorna subito → non controlla tutti i valori

//! Ritorni tot invece di true


//* ✅ PRO

//* Hai capito come convertire lettere e numeri in valori numerici

//* Usi un array per accumulare i valori, logica chiara

//* Hai provato a calcolare una soglia basata sulla media

//* Tentativo di usare reduce per la somma → buona comprensione JS

//! ❌ CONTRO

//! Tratti readings come array misto con typeof, ma è sempre una stringa → ridondante

//! Conversione lettere con indexOf è lunga, si può fare con charCodeAt

//! La formula totValMe = ((totVal / tot.length)/100)*80 è complicata e sbagliata → basta avg * 0.8

//! Ciclo finale non controlla correttamente tutti i valori, ritorna subito

//! Ritorni tot invece di true/false → output sbagliato

//! Non gestisce mai lettere minuscole (se mai arrivassero)

//? Versione Chat Gpt 

function hasExoplanet(readings) {
  // Convertiamo ogni carattere in un valore numerico
  // 0-9 → 0-9, A-Z → 10-35
  const values = readings.split("").map(c => {
    if (c >= "0" && c <= "9") return Number(c);
    return c.charCodeAt(0) - 55; // 'A' = 65 → 10
  });

  // Calcoliamo la media dei valori
  const avg = values.reduce((sum, val) => sum + val, 0) / values.length;

  // 80% della media
  const threshold = avg * 0.8;

  // Se almeno un valore è <= 80% della media, c'è un esopianeta
  return values.some(val => val <= threshold);
}

// Esempio
console.log(hasExoplanet("665544554")); // true
console.log(hasExoplanet("999999999")); // false
console.log(hasExoplanet("ABCD1234"));  // true


//todo Considerazioni: 

//! N.B.
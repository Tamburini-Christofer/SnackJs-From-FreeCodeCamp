//todo Date le dimensioni di un serbatoio di carburante, il livello attuale di carburante e il prezzo al gallone, restituisci il costo per riempire completamente il serbatoio.

//! tankSize è la capacità totale del serbatoio in galloni.
//! fuelLevel è la quantità attuale di carburante nel serbatoio in galloni.
//! pricePerGallon è il costo di un gallone di carburante.
//! Il valore restituito deve essere arrotondato a due cifre decimali nel formato: "$d.dd".

//? Tempo di esecuzione:
//* 2 Minuti e 30 secondi

//?Codice scritto senza utilizzo di ChatGpt

function costToFill(tankSize, fuelLevel, pricePerGallon) {

  let tot = (tankSize - fuelLevel) * pricePerGallon

  return "$" + tot.toFixed(2);
}

console.log(costToFill(20, 0, 4.00))

//* ✅ Pro

//* Formula corretta

//* Uso giusto di toFixed(2)

//* Output nel formato richiesto ("$80.00")

//* Codice semplice e leggibile

//! ❌ Contro

//! Nessuna validazione input (livello > serbatoio, numeri negativi)

//! Usa stringa " $" fissa (ok per l’esercizio, non per casi reali)

//! Variabile tot poco descrittiva

//?Codice scritto da ChatGpt

function costToFill(tankSize, fuelLevel, pricePerGallon) {
  const cost = (tankSize - fuelLevel) * pricePerGallon;
  return `$${cost.toFixed(2)}`;
}

//? Versione Chat Gpt 

//todo Considerazioni: 

//! N.B.
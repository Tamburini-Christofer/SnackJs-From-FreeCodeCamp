//todo Consegna dell'esercizio
// Dati due stringhe che rappresentano l'ora in cui hai parcheggiato la tua auto e l'ora in cui l'hai ritirata, calcola la tariffa di parcheggio.
// Le stringhe fornite saranno nel formato "HH:MM" utilizzando l'orologio a 24 ore. Quindi "14:00" corrisponde alle 14:00.
// La prima stringa indicherà l'ora in cui hai parcheggiato l'auto e la seconda l'ora in cui l'hai ritirata.
// Se l'orario di ritiro è precedente all'orario di ingresso, significa che il parcheggio si è protratto oltre la mezzanotte del giorno successivo.
// Regole tariffarie:
// - Ogni ora di parcheggio costa $3.
// - Le frazioni di ora vengono arrotondate per eccesso all'ora intera successiva.
// - Se il parcheggio si protrae per tutta la notte (oltre la mezzanotte), viene applicato un supplemento di $10 per il parcheggio notturno.
// - È previsto un supplemento minimo di $5 (applicato solo se il totale sarebbe inferiore a $5).
// Restituisci il costo totale nel formato "$costo", ad esempio "$5".
//todo

//* Tempo di esecuzione:
// Non completato
//*


//*Codice scritto senza utilizzo di ChatGpt
function calculateParkingFee(parkTime, pickupTime) {

  let hours = [parkTime.split(":"), pickupTime.split(":")]
  let permanenceHours = null

  if(Number(hours[1][0]) < Number(hours[0][0])) 
  permanenceHours = ((Number(hours[1][0]) - Number(hours[0][0])) + (Number(hours[1][1]) - Number(hours[0][1]) === 30 ? Math.round(0.5) : 0) + 10)
  else 
  permanenceHours = ((Number(hours[1][0]) - Number(hours[0][0])) + (Number(hours[1][1]) - Number(hours[0][1]) === 30 ? Math.round(0.5) : 0) + 10)

  let costs = permanenceHours <= 1 ? 5 : permanenceHours * 3

  return `\$${costs}`;
}

console.log(calculateParkingFee("09:00", "11:00"));
//*

//* Codice scritto da ChatGpt
function calculateParkingFee(parkTime, pickupTime) {
  const [parkH, parkM] = parkTime.split(":").map(Number);
  const [pickH, pickM] = pickupTime.split(":").map(Number);

  let startMinutes = parkH * 60 + parkM;
  let endMinutes = pickH * 60 + pickM;

  let overnight = false;

  if (endMinutes < startMinutes) {
    // superamento della mezzanotte
    endMinutes += 24 * 60;
    overnight = true;
  }

  let totalHours = Math.ceil((endMinutes - startMinutes) / 60);

  let cost = totalHours * 3;

  if (overnight) cost += 10;

  if (cost < 5) cost = 5;

  return `$${cost}`;
}

console.log(calculateParkingFee("09:00", "11:00")); // $6
console.log(calculateParkingFee("23:30", "01:00")); // $13 (1.5h arrotondato → 2*3 + 10 overnight)
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 4/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Ha provato a calcolare la differenza tra ore e minuti
// - Logica base dell'overnight tentata

//! Contro
// - Non funziona correttamente con minuti
// - Arrotondamento e frazioni gestiti male
// - Supplemento notturno applicato sempre (+10)
// - Tariffa minima non considerata correttamente
// - Codice poco leggibile e non scalabile
//*
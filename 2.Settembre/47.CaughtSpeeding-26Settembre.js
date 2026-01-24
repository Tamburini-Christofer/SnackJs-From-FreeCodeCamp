//todo Dato un array di numeri che rappresentano la velocità a cui sono stati osservati i veicoli in transito e un numero che rappresenta il limite di velocità, restituisci un array con due elementi: il numero di veicoli che hanno superato il limite di velocità, seguito dalla quantità media di veicoli che hanno superato il limite di velocità.

//! Se non ci sono stati veicoli che hanno superato il limite di velocità, restituisci [0, 0].

//? Tempo di esecuzione:
//* 15 minuti e 27 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function speeding(speeds, limit) {
  let contatoreVeicoli = 0;
  let speedLimit = 0;
  
  for(let i = 0; i < speeds.length; i++) {
  if(speeds[i] > limit) { 
    contatoreVeicoli++;
    speedLimit = speedLimit + (speeds[i] - limit)
  }}
  let media = speedLimit / contatoreVeicoli;

  if(contatoreVeicoli === 0) return [0,0]
  return [contatoreVeicoli, media];
}

console.log(speeding([58, 50, 60, 55], 55))

//?Codice scritto da ChatGpt
//* Non utilizzato

//* ✅ Pro

//* Chiaro cosa fa

//* Ciclo semplice

//* Risultato corretto

//* Gestisce il caso nessun veicolo fuori limite

//! ❌ Contro

//! Divisione fatta prima del controllo (rischio NaN)

//! Nomi variabili migliorabili

//! Un po’ verboso

//! Nessuna arrotondatura della media

//? Versione Chat Gpt 

function speeding(speeds, limit) {
  let count = 0;
  let totalExcess = 0;

  for (const speed of speeds) {
    if (speed > limit) {
      count++;
      totalExcess += speed - limit;
    }
  }

  if (count === 0) return [0, 0];
  return [count, totalExcess / count];
}

console.log(speeding([58, 50, 60, 55], 55));


//todo Considerazioni: 

//! N.B.
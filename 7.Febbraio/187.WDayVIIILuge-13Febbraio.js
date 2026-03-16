//todo Consegna dell'esercizio
// Dato un array di cinque numeri, ognuno dei quali rappresenta il tempo (in secondi) impiegato da uno slittinista per completare un segmento di pista, determinare quale segmento ha raggiunto la velocità massima e qual è stata tale velocità.
//todo

//! Requisiti da rispettare
// La pista è divisa nei seguenti segmenti:

// Segmento 1: 320 metri
// Segmento 2: 280 metri
// Segmento 3: 350 metri
// Segmento 4: 300 metri
// Segmento 5: 250 metri
// Il primo valore nell'array corrisponde al tempo impiegato per il segmento 1, il secondo al segmento 2 e così via.

// Per calcolare la velocità (in metri al secondo) di un segmento, dividere la distanza per il tempo impiegato.

// Restituire "La velocità massima raggiunta dallo slittinista è stata di X m/s sul segmento Y." Dove X è la velocità massima, arrotondata a due cifre decimali, e Y è il numero del segmento in cui è stata raggiunta la velocità massima.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function getFastestSpeed(times) {

  let segments = [320, 280, 350, 300, 250] 

  for(let time of segments) {
    let seconds = null;
    let giro = 0;

    for(let i = 0; i < times.length; i++) {
      let timeSegments = time / times[i]
      if(timeSegments >= seconds || seconds === null) {
        seconds = timeSegments.toFixed(2);
        giro = i + 1
    }
  }

    return `The luger's fastest speed was ${seconds} m/s on segment ${giro}.`

  }
}

console.log(getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128]))
//*

//* Codice scritto da ChatGpt
function getFastestSpeed(times) {

  const segments = [320, 280, 350, 300, 250];

  let maxSpeed = 0;
  let segment = 0;

  for (let i = 0; i < times.length; i++) {

    const speed = segments[i] / times[i];

    if (speed > maxSpeed) {
      maxSpeed = speed;
      segment = i + 1;
    }
  }

  return `The luger's fastest speed was ${maxSpeed.toFixed(2)} m/s on segment ${segment}.`;
}

console.log(getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128]));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 6/10
//todo

//* Pro e contro del mio codice

//*Pro

// uso corretto di toFixed(2)
// hai pensato al segmento (i + 1)
// logica del massimo quasi corretta

//!Contro 

// loop esterno inutile
// return nel posto sbagliato
// confronto numero/stringa
// codice più complesso del necessario

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
//todo Consegna dell'esercizio
// Il 21 dicembre è il solstizio d'inverno per l'emisfero settentrionale e il solstizio d'estate per l'emisfero meridionale. Ciò significa che è il giorno con meno ore di luce a nord e più ore di luce a sud.
//todo
//! Requisiti da rispettare
// Dato un numero di latitudine compreso tra -90 e 90, restituisci un'approssimazione delle ore di luce al solstizio utilizzando la seguente tabella:
// Latitudine Ore di luce
// -90 24
// -75 23
// -60 21
// -45 15
// -30 13
// -15 12
// 0 12
// 15 11
// 30 10
// 45 9
// 60 6
// 75 2
// 90 0
// Se la latitudine indicata non corrisponde esattamente a una voce della tabella, utilizza il valore della latitudine più vicina.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function daylightHours(latitude) {

  let latitudeArr = [90,75,60,45,30,15,0,-15,-30,-45,-60,-75,-90]
  let dayLight = [0,2,6,9,10,11,12,12,13,15,21,23,24]

  let result = 0;

  if(latitudeArr.includes(latitude)) {
    let value = latitudeArr.indexOf(latitude)
    result = dayLight[value]
  }

  return result;
}

console.log(daylightHours(70))

//*

//* Codice scritto da ChatGpt

function daylightHours(latitude) {
  const latitudeArr = [90, 75, 60, 45, 30, 15, 0, -15, -30, -45, -60, -75, -90];
  const dayLight = [0, 2, 6, 9, 10, 11, 12, 12, 13, 15, 21, 23, 24];

  let closestIndex = 0;
  let minDiff = Infinity;

  for (let i = 0; i < latitudeArr.length; i++) {
    const diff = Math.abs(latitude - latitudeArr[i]);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  }

  return dayLight[closestIndex];
}

console.log(daylightHours(70)); // 6

//*

//* Valutazione al codice proposta da ChatGpt
//* voto 5/10
//*

//* Pro e contro del mio codice

//* Pro

// Struttura semplice
// Tabelle corrette
// Uso corretto di includes e indexOf

//! Contro

// Non rispetta la consegna principale (valore più vicino)
// Caso generale non gestito
// Ritorno mancante

//*
//! Altre considerazioni e nota bene
//todo Esecuzione degli esercizi
//? Creazione del file contenente "Numero snack"."Nome snack"-"Giorno del mese".js
//? Comprensione della consegna ed eventuale copia in google translate. 
//? 2 minuti massimo per analizzare la consegna e fare un pensiero prelimianre. 
//? Inizio timer impostato ad un massimale di 30 minuti. Oltre questa soglia, l'esercizio non sarà completato
//? Consultazione con ChatGpt per miglioramenti e sistemazioni
//? Push finale
//! Tre volte a settimana, riguardare lo snack e rivedere possibili soluzioni.
//! Una volta a settimana, riguardare l'andamento mensile e sistemare le lacune.
//! NON DEPRIMERSI 
//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
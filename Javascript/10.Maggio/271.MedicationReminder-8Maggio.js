//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Dato un array di farmaci e una stringa che rappresenta l'ora corrente, 
restituisci il prossimo farmaco da assumere e quanto tempo manca all'assunzione.

Ogni farmaco è nel formato [nome, ultimaAssunzione], dove nome è il nome del farmaco 
e ultimaAssunzione è l'ora dell'ultima assunzione.

Tutti gli orari forniti saranno nel formato "HH:MM" (24 ore).

Utilizza il seguente schema di assunzione dei farmaci:

Nome Schema
Deployxitrin 08:00, 16:00
Debuggamanizole 07:00, 13:00, 21:00
Mergeflictamine ogni 4 ore

Restituisci una stringa nel formato "{nome} in Hh Mm".
Ad esempio:
"Debuggamanizole tra 2h 0m"
"Deployxitrin tra 1h 5m"
*/
//todo

//* Tempo di esecuzione:
// 30 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function medicationReminder(medications, currentTime) {
  const toMins = (time) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  };

  const now = toMins(currentTime);

  const schedule = {
    'Deployxitrin': ['08:00', '16:00'],
    'Debuggamanizole': ['07:00', '13:00', '21:00'],
    'Mergeflictamine': 'interval' 
  };

  let nextMed = null;
  let minWait = Infinity;

  for (const [name, lastTaken] of medications) {
    let possibleTimes = [];

    if (name === 'Mergeflictamine') {
      possibleTimes.push((toMins(lastTaken) + 240));
    } else {
      possibleTimes = schedule[name].map(toMins);
    }

    possibleTimes.forEach(medTime => {
      let diff = medTime - now;

      if (diff <= 0) diff += 1440;

      if (diff < minWait) {
        minWait = diff;
        nextMed = name;
      }
    });
  }

  const h = Math.floor(minWait / 60);
  const m = minWait % 60;

  return `${nextMed} in ${h}h ${m}m`;
}

console.log(
  medicationReminder(
    [
      ["Deployxitrin", "08:00"],
      ["Debuggamanizole", "07:00"],
      ["Mergeflictamine", "10:00"]
    ],
    "11:00"
  )
);

//*

//* Codice scritto da ChatGpt

function medicationReminder(medications, currentTime) {

  const toMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const currentMinutes = toMinutes(currentTime);

  const schedules = {
    Deployxitrin: ["08:00", "16:00"],
    Debuggamanizole: ["07:00", "13:00", "21:00"],
  };

  let nextMedication = "";
  let shortestTime = Infinity;

  for (const [name, lastTaken] of medications) {

    let nextTimes = [];

    if (name === "Mergeflictamine") {

      const nextTime = (toMinutes(lastTaken) + 240) % 1440;
      nextTimes.push(nextTime);

    } else {

      nextTimes = schedules[name].map(toMinutes);

    }

    for (const medTime of nextTimes) {

      let difference = medTime - currentMinutes;

      if (difference < 0) {
        difference += 1440;
      }

      if (difference < shortestTime) {
        shortestTime = difference;
        nextMedication = name;
      }
    }
  }

  const hours = Math.floor(shortestTime / 60);
  const minutes = shortestTime % 60;

  return `${nextMedication} in ${hours}h ${minutes}m`;
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto 
// 8.5/10
//todo

//* Pro e contro del mio codice

//* Pro

// Codice leggibile e ben organizzato
// Ottimo utilizzo di funzioni helper
// Hai gestito correttamente la conversione degli orari
// Buona logica per trovare il farmaco più vicino
// Utilizzo corretto di array, oggetti e cicli
// Hai considerato il cambio giorno con +1440

//! Contro

// Mergeflictamine non usa il modulo %1440,
// quindi in alcuni casi può superare le 24 ore

// Con diff <= 0 consideri anche l'orario identico
// come giorno successivo. In alcuni casi potrebbe
// essere meglio usare solo diff < 0

// schedule contiene una stringa "interval"
// che non viene realmente utilizzata

// Manca gestione di eventuali farmaci sconosciuti

//*
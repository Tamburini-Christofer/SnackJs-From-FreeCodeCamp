//todo Consegna dell'esercizio
// Calcolare il punteggio totale di pulizia dato un array di oggetti.
// Ogni oggetto ha un valore base.
// Bonus per oggetti consecutivi uguali (+1, +2, ...).
// Ogni 5° elemento ha un moltiplicatore (*2, *3, ...).
// Gli oggetti rari ["raro", valore] NON hanno bonus consecutivi.
//todo

//* Tempo di esecuzione:
// non specificato
//*

//*Codice scritto senza utilizzo di ChatGpt
function getCleanupScore(items) {

  let score = 0;
  let provisoryScore = 0

  for (let i = 0; i < items.length; i++) {
    let bonus = 1
    let bonusCom = 1

    if (i % 5 === 0) {
      if (items[i] === "bottle") provisoryScore += 10 * bonus
      if (items[i] === "can") provisoryScore += 6 * bonus
      if (items[i] === "bag") provisoryScore += 8 * bonus
      if (items[i] === "tire") provisoryScore += 35 * bonus
      if (items[i] === "straw") provisoryScore += 4 * bonus
      if (items[i] === "cardboard") provisoryScore += 3 * bonus
      if (items[i] === "newspaper") provisoryScore += 3 * bonus
      if (items[i] === "shoe") provisoryScore += 12 * bonus
      if (items[i] === "electronics") provisoryScore += 25 * bonus
      if (items[i] === "battery") provisoryScore += 18 * bonus
      if (items[i] === "mattress") provisoryScore += 38 * bonus
      bonus++
    }

    else if (i % 5 !== 0 && items[i + 1] !== items[i]) {
      if (items[i] === "bottle") provisoryScore += 10
      if (items[i] === "can") provisoryScore += 6
      if (items[i] === "bag") provisoryScore += 8
      if (items[i] === "tire") provisoryScore += 35
      if (items[i] === "straw") provisoryScore += 4
      if (items[i] === "cardboard") provisoryScore += 3
      if (items[i] === "newspaper") provisoryScore += 3
      if (items[i] === "shoe") provisoryScore += 12
      if (items[i] === "electronics") provisoryScore += 25
      if (items[i] === "battery") provisoryScore += 18
      if (items[i] === "mattress") provisoryScore += 38
    }

    else if (i % 5 !== 0 && items[i + 1] === items[i]) {
      bonusCom++
      if (items[i] === "bottle") provisoryScore += 10 + bonusCom
      if (items[i] === "can") provisoryScore += 6 + bonusCom
      if (items[i] === "bag") provisoryScore += 8 + bonusCom
      if (items[i] === "tire") provisoryScore += 35 + bonusCom
      if (items[i] === "straw") provisoryScore += 4 + bonusCom
      if (items[i] === "cardboard") provisoryScore += 3 + bonusCom
      if (items[i] === "newspaper") provisoryScore += 3 + bonusCom
      if (items[i] === "shoe") provisoryScore += 12 + bonusCom
      if (items[i] === "electronics") provisoryScore += 25 + bonusCom
      if (items[i] === "battery") provisoryScore += 18 + bonusCom
      if (items[i] === "mattress") provisoryScore += 38 + bonusCom

      if (items[i + 1] !== items[i]) bonusCom = 1
    }
  }

  return provisoryScore;
}
//*

//* Codice scritto da ChatGpt
function getCleanupScore(items) {
  const values = {
    bottle: 10,
    can: 6,
    bag: 8,
    tire: 35,
    straw: 4,
    cardboard: 3,
    newspaper: 3,
    shoe: 12,
    electronics: 25,
    battery: 18,
    mattress: 38
  };

  let score = 0;
  let streak = 1;

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let base;

    // OGGETTO RARO
    if (Array.isArray(item)) {
      base = item[1];
      streak = 1;
    } else {
      base = values[item];

      // BONUS CONSECUTIVO (controllo indietro!)
      if (i > 0 && items[i] === items[i - 1]) {
        streak++;
      } else {
        streak = 1;
      }

      base += (streak - 1);
    }

    // MOLTIPLICATORE (5°, 10°, 15°...)
    let multiplier = 1;
    if ((i + 1) % 5 === 0) {
      multiplier = (i + 1) / 5 + 1;
    }

    score += base * multiplier;
  }

  return score;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: 5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Hai provato a gestire i casi (bonus, sequenze, condizioni)
// - Logica base presente
// - Uso corretto del ciclo for

//! Contro
// - Non gestisci gli oggetti "rari"
// - Nomi sbagliati (inglese invece di italiano richiesto)
// - Logica bonus consecutivi errata (controlli item[i+1] invece di i-1)
// - Il moltiplicatore è sbagliato (i % 5 === 0 non è corretto)
// - Codice molto ripetitivo (troppi if)
// - Variabili bonus resettate ogni giro → non funzionano
// - difficile da mantenere

//*
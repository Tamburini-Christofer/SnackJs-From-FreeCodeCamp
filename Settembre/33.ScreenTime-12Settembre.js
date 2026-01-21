//todo Dato un array di input di sette numeri interi, che rappresentano una settimana, dove ogni numero intero rappresenta la quantità di ore trascorse al telefono quel giorno, determina se il tempo trascorso davanti allo schermo è eccessivo in base a questi vincoli:

//! Se un singolo giorno ha 10 ore o più, è eccessivo.
//! Se la media di tre giorni consecutivi è maggiore o uguale a 8 ore, è eccessivo.
//! Se la media dei sette giorni è maggiore o uguale a 6 ore, è eccessivo.

//? Tempo di esecuzione:
//* 11 Minuti e 42 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function tooMuchScreenTime(hours) {

  let totWeek = hours.reduce((acc, value) => acc + value, 0)
  let mediaWeek = totWeek / 7
  let isFalse = null

  for(let i = 0; i < hours.length; i++) {
    if(hours[i] >= 10 ||
      (hours[i] + hours[i+1] + hours[i+2]) / 3 >= 8 ||
      mediaWeek >= 6) return true;
  else isFalse = false
  }

  return isFalse;
}

console.log(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]))

//?Codice scritto da ChatGpt
//* Nessun codice scritto da ChatGpt

//* ✅ PRO

//* Logica di base corretta: controlla le 3 condizioni

//* Usa reduce per sommare → bene

//* Funzione restituisce boolean

//! ❌ CONTRO

//! isFalse inutile → puoi return false direttamente

//! Il ciclo for con hours[i+1] e hours[i+2] può uscire dai limiti dell’array

//! Calcolo della media settimanale ripetuto ogni iterazione → inutile

//! Ciclo e condizioni più complicati del necessario

//? Versione Chat Gpt 

function tooMuchScreenTime(hours) {
  const mediaWeek = hours.reduce((a, b) => a + b, 0) / 7;

  if (mediaWeek >= 6) return true;

  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= 10) return true;
    if (i + 2 < hours.length) {
      const media3 = (hours[i] + hours[i + 1] + hours[i + 2]) / 3;
      if (media3 >= 8) return true;
    }
  }

  return false;
}

console.log(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4])); // false

//todo Considerazioni: 

//! N.B.
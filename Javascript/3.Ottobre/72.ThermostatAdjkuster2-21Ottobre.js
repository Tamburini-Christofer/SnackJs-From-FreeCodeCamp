//todo  Data la temperatura attuale di una stanza in gradi Fahrenheit e una temperatura target in gradi Celsius, restituisci una stringa che indica come regolare la temperatura ambiente in base a questi vincoli:

//! Restituisci "Riscaldamento: X gradi Fahrenheit" se la temperatura attuale è inferiore al target. Dove X è il numero di gradi Fahrenheit necessari per riscaldare la stanza e raggiungere il target, arrotondato a 1 cifra decimale.
//! Restituisci "Raffreddamento: X gradi Fahrenheit" se la temperatura attuale è superiore al target. Dove X è il numero di gradi Fahrenheit necessari per raffreddare la stanza e raggiungere il target, arrotondato a 1 cifra decimale.
//! Restituisci "Mantieni" se la temperatura attuale è uguale al target.
//! Per convertire Celsius in Fahrenheit, moltiplica la temperatura Celsius per 1,8 e aggiungi 32 al risultato (F = (C * 1,8) + 32).

//? Tempo di esecuzione:
//* 15 Minuti e 36 secondi 

//?Codice scritto senza utilizzo di ChatGpt

function adjustThermostat(currentF, targetC) {

  let celsiusConvert = (targetC * 1.8) + 32
  let difference = celsiusConvert - currentF

  if(difference === 0) return  "Hold"
  if(difference > 0)   return  "Heat:" + " " + difference.toFixed(1) + " " + "degrees Fahrenheit"
  if(difference < 0)   return  "Cool:" + " " + Math.abs(difference.toFixed(1)) + " " + "degrees Fahrenheit"
}

console.log(adjustThermostat(72, 18))

//?Codice scritto da ChatGpt
//* Non usata

//* ✅ PRO

//* Conversione C → F corretta

//* Logica difference chiara

//* Gestione dei 3 casi (Heat / Cool / Hold)

//* toFixed(1) usato correttamente

//* Output conforme alla traccia

//! ❌ CONTRO

//! Math.abs(difference.toFixed(1)) → toFixed restituisce stringa
//! (meglio Math.abs(difference).toFixed(1))

//! Stringhe concatenate inutilmente ("Heat:" + " " + ...) 

//! Mancano spazi gestiti in modo più pulito (template literal)

//! Nessun else finale (non grave, ma migliorabile)

//? Versione Chat Gpt 

function adjustThermostat(currentF, targetC) {
  const targetF = targetC * 1.8 + 32
  const diff = targetF - currentF

  if (diff === 0) return "Hold"
  if (diff > 0) return `Heat: ${diff.toFixed(1)} degrees Fahrenheit`
  return `Cool: ${Math.abs(diff).toFixed(1)} degrees Fahrenheit`
}

//todo Considerazioni: 

//! N.B.
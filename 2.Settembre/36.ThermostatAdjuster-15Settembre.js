//todo Data la temperatura attuale di una stanza e una temperatura target, restituisci una stringa che indica come regolare la temperatura della stanza in base a questi vincoli:

//! Restituisci "heat" se la temperatura attuale è inferiore al target.
//! Restituisci "cool" se la temperatura attuale è superiore al target.
//! Restituisci "hold" se la temperatura attuale è uguale al target.

//? Tempo di esecuzione:
//* 1 Minuo e 14 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function adjustThermostat(temp, target) {

  if(temp < target) return "heat"
  if(temp > target) return "cool"
  if(temp === target) return "hold"

  return temp;
}

console.log(adjustThermostat(68, 72))

//?Codice scritto da ChatGpt
//* Non ho usato Chat

//* ✅ PRO

//* Logica corretta e semplice

//* Gestisce tutti e tre i casi (<, >, ===)

//* Funzione leggibile e chiara

//* Testa correttamente l’esempio

//! ❌ CONTRO

//! L’ultimo return temp; non serve mai perché tutti i casi sono già coperti

//! Puoi anche usare else if per rendere leggermente più chiaro

//? Versione Chat Gpt 

function adjustThermostat(temp, target) {
  if (temp < target) return "heat";
  else if (temp > target) return "cool";
  else return "hold";
}

console.log(adjustThermostat(68, 72)); // "heat"

//todo Considerazioni: 

//! N.B.
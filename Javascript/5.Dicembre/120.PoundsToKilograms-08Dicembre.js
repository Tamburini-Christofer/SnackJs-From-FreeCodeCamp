//todo Consegna dell'esercizio
// Dato un peso in libbre come numero, restituisci la stringa "(lbs) libbre uguale a (kg) chilogrammi".
//todo
//! Requisiti da rispettare
// Sostituisci "(lbs)" con il numero di input.
// Sostituisci "(kg)" con l'input convertito in chilogrammi, arrotondato a due decimali e includendo sempre due cifre decimali nel valore.
// 1 libbra equivale a 0,453592 chilogrammi.
// Se l'input è 1, usa "libbra" invece di "libbre".
// Se il valore convertito è 1, usa "chilogrammo" invece di "chilogrammi".
//!

//* Tempo di esecuzione:
//* 6 Minuti e 02 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function convertToKgs(lbs) {

  let kg = (lbs* 0.453592).toFixed(2)

  if(kg == 1) return `${lbs} pounds equals ${kg} kilogram.`
  
  if(lbs === 1) return `${lbs} pound equals ${kg} kilograms.`
  else if(lbs !== 1) return `${lbs} pounds equals ${kg} kilograms.`

  return lbs;
}

console.log(convertToKgs(2.20462))

//*

//* Codice scritto da ChatGpt

function convertToKgs(lbs) {
  const kg = +(lbs * 0.453592).toFixed(2);

  const poundLabel = lbs === 1 ? "pound" : "pounds";
  const kgLabel = kg === 1 ? "kilogram" : "kilograms";

  return `${lbs} ${poundLabel} equals ${kg.toFixed(2)} ${kgLabel}.`;
}

console.log(convertToKgs(2.20462));

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 7/10
//*

//* Pro e contro del mio codice

//* Pro

// Formula corretta
// Uso giusto di toFixed(2)
// Gestisci singolare/plurale

//! Contro

// kg == 1 è una stringa, confronto poco sicuro
// I casi singolare/plurale non sono gestiti in modo uniforme
// return lbs; finale inutile
// Logica un po’ ripetitiva

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
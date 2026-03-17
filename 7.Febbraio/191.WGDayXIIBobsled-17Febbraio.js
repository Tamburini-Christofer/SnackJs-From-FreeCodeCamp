//todo Consegna dell'esercizio
// Dato un array che rappresenta i pesi degli atleti di una squadra di bob e un numero che rappresenta il peso del bob, determinare se la squadra è idonea a gareggiare.
//todo

//! Requisiti da rispettare
// La lunghezza dell'array determina la dimensione della squadra: 1, 2 o 4 persone.
// Tutti i valori di peso forniti sono in chilogrammi (kg).
// Il bob (solo il bob) deve avere un peso minimo di:

// 162 kg per una squadra di 1 persona
// 170 kg per una squadra di 2 persone
// 210 kg per una squadra di 4 persone
// Il peso totale del bob (atleti più bob) non deve superare:

// 247 kg per una squadra di 1 persona
// 390 kg per una squadra di 2 persone
// 630 kg per una squadra di 4 persone
// Restituire "Idonea" se la squadra soddisfa tutti i requisiti, o "Non idonea" se la squadra non soddisfa uno o più requisiti.
//!

//* Tempo di esecuzione:
//* 12 Minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function checkEligibility(athleteWeights, sledWeight) { 
    let sumAthlete = athleteWeights.reduce((acc, i) => acc + i, 0) 
    
    if((sledWeight >= 162 && athleteWeights.length === 1) && sumAthlete + sledWeight <= 247) return "Eligible" 
    else if((sledWeight >= 170 && athleteWeights.length === 2) && sumAthlete + sledWeight <= 390) return "Eligible" 
    else if((sledWeight >= 210 && athleteWeights.length === 4) && sumAthlete + sledWeight <= 630) return "Eligible" 
    else return "Not Eligible" } 
    
console.log(checkEligibility([112, 97], 185))
//*

//* Codice scritto da ChatGpt
function checkEligibility(athleteWeights, sledWeight) {
  const teamSize = athleteWeights.length;
  const sumAthlete = athleteWeights.reduce((acc, i) => acc + i, 0);
  const totalWeight = sumAthlete + sledWeight;

  const rules = {
    1: { minSled: 162, maxTotal: 247 },
    2: { minSled: 170, maxTotal: 390 },
    4: { minSled: 210, maxTotal: 630 }
  };

  if (!rules[teamSize]) return "Not Eligible";

  const { minSled, maxTotal } = rules[teamSize];

  return (sledWeight >= minSled && totalWeight <= maxTotal)
    ? "Eligible"
    : "Not Eligible";
}

console.log(checkEligibility([112, 97], 185));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 7/10
//todo

//* Pro e contro del mio codice

//* Pro

// Codice chiaro e leggibile
// Usi bene reduce ✔️
// Logica corretta per i controlli principali
// Condizioni ben separate per team size

//! Contro

// Ripetizione di codice (stessa logica 3 volte)
// Poco scalabile (se cambiano regole devi riscrivere tutto)
// Non gestisci casi non validi (es. team da 3 persone)
// Calcoli sumAthlete + sledWeight più volte → poco pulito

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
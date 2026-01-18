//todo Dato un array di numeri interi che rappresentano il prezzo di diversi laptop e un numero intero che rappresenta il tuo budget, restituisci:

//! Il secondo laptop più costoso se rientra nel tuo budget, oppure
//! Il laptop più costoso che rientra nel tuo budget, oppure
//! se nessun laptop rientra nel tuo budget.
//! I prezzi duplicati devono essere ignorati.

//? Tempo di esecuzione:
//* Non completato 

//?Codice scritto senza utilizzo di ChatGpt
function getLaptopCost(laptops, budget) {

  let budgetYes = []
  let empty = true
  let order = budgetYes.sort((a, b) => a - b);


  for(let i = 0; i < laptops.length; i++) {
    if(laptops[i] < budget)
    budgetYes.push(laptops[i])
    empty = false
  }

  if(empty) {return 0}
  else {return order}
}

console.log(getLaptopCost([2099, 1599, 1899, 1499], 2200))

//?Codice scritto da ChatGpt
//todo NON FUNZIONANTE CORRETTAMENTE
function getLaptopCost(prices, budget) {
  // Rimuove duplicati
  const uniquePrices = [...new Set(prices)];
  
  // Mantiene solo i laptop entro il budget
  const affordable = uniquePrices.filter(p => p <= budget);
  
  if (affordable.length === 0) return 0; // Nessun laptop disponibile
  
  // Ordina dal più costoso al meno costoso
  affordable.sort((a, b) => b - a);
  
  // Restituisce il secondo più costoso se esiste, altrimenti il più costoso
  return affordable.length > 1 ? affordable[1] : affordable[0];
}

// Test
console.log(getLaptopCost([1500, 2000, 1800, 1400], 1900)); // 1800
console.log(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900)); // 1800
console.log(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450)); // 1400
//todo

//? Versione Gork
//todo NON FUNZIONANTE CORRETTAMENTE
function getLaptopCost(prices, budget) {
    // 1. Remove duplicates → 2. Keep only ≤ budget → 3. Sort descending
    const affordable = [...new Set(prices)]
        .filter(p => p <= budget)
        .sort((a, b) => b - a);   // highest → lowest

    if (affordable.length === 0) return 0;
    if (affordable.length >= 2)  return affordable[1];  // second highest affordable
    return affordable[0];                               // only one affordable
}
//todo

//? Versione Copilot 
//todo ABBIAMO UN VINCITORE!!!
function getLaptopCost(laptops, budget) {
  // Rimuovo i duplicati e ordino in modo crescente
  const uniquePrices = [...new Set(laptops)].sort((a, b) => a - b);

  // Nessun laptop disponibile
  if (uniquePrices.length === 0) return 0;

  // Se esiste un secondo più costoso globale e rientra nel budget, restituiscilo
  if (uniquePrices.length >= 2) {
    const secondMostExpensive = uniquePrices[uniquePrices.length - 2];
    if (secondMostExpensive <= budget) {
      return secondMostExpensive;
    }
  }

  // Altrimenti prendi il laptop più costoso che rientra nel budget
  const affordable = uniquePrices.filter(price => price <= budget);

  if (affordable.length === 0) return 0;

  return affordable[affordable.length - 1];
}
//todo

//! sort() viene fatto prima di riempire l’array

//! empty è sbagliato (viene messo false sempre)

//! non gestisci duplicati

//! prendi order[1] senza sapere se esiste

//! ordini in crescente, ma serve il più caro

//todo Considerazioni: 
//* Mi sono divertito a vedere che l'Ia non ci arriva quanto me ;)

//! N.B.
//!Non funziona perché l'array order viene creato prima di essere popolato, quindi è sempre vuoto.
//! La variabile empty viene impostata su false ogni volta che un laptop rientra nel budget, ma non viene mai reimpostata su true se nessun laptop rientra nel budget.

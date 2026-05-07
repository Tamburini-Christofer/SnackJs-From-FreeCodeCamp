//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Dato un array di pasti e un array di allergeni da evitare, restituisci i nomi di tutti i pasti che non contengono nessuno degli allergeni specificati.

Ogni pasto è nel formato [pasto, allergeni], dove "pasto" è il nome del pasto e "allergeni" è un array contenente gli allergeni presenti nel pasto.

Gli allergeni da evitare saranno un array di stringhe.

Restituisci i nomi dei pasti sicuri nello stesso ordine in cui sono forniti. Se nessun pasto è sicuro, restituisci un array vuoto.
*/
//todo

//* Tempo di esecuzione:
// Non specificato
//*

//*Codice scritto senza utilizzo di ChatGpt

function getAllergenFriendlyMeals(meals, allergens) {

  let converted = new Map(meals)

  let result = []

  for(let char of converted) {
    let valori = converted.values(char)

    if((valori) !== allergens) result.push(char.keys())
  }

  return result;
}

console.log(
  getAllergenFriendlyMeals(
    [["pasta", ["wheat", "milk"]], ["salad", ["nuts"]]],
    ["milk"]
  )
)

//*

//* Codice scritto da ChatGpt

function getAllergenFriendlyMeals(meals, allergens) {

  let result = []

  for (let [mealName, mealAllergens] of meals) {

    let isSafe = true

    for (let allergen of mealAllergens) {

      if (allergens.includes(allergen)) {
        isSafe = false
        break
      }
    }

    if (isSafe) {
      result.push(mealName)
    }
  }

  return result
}

console.log(
  getAllergenFriendlyMeals(
    [["pasta", ["wheat", "milk"]], ["salad", ["nuts"]]],
    ["milk"]
  )
)

// Output: ["salad"]

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto 
// 5/10
//todo

//* Pro e contro del mio codice

//* Pro

// Hai provato a usare strutture avanzate come Map
// Hai creato un array risultato correttamente
// La funzione è impostata bene come struttura generale

//! Contro

// Map non serve in questo esercizio
// converted.values(char) non funziona così
// char.keys() non è valido in questo contesto
// Non stai controllando realmente gli allergeni
// Il confronto (valori !== allergens) confronta riferimenti, non contenuti
// Manca la logica per verificare se almeno un allergene è presente

//*
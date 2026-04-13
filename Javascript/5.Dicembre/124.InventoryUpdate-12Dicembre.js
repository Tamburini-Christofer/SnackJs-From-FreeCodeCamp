//todo Consegna dell'esercizio
// Dato un array 2D che rappresenta l'inventario del tuo negozio e un altro array 2D che rappresenta una spedizione che hai ricevuto, restituisci l'inventario aggiornato.
//todo
//! Requisiti da rispettare
// Ogni elemento negli array avrà il formato: [quantità, "articolo"], dove quantità è un numero intero e "articolo" è una stringa.
// Aggiorna gli articoli nell'inventario aggiungendo la quantità di tutti gli articoli corrispondenti dalla spedizione.
// Se un articolo ricevuto non esiste nell'inventario corrente, aggiungilo come nuova voce alla fine dell'inventario.
// Restituisci l'inventario nell'ordine in cui è stato fornito, con i nuovi articoli alla fine nell'ordine in cui compaiono nella spedizione.
// Ad esempio, dato un inventario di [[2, "mele"], [5, "banane"]] e una spedizione di [[1, "mele"], [3, "banane"]], restituisci [[3, "mele"], [8, "banane"]].
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function updateInventory(inventory, shipment) {

  let result = []

  for(let i = 0; i < inventory.length; i++) {
    for(let j = 0; j < inventory[i].length; j++) {
      if(inventory[j] === shipment[j]) {
        let resultSum = inventory[j] + shipment[j]
        result.push(resultSum)
        }
    } 
  }

  return result;
}

console.log(updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]]))

//*

//* Codice scritto da ChatGpt

function updateInventory(inventory, shipment) {

  for (let i = 0; i < shipment.length; i++) {
    let found = false;

    for (let j = 0; j < inventory.length; j++) {
      if (shipment[i][1] === inventory[j][1]) {
        inventory[j][0] += shipment[i][0];
        found = true;
      }
    }

    if (!found) {
      inventory.push(shipment[i]);
    }
  }

  return inventory;
}

console.log(
  updateInventory(
    [[2, "apples"], [5, "bananas"]],
    [[1, "apples"], [3, "bananas"]]
  )
);

//*

//* Valutazione al codice proposta da ChatGpt
//! Voto 2/10
//*

//* Pro e contro del mio codice

//*Pro

// Hai usato for annidati
// Hai provato a costruire un result

//! Contro

// inventory[j] === shipment[j] ❌ (stai confrontando array)
// Cicli su inventory[i].length invece che sugli elementi
// Non gestisci i nuovi item
// Il risultato finale non ha il formato richiesto

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
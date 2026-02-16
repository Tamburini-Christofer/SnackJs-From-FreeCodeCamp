//todo Consegna dell'esercizio
// Dato un array di interi e un numero target, trova tutte le coppie di elementi nell'array i cui valori sommati danno il target e restituisci la somma dei loro indici.
//todo
//! Requisiti da rispettare
// Ad esempio, dati [2, 3, 4, 6, 8] e 10, troverai due coppie valide:
// 2 e 8 (2 + 8 = 10), i cui indici sono 0 e 4
// 4 e 6 (4 + 6 = 10), i cui indici sono 2 e 3
// Somma tutti gli indici per ottenere il valore di ritorno 9.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function pairwise(arr, target) {

  let arrIndici = []

  for(let i = 0; i < arr.length; i++) {
    for(let j = arr.length; j >= 0; j--)
    if(arr[i] + arr[j] === target) arrIndici.push(arr.indexOf(arr[i]) + arr.indexOf(arr[j]))
  }

  let final = (arrIndici.reduce((acc,init) => acc + init, 0))
  
  return final / 2;
}

console.log(pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24 ))

//*

//* Codice scritto da ChatGpt

function pairwise(arr, target) {
  let used = new Set();
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (used.has(i)) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (used.has(j)) continue;

      if (arr[i] + arr[j] === target) {
        sum += i + j;
        used.add(i);
        used.add(j);
        break;
      }
    }
  }

  return sum;
}

console.log(pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24));

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 4/10
//*

//* Pro e contro del mio codice

//* Pro

// Hai capito il concetto di coppia
// Usi correttamente reduce

//! Contro

// Logica non conforme alla consegna
// Uso scorretto di indexOf
// Coppie duplicate e indici riutilizzati

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
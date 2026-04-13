//todo Consegna dell'esercizio
// Data una frase stringa, restituisce una versione compressa della frase in cui le parole duplicate consecutive vengono sostituite dalla parola seguita, con il numero di volte in cui si ripete tra parentesi.
//todo
//! Requisiti da rispettare
// Solo le parole duplicate consecutive vengono compresse.
// Le parole sono separate da spazi singoli.
// Ad esempio, dato "sì sì sì per favore", restituisce "sì(3) per favore".

//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt

function compressString(sentence) {

  let wordArr = sentence.split(" ")

  let finalWord = [];
  let contatore = 1;

  for(let i = 0; i < wordArr.length; i++) {
    if(wordArr[i] === wordArr[i+1]) {
      if(!finalWord.includes(wordArr[i])) finalWord.push(wordArr[i])
      else finalWord.push(`(${contatore+1})`)
      contatore++
    }
    else finalWord.push(wordArr[i])
  }

  let result = [...new Set(finalWord)].join(" ")

  return result;
}

console.log(compressString("one one three and to the the the the"))

//*

//* Codice scritto da ChatGpt

function compressString(sentence) {
  let words = sentence.split(" ");
  let result = [];
  let count = 1;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        result.push(`${words[i]}(${count})`);
      } else {
        result.push(words[i]);
      }
      count = 1;
    }
  }

  return result.join(" ");
}

console.log(compressString("one one three and to the the the the"));


//*

//* Valutazione al codice proposta da ChatGpt
//! Voto 4/10
//*

//* Pro e contro del mio codice

//* Pro

// Buona idea usare split
// Hai capito che serve un contatore
// Struttura del ciclo corretta

//! Contro

// Logica della compressione sbagliata
// Contatore non gestito bene
// Uso scorretto di Set
// Output non conforme

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
//todo Consegna dell'esercizio
// Dato un numero intero, restituisci il suo valore equivalente in numeri romani.
//todo
//! Requisiti da rispettare
// I numeri romani usano questi simboli:

// Simbolo Valore
// I 1
// V 5
// X 10
// L 50
// C 100
// D 500
// M 1000
// I numeri romani si scrivono dal più grande al più piccolo, da sinistra a destra, seguendo le seguenti regole:

// L'addizione si usa quando un simbolo è seguito da un altro di valore uguale o inferiore. Ad esempio, 18 si scrive come XVIII (10 + 5 + 1 + 1 + 1 = 18).
// La ​​sottrazione si usa quando un simbolo più piccolo compare prima di uno più grande, per rappresentare 4 o 9 in qualsiasi valore posizionale. Ad esempio, 19 si scrive come XIX (10 + (10 - 1)).
// Nessun simbolo può essere ripetuto più di tre volte di seguito. La sottrazione si usa quando altrimenti sarebbe necessario scrivere un simbolo più di tre volte di seguito. Quindi il numero più grande che puoi scrivere è 3999.
// Ecco un altro esempio: dato 1464, restituisci "MCDLXIV" (1000 + (500 - 100) + 50 + 10 + (5 - 1)).
//!

//* Tempo di esecuzione:
//* 11 Minuti e 40 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt

function toRoman(num) {

  const arrRoman = {
    M: 1000, CM: 900, D: 500, CD: 400,
    C: 100, XC: 90, L: 50, XL: 40,
    X: 10, IX: 9, V: 5, IV: 4, I: 1
  }

  let result = "";

  for(let key in arrRoman) {
    while(num >= arrRoman[key]) {
      result += key;
      num -= arrRoman[key]
    }
  }

  return result;
}

console.log(toRoman(18))

//*

//* Codice scritto da ChatGpt

function toRoman(num) {
  const roman = [
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
    ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
  ];

  let result = "";

  for (const [symbol, value] of roman) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

console.log(toRoman(18));


//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 9,5/10
//*

//* Pro e contro del mio codice

//* Pro

// Mappa completa e ordinata correttamente
// Uso perfetto di while
// Codice leggibile
// Gestione implicita di tutte le regole romane ✔️

//! Contro

// for...in su oggetti dipende dall’ordine delle chiavi
// (oggi funziona, ma meglio essere espliciti)
// Nessun controllo su range (1–3999)

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
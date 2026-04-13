//todo Consegna dell'esercizio
// Dati due numeri interi positivi, restituisci il loro massimo comune divisore (MCD).
//todo

//! Requisiti da rispettare
// Il MCD di due numeri interi è il numero più grande che divide entrambi i numeri in modo uniforme senza lasciare resto.
// Ad esempio, i divisori di 4 sono 1, 2 e 4. I divisori di 6 sono 1, 2, 3 e 6. Quindi, dati 4 e 6, restituisci 2, il numero più grande che appare in entrambi gli insiemi di divisori.
//!

//* Tempo di esecuzione:

//* 8 Minuti e 30 Secondi

//*

//*Codice scritto senza utilizzo di ChatGpt

function gcd(x, y) {

  let arrX = [];

  for(let i = 1; i < x; i++) 
  if(x % i === 0) arrX.push(i)

  for(let i = 1; i < y; i++) 
  if(y % i === 0) arrX.push(i)

  let sortArr = arrX.sort((a,b) =>  a - b)

  let result;

  for(let i = 0; i < sortArr.length; i++) {
    if(sortArr[i] === sortArr[i+1]) 
    result = sortArr[i]
  }

  return result;
}

console.log(gcd(4, 6))

//*

//* Codice scritto da ChatGpt

function gcd(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

console.log(gcd(4, 6)); // 2

//*

//* Valutazione al codice proposta da ChatGpt

//! Voto 4/10

//*

//* Pro e contro del mio codice

//* Pro ✅

// Ragionamento corretto (divisori comuni)
// Usi sort e confronto duplicati
// Output giusto per gcd(4,6)

//! Contro ❌

// Complessità altissima (loop fino a x e y)
// Non includi x e y stessi nei divisori
// Usi un solo array per due numeri (poco chiaro)
// Se non trova duplicati → undefined
// Non è la soluzione “classica” da colloquio

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
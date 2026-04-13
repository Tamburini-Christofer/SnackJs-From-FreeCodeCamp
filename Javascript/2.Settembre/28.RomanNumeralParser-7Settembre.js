//todo Data una stringa che rappresenta un numero romano, restituisci il suo valore intero.

//! I numeri romani sono costituiti dai seguenti simboli e valori:

//! Simbolo Valore
//! I 1
//! V 5
//! X 10
//! L 50
//! C 100
//! D 500
//! M 1000
//! I numeri si leggono da sinistra a destra. Se un numero più piccolo precede uno più grande, il valore viene sottratto. Altrimenti, i valori vengono sommati.

//? Tempo di esecuzione:
//* Quasi quasi finito
//?Codice scritto senza utilizzo di ChatGpt

function parseRomanNumeral(numeral) {

  let I = 1;
  let V = 5;
  let X = 10;
  let L = 50;
  let C = 100;
  let D = 500;
  let M = 1000;

  let scomposto = []
  let tot = 0

  for(let i = 0; i < numeral.length; i++) {
    if(numeral[i] === "I") scomposto.push(I)
    if(numeral[i] === "V") scomposto.push(V)
    if(numeral[i] === "X") scomposto.push(X)
    if(numeral[i] === "L") scomposto.push(L)
    if(numeral[i] === "C") scomposto.push(C)
    if(numeral[i] === "D") scomposto.push(D)
    if(numeral[i] === "M") scomposto.push(M)
  } 

  for(let j = 0; j < scomposto.length - 1; j++) {
    if(scomposto[j] < scomposto[j+1]) tot += scomposto[j+1] - scomposto[j]
    if(scomposto[j] >= scomposto[j+1]) tot += scomposto[j];
    if(scomposto[j] === scomposto[scomposto.length] && scomposto[j] >= scomposto[j-1]) tot += scomposto[j]
    if(scomposto[j] === scomposto[scomposto.length] && scomposto[j] < scomposto[j-1]) tot -= scomposto[j-1] - scomposto[j]
  } 
  return tot;
}

console.log(parseRomanNumeral("XXVI"))

//?Codice scritto da ChatGpt

function parseRomanNumeral(numeral) {
  const romanMap = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  let total = 0;

  for (let i = 0; i < numeral.length; i++) {
    const current = romanMap[numeral[i]];
    const next = romanMap[numeral[i+1]];

    if (next && current < next) {
      total += next - current;
      i++; // salta il prossimo perché già considerato
    } else {
      total += current;
    }
  }

  return total;
}

console.log(parseRomanNumeral("XXVI")); // 26
console.log(parseRomanNumeral("IV"));   // 4
console.log(parseRomanNumeral("MCMXC")); // 1990

//* Punti forti

//* Buona idea di mappare i simboli romani ai numeri

//* Concetto giusto: prima trasformi in numeri, poi li sommi / sottrai secondo la regola

//* Uso di scomposto come array intermedio è logico

//! Debolezze / Errori

//! Ultimo numero non viene mai aggiunto correttamente

//! Il tuo ciclo for(let j = 0; j < scomposto.length - 1; j++) salta l’ultimo elemento

//! Le condizioni con scomposto[scomposto.length] sono sbagliate: in JS l’ultimo indice è scomposto.length - 1, quindi stai leggendo undefined.

//! Condizioni troppo complesse → rischiano di sbagliare con numeri come IV o IX

//! Non gestisci errori o simboli invalidi (facoltativo, ma utile)

//todo Considerazioni: 

//*Sono andato spedito fino all'ultimo numero, poi il vuoto totale

//! N.B.
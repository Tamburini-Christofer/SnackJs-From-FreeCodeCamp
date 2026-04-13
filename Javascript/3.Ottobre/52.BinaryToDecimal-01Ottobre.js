//todo Data una stringa che rappresenta un numero binario, restituisci il suo equivalente decimale come numero.

//! Un numero binario utilizza solo le cifre 0 e 1 per rappresentare qualsiasi numero. Per convertire il numero binario in decimale, moltiplica ogni cifra per una potenza di 2 e sommale. Inizia moltiplicando la cifra più a destra per 2^0, la cifra successiva a sinistra per 2^1 e così via. Una volta che tutte le cifre sono state moltiplicate per una potenza di 2, somma il risultato.

//! Ad esempio, il numero binario 101 è uguale a 5 in decimale perché:

//? Tempo di esecuzione:
//* Non completato 

//?Codice scritto senza utilizzo di ChatGpt

function toDecimal(binary) {

  let convertNumber = binary.split("")
  let numberArr = convertNumber.map(n => parseInt(n))
  let tot = 0;

  for(let i = numberArr.length - 1; i > 0; i--) {
    for(let j = 0; j < numberArr.length; j++) {
    tot = tot + (numberArr[i] * (2 ** j))
  }}

  return tot;

}

console.log(toDecimal("101"))

//?Codice scritto da ChatGpt

function toDecimal(binary) {
  let tot = 0;
  let power = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    tot += Number(binary[i]) * (2 ** power);
    power++;
  }

  return tot;
}

console.log(toDecimal("101")); // 5

//* PRO

//* Capisci davvero come funziona il binario

//* Ottima per studio e colloqui

//* Nessuna “magia” nascosta

//! CONTRO

//! Più codice

//! Più facile sbagliare

//! Meno elegante

//? Versione Chat Gpt 

function toDecimal(binary) {
  return parseInt(binary, 2);
}

//todo Considerazioni: 

//! N.B.
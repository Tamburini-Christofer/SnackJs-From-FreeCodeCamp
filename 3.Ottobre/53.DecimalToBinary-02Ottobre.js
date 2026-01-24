//todo Dato un numero intero non negativo, restituisci la sua rappresentazione binaria come stringa.
 
//! Un numero binario utilizza solo le cifre 0 e 1 per rappresentare qualsiasi numero. 
//! Per convertire un numero decimale in binario, dividi ripetutamente il numero per 2 e registra il resto. Ripeti finché il numero non è zero. Leggi i resti registrati per ultimi fino al primo. Ad esempio, per convertire 12 in binario:

//! 12 ÷ 2 = 6 resto 0
//! 6 ÷ 2 = 3 resto 0
//! 3 ÷ 2 = 1 resto 1
//! 1 ÷ 2 = 0 resto 1
//! 12 in binario è 1100.


//? Tempo di esecuzione:
//* Non completato 

//?Codice scritto senza utilizzo di ChatGpt

function toBinary(decimal) {

  let tot = [];
  let number = decimal

  for(let i = 0; i < number; i++) {
    let rest = number % 2;
    tot.push(rest)
    number = number / 2
  }

  return tot;
}

console.log(toBinary(5))

//?Codice scritto da ChatGpt

function toBinary(decimal) {
  if (decimal === 0) return "0"; //! OK

  let result = ""; //! Fa tornare direttamente una stringa

  while (decimal > 0) {
    result = (decimal % 2) + result;
    decimal = Math.floor(decimal / 2);
  }

  return result;
}

console.log(toBinary(5)); // "101"

//* ✅ PRO

//* Hai capito il concetto di resto / 2

//* Usi variabili chiare (rest, number)

//* La logica di base è corretta

//* Buon ragionamento algoritmico 💪

//! ❌ CONTRO

//! for sbagliato: number cambia → ciclo imprevedibile

//! Manca Math.floor() → numeri decimali

//! I bit sono al contrario (serve reverse)

//! Ritorni un array, non una stringa

//! Il ciclo può girare più del necessario

//? Versione Chat Gpt 

//todo Considerazioni: 

//! N.B.
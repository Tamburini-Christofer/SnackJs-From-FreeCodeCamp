//todo Data una stringa che rappresenta un numero esadecimale (base 16), restituisci il suo valore decimale (base 10) come numero intero.

//! L'esadecimale è un sistema numerico che utilizza 16 cifre:

//! 0-9 rappresentano i valori da 0 a 9.
//! A-F rappresentano i valori da 10 a 15.
//! Ecco una tabella di conversione parziale:

//! Esadecimale Decimale
// 0 0
// 1 1
// ... ...
// 9 9
// A 10
// ... ...
// F 15
// 10 16
// ... ...
// 9F 159
// A0 160
// ... ...
// FF 255
// 100 256
//! La stringa conterrà solo i caratteri da 0 a 9 e da A a F.

//? Tempo di esecuzione:
//* Non completato

//?Codice scritto senza utilizzo di ChatGpt

function hexToDecimal(hex) {

  let decimal = [];
  let letter = ["A", "B", "C", "D", "E", "F" ] 
  let valueLetter = [10, 11, 12, 13, 14, 15, 16]

  for (let i = 0; i < hex.length; i++) {
    if(hex[i] > 0 && hex[i] < 9) decimal.push(Number(hex[i]))
    if(letter.includes(hex[i])) {
      let indice = letter.indexOf(hex[i])
      let value = valueLetter[indice]
      decimal.push(value) }
    else if(hex[i] > 10 && hex[i] < 15) {
      let indice2 = valueLetter.indexOf(hex[i])
      let value2 = valueLetter[indice2]
      decimal.push(value2)
  }
}

  return decimal;
}

console.log(hexToDecimal("15"))

//?Codice scritto da ChatGpt

function hexToDecimal(hex) {
  let result = 0; //! Chat inizia usando un valore numerico e non un array

  for (let i = 0; i < hex.length; i++) {
    let value; //! Crea una variabile per il valore corrente

    if (hex[i] >= "0" && hex[i] <= "9") { //! Ok prima fa un controllo se è cifra o numero
      value = hex[i].charCodeAt(0) - 48; //! '0' ha codice ASCII 48
    } else {
      value = hex[i].charCodeAt(0) - 55; // A=10, B=11... //! Usa il codice ASCII per calcolare il valore
    }

    result = result * 16 + value; //! Calcola il valore decimale accumulando
  }

  return result;
}

console.log(hexToDecimal("15")); // 21
console.log(hexToDecimal("FF")); // 255


//* ✅ Pro

//* Tentativo corretto di mappare A–F → 10–15

//* Uso di array e includes (buona intuizione)

//* Codice leggibile per chi è agli inizi

//* Separazione tra lettere e numeri

//! ❌ Contro

//! Non calcola il valore decimale finale

//! Ritorna un array, non un numero

//! Mancano le potenze di 16

//! Condizioni sbagliate (hex[i] > 10 → è una stringa)

//! valueLetter ha un valore in più (16)

//! else if inutile e mai usato correttamente

//! Logica più complessa del necessario

//? Versione Chat Gpt 

//todo Considerazioni: 

//! N.B.
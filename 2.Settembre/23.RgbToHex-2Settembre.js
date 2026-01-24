 //todo Data una stringa di colori CSS rgb(r, g, b), restituisci il suo equivalente esadecimale.

//! Ecco alcuni esempi di output per un dato input:

//! Input Output
//! "rgb(255, 255, 255)" "#ffffff"
//! "rgb(1, 2, 3)" "#010203"
//! Rendi minuscole tutte le lettere.
//! Restituisci un # seguito da sei caratteri. Non utilizzare valori abbreviati.

//? Tempo di esecuzione:
//* Non completato 

//?Codice scritto senza utilizzo di ChatGpt

function rgbToHex(rgb) {
   let number = rgb.split("").splice(4,13).join("").split(" ")

   let red = "";
   let green = "";
   let blue = "";

   let numberConvert = ""

   let letter = "abcde"

   number.forEach(n => {
     if(n === 255) {
       numberConvert = "ff"
       if(n === n[0]) red = numberConvert
       if(n === n[1]) green = numberConvert
       if(n === n[2]) blue = numberConvert
     }
     if(n > 10 && n < 16) {
       numberConvert[n] = letter[n]
     if(n > 0 && n <= 9) {
       numberConvert = "0" + n 
     }
   })

   let stringFinal = "#" + red + green + blue

   return stringFinal;
}

console.log(rgbToHex("rgb(255, 255, 255)"))

//?Codice scritto da ChatGpt

function rgbToHex(rgb) {
  // Estrai i numeri con regex
  const [r, g, b] = rgb
    .match(/\d+/g)
    .map(Number);

  // Converti in esadecimale con due cifre
  const toHex = n => n.toString(16).padStart(2, "0");

  return "#" + toHex(r) + toHex(g) + toHex(b);
}

// Problemi principali nel tuo codice ❌
// Parsing del numero sbagliato
// let number = rgb.split("").splice(4,13).join("").split(" ")
// Funziona male se i numeri hanno più cifre o ci sono spazi diversi
// La conversione dovrebbe estrarre i numeri con regex o split(",")
// Confronti tipo/numeri
// if(n === 255)
// n è stringa, non numero → non sarà mai vero
// Uso confuso di n[0], n[1]
// Non puoi accedere così ai componenti
// Conversione HEX fatta a mano in modo errato
// Blocchi tipo:
// if(n > 10 && n < 16) { numberConvert[n] = letter[n] }
// non funzionano in JS
// Variabili red/green/blue mai valorizzate correttamente
// Risultato finale sarà # + "" + "" + "" → vuoto

//todo Considerazioni: 

//* Mi sono incastrato nella logica. Pace amen, oggi non era giornata

//! N.B.
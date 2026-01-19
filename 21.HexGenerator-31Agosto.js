//todo Data una stringa di colore CSS denominata, genera un codice colore esadecimale (hex) casuale che sia dominante nel colore specificato.

//! La funzione dovrebbe gestire "rosso", "verde" o "blu" come argomento di input.
//! Se l'input non è uno di questi, la funzione dovrebbe restituire "Colore non valido".
//! La funzione dovrebbe restituire un codice colore esadecimale casuale di sei caratteri, in cui il valore del colore di input è maggiore di qualsiasi altro.
//! Esempio di output validi per un dato input:

//? Ingresso Uscita
//! "rosso" "FF0000"
//! "verde" "00FF00"
//! "blu" "0000FF"

//? Tempo di esecuzione:
//* 21 minuti e 32 secondi

//?Codice scritto senza utilizzo di ChatGpt

function generateHex(color) {
  if(color !== "red" &&
  color !== "green" &&
  color !== "blue"
  ) return "Invalid color"

  let max = 255

  let red = Math.floor(Math.random() * max).toString(16).padStart(2, "0"); //! Piccolissimo aiuto di Chat per padStart
  let green = Math.floor(Math.random() * max).toString(16).padStart(2, "0"); //! Piccolissimo aiuto di Chat per padStart
  let blue = Math.floor(Math.random() * max).toString(16).padStart(2, "0"); //! Piccolissimo aiuto di Chat per padStart

  if(color === "red") red = "FF"
  if(color === "green") green = "FF"
  if(color === "blue") blue = "FF"

  let colorHex = red + green + blue

  return colorHex;
}

console.log(generateHex("red"))

//?Codice scritto da ChatGpt
//* Non è stata usata Chat, tranne che per il padStart

//* L’idea di base è giusta (colore dominante in HEX)

//* Usi Math.random() correttamente

//* Struttura della funzione chiara

//* Tentativo di validazione input

//? Versione Chat Gpt 

function generateHex(color) {
  if (color !== "red" && color !== "green" && color !== "blue") {
    return "Invalid color";
  }

  const rand = () =>
    Math.floor(Math.random() * 128) // valori bassi
      .toString(16)
      .padStart(2, "0");

  let red = rand();
  let green = rand();
  let blue = rand();

  if (color === "red") red = "ff";
  if (color === "green") green = "ff";
  if (color === "blue") blue = "ff";

  return (red + green + blue).toUpperCase();
}


//todo Considerazioni: 

//! N.B.
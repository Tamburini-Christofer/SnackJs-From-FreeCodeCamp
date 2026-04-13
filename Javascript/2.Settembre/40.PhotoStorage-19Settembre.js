//todo Date le dimensioni di una foto in megabyte (MB) e la capacità del disco rigido in gigabyte (GB), restituisci il numero di foto che il disco rigido può memorizzare utilizzando i seguenti vincoli:

//! 1 gigabyte equivale a 1000 megabyte.
//! Restituisci il numero di foto intere che il disco può memorizzare.

//? Tempo di esecuzione:
//* 6 Minuti e 6 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {

  let gb = 1000
  let tot = (hardDriveSizeGb * gb) / photoSizeMb

  return Math.floor(tot);
}

console.log(numberOfPhotos(3.5, 750))
//?Codice scritto da ChatGpt
//* Non usato

//* ✅ Pro

//* Logica corretta

//* Uso giusto di Math.floor

//* Funzione chiara e leggibile

//* Output corretto per l’esercizio

//! ❌ Contro

//! Assumi 1 GB = 1000 MB (ok se specificato, altrimenti ambiguo)

//! Nessuna validazione input (0 o negativi)

//! Variabile gb poco espressiva

//? Versione Chat Gpt 

function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  const MB_PER_GB = 1000;
  return Math.floor((hardDriveSizeGb * MB_PER_GB) / photoSizeMb);
}


//todo Considerazioni: 

//! N.B.
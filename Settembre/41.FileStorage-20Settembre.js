//todo Dati una dimensione di file, un'unità di misura per la dimensione del file e la capacità del disco rigido in gigabyte (GB), restituisci il numero di file che il disco rigido può memorizzare utilizzando i seguenti vincoli:

//! L'unità di misura per la dimensione del file può essere byte ("B"), kilobyte ("KB") o megabyte ("MB").
//! Restituisci il numero di file interi che l'unità può contenere.
//! Utilizza le seguenti conversioni:
//! Unità Equivalente
//! 1 B 1 B
//! 1 KB 1000 B
//! 1 MB 1000 KB
//! 1 GB 1000 MB
//! Ad esempio, dati 500, "KB" e 1 come argomenti, determina quanti file da 500 KB possono essere contenuti in un disco rigido da 1 GB.

//? Tempo di esecuzione:
//* 10 minuti 

//?Codice scritto senza utilizzo di ChatGpt

function numberOfFiles(fileSize, fileUnit, driveSizeGb) {

  let b = 1
  let kb = b * 1000
  let mb = kb * 1000
  let gb = mb * 1000

  if(fileUnit==="B") fileUnit = b
  if(fileUnit==="KB") fileUnit = kb
  if(fileUnit==="MB") fileUnit = mb
  if(fileUnit==="GB") fileUnit = gb

  return  Math.floor((driveSizeGb * gb) / (fileSize * fileUnit));
}

console.log(numberOfFiles(4096, "B", 1.5))

//?Codice scritto da ChatGpt

//* ✅ Pro

//* Logica corretta

//* Conversioni chiare e coerenti (base 1000)

//* Gestisce bene le unità diverse

//* Uso corretto di Math.floor

//! ❌ Contro

//! Riusi fileUnit per due scopi (stringa → numero)

//! Troppe variabili quando basta una mappa

//! Nessuna validazione su unità non valide

//! Un po’ verboso

//? Versione Chat Gpt 

function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  const units = {
    B: 1,
    KB: 1000,
    MB: 1000 ** 2,
    GB: 1000 ** 3
  };

  return Math.floor((driveSizeGb * units.GB) / (fileSize * units[fileUnit]));
}


//todo Considerazioni: 

//! N.B.
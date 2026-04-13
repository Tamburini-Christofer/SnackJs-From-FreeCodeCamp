//todo Dati una dimensione video, un'unità di misura per la dimensione video, una capacità del disco rigido e un'unità per il disco rigido, restituisci il numero di video che il disco rigido può memorizzare utilizzando i seguenti vincoli:

//! L'unità di misura per la dimensione video può essere byte ("B"), kilobyte ("KB"), megabyte ("MB") o gigabyte ("GB").
//! Se non viene specificata una delle unità video sopra indicate, restituisci "Unità video non valida".
//! L'unità di misura per la capacità del disco rigido può essere gigabyte ("GB") o terabyte ("TB").
//! Se non viene specificata una delle unità del disco rigido sopra indicate, restituisci "Unità unità non valida".
//! Restituisci il numero di video interi che l'unità può contenere. Utilizza le seguenti conversioni:
//! Unità equivalente
//! 1 B 1 B
//! 1 KB 1000 B
//! 1 MB 1000 KB
//! 1 GB 1000 MB
//! 1 TB 1000 GB
//! Ad esempio, dati 500, "MB", 100 e "GB" come argomenti, determina quanti video da 500 MB possono essere contenuti in un disco rigido da 100 GB.

//? Tempo di esecuzione:
//* 13 Minuti e 10 secondi 

//?Codice scritto senza utilizzo di ChatGpt

function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  if(videoUnit === "TB") return "Invalid video unit"
  if(driveUnit !== "GB" && driveUnit !== "TB") return "Invalid drive unit"

  let b = 1;
  let kb = b * 1000
  let mb = kb * 1000
  let gb = mb * 1000
  let tb = gb * 1000

  if(videoUnit === "B" ) videoUnit = b
  if(videoUnit === "KB") videoUnit = kb
  if(videoUnit === "MB") videoUnit = mb
  if(videoUnit === "GB") videoUnit = gb
  if(videoUnit === "TB") videoUnit = tb

  if(driveUnit === "B" ) driveUnit = b
  if(driveUnit === "KB") driveUnit = kb
  if(driveUnit === "MB") driveUnit = mb
  if(driveUnit === "GB") driveUnit = gb
  if(driveUnit === "TB") driveUnit = tb

  return Math.floor((driveSize * driveUnit) / (videoSize * videoUnit));
}

console.log(numberOfVideos(1, "TB", 10, "TB"))

//?Codice scritto da ChatGpt
//* Nessun codice richiesto 

//* ✅ Pro

//* Logica corretta

//* Gestione esplicita delle unità

//* Controlli di validazione presenti

//* Calcolo finale giusto con Math.floor

//! ❌ Contro

//! Bug logico:
//! controlli if(videoUnit === "TB") return "Invalid video unit"
//! ma dopo gestisci comunque "TB"

//! Molta duplicazione di codice

//! Riusi videoUnit / driveUnit come stringa → numero

//! Validazioni incomplete ("B", "KB", "MB" per drive non bloccate)

//? Versione Chat Gpt.

function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const units = {
    B: 1,
    KB: 1000,
    MB: 1000 ** 2,
    GB: 1000 ** 3,
    TB: 1000 ** 4
  };

  if (!units[videoUnit]) return "Invalid video unit";
  if (!units[driveUnit]) return "Invalid drive unit";
  if (videoUnit === "TB") return "Invalid video unit";

  return Math.floor(
    (driveSize * units[driveUnit]) / (videoSize * units[videoUnit])
  );
}


//todo Considerazioni: 

//! N.B.
//todo Dato il numero di miglia percorse e il tempo impiegato in "MM:SS" (minuti:secondi) per percorrere quelle miglia, restituisci una stringa per il tempo medio impiegato per 
//todo percorrere ogni miglio nel formato "MM:SS".

//! Aggiungi zeri iniziali quando necessario.

//? Tempo di esecuzione:
//* Non completato

//?Codice scritto senza utilizzo di ChatGpt

function millePace(n, stringa) {
  let minutes = stringa.split("").splice(0,2).join("").padStart(2, "0")
  let seconds = stringa.split("").splice(3,4).join("").padStart(2, '0')

  let calcM = minutes / n
  let calcS = seconds / n

  let date = `${calcM}:${calcS}`

  return date;
}

console.log(millePace(3, "24:00"))

//?Codice scritto da ChatGpt

function millePace(n, stringa) {
  let minutes = Number(stringa.split(":")[0]); //! L'idea c'èra ma me son perso
  let seconds = Number(stringa.split(":")[1]); //! Però ho diviso secondi dai minuti.

  let totalSeconds = minutes * 60 + seconds; //! Anche qui l'idea c'era, ma la formula era sbagliata.
  let paceSeconds = Math.floor(totalSeconds / n); //! Maledetto .floor, mai che me lo ricordo

  let paceMin = Math.floor(paceSeconds / 60);
  let paceSec = paceSeconds % 60;

  return `${String(paceMin).padStart(2, "0")}:${String(paceSec).padStart(2, "0")}`; //!Ok ok, qui mi mancava poco. Almeno ho capito padStart
}

console.log(millePace(3, "24:00")); // 08:00


//* Tentativo di parsing della stringa

//* Uso di padStart

//* Struttura della funzione ok

//! Concetto sbagliato sul calcolo del tempo

//! Minuti/secondi trattati separatamente

//! Operazioni senza senso logico (seconds = 60 / 2)

//! Output spesso errato

//todo Considerazioni: 

//* L'esercizio era difficile, soprattutto perchè ti chiede di usare metodi che sarebbe meglio imparare. 
//* Almeno ho imparato padStart (almeno spero)

//! N.B. STUDIATI I METODI USATI
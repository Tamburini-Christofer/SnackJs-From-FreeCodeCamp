//todo  Per il sesto giorno della Settimana Spaziale, ti verrà fornita una data nel formato "AAAA-MM-GG" e dovrai determinare la fase lunare per quel giorno utilizzando le seguenti regole:

//! Utilizza un ciclo lunare semplificato di 28 giorni, suddiviso in quattro fasi uguali:

//! "Nuova": giorni 1 - 7
//! "Crescente": giorni 8 - 14
//! "Piena": giorni 15 - 21
//! "Calante": giorni 22 - 28
//! Dopo il giorno 28, il ciclo si ripete con il giorno 1, una luna nuova.

//! Utilizza "2000-01-06" come luna nuova di riferimento (giorno 1 del ciclo) per determinare la fase del giorno specificato.
//! Non ti verranno fornite date precedenti alla data di riferimento.
//! Restituisci la fase corretta come stringa.
//! Nota: il giorno 1 rappresenta il giorno della luna nuova, il che significa che sono trascorsi 0 giorni dall'ultima luna nuova.

//? Tempo di esecuzione:
//* Non completato

//?Codice scritto senza utilizzo di ChatGpt

function moonPhase(dateString) {

  let day = dateString.split("").splice(8).join("")

  if(/00-07/.test(day)) return "New"
  if(/08-14/.test(day)) return "Waxing"
  if(/15-21/.test(day)) return "Full"
  if(/22-28/.test(day)) return "Waning"
  
}

console.log(moonPhase("2000-01-12"))

//?Codice scritto da ChatGpt

function moonPhase(dateString) {
  const reference = new Date("2000-01-06");
  const date = new Date(dateString);

  const daysPassed = Math.floor(
    (date - reference) / (1000 * 60 * 60 * 24)
  );

  const cycleDay = (daysPassed % 28) + 1;

  if (cycleDay <= 7) return "New";
  if (cycleDay <= 14) return "Waxing";
  if (cycleDay <= 21) return "Full";
  return "Waning";
}

console.log(moonPhase("2000-01-12"));


//* ✅ Pro

//* Logica corretta rispetto al problema

//* Usa la data di riferimento giusta

//* Gestisce il ciclo lunare che si ripete

//* Codice leggibile e facile da seguire

//* Nessun trucco con regex inutili

//! ❌ Contro

//! Dipende da Date (attenzione ai fusi orari)

//! Math.floor può dare differenze se l’orario non è UTC

//! Un po’ più lungo rispetto a una soluzione “naive”

//? Versione Chat Gpt 

//todo Considerazioni: 

//* Qui ho proprio sbagliato la consegna

//! N.B. LEGGI MEGLIO LA CONSEGNA E IMPARA IL REGEX
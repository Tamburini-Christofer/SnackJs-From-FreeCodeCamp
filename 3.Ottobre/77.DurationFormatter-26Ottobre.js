//todo  Dato un numero intero di secondi, restituisci una stringa che rappresenta la stessa durata nel formato "H:MM:SS", dove "H" è il numero di ore, "MM" è il numero di minuti e "SS" è il numero di secondi. Restituisci l'ora utilizzando le seguenti regole:

//! Secondi: devono essere sempre due cifre.
//! Minuti: devono omettere gli zeri iniziali quando non sono necessari. Utilizza "0" se la durata è inferiore a un minuto.
//! Ore: devono essere incluse solo se sono maggiori di zero.

//? Tempo di esecuzione:
//* Non completato

//?Codice scritto senza utilizzo di ChatGpt
function format(seconds) {

  let secondsConv = Math.ceil((60 / seconds) *12 ) /10 
  let minutes = Math.round(seconds / 60)
  let hours = 0;

  let hourComplete = []

  if(minutes > 60) {
    hours++;
    let m = minutes -= 60;
    m = minutes.toString().padStart(2,"0")
    hourComplete.push(m)}
  else if (minutes < 60){
    let m = minutes.toString()
    hourComplete.push(m)
  }
  if(secondsConv > 60) {
    let s = secondsConv -= 60;
    s = minutes.toString().padStart(2,"0")
    hourComplete.push(s)
    }
   else if (secondsConv < 60){
    let s = secondsConv.toString()
    hourComplete.push(s)
  }
  if(hours > 0) hourComplete.unshift(hours)

  return hourComplete;
}

console.log(format(500))

//?Codice scritto da ChatGpt

function format(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const mm = h > 0 ? String(m).padStart(2, "0") : String(m);
  const ss = String(s).padStart(2, "0");

  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}


//! ❌ Contro (principali)

//! Logica sbagliata: conversione secondi/minuti/ore non corretta

//! Formule inventate (secondsConv) → risultati errati

//! Restituisce array, non stringa

//! Codice troppo complesso per un problema semplice

//!  Padding applicato in modo incoerente

//!  Difficile da mantenere e debuggare

//* ✅ Pro

//* Tentativo di gestire ore/minuti/secondi separatamente

//* Uso di padStart (buona intuizione)

//* Stai cercando di coprire casi diversi (ore sì / ore no)

//todo Considerazioni: 

//! N.B.
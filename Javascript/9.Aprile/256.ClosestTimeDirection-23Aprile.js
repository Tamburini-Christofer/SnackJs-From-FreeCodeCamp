//todo Consegna dell'esercizio
// Dati due orari, determina se è più veloce andare dal primo al secondo
// muovendosi in avanti o indietro su un orologio 24h.
// Restituisci:
// "avanti", "indietro" oppure "uguale"
//todo

//* Tempo di esecuzione:
// 15 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function getDirection(time1, time2) {

  let hoursT1 = Number(time1.split(":")[0])
  let hoursT2 = Number(time2.split(":")[0])
  
  let minutesT1 = Number(time1.split(":")[1])
  let minutesT2 = Number(time2.split(":")[1])

  let totalMinutesT1 = hoursT1 * 60 + minutesT1
  let totalMinutesT2 = hoursT2 * 60 + minutesT2

  let forwardDistance = totalMinutesT2 - totalMinutesT1;
  if (forwardDistance < 0) {
    forwardDistance += 1440;
  }

  if(forwardDistance === 720 || forwardDistance === 0) return "equal"
  else if(forwardDistance < 720) return "forward"
  else return "backward"
}

console.log(getDirection("06:30", "18:30"))
//*

//* Codice scritto da ChatGpt
function getDirection(time1, time2) {
  const toMinutes = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const t1 = toMinutes(time1);
  const t2 = toMinutes(time2);

  let forward = (t2 - t1 + 1440) % 1440;
  let backward = (t1 - t2 + 1440) % 1440;

  if (forward === backward) return "uguale";
  return forward < backward ? "avanti" : "indietro";
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: 8/10
//todo

//* Pro e contro del mio codice

//* Pro
// ✔ Logica corretta
// ✔ Gestione corretta del loop (1440 minuti)
// ✔ Facile da capire
// ✔ Buona gestione edge case (720 e 0)

//! Contro
// ❌ split ripetuto (poco ottimizzato)
// ❌ variabili verbose (un po’ lunghe)
// ❌ output non coerente con consegna ("forward" vs "avanti")
// ❌ meno elegante rispetto alla versione con modulo

//*
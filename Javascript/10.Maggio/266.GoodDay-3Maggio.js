//todo Consegna dell'esercizio
// Dato un orario "HH:MM", restituisci il saluto corretto
// in base alla fascia oraria.
//todo

//* Tempo di esecuzione:
// 3 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function getGreeting(time) {
  let hour = time.split(":")[0]

  return hour >= 5 && hour < 12 ? "Good morning" : 
         hour >=12 && hour < 18 ? "Good afternoon" :
         hour >=18 && hour < 22 ? "Good evening" : "Good night";
}
//*

//* Codice scritto da ChatGpt
function getGreeting(time) {
  const hour = parseInt(time.split(":")[0], 10);

  if (hour >= 5 && hour < 12) return "Buongiorno";
  if (hour >= 12 && hour < 18) return "Buon pomeriggio";
  if (hour >= 18 && hour < 22) return "Buonasera";
  return "Buonanotte";
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Molto veloce ⚡ (3 min top)
// - Logica corretta
// - Uso smart del ternario
// - Codice compatto

//! Contro
// - hour è una stringa → meglio convertirla in numero
// - Output in inglese invece che italiano (richiesta non rispettata)
// - Ternario un po’ meno leggibile rispetto a if
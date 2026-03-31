//todo Consegna dell'esercizio
// Dati una stringa che rappresenta l'ora della sveglia e una dell'orario reale,
// determinare se il risveglio è in anticipo, in orario (entro 10 min) o in ritardo.
//todo

//* Tempo di esecuzione:
// 12 minuti e 35 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function alarmCheck(alarmTime, wakeTime) {

  let hourAlarm = Number(alarmTime.split(":")[0])
  let minuteAlarm = Number(alarmTime.split(":")[1])
  let hourWake = Number(wakeTime.split(":")[0])
  let minuteWake = Number(wakeTime.split(":")[1])

  if((hourAlarm === hourWake && minuteAlarm === minuteWake) || (minuteWake - minuteAlarm <= 10 && minuteWake - minuteAlarm >= 0)) return "on time"
  else if(hourAlarm > hourWake || hourAlarm === hourWake && minuteAlarm >= minuteWake) return "early"
  else if(hourAlarm < hourWake || hourAlarm === hourWake && minuteAlarm <= minuteWake) return "late"
  
}
//*

//* Codice scritto da ChatGpt
function alarmCheck(alarmTime, wakeTime) {
  const [hA, mA] = alarmTime.split(":").map(Number);
  const [hW, mW] = wakeTime.split(":").map(Number);

  const alarmMinutes = hA * 60 + mA;
  const wakeMinutes = hW * 60 + mW;

  if (wakeMinutes < alarmMinutes) return "in anticipo";
  if (wakeMinutes <= alarmMinutes + 10) return "in orario";
  return "in ritardo";
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 6.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// Buona logica di base
// Parsing corretto delle stringhe
// Hai considerato lo snooze (ottimo)

//! Contro
// Bug quando cambia l'ora (non gestito correttamente)
// La differenza minuti funziona solo nella stessa ora
// Condizioni ridondanti e poco leggibili
// Output non conforme alla consegna (inglese invece di italiano)

//*
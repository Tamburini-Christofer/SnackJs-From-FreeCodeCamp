//todo Consegna dell'esercizio
// Dato un intervallo di date nel formato "AAAA-MM-GG", restituisci il segno zodiacale corrispondente a quella data utilizzando la seguente tabella:
//todo

//! Requisiti da rispettare
// Intervallo di date Segno zodiacale
// 21 marzo - 19 aprile "Ariete"
// 20 aprile - 20 maggio "Toro"
// 21 maggio - 20 giugno "Gemelli"
// 21 giugno - 22 luglio "Cancro"
// 23 luglio - 22 agosto "Leone"
// 23 agosto - 22 settembre "Vergine"
// 23 settembre - 22 ottobre "Bilancia"
// 23 ottobre - 21 novembre "Scorpione"
// 22 novembre - 21 dicembre "Sagittario"
// 22 dicembre - 19 gennaio "Capricorno"
// 20 gennaio - 18 febbraio "Acquario"
// 19 febbraio - 20 marzo "Pesci"
// I segni zodiacali sono basati solo su Il mese e il giorno, l'anno si può ignorare.
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function getSign(dateStr) {

  let date = new Date(dateStr)
  let getDay = date.getDate()
  let getMonth = date.getMonth()
  let complete = [getMonth + 1, getDay]

  switch(complete) {
    case (complete[0] >= 3 && complete[1] >= 21) || (complete[0] <= 4 && complete[1] <= 19):
    return "Aries"
    break;
    case (complete[0] >= 4 && complete[1] >= 20) || (complete[0] <= 5 && complete[1] <= 20):
    return "Taurus"
    break;
    case (complete[0] >= 5 && complete[1] >= 21) || (complete[0] <= 6 && complete[1] <= 20):
    return "Gemini"
    break;
    case (complete[0] >= 6 && complete[1] >= 21) || (complete[0] <= 7 && complete[1] <= 22):
    return "Cancer"
    break;
    case (complete[0] >= 7 && complete[1] >= 23) || (complete[0] <= 8 && complete[1] <= 22):
    return "Leo"
    break;
    case (complete[0] >= 8 && complete[1] >= 23) || (complete[0] <= 9 && complete[1] <= 22):
    return "Virgo"
    break;
    case (complete[0] >= 9 && complete[1] >= 23) || (complete[0] <= 10 && complete[1] <= 22):
    return "Libra"
    break;
    case (complete[0] >= 10 && complete[1] >= 23) || (complete[0] <= 11 && complete[1] <= 21):
    return "Scorpio"
    break;
    case (complete[0] >= 11 && complete[1] >= 22) || (complete[0] <= 12 && complete[1] <= 21):
    return "Sagittarius"
    break;
    case (complete[0] >= 12 && complete[1] >= 22) || (complete[0] <= 1 && complete[1] <= 19):
    return "Capricorn"
    break;
    case (complete[0] >= 1 && complete[1] >= 20) || (complete[0] <= 2 && complete[1] <= 18):
    return "Aquarius"
    break;
    case (complete[0] >= 2 && complete[1] >= 19) || (complete[0] <= 3 && complete[1] <= 20):
    return "Aries"
    break;
  }
}
console.log(getSign("2026-01-31"))
//*

//* Codice scritto da ChatGpt
function getSign(dateStr) {

  let date = new Date(dateStr)
  let day = date.getDate()
  let month = date.getMonth() + 1

  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries"
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus"
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini"
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer"
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo"
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo"
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra"
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio"
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius"
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn"
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius"
  return "Pisces"
}

console.log(getSign("2026-01-31"))
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 4/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Hai usato new Date() correttamente
// ✔ Hai estratto getDate() e getMonth()
// ✔ Hai provato a usare condizioni per i range

//! Contro

// switch usato nel modo sbagliato
// switch non funziona con condizioni booleane.

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
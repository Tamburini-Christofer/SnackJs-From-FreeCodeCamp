//todo Consegna dell'esercizio
// Dato un array di punteggi d'esame (numeri), restituire il punteggio medio sotto forma di voto in lettere secondo la seguente tabella:
//todo

//! Requisiti da rispettare
// Punteggio medio Voto in lettere
// 97-100 "A+"
// 93-96 "A"
// 90-92 "A-"
// 87-89 "B+"
// 83-86 "B"
// 80-82 "B-"
// 77-79 "C+"
// 73-76 "C"
// 70-72 "C-"
// 67-69 "D+"
// 63-66 "D"
// 60-62 "D-"
// inferiore a 60 "F"
// Calcolare la media sommando tutti i punteggi nell'array e dividendo per il numero totale di punteggi.
//!

//* Tempo di esecuzione:
//* 12 minuti e 60 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function getAverageGrade(scores) {

  let convertedMedia = scores.reduce((acc, b) => acc + b, 0) / scores.length

  let voto = ""

  if (convertedMedia >= 97) voto = "A+";
  else if (convertedMedia >= 93) voto = "A";
  else if (convertedMedia >= 90) voto = "A-";
  else if (convertedMedia >= 87) voto = "B+";
  else if (convertedMedia >= 83) voto = "B";
  else if (convertedMedia >= 80) voto = "B-";
  else if (convertedMedia >= 77) voto = "C+";
  else if (convertedMedia >= 73) voto = "C";
  else if (convertedMedia >= 70) voto = "C-";
  else if (convertedMedia >= 67) voto = "D+";
  else if (convertedMedia >= 63) voto = "D";
  else if (convertedMedia >= 60) voto = "D-";
  else voto = "F";

  return voto;
}

console.log(getAverageGrade([92, 91, 90, 94, 89, 93]))
//*

//* Codice scritto da ChatGpt
function getAverageGrade(scores) {
  if (!scores.length) return "F";

  const average =
    scores.reduce((sum, n) => sum + n, 0) / scores.length;

  if (average >= 97) return "A+";
  if (average >= 93) return "A";
  if (average >= 90) return "A-";
  if (average >= 87) return "B+";
  if (average >= 83) return "B";
  if (average >= 80) return "B-";
  if (average >= 77) return "C+";
  if (average >= 73) return "C";
  if (average >= 70) return "C-";
  if (average >= 67) return "D+";
  if (average >= 63) return "D";
  if (average >= 60) return "D-";
  return "F";
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 9.5/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ reduce() usato correttamente
// ✔ Media calcolata nel modo giusto
// ✔ Struttura if ordinata correttamente (dall’alto verso il basso)
// ✔ Codice chiaro e leggibile
// ✔ Ritorno finale corretto

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
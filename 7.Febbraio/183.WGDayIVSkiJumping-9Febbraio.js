//todo Consegna dell'esercizio
// Considerando i punti per la distanza, i punti per lo stile, il valore di compensazione del vento e il bonus K-point, calcola il tuo punteggio per il salto con gli sci e determina se hai vinto una medaglia o meno.
//todo

//! Requisiti da rispettare
// Il tuo punteggio si calcola sommando i quattro valori sopra indicati.

// I punteggi totali attuali degli altri saltatori sono:

// 165,5
// 172,0
// 158,0
// 180,0
// 169,5
// 175,0
// 162,0
// 170,0
// Se il tuo punteggio è il migliore, restituisci "Oro"
// Se è il secondo migliore, restituisci "Argento"
// Se è il terzo migliore, restituisci "Bronzo"
// Altrimenti, restituisci "Nessuna medaglia"
//!

//* Tempo di esecuzione:
//* 5 Minuti e 28 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {

  let myScore = [distancePoints, stylePoints, windComp, kPointBonus].reduce((acc, i) => acc + i, 0)
  let otherPoints = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0].sort((a,b) => b - a)

  if(myScore > otherPoints[0]) return "Gold"
  else if(myScore > otherPoints[1]) return "Silver"
  else if(myScore > otherPoints[2]) return "Bronze"
  else return "No Medal"
}

console.log(skiJumpMedal(125.0, 58.0, 0.0, 6.0) )
//*

//* Codice scritto da ChatGpt
function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {

  const myScore = distancePoints + stylePoints + windComp + kPointBonus;

  const scores = [
    165.5, 172.0, 158.0, 180.0,
    169.5, 175.0, 162.0, 170.0,
    myScore
  ];

  scores.sort((a,b) => b - a);

  const position = scores.indexOf(myScore) + 1;

  if(position === 1) return "Gold";
  if(position === 2) return "Silver";
  if(position === 3) return "Bronze";

  return "No Medal";
}

console.log(skiJumpMedal(125.0, 58.0, 0.0, 6.0));

function skiJumpMedal(d, s, w, k) {
  const scores = [165.5,172,158,180,169.5,175,162,170, d+s+w+k].sort((a,b)=>b-a);
  const pos = scores.indexOf(d+s+w+k);
  return ["Gold","Silver","Bronze"][pos] || "No Medal";
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 7/10
//todo

//* Pro e contro del mio codice

//* Pro

// ottimo uso di reduce
// uso corretto di sort
// codice leggibile
// buona struttura di if

//! Contro

// confronto non completamente corretto
// dovresti inserire il tuo punteggio nella classifica
// poi vedere la posizione reale

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
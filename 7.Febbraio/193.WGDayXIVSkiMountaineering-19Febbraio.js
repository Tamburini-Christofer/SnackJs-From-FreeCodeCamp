//todo Consegna dell'esercizio
// Rischio valanghe.

// I valori relativi allo spessore della neve sono "Basso", "Moderato" o "Profondo".
// I valori relativi alla pendenza sono "Leggera", "Ripida" o "Molto ripida".
// Restituisci "Sicuro" o "Rischioso" in base a questa tabella:
//todo

//! Requisiti da rispettare
// "Basso" "Moderato" "Profondo"
// "Leggero" "Sicuro" "Sicuro"
// "Ripido" "Sicuro" "Rischioso"
// "Molto ripido" "Sicuro" "Rischioso"
//!

//* Tempo di esecuzione:
//* 5 Mintui 
//*

//*Codice scritto senza utilizzo di ChatGpt
function avalancheRisk(snowDepth, slope) {

  switch(slope) {
    case "Gentle": 
    return "Safe" 
    break; 

    case "Steep":
    if(snowDepth === "Shallow") return "Safe"
    else return "Risky"
    break;

    case "Very Steep":
    if(snowDepth === "Shallow") return "Safe"
    else return "Risky"
    break;
  }
}

console.log(avalancheRisk("Deep", "Very Steep") )
//*

//* Codice scritto da ChatGpt
function avalancheRisk(snowDepth, slope) {
  if (slope === "Gentle") return "Safe";

  if (snowDepth === "Shallow") return "Safe";

  return "Risky";
}

console.log(avalancheRisk("Deep", "Very Steep"));
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 8/10
//todo

//* Pro e contro del mio codice

//* Pro

// Logica corretta
// switch usato bene
// Codice facile da leggere
// Gestisci bene le condizioni richieste

//! Contro

// Duplicazione tra "Steep" e "Very Steep"
// break inutili dopo return
// Manca un default (input non validi → undefined)
// Non sfrutti il fatto che la logica è quasi identica

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
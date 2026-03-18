//todo Consegna dell'esercizio
// Dati il ​​gruppo sanguigno del donatore e quello del ricevente, determinare se il donatore può donare il sangue al ricevente.
//todo

//! Requisiti da rispettare
// Ogni gruppo sanguigno è composto da:

// Una lettera: "A", "B", "AB" o "O"
// E un fattore Rh: "+" o "-"
// I gruppi sanguigni sono costituiti da una delle lettere valide seguita da un fattore Rh. Ad esempio, "AB+" e "O-" sono gruppi sanguigni validi.

// Regole per le lettere:

// Il gruppo "O" può donare ad altri gruppi sanguigni.

// Il gruppo "A" può donare ad "A" e "AB".

// Il gruppo "B" può donare ad "B" e "AB".

// Il gruppo "AB" può donare solo ad "AB".
// Regole per il fattore Rh:

// Il gruppo negativo ("-") può donare sia a gruppi negativi ("-") che positivi ("+").
// Il gruppo positivo ("+") può donare solo a gruppi positivi ("+").
// Sia la regola per la lettera che quella per il fattore Rh devono essere soddisfatte affinché un donatore possa donare al ricevente.
//!

//* Tempo di esecuzione:
//* 17 Minuti 
//*

//*Codice scritto senza utilizzo di ChatGpt
function canDonate(donor, recipient) {
  if(donor === recipient) return true

  switch(donor) {
    case "O+": 
    if(recipient === "A+" || recipient === "B+" || recipient === "AB+") return true
    else return false
    break;
    
    case "O-":
    return true
    break;

    case "A+": 
    if(recipient === "AB+") return true
    else return false
    break;    

    case "A-": 
    if(recipient === "A+" || recipient === "AB+" || recipient === "AB-") return true
    else return false
    break;    

    case "B+": 
    if(recipient === "AB+") return true
    else return false
    break; 

    case "B-": 
    if(recipient === "B+" || recipient === "AB+" || recipient === "AB-") return true
    else return false
    break; 

    case "AB+": 
    if(recipient !== "AB-") return true
    else return false
    break; 

    case "AB-": 
    if(recipient !== "AB+") return true
    else return false
    break; 

  }

  return donor;
}

console.log(canDonate("A+", "AB+"))
//*

//* Codice scritto da ChatGpt
function canDonate(donor, recipient) {
  let donorType = donor.slice(0, -1);
  let donorRh = donor.slice(-1);

  let recType = recipient.slice(0, -1);
  let recRh = recipient.slice(-1);

  // regole lettere
  const compat = {
    O: ["A", "B", "AB", "O"],
    A: ["A", "AB"],
    B: ["B", "AB"],
    AB: ["AB"]
  };

  // check lettera
  if (!compat[donorType].includes(recType)) return false;

  // check Rh
  if (donorRh === "-" ) return true;
  if (donorRh === "+" && recRh === "+") return true;

  return false;
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 5/10
//todo

//* Pro e contro del mio codice

//* Pro

// Hai coperto quasi tutti i casi 👍
// Buon uso dello switch

//! Contro

// Logica hardcoded → poco scalabile
// Errori:
// O- → non sempre true (in realtà sì per Rh, ma devi comunque rispettare formato logico)
// AB+ e AB- completamente sbagliati ❌
// Non separi lettera e Rh → questo complica tutto
// Codice lungo e difficile da mantenere

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
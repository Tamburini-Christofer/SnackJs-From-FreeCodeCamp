//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Date due stringhe (il tuo esercito e quello avversario), ogni carattere combatte con quello nella stessa posizione.
//
// Regole:
// - a-z → forza 1-26
// - A-Z → forza 27-52
// - 0-9 → valore numerico
// - altri → 0
//
// Ogni carattere combatte una sola volta.
// Vince chi ha più vittorie (non somma totale).
//
// Ritorna:
// - "Opponent retreated" se il tuo esercito è più lungo
// - "We retreated" se quello avversario è più lungo
// - "We won" se vinci più battaglie
// - "We lost" se perdi più battaglie
// - "It was a tie" se pari
//todo

//* Tempo di esecuzione:
// 16 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function battle(myArmy, opposingArmy) {
  if(myArmy.length > opposingArmy.length) return "Opponent retreated"
  else if (myArmy.length < opposingArmy.length) return "We retreated"

  let myCont = 0;
  let opCont = 0;

  for(let i = 0; i < myArmy.length; i++) {
    if(/[a-z]/g.test(myArmy[i])) myCont += myArmy[i].charCodeAt() - 96
    if(/[a-z]/g.test(opposingArmy[i])) opCont += opposingArmy[i].charCodeAt() - 96

    if(/[A-Z]/g.test(myArmy[i])) myCont += myArmy[i].charCodeAt() - 38
    if(/[A-Z]/g.test(opposingArmy[i])) opCont += opposingArmy[i].charCodeAt() - 38

    if(/[0-9]/g.test(myArmy[i])) myCont += Number(myArmy[i])
    if(/[0-9]/g.test(opposingArmy[i])) opCont += Number(opposingArmy[i])
  }

  if(myCont === opCont) return "It was a tie"
  else return myCont < opCont ? "We lost" : "We won";
}

console.log(battle("Wizards", "Dragons"));
//*

//* Codice scritto da ChatGpt
function battle(myArmy, opposingArmy) {
  if (myArmy.length > opposingArmy.length) return "Opponent retreated";
  if (myArmy.length < opposingArmy.length) return "We retreated";

  const getStrength = (c) => {
    const code = c.charCodeAt(0);

    if (code >= 97 && code <= 122) return code - 96;
    if (code >= 65 && code <= 90) return code - 38;
    if (code >= 48 && code <= 57) return Number(c);
    return 0;
  };

  let myWins = 0;
  let opWins = 0;

  for (let i = 0; i < myArmy.length; i++) {
    const my = getStrength(myArmy[i]);
    const op = getStrength(opposingArmy[i]);

    if (my > op) myWins++;
    else if (op > my) opWins++;
  }

  if (myWins === opWins) return "It was a tie";
  return myWins > opWins ? "We won" : "We lost";
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 6.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Buona gestione delle lunghezze ✔️
// - Uso corretto di regex e charCodeAt
// - Codice leggibile
//! Contro
// - ❌ Errore logico: sommi le forze invece di contare le vittorie (richiesta sbagliata)
// - ❌ Ogni battaglia deve essere confronto diretto, non totale
// - ❌ Ripetizione codice (regex + calcolo)
// - ❌ Regex con /g inutile qui
// - Meno efficiente e più verboso del necessario
//*
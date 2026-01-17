//todo Date due stringhe che rappresentano il tuo esercito e un esercito avversario, 
//todo  ogni personaggio del tuo esercito combatte contro il personaggio nella stessa posizione dell'esercito avversario usando le seguenti regole:

//! I personaggi dalla a alla z hanno una forza rispettivamente da 1 a 26.
//! I personaggi dalla A alla Z hanno una forza rispettivamente da 27 a 52.
//! Le cifre da 0 a 9 hanno una forza pari al loro valore nominale.
//! Tutti gli altri personaggi hanno valore zero.
//! Ogni personaggio può combattere una sola battaglia.
//! Per ogni battaglia, vince il personaggio più forte. L'esercito con più vittorie vince 

//!la guerra. Restituisci i seguenti valori:

//! "Avversario si è ritirato" se il tuo esercito ha più personaggi dell'esercito avversario.
//! "Ci siamo ritirati" se l'esercito avversario ha più personaggi del tuo.
//! "Abbiamo vinto" se il tuo esercito ha vinto più battaglie.
//! "Abbiamo perso" se l'esercito avversario ha vinto più battaglie.
//! "È stato un pareggio" se entrambi gli eserciti hanno vinto lo stesso numero di battaglie.

//? Tempo di esecuzione:
//* Non finito

//?Codice scritto senza utilizzo di ChatGpt
function battle(myArmy, opposingArmy) {
  if(myArmy.length > opposingArmy.length) return "Opponent retreated"
  if(myArmy.length < opposingArmy.length) return "We retreated"

  let forza1 = "abcdefghilmnopqrstuvyzk"
  let forza2 = "abcdefghilmnopqrstuvyzk".toUpperCase()
  let forza3 = "0123456789"
  let forzaNull = "@$!."

  let myScore = 0;
  let enemyScore = 0;

  for(let i = 0; i < myArmy.length; i++) {
    if(myArmy[i].includes(forza1)) myScore = myScore + forza1.indexOf(i);
    if(myArmy[i].includes(forza2)) myScore = myScore + forza2.indexOf(i);
    if(myArmy[i].includes(forza3)) myScore = myScore + myAmry[i];
    if(myArmy[i].includes(forzaNull)) myScore = myScore;
  }
  for(let j = 0; j < myArmy.length; j++) {
    if(opposingArmy[j].includes(forza1)) opposingArmy = opposingArmy + forza1[j];
    if(opposingArmy[j].includes(forza2)) opposingArmy = opposingArmy + forza2[j];
    if(opposingArmy[j].includes(forza3)) opposingArmy = opposingArmy + oppingArmy[j];
    if(opposingArmy[j].includes(forzaNull)) opposingArmy = opposingArmy;
  }
  if(myScore > enemyScore) return "We won"
  if(myScore < enemyScore) return "We lost"
  if(myScore === enemyScore) return "It was a tie"

  return myScore
}

console.log(battle("Hello", "World"))

//?Codice scritto da ChatGpt
function battle(myArmy, opposingArmy) {
  if(myArmy.length > opposingArmy.length) return "Opponent retreated";
  if(myArmy.length < opposingArmy.length) return "We retreated";

  let myVictories = 0;
  let enemyVictories = 0;

  function charStrength(c) {
    if (c >= "a" && c <= "z") return c.charCodeAt(0) - 96;    // 'a' = 1 //! Maledetta chat! Una funzione dentro ad una funzione! 
    if (c >= "A" && c <= "Z") return c.charCodeAt(0) - 64 + 26; // 'A' = 27 //! Qui si parla di logica avanzata 
    if (c >= "0" && c <= "9") return parseInt(c);
    return 0; // altri caratteri
  }

  for (let i = 0; i < myArmy.length; i++) {
    const myScore = charStrength(myArmy[i]);
    const enemyScore = charStrength(opposingArmy[i]);

    if (myScore > enemyScore) myVictories++;
    else if (myScore < enemyScore) enemyVictories++;
  }

  if (myVictories > enemyVictories) return "We won";
  if (myVictories < enemyVictories) return "We lost";
  return "It was a tie";
}

// Test cases
console.log(battle("Hello", "World"));    
console.log(battle("Wizards", "Dragons"));

//? Versione Chat Gpt 

function battle(myArmy, opposingArmy) {
  if(myArmy.length > opposingArmy.length) return "Opponent retreated";
  if(myArmy.length < opposingArmy.length) return "We retreated";

  let myWins = 0;
  let enemyWins = 0;

  for (let i = 0; i < myArmy.length; i++) {
    const c1 = myArmy[i];
    const c2 = opposingArmy[i];

    const s1 = c1 >= "a" && c1 <= "z" ? c1.charCodeAt(0) - 96 :
               c1 >= "A" && c1 <= "Z" ? c1.charCodeAt(0) - 64 + 26 :
               c1 >= "0" && c1 <= "9" ? parseInt(c1) : 0;

    const s2 = c2 >= "a" && c2 <= "z" ? c2.charCodeAt(0) - 96 :
               c2 >= "A" && c2 <= "Z" ? c2.charCodeAt(0) - 64 + 26 :
               c2 >= "0" && c2 <= "9" ? parseInt(c2) : 0;

    if (s1 > s2) myWins++;
    else if (s1 < s2) enemyWins++;
  }

  return myWins > enemyWins ? "We won" :
         myWins < enemyWins ? "We lost" :
         "It was a tie";
}

// Test
console.log(battle("Hello", "World"));        // "We lost"
console.log(battle("pizza", "salad"));        // "We won"
console.log(battle("C@T5", "D0G$"));         // "We won"
console.log(battle("kn!ght", "orc"));        // "Opponent retreated"
console.log(battle("PC", "Mac"));             // "We retreated"
console.log(battle("Wizards", "Dragons"));   // "It was a tie"
console.log(battle("Mr. Smith", "Dr. Jones"));// "It was a tie"

//! QUESTA E' QUELLA SEMPLIFICATA CHAT? 

//! Uso scorretto di includes e indexOf(i):
//! Tu scrivevi if(myArmy[i].includes(forza1)) myScore = myScore + forza1.indexOf(i);
//! Questo non funziona: includes cerca un singolo carattere, ma i è l’indice, non il carattere.
//!Inoltre indexOf(i) restituiva -1 quasi sempre, perché i non è presente nella stringa forza1.
//! myAmry[i] → myArmy[i]
//! oppingArmy[j] → opposingArmy[j]
//! Tentavi opposingArmy = opposingArmy + forza1[j];, invece di sommare a enemyScore.
//! Sommare tutti i punteggi globali invece di contare battaglie vinte singolarmente porta a risultati sbagliati in test come "Hello" vs "World" o "Wizards" vs "Dragons".
//! Manca j e q, e hai messo la z in fondo: il punteggio non corrisponde ai test.
//todo Considerazioni: 

//* E' stato molto divertente questo snack e, anche se non l'ho portato a termine, mi ha divertito molto. :)

//! N.B. NON BUTTARTI GIU CHE QUESTO ESERCIZIO ERA UN BORDELLO
//todo  Date due frasi che rappresentano la tua squadra e una squadra avversaria, in cui ogni parola della tua squadra sfida la parola corrispondente della squadra avversaria, determina quale squadra vince usando le seguenti regole:

//! Le frasi date conterranno sempre lo stesso numero di parole.
//! Le parole sono separate da un singolo spazio e conterranno solo lettere.
//! Il valore di ogni parola è la somma delle sue lettere.
//! Le lettere dalla a alla z corrispondono ai valori da 1 a 26. Ad esempio, a è 1 e z è 26.
//! Una lettera maiuscola raddoppia il valore della lettera. Ad esempio, A è 2 e Z è 52.
//! Le parole sfidano in ordine: la prima parola della tua squadra sfida la prima parola della squadra avversaria, e così via.
//! Una parola vince se il suo valore è maggiore del valore della parola avversaria.
//! La squadra con più parole vincenti è la vincitrice. Restituisci "Vinciamo" se la tua squadra è la vincitrice, "Perdiamo" se la tua squadra perde e "Pareggiamo" se entrambe le squadre hanno lo stesso numero di vittorie.

//? Tempo di esecuzione:
//* Non completato 

//?Codice scritto senza utilizzo di ChatGpt

function battle(ourTeam, opponent) {

  let valueCharOur = 0;
  let valueCharOpp = 0;

  let ourWin = 0;
  let oppWin = 0;

  for(let i = 0; i < ourTeam.length; i++) {
    if(ourTeam[i] !== " " && [a-z].includes(ourTeam[i])) valueCharOur += ourTeam.charCodeAt(ourTeam[i] - 94)
    if(ourTeam[i] !== " " && [A-Z].includes(ourTeam[i])) valueCharOur += ourTeam.charCodeAt((ourTeam[i] - 94)* 2)
    console.log(valueCharOur)
   
    if(opponent[i] === " " && valueCharOpp < valueCharOur) {
      valueCharOur = 0
      ourWin++
  }}

  for(let j = 0; j < opponent.length; j++) {
    if(opponent[j] !== " " && [a-z].includes(opponent[j])) valueCharOpp += opponent.charCodeAt(opponent[j] - 94)  
    if(opponent[j] !== " " && [A-Z].includes(opponent[j])) valueCharOpp += opponent.charCodeAt((opponent[j] - 94) * 2)  
    console.log(valueCharOpp)

    if(opponent[j] === " "  && valueCharOpp > valueCharOur) { 
      oppWin++
      valueCharOpp = 0 
  }}

  if(ourWin > oppWin) return "We win"
  if(ourWin < oppWin) return "We lose"
  if(ourWin === oppWin) return "Draw"

  return ourTeam;
}

console.log(battle("cheeseburger with fries", "Cheeseburger with Fries"))

//?Codice scritto da ChatGpt

function battle(ourTeam, opponent) {
  const ourWords = ourTeam.split(" ");
  const oppWords = opponent.split(" ");

  let ourWin = 0;
  let oppWin = 0;

  const wordValue = (word) => {
    let sum = 0;
    for (let char of word) {
      let base = char.toLowerCase().charCodeAt(0) - 96;
      sum += char === char.toUpperCase() ? base * 2 : base;
    }
    return sum;
  };

  for (let i = 0; i < ourWords.length; i++) {
    const ourVal = wordValue(ourWords[i]);
    const oppVal = wordValue(oppWords[i]);

    if (ourVal > oppVal) ourWin++;
    else if (ourVal < oppVal) oppWin++;
  }

  if (ourWin > oppWin) return "We win";
  if (ourWin < oppWin) return "We lose";
  return "Draw";
}

//* ✅ Pro

//* Hai provato a gestire minuscole vs maiuscole

//* Buona intuizione sull’idea di valore diverso per le lettere

//* Tentativo di confrontare i team “a battaglia”

//* Usi variabili di appoggio (non tutto inline)

//! ❌ Contro (quelli che rompono tutto)

//! [a-z] / [A-Z] non funzionano in JS

//! charCodeAt(ourTeam[i] - 94) è sbagliato concettualmente

//! Stai sommando frasi, non parole

//! Confronti quando trovi lo spazio ma i valori non sono sincronizzati

//! Doppi for inutili e confusi

//! Reset dei contatori incompleto

//! Codice difficile da debuggare

//! Logica troppo complicata per il problema

//todo Considerazioni: 

//! N.B.
// //todo Consegna dell'esercizio
// Dato un certo numero di gradini, indicare in quanti modi diversi è possibile salirli, facendo 1 o 2 gradini alla volta.
// //todo

// //* Tempo di esecuzione:
// Non specificato
// //*

//*Codice scritto senza utilizzo di ChatGpt
function getUniqueClimbs(steps) {

  let result = 0;

  let cont1 = 0
  let cont2 = 0
  let cont3 = 0

  for (let i = 1; i <= steps; i++) {
    if (i % 2 !== 0) cont1++
    if (steps % 2 === 0) cont2++
    if (steps / 2 === i) cont3++
  }

  result = cont1 * cont2 * cont3

  return result;
}

console.log(getUniqueClimbs(10))
//*

//* Codice scritto da ChatGpt
function getUniqueClimbs(steps) {
  if (steps <= 2) return steps;

  let prev1 = 1; // modi per 1 gradino
  let prev2 = 2; // modi per 2 gradini

  for (let i = 3; i <= steps; i++) {
    let current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}

console.log(getUniqueClimbs(10));
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
3/10
//todo

//* Pro e contro del mio codice

// //* Pro
// - Hai provato a usare variabili di conteggio
// - Struttura con ciclo corretta
// - Codice leggibile

// //! Contro
// - Logica completamente scollegata dal problema
// - Non calcola combinazioni di passi (1 o 2)
// - Uso errato di condizioni (pari/dispari non serve)
// - Formula finale senza senso matematico
// - Non restituisce il risultato corretto

// //*
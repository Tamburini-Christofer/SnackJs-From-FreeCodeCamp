//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dati due interi, determinare quanti cubi perfetti esistono nel range (inclusi).
// L'ordine dei numeri non è garantito.
// Un numero è cubo perfetto se n^3 = numero.
//todo

//* Tempo di esecuzione:
// 20 minuti e 37 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function countPerfectCubes(a, b) {

  let maxValue = Math.max(a,b)
  let minValue = Math.min(a,b)

  let start = Math.ceil(Math.cbrt(minValue));
  let end = Math.floor(Math.cbrt(maxValue));

  let conteggio = (end - start + 1);

  return conteggio;
}

console.log(countPerfectCubes(3, 30))
//*

//* Codice scritto da ChatGpt
function countPerfectCubes(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const start = Math.ceil(Math.cbrt(min));
  const end = Math.floor(Math.cbrt(max));

  return Math.max(0, end - start + 1);
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// ✔ Ottimo approccio matematico (super efficiente)
// ✔ Nessun loop → O(1)
// ✔ Gestione corretta di min e max
// ✔ Codice chiaro e leggibile

//! Contro
// ❌ Non gestisce il caso in cui non esistano cubi (può tornare numero negativo)
// ❌ Nomi variabili migliorabili (conteggio ok, ma mix ITA/ENG)
// ❌ Manca una protezione finale (Math.max con 0)

//*
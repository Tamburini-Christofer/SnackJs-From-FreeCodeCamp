//todo Consegna dell'esercizio
// Dato un array di numeri in cui tutti tranne uno seguono uno schema,
// restituisci un nuovo array correggendo il numero sbagliato.
// Lo schema può essere incremento o decremento costante.
//todo

//* Tempo di esecuzione:
// Non specificato
//*

//*Codice scritto senza utilizzo di ChatGpt
function fixPrankNumber(arr) {

  let factor = arr[0] < arr[1] ? arr[1] - arr[0] : arr[0] - arr[1];

  if(factor === 0 && arr[2] < arr[1]) factor = arr[2] - arr[1]
  else if(factor === 0 && arr[2] < arr[1]) factor = arr[1] - arr[2]

  let result = [];

  for(let i = 0; i < arr.length; i++) {
   if(arr[i] % factor === 0) result.push(arr[i])
   else result.push(arr[i-1] + factor)
  }

  return result;
}
//*

//* Codice scritto da ChatGpt
function fixPrankNumber(arr) {
  let diff1 = arr[1] - arr[0];
  let diff2 = arr[2] - arr[1];

  let factor = Math.abs(diff1) < Math.abs(diff2) ? diff1 : diff2;

  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let expected = result[i - 1] + factor;

    if (arr[i] !== expected) {
      result.push(expected);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 5.5 / 10
//todo

//* Pro e contro del mio codice

//* Pro
// - Hai capito che esiste un "factor" (ottimo 🔥)
// - Hai provato a gestire casi particolari (factor = 0)
// - Struttura base corretta (loop + array risultato)

//! Contro
// - Uso sbagliato del modulo (%) → non serve in questo problema
// - Logica del factor fragile (non sempre trova quello giusto)
// - Condizione duplicata nell'if (bug)
// - Possibile errore con arr[i-1] (indice -1)
// - Non gestisce bene sequenze decrescenti
// - Non confronti con il valore atteso ma con divisibilità (errore concettuale)
//*
//todo Consegna dell'esercizio
// Dato un numero n (1-10000), contare quanti numeri da 1 a n
// hanno il quadrato che contiene almeno una cifra "3".
//todo

//* Tempo di esecuzione:
// 2 minuti e 30 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function squaresWithThree(n) {

  let contatore = 0

  for(let i = 1; i <= n; i++) {
    if(String(i**2).includes("3")) contatore++
  }

  return contatore;
}
//*

//* Codice scritto da ChatGpt
function squaresWithThree(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if ((i * i).toString().includes("3")) count++;
  }

  return count;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// ✔ Soluzione pulita e diretta
// ✔ Ottimo uso di includes()
// ✔ Complessità perfetta per il range dato
// ✔ Molto leggibile

//! Contro
// ❌ Nome variabile (contatore → count più standard)
// ❌ Piccolo miglioramento: evitare String() → usare toString()
// ❌ Nessuna ottimizzazione (ma qui non serve davvero)

//*
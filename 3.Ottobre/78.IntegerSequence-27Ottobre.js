//todo  Dato un numero intero positivo, restituisce una stringa con tutti i numeri interi da 1 fino al numero specificato incluso, in ordine numerico.

//! Ad esempio, dato 5, restituisce "12345".

//? Tempo di esecuzione:
//* 2 Minuti e 33 secondi

//?Codice scritto senza utilizzo di ChatGpt

function sequence(n) {

  let word = ""

  for(let i = 1; i <= n; i++)  word += i

  return word;

}

console.log(sequence(5))

//?Codice scritto da ChatGpt
//* Non usata

//* ✅ Pro

//* Semplice e leggibile

//* Fa esattamente quello che serve

//* Ottima per numeri piccoli

//* Tempo O(n) corretto

//! ❌ Contro

//! Concatenazione in loop → inefficiente con numeri grandi

//! Nessun controllo input (n ≤ 0, non numeri)

//! Uso di stringhe mutabili (in JS può pesare)

//? Versione Chat Gpt 

function sequence(n) {
  return Array.from({ length: n }, (_, i) => i + 1).join("");
}

//todo Considerazioni: 

//! N.B.
//todo Dato un numero intero, determina se quel numero è un numero primo o un numero primo negativo.


//! Un numero primo è un numero intero positivo maggiore di 1 che è divisibile solo per 1 e per se stesso.
//! Un numero primo negativo è la versione negativa di un numero primo positivo.
//! 1 e 0 non sono considerati numeri primi.

//? Tempo di esecuzione:
//* Non completato 

//?Codice scritto senza utilizzo di ChatGpt
function isUnnaturalPrime(n) {
  if(n === 1 || n === 0 || n === -1) return false

  for(let i = 1; i < n; i++) {
   if(n > 0 && n / 1 === 1 && n / n === 1) return true
   for(let j = 1; j > n; j--) {
   if(n < 0 && n / 1 === 1 && n / n === 1) return false
   }
  }
}

console.log(isUnnaturalPrime(1))

//?Codice scritto da ChatGpt
function isUnnaturalPrime(n) {
  if (n === 1 || n === 0 || n === -1) return false; //! Ok, l'inizio lo abbiamo fatto uguale

  const absN = Math.abs(n); //! Ok, qui mi sono perso

  for (let i = 2; i <= Math.sqrt(absN); i++) { //!Ok, chat, qui non ci sarei mai arrivato
    if (absN % i === 0) return false;
  }

  return true;
}

console.log(isUnnaturalPrime(1));   // false
console.log(isUnnaturalPrime(2));   // true
console.log(isUnnaturalPrime(-3));  // true
console.log(isUnnaturalPrime(4));   // false

//? Versione Chat Gpt 

//todo Considerazioni: 

//* Qui si parla di matematica logica di base, però bisogna fare un ragionamento più laterale. Sembra facilissimo e invece è complicato ciclarlo

//! N.B. SARA' PER LA PROSSIMA
//todo Un numero primo è un numero intero positivo maggiore di 1 divisibile solo per 1 e per se stesso. I primi cinque numeri primi sono 2, 3, 5, 7 e 11.

//! Dato un numero intero positivo n, restituisci l'n-esimo numero primo. 
//! Ad esempio, dato 5, restituisci il quinto numero primo: 11.

//? Tempo di esecuzione:
//* Non completato (ma per poco)

//?Codice scritto senza utilizzo di ChatGpt

function nthPrime(n) {

  function prime(numero) {
    for (let j = 2; j <= Math.sqrt(numero); j++) {
      if(numero % j === 0) return false
    }
    return true
  }
  
  let arrayNumber = []

  for(let i = 2; i <= 1000; i++) {
    if(prime(i)) arrayNumber.push(i)
  }
  return arrayNumber[n-1];
}

console.log(nthPrime(1000))

//?Codice scritto da ChatGpt

function nthPrime(n) {

  function prime(numero) {
    if (numero < 2) return false
    for (let j = 2; j <= Math.sqrt(numero); j++) {
      if (numero % j === 0) return false
    }
    return true
  }

  let arrayNumber = []
  let i = 2

  while (arrayNumber.length < n) {
    if (prime(i)) arrayNumber.push(i)
    i++
  }

  return arrayNumber[n - 1]
}

console.log(nthPrime(1000)) // 7919

//* ✅ PRO

//* Logica chiara e leggibile

//* Uso corretto di Math.sqrt() ✔️

//* Funzione prime() ben separata

//* Facile da capire per chi studia

//! ❌ CONTRO

//! Limite fisso (< 1000) → poco flessibile

//! 1 considerato primo (bug logico)

//! Indice sbagliato (arrayNumber[n])

//! Spreca memoria se ti serve solo un numero

//! Calcola più primi del necessario

//? Versione Chat Gpt 

//todo Considerazioni: 

//! N.B.
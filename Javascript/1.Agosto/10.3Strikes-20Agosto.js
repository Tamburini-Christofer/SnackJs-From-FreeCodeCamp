//todo Dato un numero intero compreso tra 1 e 10.000, restituisci un conteggio di quanti numeri da 1 fino a quell'intero il cui quadrato contiene almeno una cifra 3.

//? Tempo di esecuzione:
//* Non risolto (per poco)

//?Codice scritto senza utilizzo di ChatGpt

function squaresWithThree(n) {
  if(n === 1) return 0;

  let contatore = 0

  for(let i = 0; i < n; i++){
    let squares = i * i;
    for(let j = 0; j < squares.length; j++){
      if(squares[j] === 3)
      contatore++
    }
  }
  return contatore;
}

console.log(squaresWithThree(1000))

//?Codice scritto da ChatGpt

function squaresWithThree(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) { //! Chat fa partire il ciclo direttamente da 1, così da evitrare la condizione iniziale che ho messo io
    const squareStr = (i * i).toString(); //! Ecco dove stava l'errore! squares è un numero, non ha .length
    if (squareStr.includes("3")) { //! Avevo pensato all'includes, ma non riuscivo ad appliccarlo come volessi 
      count++;
    }
  }

  return count;
}

//* Hai capito cosa calcolare (quadrati)

//* Struttura a cicli corretta

//* Tentativo giusto di analizzare le cifre

//! squares.length su un numero (errore concettuale)

//! Doppio ciclo non necessario

//! Logica non allineata alla consegna (“almeno un 3”)

//todo Considerazioni: 

//* L'esercizio mi ha messo difficoltà nel capire, però è stato utile

//! N.B. BASTA FOR IN FOR NON NECESSARI
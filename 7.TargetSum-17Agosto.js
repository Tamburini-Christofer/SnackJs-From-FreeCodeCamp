
//todo Dato un array di numeri e un target intero, trova due numeri univoci nell'array che sommati diano il valore target. Restituisci un array con gli indici di quei due numeri, 
//todo oppure "Target non trovato" se non ci sono due numeri che sommati danno il valore target.

//! L'array restituito dovrebbe avere gli indici in ordine crescente.

//? Tempo di esecuzione:
//* 15 minuti e 45 secondi

//?Codice scritto senza utilizzo di ChatGpt

function findTarget(arr, target) {
  let number = [];
  let empty = true;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] + arr[i+1] === target) {
      number.push(i)
      number.push(i+1)
      empty = false
    } 
}

if(empty) return "Target not found"

  return number;
}

console.log(findTarget([1, 3, 5, 7], 14))

//?Codice scritto da ChatGpt

//* Non ho utilizzato ChatGpt

//* Hai usato un ciclo semplice

//* Restituisci gli indici

//* Gestisci il caso “non trovato”

//! Controlli solo coppie adiacenti (i e i+1)

//! L’esercizio richiede qualsiasi coppia

//! Possibile undefined sull’ultimo elemento

//! empty è evitabile
//todo Considerazioni: 

//* A chat non va bene niente di quello che faccio :)
function findTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return "Target not found";
}

console.log(findTarget([1, 3, 5, 7], 14));
//*Lo avrebbe fatto così. Allora sei meglio tu


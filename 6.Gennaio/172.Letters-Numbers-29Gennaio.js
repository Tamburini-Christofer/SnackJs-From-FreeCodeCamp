//todo Consegna dell'esercizio
// Data una stringa contenente solo lettere e numeri, restituisce una nuova stringa in cui viene inserito un trattino (-) ogni volta che la stringa passa da una lettera a un numero o da un numero a una lettera.
//todo

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function separateLettersAndNumbers(str) {

  let result = []

  for(let i  = 0; i < str.length; i++) {
    if(/\d/.test(str[i]) && /[a-z]i/.test(str[i+1])) result.push(str[i], "-");
    else if(/[a-z]i/.test(str[i]) && /\d/.test(str[i+1])) result.push(str[i], "-")
    else result.push(str[i])
  }

  return result.join("");
}

console.log(separateLettersAndNumbers("H3LL0W0RLD"))
//*

//* Codice scritto da ChatGpt
function separateLettersAndNumbers(str) {

  let result = []

  for(let i = 0; i < str.length; i++) {

    const curr = str[i]
    const next = str[i+1]

    result.push(curr)

    if(next && (/\d/.test(curr) !== /\d/.test(next))){
      result.push("-")
    }

  }

  return result.join("")
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 6/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Buona idea controllare carattere corrente + successivo
// ✔ Uso corretto di .test()
// ✔ Buona logica con push e join

//! Contro / Errori
// ❌ Regex sbagliata

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
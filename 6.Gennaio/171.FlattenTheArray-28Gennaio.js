//todo Consegna dell'esercizio
// Dato un array che contiene array annidati, restituisci un nuovo array con tutti i valori appiattiti in un unico array unidimensionale. Mantieni l'ordine originale degli elementi negli array.
//todo

//* Tempo di esecuzione:
//* 6 Minuti e 34 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function flatten(arr) {

  return arr.flat(Infinity);
}

console.log(flatten([["L", "M", "N"], ["O", ["P", "Q", ["R", ["S", ["T", "U"]]]]], "V", ["W", ["X", ["Y", ["Z"]]]]]))
//*

//* Codice scritto da ChatGpt
function flatten(arr) {

  let result = []

  for(let el of arr){
    if(Array.isArray(el)){
      result = result.concat(flatten(el))
    } else {
      result.push(el)
    }
  }

  return result
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 10/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Soluzione perfetta e moderna
// ✔ Uso corretto di flat()
// ✔ Infinity gestisce qualsiasi livello di annidamento
// ✔ Codice pulitissimo
// ✔ Mantiene l’ordine automaticamente

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
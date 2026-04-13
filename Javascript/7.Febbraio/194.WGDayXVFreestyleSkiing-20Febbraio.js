//todo Consegna dell'esercizio
// Dato un nome di trick composto da due parole, determina se si tratta di un nome valido per un trick di sci freestyle.
//todo

//! Requisiti da rispettare
// Un trick è valido se la prima parola è presente nell'elenco delle parole valide come prima parola e la seconda parola è presente nell'elenco delle parole valide come seconda parola.

// Le due parole saranno separate da un singolo spazio.
// Parole valide come prima parola:

// "Nebbioso"
// "Fantasma"
// "Tuono"
// "Solare"
// "Cielo"
// "Fantasma"
// "Congelato"
// "Polare"
// Parole valide come seconda parola:

// "Twister"
// "Terremoto"
// "Valanga"
// "Vortice"
// "Tempesta di neve"
// "Gelo"
// "Bufera di neve"
// "Ombra"
//!

//* Tempo di esecuzione:
//* 5 Minuti 
//*

//*Codice scritto senza utilizzo di ChatGpt
function isValidTrick(trickName) {

  let splitWord = trickName.split(" ")

  let firstWord = ["Misty","Ghost","Thunder","Solar","Sky","Phantom","Frozen","Polar"]
  let secondWord = ["Twister","Icequake","Avalanche","Vortex","Snowstorm","Frostbite","Blizzard","Shadow"]

  if(firstWord.includes(splitWord[0]) && secondWord.includes(splitWord[1])) return true
  else return false
}

console.log(isValidTrick("Polar Vortex"))
//*

//* Codice scritto da ChatGpt
function isValidTrick(trickName) {
  const [first, second] = trickName.split(" ");

  const firstWords = new Set(["Misty","Ghost","Thunder","Solar","Sky","Phantom","Frozen","Polar"]);
  const secondWords = new Set(["Twister","Icequake","Avalanche","Vortex","Snowstorm","Frostbite","Blizzard","Shadow"]);

  return firstWords.has(first) && secondWords.has(second);
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 9/10
//todo

//* Pro e contro del mio codice

//* Pro

// Logica perfetta
// Uso corretto di .includes() ✔️
// Codice pulito e leggibile
// Buona separazione tra dati e logica
// Split fatto bene

//! Contro

// if...else inutile → puoi ritornare direttamente il booleano
// Non gestisci input non validi (es. una sola parola)
// Nomi variabili migliorabili (splitWord → meglio words)

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
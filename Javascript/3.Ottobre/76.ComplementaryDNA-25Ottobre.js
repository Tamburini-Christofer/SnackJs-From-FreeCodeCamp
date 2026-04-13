//todo  Data una stringa che rappresenta una sequenza di DNA, restituisci il suo filamento complementare utilizzando le seguenti regole:
//! Il DNA è composto dalle lettere "A", "C", "G" e "T".
//! Le lettere "A" e "T" si completano a vicenda.
//! Le lettere "C" e "G" si completano a vicenda.
//! Ad esempio, dato "ACGT", restituisci "TGCA".

//? Tempo di esecuzione:
//* 9 minuti e 42 secondi 

//?Codice scritto senza utilizzo di ChatGpt

function complementaryDNA(strand) {

  let DNA = []

  for(let i = 0; i < strand.length; i++) {
    if(strand[i] === "A") DNA.push("T")
    if(strand[i] === "C") DNA.push("G")
    if(strand[i] === "T") DNA.push("A")
    if(strand[i] === "G") DNA.push("C")
  }

  return DNA.join("");
}

console.log(complementaryDNA("ATGCGTACGTTAGC") )

//?Codice scritto da ChatGpt
//* Nessun codice 

//* ✅ Pro

//* Corretta: mappatura DNA giusta (A↔T, C↔G)

//* Codice chiaro e leggibile

//* Nessun side effect

//! ❌ Contro

//! Troppi if (tutti vengono controllati ogni volta)

//! Non gestisce input non validi

//! Più verbosa del necessario

//? Versione Chat Gpt 

function complementaryDNA(strand) {
  const map = { A: "T", T: "A", C: "G", G: "C" };
  return [...strand].map(c => map[c]).join("");
}


//todo Considerazioni: 

//! N.B.
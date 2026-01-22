//todo Dato un paragrafo, restituisci un nuovo paragrafo in cui la prima lettera di ogni frase è maiuscola.


//! Tutti gli altri caratteri devono essere mantenuti.
//! Le frasi possono terminare con un punto (.), uno o più punti interrogativi (?) o uno o più punti esclamativi (!).

//? Tempo di esecuzione:
//* Non completato 

//?Codice scritto senza utilizzo di ChatGpt

function capitalize(paragraph) {
  
  let arrParagr = paragraph.split("")

  let word = [];

  for(let i = 0; i < arrParagr.length; i++) {
    if(i === 0) word.push(arrParagr[i].toUpperCase())
    if(arrParagr[i] === "." || 
       arrParagr[i] === "?" || 
       arrParagr[i] === "!" ) word.push(arrParagr[i+2].toUpperCase())
  }
  return word;
}

console.log(capitalize("hello world. how are you?"))

//?Codice scritto da ChatGpt

function capitalize(paragraph) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < paragraph.length; i++) {
    const char = paragraph[i];

    if (capitalizeNext && /[a-zA-Z]/.test(char)) {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char;
    }

    if (char === "." || char === "?" || char === "!") {
      capitalizeNext = true;
    }
  }

  return result;
}

console.log(capitalize("hello world. how are you?"));

//* ✅ Pro

//* Mantiene tutti i caratteri originali (spazi, apostrofi, punteggiatura)

//* Gestisce più segni consecutivi (..., !!!, ???)

//* Logica chiara: capitalizza solo quando serve

//* Passa tutti i test

//* Codice facile da leggere e mantenere

//! ❌ Contro

//! Usa una regex (/[a-zA-Z]/) → leggermente più “avanzata”

//! Scorre l’intera stringa carattere per carattere (ok per testi normali)

//! Un po’ più verboso rispetto a soluzioni “furbe” con split

//todo Considerazioni: 

//* Mi sono appena svegliato e non sono al 100% delle mie capacità logiche.

//! N.B.
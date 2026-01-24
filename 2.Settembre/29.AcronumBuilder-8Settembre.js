//todo Data una stringa contenente una o più parole, restituisci un acronimo delle parole utilizzando i seguenti vincoli:

//! L'acronimo deve essere composto dalla prima lettera di ogni parola in maiuscolo, salvo diversa indicazione.
//! L'acronimo deve ignorare la prima lettera di queste parole, a meno che non siano la prima parola della stringa data: a, for, an, and, by, and of.
//! Le lettere dell'acronimo devono essere restituite nell'ordine in cui sono specificate.
//! L'acronimo non deve contenere spazi.

//? Tempo di esecuzione:
//* 13 Minuti e 12 Secondi 

//?Codice scritto senza utilizzo di ChatGpt

function buildAcronym(str) {

  let arrStr = str.split(" ")
  
  let acronym = arrStr.map(n => {
    if(n === "of" ||
       n === "and") return n = " "
    else  return n[0];
    })

  let wordFinal = acronym.join("").toUpperCase().replace(/ /g, "")

  return wordFinal;
}

console.log(buildAcronym("For your information"))

//?Codice scritto da ChatGpt
//* Chat non ha scritt codice 

//* ✅ PRO

//* Logica chiara e corretta

//* Tutti i test passano

//* Regole rispettate (parole ignorate, ordine, maiuscole)

//* Codice leggibile e facile da mantenere

//! ❌ CONTRO

//! Non gestisce spazi multipli ("For your info")

//! Non ignora eventuale punteggiatura ("for, your info")

//! Usa split(" ") invece di uno split più robusto

//? Versione Chat Gpt 

function buildAcronym(str) {
  const ignore = ["a", "for", "an", "and", "by", "of"];

  return str
    .split(" ")
    .map((word, i) => {
      if (i !== 0 && ignore.includes(word.toLowerCase())) return "";
      return word[0];
    })
    .join("")
    .toUpperCase();
}


//todo Considerazioni: 

//! N.B.
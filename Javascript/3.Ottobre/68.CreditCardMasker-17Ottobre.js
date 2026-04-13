//todo  Data una stringa di numeri di carte di credito, restituiscine una versione mascherata utilizzando i seguenti vincoli:

//! La stringa conterrà quattro serie di quattro cifre (0-9), separate da un singolo spazio o da un singolo trattino (-).
//! Sostituisci tutti i numeri, tranne gli ultimi quattro, con un asterisco (*).
//! Lascia invariati i caratteri rimanenti.
//! Ad esempio, dato "4012-8888-8888-1881", restituisci "****-****-****-1881".

//? Tempo di esecuzione:
//* 18 Minuti e 52 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function mask(card) {
  let numberMask = card.length - 4
  let mask = []

  for(let i = 0; i < numberMask; i++) {
    if(card[i] != "-" && card[i] != " ") mask.push("*")
    else if (card[i] === "-" || card[i] === " ") mask.push(card[i])
  }

  for(let j = numberMask; j < card.length; j++) mask.push(card[j])

  let maskComplete = mask.join("")

  return maskComplete;
}

console.log(mask("4012-8888-8888-1881"))

//?Codice scritto da ChatGpt
//* Non usata 

//* ✅ PRO

//* Funziona correttamente per i casi richiesti ✅

//* Gestisci bene - e spazi senza romperli

//* Logica chiara: maschera → conserva ultimi 4

//* Codice leggibile

//* Ottimo ragionamento step-by-step 💪

//! ❌ CONTRO

//! Più complesso del necessario

//! Usi due cicli quando ne basta uno

//! Array + push + join → un po’ verboso

//! Non sfrutti string methods più dirette

//? Versione Chat Gpt 

function mask(card) {
  return card
    .slice(0, -4)
    .replace(/\d/g, "*") + card.slice(-4);
}


//todo Considerazioni: 

//! N.B.
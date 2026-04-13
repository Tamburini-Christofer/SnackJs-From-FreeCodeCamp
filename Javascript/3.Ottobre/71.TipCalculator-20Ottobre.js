//todo Dato il prezzo del pasto e una percentuale di mancia personalizzata, restituisci un array con tre valori di mancia: 15%, 20% e l'importo personalizzato.

//! I prezzi saranno indicati nel formato: "$N.NN".
//! Le percentuali di mancia personalizzate saranno indicate nel formato: "25%".
//! Restituisci gli importi nello stesso formato "$N.NN", arrotondati a due cifre decimali.
//! Ad esempio, dato un prezzo del pasto di "$10,00" e un valore di mancia personalizzato del "25%", restituisci ["$1,50", "$2,00", "$2,50"].

//? Tempo di esecuzione:
//* 16 Minuti e 32 Secondi 

//?Codice scritto senza utilizzo di ChatGpt

function calculateTips(mealPrice, customTip) {

  let mealPriceNumber = Number(mealPrice.replace(/\$/g, ""))
  let customTipNumber = Number(customTip.replace(/\%/g, ""))
  let scount15 = (mealPriceNumber * 0.15).toFixed(2).toString();
  let scount20 = (mealPriceNumber * 0.20).toFixed(2).toString();
  let scountCu = (mealPriceNumber * customTipNumber / 100).toFixed(2).toString();
  let finalWord = ["$" + scount15, "$" + scount20, "$" +  scountCu]
  return finalWord;
}

console.log(calculateTips("$10.00", "25%"))

//?Codice scritto da ChatGpt
//* Non usata 

//* ✅ PRO

//* Parsing corretto di $ e %

//* Calcoli matematici giusti

//* toFixed(2) usato bene

//* Output nel formato richiesto

//* Codice chiaro e leggibile

//! ❌ CONTRO

//! Variabili con nome sbagliato (scount → tip)

//! toString() inutile (toFixed restituisce già stringa)

//! Codice ripetuto (15%, 20%, custom)

//! Manca gestione input non valido (ok per la traccia, ma limite reale)

//? Versione Chat Gpt 

//todo Considerazioni: 

//! N.B.
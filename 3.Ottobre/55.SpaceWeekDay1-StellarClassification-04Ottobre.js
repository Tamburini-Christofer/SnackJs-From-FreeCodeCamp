//todo Il 4 ottobre segna l'inizio della Settimana Mondiale dello Spazio. 
//todo I prossimi sette giorni vi porteranno a sfide di programmazione a tema astronomico.

//! Per la sfida di oggi, vi verrà fornita la temperatura superficiale di una stella in gradi Kelvin (K) e dovrete determinarne la classificazione stellare in base ai seguenti intervalli:

//! "O": 30.000 K o superiore
//! "B": 10.000 K - 29.999 K
//! "A": 7.500 K - 9.999 K
//! "F": 6.000 K - 7.499 K
//! "G": 5.200 K - 5.999 K
//! "K": 3.700 K - 5.199 K
//! "M": 0 K - 3.699 K

//! Restituisci la classificazione della stella indicata.

//? Tempo di esecuzione:
//* 3 Minuti e 17 Secondi

//?Codice scritto senza utilizzo di ChatGpt

function classification(temp) {

  if(temp >= 0 && temp <= 3699) return "M"
  if(temp >= 3700 && temp <= 5199) return "K"
  if(temp >= 5200 && temp <= 5999) return "G"
  if(temp >= 6000 && temp <= 7499) return "F"
  if(temp >= 7500 && temp <= 9999) return "A"
  if(temp >= 10000 && temp <= 29999) return "B"
  if(temp >= 30000) return "O"

  return temp;
}

console.log(classification(5778) )

//?Codice scritto da ChatGpt
//* Non utilizzata 

//* ✅ PRO

//* Condizioni chiare e leggibili

//* Intervalli corretti e ordinati

//* return immediato → codice pulito

//* Funzione facile da capire

//! ❌ CONTRO

//! Numeri hardcoded (poco manutenibile)

//! Nessun controllo su valori negativi / non numeri

//! L’ultimo return temp è inutile

//! Si può semplificare senza perdere chiarezza

//? Versione Chat Gpt 

function classification(temp) {
  if (temp < 0) return "invalid";
  if (temp < 3700) return "M";
  if (temp < 5200) return "K";
  if (temp < 6000) return "G";
  if (temp < 7500) return "F";
  if (temp < 10000) return "A";
  if (temp < 30000) return "B";
  return "O";
}

//todo Considerazioni: 

//! N.B.
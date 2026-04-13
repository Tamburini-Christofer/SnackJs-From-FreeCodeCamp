//todo Consegna dell'esercizio
// Data una stringa, determina se si tratta di un colore esadecimale CSS valido. Un colore esadecimale CSS valido deve:
//todo

//! Requisiti da rispettare
// Iniziare con # ed
// essere seguito da 3 o 6 caratteri esadecimali.
// I caratteri esadecimali sono i numeri da 0 a 9 e le lettere dalla a alla f (senza distinzione tra maiuscole e minuscole).
//!

//* Tempo di esecuzione:
//* 6 Minuti e 35 Secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function isValidHex(str) {

  if(/^#+[0-9a-fA-F]{3,6}$/g.test(str)) return true
  else return false

}

console.log(isValidHex("#1234567"))
//*

//* Codice scritto da ChatGpt
function isValidHex(str) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(str);
}
//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 6/10
//todo

//* Pro e contro del mio codice

//* Pro

// ✔ Hai usato Regex (ottima scelta)
// ✔ Controllo corretto dei caratteri esadecimali
// ✔ Uso corretto di .test()

//! Contro / Errori

// ❌ #+
// Permette più di un #
// Esempio valido nel tuo codice ma sbagliato:

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
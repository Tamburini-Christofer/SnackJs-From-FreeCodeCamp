//todo Consegna dell'esercizio
// Data una stringa che rappresenta un numero e una base (2-36),
// determinare se ogni carattere è valido per quella base.
//todo

//* Tempo di esecuzione:
// 5 minuti e 34 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function isValidNumber(n, base) {

  for(let i = 0; i < n.length; i++) {
    if(base <= 2 && !/[0-1]/.test(n[i])) return false
    else if(base <= 8 && !/[0-7]/.test(n[i])) return false
    else if(base <= 10 && !/[0-9]/.test(n[i])) return false
    else if(base <= 16 && !/[0-9A-F]/i.test(n[i])) return false
    else if(base <= 36 && !/[0-9A-Z]/i.test(n[i])) return false
  }

  return true
}
//*

//* Codice scritto da ChatGpt
function isValidNumber(n, base) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const allowed = chars.slice(0, base);

  for (let i = 0; i < n.length; i++) {
    if (!allowed.includes(n[i].toUpperCase())) return false;
  }

  return true;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 6.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// ✔ Veloce da scrivere
// ✔ Uso corretto delle regex
// ✔ Copre bene alcune basi comuni (2, 8, 10, 16)

//! Contro
// ❌ Logica sbagliata per basi intermedie (es. base 3, 5, 12)
// ❌ Hardcoded (poco scalabile)
// ❌ Tante condizioni inutili
// ❌ Non sfrutta il fatto che le basi sono sequenziali

//*
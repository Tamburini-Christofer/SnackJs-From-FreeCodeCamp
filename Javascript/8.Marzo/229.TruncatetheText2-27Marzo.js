//todo Consegna dell'esercizio
// Data una stringa, restituisci una nuova stringa troncata in modo che la larghezza totale dei caratteri non superi le 50 unità.
// Ogni carattere ha una larghezza specifica.
// Se supera 50, troncare e aggiungere "..." senza superare 60 unità totali.
//todo

//* Tempo di esecuzione:
// Non specificato
//*

//*Codice scritto senza utilizzo di ChatGpt
function truncateText(str) {

  let totalSp = 0;

  let firstCondition = "ilI".split("") 
  let secondCondition = "fjrt".split("") 
  let thirdCondition = "abcdeghkmnopqrstuvwxyzJL".split("") 
  let fourthCondition = "ABCDEFGHKMNOPQRSTUVWXYZ".split("") 

  for(let i = 0; i < str.length; i++) {
    if(totalSp <= 50) {
    if(firstCondition.includes(str[i])) totalSp += 1
    else if(secondCondition.includes(str[i])) totalSp += 2 
    else if(thirdCondition.includes(str[i])) totalSp += 3 
    else if(fourthCondition.includes(str[i])) totalSp += 4 
    else if(str[i] === "\s") totalSp += 2 
    else if(str[i] === "\.") totalSp += 1
    }
  }

  if(totalSp <= 50) return str
  else return String(str.slice(0, totalSp) + "...")
}
//*

//* Codice scritto da ChatGpt
function truncateText(str) {

  const widthMap = {
    1: "ilI",
    2: "fjrt",
    3: "abcdeghkmnopqrstuvwxyzJL",
    4: "ABCDEFGHKMNOPQRSTUVWXYZ"
  };

  function getWidth(char) {
    if (char === " ") return 2;
    if (char === ".") return 1;

    for (let key in widthMap) {
      if (widthMap[key].includes(char)) {
        return Number(key);
      }
    }
    return 0;
  }

  let total = 0;

  for (let c of str) {
    total += getWidth(c);
  }

  if (total <= 50) return str;

  let result = "";
  let currentWidth = 0;

  for (let c of str) {
    let charWidth = getWidth(c);

    if (currentWidth + charWidth + 3 > 60) break;

    result += c;
    currentWidth += charWidth;
  }

  return result + "...";
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto: 6/10
//todo

//* Pro e contro del mio codice

//* Pro
// Buona suddivisione dei gruppi di caratteri
// Logica base corretta (loop + accumulo)
// Hai identificato il problema della larghezza

//! Contro
// Uso errato di "\s" e "\."
// totalSp usato come indice nello slice (errore logico)
// Mancanza gestione dei 60 caratteri con "..."
// Controllo if(totalSp <= 50) nel punto sbagliato
// Codice poco scalabile (troppi if)
//*
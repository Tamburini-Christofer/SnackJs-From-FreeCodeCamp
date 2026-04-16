//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Data una stringa contenente numeri e altri caratteri, esegui operazioni matematiche sui numeri in base al numero di caratteri non numerici che li separano.
// Se il numero di caratteri che separano due numeri è pari, esegui l'addizione.
// Se è dispari, esegui la sottrazione.
// Le cifre consecutive formano un singolo numero.
// Le operazioni si applicano da sinistra a destra.
// Ignora i caratteri iniziali e finali che non sono cifre.
//todo

//* Tempo di esecuzione:
// 23 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function doMath(str) {
  let result = [];
  let provisoryWord = ""; 

  for (let i = 0; i < str.length; i++) {

    if (/\d/.test(str[i])) {
      if (provisoryWord.length > 0) {
        if (provisoryWord.length % 2 === 0) result.push("+");
        else result.push("-");
        provisoryWord = ""; 
      }

      if (/\d/.test(str[i + 1])) {
        result.push(str[i]);
      } else {
        result.push(str[i]);
      }

    } else {
      provisoryWord += str[i];
    }
  }

  return eval(result.join(""));
}
//*

//* Codice scritto da ChatGpt
function doMath(str) {
  let numbers = [];
  let separators = [];
  let currentNum = "";
  let currentSep = "";

  for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      // Se troviamo un numero e avevamo accumulato lettere...
      if (currentSep.length > 0) {
        // AGGIUNTA CRUCIALE: Salva il separatore solo se abbiamo già almeno un numero
        if (numbers.length > 0) {
          separators.push(currentSep);
        }
        currentSep = "";
      }
      currentNum += str[i];
    } else {
      if (currentNum.length > 0) {
        numbers.push(Number(currentNum));
        currentNum = "";
      }
      currentSep += str[i];
    }
  }

  // Aggiungiamo l'ultimo numero se rimasto in sospeso
  if (currentNum.length > 0) {
    numbers.push(Number(currentNum));
  }

  // Se non ci sono numeri, ritorna 0 o gestisci l'errore
  if (numbers.length === 0) return 0;

  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    let sep = separators[i - 1];

    if (/plus/i.test(sep)) {
      result += numbers[i];
    } else if (/minus/i.test(sep)) {
      result -= numbers[i];
    } else {
      if (sep.length % 2 === 0) result += numbers[i];
      else result -= numbers[i];
    }
  }

  return result;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 6/10
//todo

//* Pro e contro del mio codice

//* Pro
// Buona intuizione nell’uso delle regex per riconoscere i numeri
// Logica generale dell’esercizio compresa
// Gestione parziale dei numeri multi-cifra

//! Contro
// Uso di eval() (sconsigliato e rischioso)
// Non separa chiaramente numeri e operatori
// Logica fragile in casi più complessi
// Codice poco leggibile e difficile da mantenere

//*
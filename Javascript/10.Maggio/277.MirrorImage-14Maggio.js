//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Date due stringhe, determina se la seconda stringa è l'immagine speculare della prima.

Un'immagine speculare si ottiene invertendo la stringa e sostituendo ogni carattere con il suo equivalente speculare.

I caratteri simmetrici appaiono come se fossero riflessi nello specchio:
W, T, Y, U, I, O, H, A, X, V, M, w, o, x, v, 0, 8, =, +, :, |, -, _, *, ^, !, ., e lo spazio.

Le coppie speculari si scambiano di posto nello specchio:
[ ]
{ }
< >
b d
p q
( )

Se una delle due stringhe include un carattere non presente negli elenchi precedenti, non è possibile creare un'immagine speculare a partire da quei caratteri.

Ad esempio, l'immagine speculare di "[HOW]" è "[WOH]".
*/
//todo

//* Tempo di esecuzione:
/*
28 minuti
*/
//*

//*Codice scritto senza utilizzo di ChatGpt

function isMirrorImage(str1, str2) {
  if (str1.length !== str2.length) return false;

  const symmetricChars = new Set([
    'W', 'T', 'Y', 'U', 'I', 'O', 'H', 'A', 'X', 'V', 'M',
    'w', 'o', 'x', 'v', '0', '8', '=', '+', ':', '|', '-',
    '_', '*', '^', '!', '.', ' '
  ]);

  const mirrorPairs = {
    '[': ']', ']': '[',
    '{': '}', '}': '{',
    '<': '>', '>': '<',
    'b': 'd', 'd': 'b',
    'p': 'q', 'q': 'p',
    '(': ')', ')': '('
  };

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[str2.length - 1 - i];

    if (symmetricChars.has(char1)) {
      if (char1 !== char2) return false;
    }
    else if (char1 in mirrorPairs) {
      if (mirrorPairs[char1] !== char2) return false;
    }
    else {
      return false;
    }
  }

  return true;
}

console.log(isMirrorImage("[HOW]", "[WOH]")); 

//*

//* Codice scritto da ChatGpt

function isMirrorImageGPT(str1, str2) {
  if (str1.length !== str2.length) return false;

  const mirrors = {
    'W': 'W', 'T': 'T', 'Y': 'Y', 'U': 'U',
    'I': 'I', 'O': 'O', 'H': 'H', 'A': 'A',
    'X': 'X', 'V': 'V', 'M': 'M',
    'w': 'w', 'o': 'o', 'x': 'x', 'v': 'v',
    '0': '0', '8': '8', '=': '=', '+': '+',
    ':': ':', '|': '|', '-': '-', '_': '_',
    '*': '*', '^': '^', '!': '!', '.': '.',
    ' ': ' ',
    '[': ']', ']': '[',
    '{': '}', '}': '{',
    '<': '>', '>': '<',
    'b': 'd', 'd': 'b',
    'p': 'q', 'q': 'p',
    '(': ')', ')': '('
  };

  for (let i = 0; i < str1.length; i++) {
    const current = str1[i];
    const mirrored = str2[str2.length - 1 - i];

    if (!(current in mirrors)) return false;

    if (mirrors[current] !== mirrored) {
      return false;
    }
  }

  return true;
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto 
/*
8.5/10
*/
//todo

//* Pro e contro del mio codice

//* Pro
/*
- Ottima suddivisione tra caratteri simmetrici e coppie speculari
- Codice leggibile e ben organizzato
- Buon utilizzo di Set per ottimizzare i controlli
- Gestione corretta dell’inversione della stringa
- Hai pensato anche ai caratteri non validi
- Complessità efficiente O(n)
*/

//! Contro
/*
- Hai due strutture dati separate quando potevi unificarle in un unico oggetto
- Uso di "char1 in mirrorPairs" meno moderno rispetto a Object.hasOwn()
- Alcuni controlli possono essere semplificati per ridurre gli if annidati
- Manca qualche test aggiuntivo per casi limite
*/
//*
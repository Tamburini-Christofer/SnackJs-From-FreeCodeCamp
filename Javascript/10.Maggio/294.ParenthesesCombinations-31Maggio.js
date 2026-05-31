//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Dato un intero n, restituisci il numero di combinazioni valide di n coppie di parentesi.

Una combinazione valida è una stringa in cui ogni parentesi aperta ha una parentesi chiusa corrispondente e nessuna parentesi chiusa precede la parentesi aperta corrispondente.

Ad esempio, dato 2, ci sono 2 combinazioni valide: ()() e (()).
*/
//todo

//* Codice scritto da ChatGpt

function getCombinations(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }

  return dp[n];
}

//*
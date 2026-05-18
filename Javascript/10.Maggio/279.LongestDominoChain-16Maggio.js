//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Dato un array bidimensionale che rappresenta un insieme di tessere del domino, 
restituisci la catena valida più lunga.

Ogni tessera del domino è una coppia di numeri da 0 a 6, ad esempio [3, 2].

Una catena è valida quando il secondo numero di ogni tessera del domino 
corrisponde al primo numero della tessera successiva.

Il primo numero della prima tessera e il secondo numero dell'ultima 
non devono necessariamente corrispondere a nulla.

Ogni tessera del domino può essere capovolta, quindi [3, 2] può essere giocato come [2, 3].

Esiste sempre e solo una catena valida più lunga.

Esempio:
[[1, 2], [4, 5], [2, 3]]

Risultato:
[[1, 2], [2, 3]]
*/
//todo

//* Tempo di esecuzione:
/*
Non completato
*/
//*

//*Codice scritto senza utilizzo di ChatGpt

function getLongestChain(dominoes) {

  let result = [];

  for(let i = 0; i < dominoes.length; i++) {
    if(dominoes[i][0] === dominoes[i+1][0] || 
       dominoes[i][0] === dominoes[i+1][1] || 
       dominoes[i][1] === dominoes[i+1][0] || 
       dominoes[i][1] === dominoes[i+1][1]) {
      result.push(dominoes[i], dominoes[i+1]);
    }
  }

  return result;
}

console.log(getLongestChain([[1, 2], [4, 5], [2, 3]]));

//*

//* Codice scritto da ChatGpt

function getLongestChainGPT(dominoes) {

  let longest = [];

  function backtrack(chain, remaining) {

    if (chain.length > longest.length) {
      longest = [...chain];
    }

    for (let i = 0; i < remaining.length; i++) {

      const [a, b] = remaining[i];
      const last = chain[chain.length - 1];

      // Se la chain è vuota aggiungo qualsiasi domino
      if (chain.length === 0) {

        backtrack(
          [[a, b]],
          remaining.filter((_, index) => index !== i)
        );

        if (a !== b) {
          backtrack(
            [[b, a]],
            remaining.filter((_, index) => index !== i)
          );
        }

      } else {

        // Domino normale
        if (last[1] === a) {

          backtrack(
            [...chain, [a, b]],
            remaining.filter((_, index) => index !== i)
          );
        }

        // Domino girato
        if (last[1] === b) {

          backtrack(
            [...chain, [b, a]],
            remaining.filter((_, index) => index !== i)
          );
        }
      }
    }
  }

  backtrack([], []);

  return longest;
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto 
/*
4.5/10
*/
//todo

//* Pro e contro del mio codice

//* Pro
/*
- Hai capito la logica base del confronto tra tessere
- Hai considerato entrambe le facce del domino
- Codice semplice e leggibile
- Buon tentativo iniziale per un problema difficile
*/

//! Contro
/*
- Il codice controlla solo tessere adiacenti nell’array
- Non costruisce realmente una catena
- Non gestisce il capovolgimento del domino correttamente
- Può inserire duplicati nel risultato
- Va fuori indice con dominoes[i + 1]
- Non cerca la catena più lunga
- Manca completamente il backtracking necessario
- La chiamata iniziale del backtrack nel codice GPT dovrebbe essere:
  backtrack([], dominoes)
  e non backtrack([], [])
*/
//*
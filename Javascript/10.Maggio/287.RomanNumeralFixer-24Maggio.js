// //todo Consegna dell'esercizio
// Dato un insieme di numeri romani non correttamente formattati, restituire il valore nella notazione standard dei numeri romani.

// L'input utilizzerà solo la notazione additiva, quindi ogni simbolo aggiunge il proprio valore al totale. Per promemoria, ecco i simboli e i relativi valori:

// Simbolo Valore
// "I" 1
// "V" 5
// "X" 10
// "L" 50
// "C" 100
// "D" 500
// "M" 1000
// Durante la ricodifica, utilizzare il simbolo più grande possibile ad ogni passaggio, utilizzando coppie sottrattive ("IV", "IX", "XL", "XC", "CD", "CM") dove necessario.

//todo

//* Tempo di esecuzione:
// Qui si mette il tempo
//*

//* Codice scritto da ChatGpt
function fixNumerals(additiveRoman) {
    // 1. Mappatura dei singoli simboli per calcolare il totale additivo
    const symbolValues = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };

    let totalValue = 0;
    for (let char of additiveRoman) {
        const value = symbolValues[char];
        if (value) totalValue += value;
    }

    // 2. Matrice COMPLETA e RIGIDAMENTE ORDINATA di tutte le combinazioni standard
    const romanMatrix = [
        { symbol: 'M',  value: 1000 },
        { symbol: 'CM', value: 900 },  // Sottrattiva 900
        { symbol: 'D',  value: 500 },
        { symbol: 'CD', value: 400 },  // Sottrattiva 400
        { symbol: 'C',  value: 100 },
        { symbol: 'XC', value: 90 },   // Sottrattiva 90 (Mancava!)
        { symbol: 'L',  value: 50 },
        { symbol: 'XL', value: 40 },   // Sottrattiva 40
        { symbol: 'X',  value: 10 },
        { symbol: 'IX', value: 9 },    // Sottrattiva 9
        { symbol: 'V',  value: 5 },
        { symbol: 'IV', value: 4 },    // Sottrattiva 4
        { symbol: 'I',  value: 1 }
    ];

    let standardRoman = '';

    // 3. Algoritmo Greedy di ricostruzione
    for (let i = 0; i < romanMatrix.length; i++) {
        while (totalValue >= romanMatrix[i].value) {
            standardRoman += romanMatrix[i].symbol;
            totalValue -= romanMatrix[i].value;
        }
    }

    return standardRoman;
}

//*


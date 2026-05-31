// Dato un array di cinque stringhe che rappresentano carte da gioco, restituisci il nome della mano migliore.

// Ogni carta è rappresentata da una stringa di due caratteri: il valore seguito dal seme, ad esempio "2h".

// I valori, dal più basso al più alto, sono: "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K" e "A".
// I semi sono: "h", "d", "c" e "s".
// Gli assi ("A") possono essere usati come carta più alta o più bassa in una scala.

// Le mani, in ordine dalla peggiore alla migliore, sono:

// Nome Descrizione
// "Carta Alta" Nessuna coppia o superiore
// "Coppia" Due carte dello stesso valore
// "Doppia Coppia" Due carte dello stesso valore e due di un altro
// "Tris" Tre carte dello stesso valore
// "Scala" Cinque carte di valore consecutivo
// "Colore" Cinque carte dello stesso seme
// "Full House" Tre carte dello stesso valore e due di un altro
// "Poker" Quattro carte dello stesso valore
// "Scala Colore" Cinque carte di valore consecutivo dello stesso seme
// "Scala Reale" Asso, Re, Regina, Fante, Tris dello stesso seme
// Restituisci il nome della mano migliore.


// //* Tempo di esecuzione:
// Non completato
//*

function getBestHand(cards) {
    // 1. Mappatura dei ranghi in valori numerici ordinabili
    const rankValues = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
        'T': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };

    // Estraiamo i ranghi (convertiti in numeri e ordinati) e i semi
    const ranks = cards.map(c => rankValues[c[0]]).sort((a, b) => a - b);
    const suits = cards.map(c => c[1]);

    // 2. Frequenze di ranghi e semi
    const rankCounts = {};
    for (const r of ranks) {
        rankCounts[r] = (rankCounts[r] || 0) + 1;
    }
    
    const suitCounts = {};
    for (const s of suits) {
        suitCounts[s] = (suitCounts[s] || 0) + 1;
    }

    // Ordiniamo i conteggi in modo decrescente (es: [3, 2] per il Full)
    const counts = Object.values(rankCounts).sort((a, b) => b - a);
    const isFlush = Object.values(suitCounts).includes(5);

    // 3. Controllo della Scala (Straight)
    let isStraight = false;
    
    // Scala Standard: 5 carte uniche e la differenza tra massima e minima è 4
    const isStandardStraight = counts.length === 5 && (ranks[4] - ranks[0] === 4);
    
    // Scala con Asso Basso: [2, 3, 4, 5, 14] -> L'Asso (14) vale come 1
    const isAceLowStraight = counts.length === 5 && 
                             ranks.includes(14) && 
                             ranks.includes(2) && 
                             ranks.includes(3) && 
                             ranks.includes(4) && 
                             ranks.includes(5);

    if (isStandardStraight || isAceLowStraight) {
        isStraight = true;
    }

    // 4. Ritorno della combinazione migliore
    if (isFlush && isStraight) {
        // Se è scala e colore, ed è presente sia l'Asso (14) che il Re (13), è reale
        // Nota: Nella scala A-2-3-4-5 con colore, il Re NON c'è, quindi darà giustamente "Straight Flush"
        if (ranks.includes(14) && ranks.includes(13)) {
            return "Royal Flush";
        }
        return "Straight Flush";
    }

    if (counts[0] === 4) return "Four of a Kind";
    if (counts[0] === 3 && counts[1] === 2) return "Full House";
    if (isFlush) return "Flush";
    if (isStraight) return "Straight";
    if (counts[0] === 3) return "Three of a Kind";
    if (counts[0] === 2 && counts[1] === 2) return "Two Pair";
    if (counts[0] === 2) return "Pair";

    return "High Card";
}
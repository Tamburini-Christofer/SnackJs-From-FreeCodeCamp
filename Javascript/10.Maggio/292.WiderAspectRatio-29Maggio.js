//todo Consegna dell'esercizio
// Date due stringhe che rappresentano dimensioni di immagine diverse,
// restituire il rapporto d'aspetto dell'immagine con il rapporto
// larghezza/altezza maggiore.
//
// Le stringhe saranno nel formato "LxA", ad esempio "1920x1080".
//
// Il rapporto d'aspetto deve essere ridotto ai minimi termini.
// Esempio: "1920x1080" -> "16:9"
//
// Restituire una stringa nel formato "L:A", ad esempio "16:9".
//todo

//* Tempo di esecuzione:
// 30 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function getWiderAspectRatio(a, b) {
    const [wA, hA] = a.split("x").map(Number);
    const [wB, hB] = b.split("x").map(Number);

    let w = wA;
    let h = hA;

    if ((wB / hB) > (wA / hA)) {
        w = wB;
        h = hB;
    }

    let divisore = 1;

    for (let i = h; i > 0; i--) {
        if (w % i === 0 && h % i === 0) {
            divisore = i;
            break;
        }
    }

    return `${w / divisore}:${h / divisore}`;
}

// TEST
console.log(getWiderAspectRatio("1080x1350", "2048x1536")); // "4:3"

//*

//* Codice scritto da ChatGpt

function getWiderAspectRatio(a, b) {

    function gcd(x, y) {
        while (y !== 0) {
            [x, y] = [y, x % y];
        }
        return x;
    }

    function simplify(size) {
        const [w, h] = size.split("x").map(Number);
        const ratio = w / h;
        const divisore = gcd(w, h);

        return {
            ratio,
            result: `${w / divisore}:${h / divisore}`
        };
    }

    const first = simplify(a);
    const second = simplify(b);

    return first.ratio > second.ratio
        ? first.result
        : second.result;
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto
// 8/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Codice chiaro e leggibile
// - Buona gestione del parsing delle stringhe
// - Logica corretta per confrontare i rapporti
// - Hai gestito bene la riduzione ai minimi termini
// - Uso corretto di template literals
// - Variabili con nomi comprensibili

//! Contro
// - Il calcolo del divisore comune è meno efficiente:
//   cicli da h fino a 1 invece di usare l'algoritmo di Euclide
// - Alcune variabili potevano essere racchiuse in funzioni helper
//   per migliorare la riusabilità
// - Se le immagini fossero molto grandi, il ciclo potrebbe diventare lento
// - La logica di semplificazione è un po' troppo “manuale”

//*
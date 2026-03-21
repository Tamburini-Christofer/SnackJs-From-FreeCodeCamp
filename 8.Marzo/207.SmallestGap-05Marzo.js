//todo Consegna dell'esercizio
// Data una stringa, restituisci la sottostringa tra due caratteri uguali
// con il gap più piccolo (escludendo i caratteri stessi).
// Se più gap sono uguali, prendi il primo.
//todo

//* Tempo di esecuzione:
// 25 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function trovaSottostringaGapMinimo(testo) {
  let ultimaPosizione = new Map();
  let gapMinimo = Infinity;
  let risultato = "";
  let trovato = false;

  for (let i = 0; i < testo.length; i++) {
    const carattere = testo[i];

    if (ultimaPosizione.has(carattere)) {
      const indicePrecedente = ultimaPosizione.get(carattere);
      const gapCorrente = i - indicePrecedente - 1;

      if (!trovato || gapCorrente < gapMinimo) {
        gapMinimo = gapCorrente;
        risultato = testo.substring(indicePrecedente + 1, i);
        trovato = true;
      }
    }

    ultimaPosizione.set(carattere, i);
  }

  return risultato;
}
//*

//* Codice scritto da ChatGpt
function smallestGap(str) {
  let positions = {};
  let minGap = Infinity;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (!positions[char]) {
      positions[char] = [];
    }

    // controlla tutte le posizioni precedenti dello stesso char
    for (let prev of positions[char]) {
      let gap = i - prev - 1;

      if (gap < minGap) {
        minGap = gap;
        result = str.slice(prev + 1, i);
      }
    }

    positions[char].push(i);
  }

  return result;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 6.5 / 10
//todo

//* Pro e contro del mio codice

//* Pro
// - Ottimo uso di Map (scelta professionale)
// - Complessità O(n) → molto efficiente
// - Logica chiara e ben strutturata
// - Gestione corretta del gap minimo
// - Gestisci anche il caso "primo trovato" (richiesta importante)

//! Contro
// - Variabile "trovato" è inutile (puoi usare solo gapMinimo)
// - Codice leggermente più verboso del necessario
// - Naming migliorabile (ma già buono)
// - Puoi semplificare la condizione principale

//*
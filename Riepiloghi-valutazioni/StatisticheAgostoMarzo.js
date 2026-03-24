// Statistiche da Agosto a Marzo
// Basato sui dati presenti nei file snack da Agosto a Marzo.

const statistiche = {
  totaleEsercizi: 226,
  totaleNonCompletati: 100, // tempo non indicato o esercizio non completato
  tempoMedioPerSnack: {
    minuti: 9,
    secondi: 44,
    totaleSecondi: 583.52,
    campioneSnackConTempo: 126
  },
  valutazioneMediaComplessiva: {
    mediaSu10: 6.47,
    campioneSnackConVoto: 107
  }
};

console.log("=== Statistiche da Agosto a Marzo ===");
console.log(`Totale esercizi: ${statistiche.totaleEsercizi}`);
console.log(`Totale esercizi non completati: ${statistiche.totaleNonCompletati}`);
console.log(
  `Tempo medio impiegato per snack: ${statistiche.tempoMedioPerSnack.minuti} minuti e ${statistiche.tempoMedioPerSnack.secondi} secondi ` +
  `(su ${statistiche.tempoMedioPerSnack.campioneSnackConTempo} snack con tempo)`
);
console.log(
  `Valutazione media complessiva: ${statistiche.valutazioneMediaComplessiva.mediaSu10}/10 ` +
  `(su ${statistiche.valutazioneMediaComplessiva.campioneSnackConVoto} snack valutati)`
);

// module.exports = statistiche;

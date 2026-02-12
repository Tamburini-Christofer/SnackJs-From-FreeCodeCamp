// Statistiche da Agosto a Novembre
// Basato sui dati presenti in RiepiloghiSnackAgostoSettembre.js, RiepiloghiSnackOttobreNovembre.js e sui voti annotati nei file di Novembre.

const statistiche = {
  totaleEsercizi: 112,
  totaleNonCompletati: 47, // tempo: null
  tempoMedioPerSnack: {
    minuti: 11,
    secondi: 36,
    totaleSecondi: 695.54,
    campioneSnackConTempo: 65
  },
  valutazioneMediaNovembre: {
    mediaSu10: 5.95,
    campioneSnackConVoto: 29
  }
};

console.log("=== Statistiche da Agosto a Novembre ===");
console.log(`Totale esercizi non completati: ${statistiche.totaleNonCompletati}`);
console.log(
  `Tempo medio impiegato per snack: ${statistiche.tempoMedioPerSnack.minuti} minuti e ${statistiche.tempoMedioPerSnack.secondi} secondi ` +
  `(su ${statistiche.tempoMedioPerSnack.campioneSnackConTempo} snack con tempo)`
);
console.log(
  `Valutazione media Novembre: ${statistiche.valutazioneMediaNovembre.mediaSu10}/10 ` +
  `(su ${statistiche.valutazioneMediaNovembre.campioneSnackConVoto} snack valutati)`
);

// module.exports = statistiche;

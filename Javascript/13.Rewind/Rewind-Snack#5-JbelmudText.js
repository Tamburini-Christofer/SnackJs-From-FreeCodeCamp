//todo Consegna dell'esercizio
// Restituire una stringa dove ogni parola mantiene prima e ultima lettera,
// mentre le lettere interne sono ordinate alfabeticamente.
//todo

//* Tempo di esecuzione:
// 15 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function jbelmu(text) {

  return text.split(" ").map(w => (w.length === 1 ? "" : w[0]) + (w.split("").slice(1, w.length - 1)).sort((a,b) => a.localeCompare(b)).join("") + w[w.length - 1]).join(" ")

}
//*

//* Codice scritto da ChatGpt
function jbelmu(text) {
  return text
    .split(" ")
    .map(w => {
      if (w.length <= 2) return w;

      return (
        w[0] +
        w.slice(1, -1).split("").sort().join("") +
        w[w.length - 1]
      );
    })
    .join(" ");
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 7.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// ✔ Ottimo uso di map + split + join
// ✔ Logica generale corretta
// ✔ Buon uso di sort con localeCompare
// ✔ Soluzione compatta

//! Contro
// ❌ Bug sulle parole da 1 lettera
// ❌ Poco leggibile (troppo tutto in una riga)
// ❌ Slice + split ridondanti (si può semplificare)
// ❌ Difficile da debuggare

//*
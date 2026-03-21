//todo Consegna dell'esercizio
// Data la dimensione della finestra e un elemento in vw/vh,
// restituisci la dimensione dell’elemento in pixel ("width x height").
//todo

//* Tempo di esecuzione:
// 7 minuti e 22
//*

//*Codice scritto senza utilizzo di ChatGpt
function getElementSize(windowSize, elementVw, elementVh) {

  let vWconv = elementVw.replace("vw", "")
  let vHconv = elementVh.replace("vh", "")

  let width = (Number(windowSize.split("x")[0].trim()) * Number(vWconv) / 100)
  let heigth = (Number(windowSize.split("x")[1].trim()) * Number(vHconv) / 100)

  return `${width} x ${heigth}`;
}
//*

//* Codice scritto da ChatGpt
function getElementSize(windowSize, elementVw, elementVh) {
  const [w, h] = windowSize.split("x").map(s => Number(s.trim()));

  const vw = Number(elementVw.replace("vw", ""));
  const vh = Number(elementVh.replace("vh", ""));

  const width = w * vw / 100;
  const height = h * vh / 100;

  return `${width} x ${height}`;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 8 / 10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta al 100%
// - Tempo molto buono ⚡
// - Buon uso di split, trim e Number
// - Soluzione semplice e leggibile

//! Contro
// - Ripeti windowSize.split("x") due volte (inefficiente)
// - Typo: "heigth" → "height"
// - Variabili migliorabili (vWconv / vHconv poco chiari)
// - Leggermente meno pulito rispetto a destructuring

//*
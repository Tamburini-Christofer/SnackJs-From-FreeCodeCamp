//todo Dato un paragrafo, restituisci un array delle tre parole più frequenti

//! Le parole nel paragrafo saranno separate da spazi.
//! Ignora maiuscole/minuscole nel paragrafo specificato. Ad esempio, tratta Hello e hello come la stessa parola.
//! Ignora la punteggiatura nel paragrafo specificato. La punteggiatura è composta da virgole (,), punti (.) e punti esclamativi (!).
//! L'array restituito deve contenere solo parole minuscole.
//! L'array restituito deve essere in ordine decrescente, con la parola più frequente per prima.

//? Tempo di esecuzione:
//* Quasi superato. Un test falliva per via di una punteggiatura non considerata.

//?Codice scritto senza utilizzo di ChatGpt

function getWords(paragraph) {
  let initWord = paragraph.replace(/[.,!?;:()]/g, '').toLowerCase().split(" ").sort((a,b) => a.localeCompare(b))

  let wordFreq = []

  for(let i = 0; i < initWord.length; i++) {
    if(initWord[i] === initWord[i+1]) wordFreq.push(initWord[i])
  }

  let conteggio = wordFreq.reduce((acc,parola) => {
    acc[parola] = (acc[parola] || 0) + 1;
    return acc;
    }, {});

  let finalArr = Object.keys(conteggio).sort((a, b) => {
  if (conteggio[b] !== conteggio[a]) {
    return conteggio[b] - conteggio[a];
  }
  return a.localeCompare(b);
});

  return finalArr;
}

console.log(getWords("I like coding. I like testing. I love debugging!"))

//?Codice scritto da ChatGpt

function getWords(paragraph) {
  //! rimuovi punteggiatura, lowercase e split
  const words = paragraph
    .replace(/[.,!?]/g, '')
    .toLowerCase()
    .split(/\s+/);

  //! conta le occorrenze
  const freq = {};
  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }

  //! ordina per frequenza decrescente, poi alfabetico
  return Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a] || a.localeCompare(b))
    .slice(0, 3); // prendi le prime 3
}

console.log(getWords("I like coding. I like testing. I love debugging!"));
// ["i", "like", "coding"]

//* ✅ PRO

//* Hai capito il concetto di base: rimuovere punteggiatura, lowercase e contare frequenze

//* Buon uso di reduce per creare l’oggetto delle occorrenze

//* Ordinamento finale con localeCompare + frequenza è corretto

//! ❌ CONTRO

//! La logica di wordFreq non conta tutte le occorrenze, funziona solo per parole consecutive → test falliscono

//! .sort() prima di contare le frequenze è inutile e può confondere

//! Ciclo e array intermedi non ottimizzati → troppo complesso

//! Non gestisce spazi multipli in modo robusto

//? 🔧 Migliorie

//? Contare tutte le parole direttamente usando un oggetto o un Map

//?Ordinare dopo aver contato

//?Usare split(/\s+/) per gestire spazi multipli

//todo Considerazioni: 

//! N.B.
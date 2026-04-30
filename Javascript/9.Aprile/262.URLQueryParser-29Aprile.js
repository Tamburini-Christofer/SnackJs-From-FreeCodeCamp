// //todo Consegna dell'esercizio
// Dato un URL contenente una stringa di query, analizzare la stringa di query e ricavarne un oggetto (o dizionario) di coppie chiave-valore.

// La stringa di query inizia dopo il punto interrogativo ("?"),
// ogni parametro è separato da una "&",
// ogni coppia chiave/valore è separata da un "=".

// Esempio:
// "https://example.com/search?name=Alice&age=30"

// Output:
// {
//   "name": "Alice",
//   "age": "30"
// }
// todo

//* Tempo di esecuzione:
// 15 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function parseUrlQuery(url) {

  let valore = url.split("?")[1]
  let jsonString = '{"' + valore.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
  let jsonConvert = JSON.parse(jsonString)

  return jsonConvert;
}

console.log(parseUrlQuery("https://example.com/search?name=Alice&age=30"))
//*

//* Codice scritto da ChatGpt
function parseUrlQuery(url) {
  const query = url.split("?")[1];
  if (!query) return {};

  const params = query.split("&");
  const result = {};

  for (let param of params) {
    const [key, value] = param.split("=");
    result[key] = value;
  }

  return result;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
7.5 / 10
//todo

// //* Pro e contro del mio codice

// //* Pro
// - Soluzione molto compatta e veloce
// - Usa bene replace con regex
// - Output corretto nel caso base

// //! Contro
// - Poco leggibile (string manipulation “forzata”)
// - Rischioso: se la query è vuota o malformata → crash
// - JSON.parse può fallire facilmente
// - Non gestisce casi edge (es: valori mancanti, encoding URL)
// - Approccio meno “pulito” rispetto a parsing classico

// //*
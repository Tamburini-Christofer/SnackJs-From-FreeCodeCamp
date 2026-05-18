//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
/*
Dato un ordine di caffè, identifica tutti gli elementi del menu e restituisci l'ordine formattato.

Utilizza i seguenti elementi del menu e i relativi prezzi:

"cold brew" $4.50
"oat latte" $5.00
"cappuccino" $4.75
"espresso" $3.00
"sciroppo alla vaniglia" $0.75
"guarnizione al caramello" $0.60
"dose extra" $0.50
"latte d'avena" $0.75
"panna" $0.75

Restituisci una stringa con gli elementi corrispondenti uniti da " + ", 
seguiti da due punti e uno spazio (": "), e il prezzo totale.

Esempio:
"Vorrei un oat latte con sciroppo alla vaniglia e una dose extra, per favore."

Risultato:
"oat latte + sciroppo alla vaniglia + dose extra: $6.25"

Gli elementi devono apparire nell'ordine in cui compaiono nel menu 
e il prezzo totale deve sempre avere due cifre decimali.
*/
//todo

//* Tempo di esecuzione:
/*
15 minuti
*/
//*

//*Codice scritto senza utilizzo di ChatGpt

function formatCoffeeOrder(order) {

  let menu = {
    "cold brew": 4.50,
    "oat latte": 5.00,
    "cappuccino": 4.75,
    "espresso": 3.00,
    "vanilla syrup": 0.75,
    "caramel drizzle": 0.60,
    "extra shot": 0.50,
    "oat milk": 0.75,
    "cream": 0.75
  }

  let orderConsumer = Object.keys(menu).filter(key => order.includes(key));

  let totalOrder = orderConsumer.reduce((sum, item) => sum + menu[item], 0);

  return `${orderConsumer.join(" + ")}: \$${totalOrder.toFixed(2)}`
}

console.log(formatCoffeeOrder("Just an espresso please."))

//*

//* Codice scritto da ChatGpt

function formatCoffeeOrderGPT(order) {

  const menu = {
    "cold brew": 4.50,
    "oat latte": 5.00,
    "cappuccino": 4.75,
    "espresso": 3.00,
    "vanilla syrup": 0.75,
    "caramel drizzle": 0.60,
    "extra shot": 0.50,
    "oat milk": 0.75,
    "cream": 0.75
  };

  const lowerOrder = order.toLowerCase();

  const foundItems = Object.keys(menu).filter(item =>
    lowerOrder.includes(item)
  );

  const total = foundItems.reduce((sum, item) =>
    sum + menu[item], 0
  );

  return `${foundItems.join(" + ")}: $${total.toFixed(2)}`;
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt

//* Voto 
/*
8/10
*/
//todo

//* Pro e contro del mio codice

//* Pro
/*
- Soluzione semplice e leggibile
- Ottimo uso di Object.keys().filter()
- Hai mantenuto correttamente l’ordine del menu
- Uso corretto di reduce() per il totale
- toFixed(2) usato correttamente
- Complessità efficiente e lineare
*/

//! Contro
/*
- Non gestisci maiuscole/minuscole
- I nomi nel menu non corrispondono alla consegna italiana
- order.includes() può dare falsi positivi in casi particolari
- Variabile "orderConsumer" poco descrittiva
- Mancano controlli per ordini vuoti
*/
//*
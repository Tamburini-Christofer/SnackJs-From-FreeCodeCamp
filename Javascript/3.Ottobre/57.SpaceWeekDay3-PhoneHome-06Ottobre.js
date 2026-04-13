//todo Per il terzo giorno della Settimana Spaziale, ti verrà fornita una serie di numeri che rappresentano le distanze (in chilometri) tra te, i satelliti e il tuo pianeta natale lungo una rotta di comunicazione. Determina quanto tempo impiegherà un messaggio inviato attraverso la rotta per raggiungere il pianeta di destinazione utilizzando i seguenti vincoli:

//! Il primo valore della serie è la distanza dalla tua posizione al primo satellite.
//! Ogni valore successivo, tranne l'ultimo, è la distanza dal satellite successivo.
//! L'ultimo valore della serie è la distanza dal satellite precedente al tuo pianeta natale.
//! Il messaggio viaggia a 300.000 km/s.
//! Ogni satellite attraversato dal messaggio aggiunge un ritardo di trasmissione di 0,5 secondi.
//! Restituisci un numero arrotondato a 4 cifre decimali, con gli zeri finali rimossi.

//? Tempo di esecuzione:
//* Non compeltato 

//?Codice scritto senza utilizzo di ChatGpt

function sendMessage(route) {
  let velocity = 300000
  let divideRoute = route.map(distanza => velocity / distanza)
  let sumRoute = divideRoute.reduce(n => n + n).toFixed(2)

  let totSum = 0;
  let retard = 0;

  for(const number of route) {
    retard = retard + 0.5
  }

  return sumRoute + retard;

}

console.log(sendMessage([384400, 384400]))

//?Codice scritto da ChatGpt

function sendMessage(route) {
  const velocity = 300000;

  // tempo di percorrenza
  const travelTime = route.map(distance => distance / velocity).reduce((acc, val) => acc + val, 0); //! ho fatto un passaggio in più e ho sbagliato l'operazione

  // ritardo dei satelliti (tutti tranne partenza e pianeta)
  const delay = (route.length - 1) * 0.5; //! IL ragionamento c'era. Ci mancava cosi poco.

  const total = travelTime + delay;

  return Number(total.toFixed(4));
}

console.log(sendMessage([384400, 384400]));

//* ✅ Pro

//* Logica chiara e leggibile

//* Calcoli separati (tempo / ritardo)

//* Usa map + reduce in modo corretto

//* Output preciso e pulito (4 decimali)

//* Facile da mantenere

//! ❌ Contro

//! Due passaggi sull’array (map + reduce)

//! toFixed forza una conversione a stringa

//! Poco ottimizzata per array molto grandi

//? Versione Chat Gpt 

function sendMessage(route) {
  const velocity = 300000;
  let total = 0;

  for (let i = 0; i < route.length; i++) {
    total += route[i] / velocity;
  }

  total += (route.length - 1) * 0.5;

  return Number(total.toFixed(4));
}

console.log(sendMessage([384400, 384400]));


//todo Considerazioni: 

//* Questo snack è stato particolarmente difficile. La consegna non è chiarissima e ho faticato a capire come calcolare il tempo di viaggio.
//* Ci sono andato così vicino però e quindi avanti cosi ;)

//! N.B.
//todo Consegna dell'esercizio
// Dato un array di comandi del browser, restituisci un array con due valori:
// la cronologia come array di URL e l'indice della pagina corrente.
// I comandi sono URL, "Indietro" e "Avanti".
//todo

//* Tempo di esecuzione:
// non specificato
//*

//*Codice scritto senza utilizzo di ChatGpt
function getBrowserHistory(commands) {

  let result = [];
  let page = 0;
  
   for(let i = 0; i < commands.length; i++) {
     
     if(commands[i] !== "Back" && commands[i] !== "Forward") {
       result.push(commands[i]);

       if(i !== 0) page++
       }
     else if(commands[i] === "Back") if(result.length > 0) result.pop(); else result; if(page > 0) page--
     else if(commands[i] === "Forward") if(!page < commands.length) page++
   }

  return [result , page];
}
//*

//* Codice scritto da ChatGpt
function getBrowserHistory(commands) {
  let history = [];
  let currentIndex = -1;

  for (let cmd of commands) {
    if (cmd === "Indietro") {
      if (currentIndex > 0) currentIndex--;
    } 
    else if (cmd === "Avanti") {
      if (currentIndex < history.length - 1) currentIndex++;
    } 
    else {
      // nuovo URL: taglia avanti
      history = history.slice(0, currentIndex + 1);
      history.push(cmd);
      currentIndex++;
    }
  }

  return [history, currentIndex];
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Buon tentativo di usare ciclo for e gestione indice
// - Hai separato history (result) e pagina corrente (page)
// - Logica base intuita (push, back, forward)

//! Contro
// - Uso errato di "Back" e "Forward" (consegna usa "Indietro" e "Avanti")
// - La logica "Back" rimuove elementi (pop) ma non dovrebbe cancellare la cronologia
// - Mancata gestione corretta dell'indice corrente
// - Condizioni if/else senza parentesi → bug logici
// - "Forward" controllato male (!page < commands.length è sbagliato)
// - Non gestisci il caso di navigazione dopo "Back" (taglio della history)
// - Codice poco leggibile

//*
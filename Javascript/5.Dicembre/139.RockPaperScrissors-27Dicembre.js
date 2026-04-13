//todo Consegna dell'esercizio
// Date due stringhe, la prima che rappresenta il Giocatore 1 e la seconda che rappresenta il Giocatore 2, determinate il vincitore di una partita di Carta, Forbici e Sasso.
//todo
//! Requisiti da rispettare
// Le stringhe di input saranno sempre "Sasso", "Carta" o "Forbici".
// "Sasso" batte "Forbici".
// "Carta" batte "Sasso".
// "Forbici" batte "Carta".
// Restituisce:

// "Vince il Giocatore 1" se vince il Giocatore 1.
// "Vince il Giocatore 2" se vince il Giocatore 2.
// "Pareggio" se entrambi i giocatori scelgono la stessa opzione.
//!

//* Tempo di esecuzione:
//* 9 Minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function rockPaperScissors(player1, player2) {
  if(player1 === player2) return "Tie"

  switch(player1) {
    case "Rock":
    if(player2 === "Paper") return "Player 2 wins"
    else return "Player 1 wins"
    break;

    case "Paper": 
    if(player2 === "Scrissors") return "Player 2 wins"
    else return "Player 1 wins"
    break;

    case "Scissors":
    if(player2 === "Rock") return "Player 2 wins"
    else return "Player 1 wins"
    break;
  }
}

console.log(rockPaperScissors("Scissors", "Paper"))

//*

//* Codice scritto da ChatGpt

function rockPaperScissors(player1, player2) {
  if (player1 === player2) return "Tie";

  switch (player1) {
    case "Rock":
      return player2 === "Paper" ? "Player 2 wins" : "Player 1 wins";

    case "Paper":
      return player2 === "Scissors" ? "Player 2 wins" : "Player 1 wins";

    case "Scissors":
      return player2 === "Rock" ? "Player 2 wins" : "Player 1 wins";
  }
}

console.log(rockPaperScissors("Scissors", "Paper"));

//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 6/10
//*

//* Pro e contro del mio codice
//* Pro

// Gestisci subito il pareggio ✔️
// switch chiaro e leggibile
// Logica quasi completa

//! Contro

// Errore grave: "Scrissors" ❌ → mai vero
// break inutili dopo return
// Molto codice ripetuto
// Poco scalabile

//*
//! Altre considerazioni e nota bene
//todo Esecuzione degli esercizi
//? Creazione del file contenente "Numero snack"."Nome snack"-"Giorno del mese".js
//? Comprensione della consegna ed eventuale copia in google translate. 
//? 2 minuti massimo per analizzare la consegna e fare un pensiero prelimianre. 
//? Inizio timer impostato ad un massimale di 30 minuti. Oltre questa soglia, l'esercizio non sarà completato
//? Consultazione con ChatGpt per miglioramenti e sistemazioni
//? Push finale
//! Tre volte a settimana, riguardare lo snack e rivedere possibili soluzioni.
//! Una volta a settimana, riguardare l'andamento mensile e sistemare le lacune.
//! NON DEPRIMERSI 
//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
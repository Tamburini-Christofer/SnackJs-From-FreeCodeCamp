//todo Consegna dell'esercizio
// Data la data di nascita di una persona nel formato AAAA-MM-GG, restituisci l'età della persona al 27 novembre 2025.
//todo
//! Requisiti da rispettare
// Supponiamo che tutti i compleanni siano date valide precedenti al 27 novembre 2025.
// Restituisci l'età come numero intero.
// Assicurati di tenere conto se la persona ha già compiuto gli anni nel 2025.
//!

//* Tempo di esecuzione:
//* 11 Minuti e 26 secondi 
//*

//*Codice scritto senza utilizzo di ChatGpt
function calculateAge(birthday) {

  let birthdayDate = new Date(birthday).getFullYear();
  let goal = new Date("2025-11-27").getFullYear();

  let month = new Date(birthday).getMonth()
  let goalMonth = new Date("2025-11-27").getMonth();

  if(month > goalMonth) return goal - birthdayDate - 1
  else return goal - birthdayDate;

}

console.log(calculateAge("1994-12-14"))
//*

//* Codice scritto da ChatGpt

function calculateAge(birthday) {

  const birthDate = new Date(birthday)
  const targetDate = new Date("2025-11-27")

  let age = targetDate.getFullYear() - birthDate.getFullYear()

  const birthMonth = birthDate.getMonth()
  const birthDay = birthDate.getDate()

  const targetMonth = targetDate.getMonth()
  const targetDay = targetDate.getDate()

  if (
    birthMonth > targetMonth ||
    (birthMonth === targetMonth && birthDay > targetDay)
  ) {
    age--
  }

  return age
}


//*

//* Valutazione al codice proposta da ChatGpt
//* Voto 7/10
//*

//* Pro e contro del mio codice

//* ✅ Pro

// Uso corretto di Date
// Logica chiara
// Buona impostazione

//! ❌ Contro

// Non controlli il giorno
// Ripeti creazione Date
// Non gestisci tutti i casi

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
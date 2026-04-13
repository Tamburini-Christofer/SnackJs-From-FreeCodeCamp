//todo  Il 28 ottobre 1994, Netscape Navigator fu rilasciato, aiutando milioni di persone a esplorare il primo web.

//todo  Dato un array di comandi del browser eseguiti su Netscape Navigator, restituisci la pagina corrente in cui ti trovi dopo aver eseguito tutti i comandi utilizzando le seguenti regole:

//! Inizi sempre dalla pagina "Home", che non verrà inclusa nell'array dei comandi.
//! I comandi validi sono:
//! "Visita pagina": dove "Pagina" è il nome della pagina che stai visitando. Ad esempio, "Visita Informazioni" ti porta alla pagina "Informazioni". Quando visiti una nuova pagina, assicurati di eliminare qualsiasi cronologia precedente.
//! "Indietro": ti porta alla pagina precedente nella cronologia o rimane sulla pagina corrente se non ce n'è una.
//! "Avanti": ti porta avanti nella cronologia alla pagina da cui sei arrivato o rimane sulla pagina corrente se non ce n'è una.
//! Ad esempio, dato ["Visita Informazioni", "Indietro", "Avanti"], restituisci "Informazioni".

//? Tempo di esecuzione:
//* Non completato 

//?Codice scritto senza utilizzo di ChatGpt

function navigate(commands) {
  if(commands[0] === "Back" || commands[0] === "Foward") return "Home"

  let Home = 0
  let AboutUs = 1
  let Gallery = 2
  let Contact = 3
  let VisitUS = 4
  let ContactUs = 5
  let About = 6
  
  let position = 0

  for(let i = 0; i < commands.length; i++) {
    
    if("Visit About Us".includes(commands[i])) position = AboutUs
    if("Visit Gallery".includes(commands[i])) position = Gallery
    if("Visit Contact".includes(commands[i])) position = Contact
    if("Visit Visit Us".includes(commands[i])) position = VisitUS
    if("Visit Contact Us".includes(commands[i])) position = ContactUs
    if("Visit About".includes(commands[i])) position = About

    if("Back".includes(commands[i] && "Back".includes(commands[i] !== commands[commands.lengt]))) position--
    if("Fowards".includes(commands[i] && "Fowards".includes(commands[i] !== commands[commands.length]))) position++
  }

    if(position === Home)    return "Home"
    if(position === AboutUs) return "About Us"
    if(position === Contact) return "Contact"
    if(position === Gallery) return "Gallery"
    if(position === VisitUS) return "Visit Us"

}

console.log(navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]))

//?Codice scritto da ChatGpt

function navigate(commands) {
  let current = "Home";
  let history = [];
  let forward = [];

  for (let cmd of commands) {
    if (cmd.startsWith("Visit ")) {
      history.push(current);
      current = cmd.replace("Visit ", "");
      forward = [];
    }

    if (cmd === "Back" && history.length) {
      forward.push(current);
      current = history.pop();
    }

    if (cmd === "Forward" && forward.length) {
      history.push(current);
      current = forward.pop();
    }
  }

  return current;
}

//* ✅ Pro

//* Hai provato a modellare le pagine con stati (idea giusta)

//* Uso di for loop → base solida

//* Tentativo di gestire Back / Forward (buona intuizione)

//* Dimostra ragionamento, non copia-incolla

//! ❌ Contro (importanti)

//! Nessuna vera cronologia → Back/Forward non funzionano davvero

//! includes() usato male → match errati

//! Errori di battitura (Foward, lengt)

//! position++ / -- ≠ comportamento browser

//! Variabili inutili / mai restituite

//! Codice fragile e difficile da mantenere

//? Versione Chat Gpt 

//todo Considerazioni: 

//! N.B.
//todo  Data una stringa di codice HTML, rimuovi i tag e restituisci il contenuto in testo normale.

//! La stringa di input conterrà solo codice HTML valido.
//! I tag HTML possono essere annidati.
//! Rimuovi i tag e tutti gli attributi.
//! Ad esempio, '<a href="#">Clicca qui</a>' dovrebbe restituire "Clicca qui"

//? Tempo di esecuzione:
//* 2 Minuti 

//?Codice scritto senza utilizzo di ChatGpt

function stripTags(html) {

  let divide = html.split("<>").join("")
  
  return divide;
}

console.log( stripTags('<a href="#">Click here</a>'));

//! CASO RARISSIMO. IL CODICE E' RISOLTO? 
//! SECONDO CHATGPT NO, POICHE' MI DICE CHE IL RISULTATO IN CONSOLE SARA' 
<a href="#">Click here</a>

//! TUTTAVIA IL RISULTATO IN CONSOLE E' Click here
//! IL PROBLEMA E' CHE FREECODECAMP NON ME LO DA COMPLETATO. 
// Passed:1. stripTags('<a href="#">Click here</a>') should return "Click here".
// Passed:2. stripTags('<p class="center">Hello <b>World</b>!</p>') should return "Hello World!".
// Passed:3. stripTags('<img src="cat.jpg" alt="Cat">') should return an empty string ("").
// Passed:4. stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>') should return sectionsection.

//!ALLORA HO VERIFICATO IL RETURN DELLA FUNZIONA CON typeof E MI RISULTA STRING
//! CHAT MI HA DETTO CHE è UN CASO FORTUNATO, MA FUNZIONA CON TUTTI I TEST, PERO' FREECODECAMP NON ME LO DA PER BUONO.

//?Codice scritto da ChatGpt

function stripTags(html) {
  return html.replace(/<[^>]*>/g, "");
}

//! CHAT ELIMINA TUTTI I SIMBOLI POSSIBILI, TRANNE QUELLI CHE FANNO PARTE DEL TESTO
//! Cosa restituisce
//! 👉 Una stringa senza tag HTML, solo testo.
//! Solo testo, in formato stringa.

//!PERCHE' LA SUA FUNZIONA E LA MIA NO?

//! ❌ CONTRO del tuo codice

//! "<>" non esiste in HTML → non rimuove i tag

//! Funziona solo per caso nell’editor

//! Fallisce con tag nidificati

//! Non passa i test

//! Non è affidabile

//* ✅ PRO del tuo codice

//* Sintassi corretta

//* Idea giusta (rimuovere qualcosa)

//* Codice semplice e leggibile

//* Buon primo tentativo 💪

// ❌ Non rimuove davvero	✅ Rimuove tutti i tag
// ❌ Caso fortunato	✅ Sempre corretto
// ❌ Fallisce i test	✅ Passa i test

//todo Considerazioni: 

//! N.B.
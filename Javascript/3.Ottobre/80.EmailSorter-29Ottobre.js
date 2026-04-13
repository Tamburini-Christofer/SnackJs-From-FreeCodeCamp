//todo Il 29 ottobre 1971 fu inviata la prima email in assoluto, introducendo il formato nomeutente@dominio che utilizziamo ancora oggi. Oggi esistono miliardi di indirizzi email.

//todo In questa sfida, ti viene fornito un elenco di indirizzi email e devi ordinarli alfabeticamente partendo dal nome di dominio (la parte dopo la @) e poi dal nome utente (la parte prima della @).

//! L'ordinamento non deve fare distinzione tra maiuscole e minuscole.
//! Se più email hanno lo stesso dominio, ordinale in base al nome utente.
//! Restituisci un array degli indirizzi ordinati.
//! Gli indirizzi restituiti devono mantenere la distinzione tra maiuscole e minuscole originale.
//! Ad esempio, dato ["jill@mail.com", "john@example.com", "jane@example.com"], restituisci ["jane@example.com", "john@example.com", "jill@mail.com"].

//? Tempo di esecuzione:
//* Non completato

//?Codice scritto senza utilizzo di ChatGpt

function sort(emails) {

    emails.sort((a,b) => {
    let name = a.split('@')[1];
    let domain = b.split('@')[1];
  
    if (name < domain) return -1;
    if (name > domain) return 1;
    return 0;
    })

    return emails
}

console.log(sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]))

//?Codice scritto da ChatGpt

function sort(emails) {
  return [...emails].sort((a, b) => {
    const [userA, domainA] = a.split("@");
    const [userB, domainB] = b.split("@");

    const dA = domainA.toLowerCase();
    const dB = domainB.toLowerCase();

    if (dA < dB) return -1;
    if (dA > dB) return 1;

    const uA = userA.toLowerCase();
    const uB = userB.toLowerCase();

    if (uA < uB) return -1;
    if (uA > uB) return 1;

    return 0;
  });
}



//* ✅ Pro

//* Usi sort con comparator (approccio giusto)

//* Hai individuato correttamente il domain (@)

//* Codice semplice e leggibile

//* Funziona parzialmente per alcuni casi

//! ❌ Contro (critici)

//! Confronti domain di a con domain di b sbagliato
//! (name vs domain → naming e logica confusi)

//! Non gestisce lo username quando i domini sono uguali

//! Case-insensitive mancante

//! Mutua l’array originale (effetto collaterale)

//! Nomi variabili fuorvianti (name ≠ name)

//todo Considerazioni: 

//! N.B.
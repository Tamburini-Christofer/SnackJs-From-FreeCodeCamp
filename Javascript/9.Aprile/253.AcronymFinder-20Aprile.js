// //todo Consegna dell'esercizio
// Dato un acronimo, restituisci il nome completo dell'organizzazione a cui appartiene dall'elenco dato.
// Ogni lettera dell'acronimo deve corrispondere alla prima lettera di ogni parola.
// //todo

// //* Tempo di esecuzione:
// 1 minuto e 30 secondi
// //*

//*Codice scritto senza utilizzo di ChatGpt
function findOrg(acronym) {

  switch(acronym) {
    case "NASA":
    return "National Avocado Storage Authority";
    break;
    case "CIA":
    return "Cats Infiltration Agency";
    break;
    case "FBI":
    return "Fluffy Beanbag Inspectors";
    break;
    case "DOJ":
    return "Department Of Jelly";
    break;
    case "WHO":
    return "Wild Honey Organization";
    break;
    case "EPA":
    return "Eating Pancakes Administration";
    break;
  }

  return acronym;
}

console.log(findOrg("NASA"))
//*

//* Codice scritto da ChatGpt
function findOrg(acronym) {
  const orgs = [
    "Autorità Nazionale per lo Stoccaggio degli Avocado",
    "Agenzia per l'Infiltrazione dei Gatti",
    "Ispettori dei Pouf Soffici",
    "Dipartimento della Gelatina",
    "Organizzazione del Miele Selvatico",
    "Amministrazione Mangiare Pancake"
  ];

  for (let org of orgs) {
    const words = org.split(" ");
    const initials = words.map(w => w[0].toUpperCase()).join("");
    if (initials === acronym) return org;
  }

  return "Organizzazione non trovata";
}

console.log(findOrg("NASA"));
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 6/10
// //todo

// //* Pro e contro del mio codice

// //* Pro
// - Soluzione veloce e funzionante
// - Uso corretto dello switch
// - Facile da leggere

// //! Contro
// - Hardcoded (non usa la lista data)
// - Non rispetta davvero la logica richiesta (matching lettere)
// - Poco scalabile (aggiungere nuove org è scomodo)
// - Lingua diversa rispetto alla consegna

// //*
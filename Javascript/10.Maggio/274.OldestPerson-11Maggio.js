//Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, tempo e codice e vorrei 
// Che venisse compilato una volta che invio il tutto. 

//todo Consegna dell'esercizio
// Dato un array di oggetti, ciascuno con una proprietà "nome" e una proprietà "età", 
// restituisci un array contenente il nome della persona più anziana.
//
// Se più persone hanno la stessa età, restituisci tutti i loro nomi 
// nell'ordine in cui compaiono nell'input.
//todo

//* Tempo di esecuzione:
// 25 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt

function getOldest(people) {
  if (people.length === 0) return [];

  const maxAge = Math.max(...people.map(p => p.age));

  return people.filter((a) => a.age === maxAge).map((p) => p.name)

}

console.log(
  getOldest([
    { name: "Allison", age: 25 },
    { name: "Bill", age: 30 },
    { name: "Carol", age: 30 }
  ])
);

//*

//* Codice scritto da ChatGpt

function getOldest(people) {
  if (people.length === 0) return [];

  let maxAge = people[0].age;

  for (let i = 1; i < people.length; i++) {
    if (people[i].age > maxAge) {
      maxAge = people[i].age;
    }
  }

  const result = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age === maxAge) {
      result.push(people[i].name);
    }
  }

  return result;
}

//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 9/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Codice molto leggibile
// - Uso corretto di map, filter e Math.max
// - Gestione corretta array vuoto
// - Mantiene l'ordine originale dei nomi
// - Soluzione moderna e compatta

//! Contro
// - Fa più cicli sull'array (map + filter + map)
// - Usa lo spread operator con Math.max, che su array enormi può essere meno efficiente
// - Leggermente meno ottimizzato rispetto a una soluzione con un solo loop

//*
//todo Consegna dell'esercizio
// Dato un numero intero che rappresenta gli anni di matrimonio,
// restituisci il traguardo più recente raggiunto secondo la tabella:
//
// 1  → "Carta"
// 5  → "Legno"
// 10 → "Stagno"
// 25 → "Argento"
// 40 → "Rubino"
// 50 → "Oro"
// 60 → "Diamante"
// 70 → "Platino"
//
// Se gli anni sono inferiori a 1 → restituisci "Sposi novelli"
//todo

//* Tempo di esecuzione:
// 9 minuti e 27 secondi
//*

//*Codice scritto senza utilizzo di ChatGpt
function getMilestone(years) {
  
  if(years < 1) return "Sposi novelli"
  else if(years >= 1 && years <= 2) return "Carta"
  else if(years > 2 && years <= 8) return "Legno"
  else if(years > 8 && years <= 12) return "Stagno"
  else if(years > 12 && years <= 32) return "Argento"
  else if(years > 32 && years <= 45) return "Rubino"
  else if(years > 45 && years <= 55) return "Oro"
  else if(years > 55 && years <= 65) return "Diamante"
  else if(years > 65) return "Platino"

  return years;
}
//*

//* Codice scritto da ChatGpt
function getMilestone(years) {
  const milestones = [
    { year: 70, name: "Platino" },
    { year: 60, name: "Diamante" },
    { year: 50, name: "Oro" },
    { year: 40, name: "Rubino" },
    { year: 25, name: "Argento" },
    { year: 10, name: "Stagno" },
    { year: 5, name: "Legno" },
    { year: 1, name: "Carta" },
  ]

  for (let m of milestones) {
    if (years >= m.year) return m.name
  }

  return "Sposi novelli"
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 7/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica chiara ✔
// - Facile da leggere ✔
// - Copre tutti i casi ✔

//! Contro
// - Range non corretti rispetto alla consegna ❌
// - Poco scalabile (tanti if) ❌
// - Codice più lungo del necessario ❌
// - Return finale inutile ❌
//*
//todo Consegna dell'esercizio
// Dato un orario, determinare lunghezza e direzione dell'ombra.
// Alba 6:00, tramonto 18:00, mezzogiorno 12:00.
// Lunghezza = (ore di distanza da mezzogiorno)^3
//todo

//* Tempo di esecuzione:
// 22 minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function getShadow(time) {

  let hours = Number(time.split(":")[0])
  let minutes = Number(time.split(":")[1])

  if(hours >= 6 && hours < 12 && minutes === 0) return `${(12 - hours) ** 3}ft west`
  else if((hours >= 6 && hours < 12 && minutes === 30)) return `${(12 - hours - 0.5) ** 3}ft west`
  else if(hours > 12 && hours < 18 && minutes === 0) return `${Math.abs((12 - hours)) ** 3}ft east`
  else if(hours > 12 && hours < 18 && minutes === 30) return `${Math.abs((12 - hours - 0.5)) ** 3}ft east`
  else return "No shadow"
}

console.log(getShadow("07:30"))
//*

//* Codice scritto da ChatGpt
function getShadow(time) {
  const [h, m] = time.split(":").map(Number)

  // Nessuna ombra fuori range o a mezzogiorno
  if (h < 6 || h >= 18 || (h === 12 && m === 0)) {
    return "No shadow"
  }

  // distanza da mezzogiorno
  const diff = Math.abs(12 - (h + m / 60))

  // lunghezza ombra
  const length = diff ** 3

  // direzione (opposta al sole)
  const direction = h < 12 ? "west" : "east"

  return `${length}ft ${direction}`
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 7.5/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Logica corretta nei casi principali
// - Hai gestito bene i 30 minuti (non banale)
// - Codice leggibile
// - Buona comprensione del problema

//! Contro
// - Troppi if → codice ripetitivo
// - Gestione separata di :00 e :30 (si può unificare)
// - Uso inutile di Math.abs in alcuni punti
// - Non gestisci bene mezzogiorno (12:00) esplicitamente
// - Output non coerente con il testo (usa "ft" e "No shadow" invece di italiano)

//*
    //todo Consegna dell'esercizio
// Data una stringa, determina se si tratta di un valore di colore CSS hsl() valido.

// Un valore HSL valido deve essere nel formato "hsl(h, s%, l%)", dove:

// h (tonalità) deve essere un numero compreso tra 0 e 360 ​​(inclusi).

// s (saturazione) deve essere una percentuale compresa tra 0% e 100%.
// l (luminosità) deve essere una percentuale compresa tra 0% e 100%.
// Gli spazi sono consentiti solo:

// Dopo la parentesi aperta
// Prima e/o dopo le virgole
// Prima e/o dopo la parentesi chiusa
// Facoltativamente, il valore può terminare con un punto e virgola (";").

// Ad esempio, "hsl(240, 50%, 50%)" è un valore HSL valido.
//todo

//* Tempo di esecuzione:
// 20 Minuti
//*

//*Codice scritto senza utilizzo di ChatGpt
function isValidHSL(hsl) {

//   if(!/^hsl(/.test(hsl)) return false
  
  let hslArr = hsl.replace("hsl", "").replaceAll("/[();]/g", "").replaceAll(" ", "").split(",")

  if(!hslArr[1].includes("%") || !hslArr[2].includes("%")) return false

  let arrConverted = [Number(hslArr[0]), Number(hslArr[1].replace("%", "")), Number(hslArr[2].replace("%", "")) ]

  if(arrConverted[0] <= 360 && 
     arrConverted[1] <= 100 &&
     arrConverted[2] <= 100) return true
  else return false

}
//*

//* Codice scritto da ChatGpt
function isValidHSL(hsl) {

  if (!hsl.startsWith("hsl(")) return false;

  let cleaned = hsl.slice(4).replace(")", "").replace(";", "").trim();

  let parts = cleaned.split(",");

  if (parts.length !== 3) return false;

  let h = parts[0].trim();
  let s = parts[1].trim();
  let l = parts[2].trim();

  if (!s.endsWith("%") || !l.endsWith("%")) return false;

  let hue = Number(h);
  let sat = Number(s.replace("%", ""));
  let lig = Number(l.replace("%", ""));

  if (isNaN(hue) || isNaN(sat) || isNaN(lig)) return false;

  if (hue < 0 || hue > 360) return false;
  if (sat < 0 || sat > 100) return false;
  if (lig < 0 || lig > 100) return false;

  return true;
}
//*

//todo Valutazione al MIO codice proposta da ChatGpt
//* Voto 
// 6/10
//todo

//* Pro e contro del mio codice

//* Pro
// - Buona idea di dividere i valori con split
// - Uso corretto di Number per conversione
// - Logica base presente

//! Contro
// - Regex iniziale errata (/^hsl(/ senza escape)
// - replaceAll con stringa invece che regex → non funziona
// - Non controlla valori negativi
// - Non gestisce NaN
// - Non verifica struttura completa correttamente
// - Non gestisce bene spazi e ";" finale

//*
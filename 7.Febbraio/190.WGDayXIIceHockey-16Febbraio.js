//todo Consegna dell'esercizio
// Dato un array di 6 squadre di hockey su ghiaccio e i loro record dopo le partite del girone all'italiana, determina gli accoppiamenti per il turno di semifinale.
//todo

//! Requisiti da rispettare
// Ogni elemento dell'array conterrà una squadra e il suo record nel formato "SQUADRA: V-VOT-SOT-S". Dove:
// "V" indica il numero di vittorie nei tempi regolamentari, ciascuna del valore di 3 punti
// "VOT" indica il numero di vittorie ai tempi supplementari, ciascuna del valore di 2 punti
// "SOT" indica il numero di sconfitte ai tempi supplementari, ciascuna del valore di 1 punto
// "S" indica il numero di sconfitte, ciascuna del valore di 0 punti
// Ad esempio, "FIN: 2-2-1-0" avrebbe 11 punti dopo aver sommato i loro record.

// Calcola il punteggio totale di ciascuna squadra e restituisci "Le partite di semifinale saranno (1ª) contro (4ª) e (2ª) contro (3ª).". Ad esempio, "Le partite di semifinale saranno FIN contro SWE e CAN contro USA."
//!

//* Tempo di esecuzione:
//* Non completato
//*

//*Codice scritto senza utilizzo di ChatGpt
function getSemifinalMatchups(teams) {

  let moltiplicatore = 3
  let result = []

  for(let i = 0; i < teams.length; i++) {
    if(/\d/.test(teams[i]))  {
      let converted = Number(teams[i]) * moltiplicatore
      result.push(String(converted));
      moltiplicatore--;
      if(moltiplicatore === 0) moltiplicatore = 3
      }
    else result.push(teams[i])
  }

  return result;
}

console.log(getSemifinalMatchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"]))
//*

//* Codice scritto da ChatGpt

//*

//todo Valutazione al codice proposta da ChatGpt
//* Voto 3/10
//todo

//* Pro e contro del mio codice

//* Pro 

// uso di regex per trovare numeri
// uso corretto di push
// buona gestione dell'array di output

//! Contro

// non fai parsing della stringa
// non calcoli i punti corretti
// nessun ordinamento
// nessuna logica di semifinali
// moltiplicatore non richiesto dalla consegna

//*

//prompt completo Chat 
// Da ora in poi farò degli snack. Ti darà una consegna e tu dovrai analizzare la consegna, analizzare il mio codice, darmi una valutazione da 1 a 10 e dirmi i pro e i contro, poi il codice corretto
'''
Consegna dell'esercizio
Dato un array bidimensionale di vincitori di medaglie, restituire il numero di medaglie vinte da ciascun paese in formato CSV.

Requisiti da rispettare
Nell'array fornito, ogni sotto-array rappresenta un singolo evento: [vincitore_oro, vincitore_argento, vincitore_bronzo]

La stringa CSV restituita deve avere il seguente formato, con la prima riga contenente le intestazioni:

Paese,Oro,Argento,Bronzo,Totale
nome_paese,conteggio_oro,conteggio_argento,conteggio_bronzo,totale_medaglie
Separare le righe con il carattere di nuova riga ("\n").
Non inserire spazi intorno alle virgole o alla fine delle righe.
Ordinare la stringa CSV restituita in base al numero di medaglie d'oro, dal piÃ¹ alto al piÃ¹ basso. Se due paesi hanno lo stesso numero di medaglie d'oro, ordinarli alfabeticamente.

Separare le righe con il carattere di nuova riga ("\n"). Ad esempio, dato:

[
[ ["USA", "CAN", "NOR"],
[ ["NOR", "USA", "CAN"],
[ ["USA", "NOR", "SWE"]
]
Restituisci:

"Paese,Oro,Argento,Bronzo,Totale\nUSA,2,1,0,3\nNOR,1,1,1,3\nCAN,0,1,1,2\nSWE,0,0,1,1"
Che una volta stampato appare cosÃ¬:

Paese,Oro,Argento,Bronzo,Totale
USA,2,1,0,3
NOR,1,1,1,3
CAN,0,1,1,2
SWE,0,0,1,1
'''


'''
Consegna dell'esercizio
Data una matrice 5x5 che rappresenta la "casa" al termine di un round di curling, determina quale squadra segna e quanti punti ottiene.

Requisiti da rispettare
La struttura della matrice:

La cella centrale (indice [2, 2]) Ã¨ il "pulsante".

Le 8 celle che circondano direttamente il pulsante rappresentano l'anello 1.
E le 16 celle sul bordo esterno della casa rappresentano l'anello 2.
Nella matrice data:

"" rappresenta uno spazio vuoto.

"R" rappresenta uno spazio con una pietra rossa.

"Y" rappresenta uno spazio con una pietra gialla.

Regole di punteggio:

Solo una squadra puÃ² segnare per round.
La squadra con la pietra piÃ¹ vicina al pulsante segna.
La squadra che segna guadagna 1 punto per ogni sua pietra che Ã¨ piÃ¹ vicina al pulsante rispetto alla pietra piÃ¹ vicina dell'avversario.
PiÃ¹ basso Ã¨ il numero dell'anello, piÃ¹ vicina Ã¨ la pietra al centro.
Se le pietre piÃ¹ vicine di entrambe le squadre sono alla stessa distanza dal centro, nessuna squadra segna.

Valore di ritorno:

Una stringa nel formato "squadra: numero_di_punti". Ad esempio: "R: 2".

oppure "Nessun punto assegnato" se nessuna delle due squadre ha segnato punti.
Ad esempio, dato:

[
[ [".", ".", "R", ".", "."],
[ [".", "R", ".", ".", "."],
[[Y", ".", ".", ".", "."],
[ [".", "R", ".", ".", "."],
[ [".", ".", ".", ".", "."]
]
Restituisci "R: 2". Le due pietre rosse nell'anello 1 sono a pari merito per la distanza piÃ¹ ravvicinata e sono le uniche due pietre piÃ¹ vicine di quelle gialle.
'''


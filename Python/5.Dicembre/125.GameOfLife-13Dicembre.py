'''
Consegna dell'esercizio
Data una matrice (array di array) che rappresenta lo stato attuale nel Gioco della Vita di Conway, restituisci lo stato successivo della matrice usando queste regole:

Requisiti da rispettare
Ogni cella Ã¨ 1 (viva) o 0 (morta).
I vicini di una cella sono fino a otto celle circostanti (verticalmente, orizzontalmente e diagonalmente).
Le celle sui bordi hanno meno di otto vicini.
Regole per l'aggiornamento di ogni cella:

Qualsiasi cella viva con meno di due vicini vivi muore (sottopopolazione).
Qualsiasi cella viva con due o tre vicini vivi sopravvive.
Qualsiasi cella viva con piÃ¹ di tre vicini vivi muore (sovrapopolazione).
Qualsiasi cella morta con esattamente tre vicini vivi diventa viva (riproduzione).
Ad esempio, dato:

[
[0, 1, 0],
[0, 1, 1],
[1, 1, 0]
]
ritorna:

[
[0, 1, 1],
[0, 0, 1],
[1, 1, 1]
]
Ogni cella si aggiorna in base al numero di vicini attivi. Ad esempio, [0][0] rimane inattivo (2 vicini attivi), [0][1] rimane attivo (2 vicini attivi), [0][2] muore (3 vicini attivi) e cosÃ¬ via.
'''


'''
Consegna dell'esercizio
Data una matrice 4x2 (matrice di matrici) che rappresenta la disposizione dei posti a sedere per un pasto, determina quanti posti puÃ² occupare una persona mancina.

Requisiti da rispettare
Una persona mancina non puÃ² sedersi dove si siederebbe una persona destrorsa, seduta immediatamente alla sua sinistra.
Nella matrice data:
Una "R" Ã¨ un posto occupato da una persona destrorsa.
Una "L" Ã¨ un posto occupato da una persona mancina.
Una "U" Ã¨ un posto libero.
Sono disponibili solo posti liberi.
I posti nella fila superiore sono rivolti verso il basso, mentre quelli nella fila inferiore sono rivolti verso l'alto (come un tavolo), quindi sinistra e destra sono relative all'orientamento del posto.
I posti d'angolo hanno solo un posto accanto. Ad esempio, nella matrice data:

[
["U", "R", "U", "L"],
["U", "R", "R", "R"]
]
Il posto in alto a sinistra non Ã¨ utilizzabile perchÃ© c'Ã¨ una persona destrorsa alla sua sinistra. Gli altri due posti liberi sono utilizzabili perchÃ© non c'Ã¨ una persona destrorsa alla sua sinistra.
'''


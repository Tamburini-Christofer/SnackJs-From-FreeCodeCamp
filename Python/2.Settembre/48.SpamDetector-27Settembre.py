'''
Dato un numero di telefono nel formato "+A (BBB) â€‹â€‹CCC-DDDD", dove ogni lettera rappresenta una cifra, come segue:

A rappresenta il prefisso internazionale e puÃ² essere composto da un numero qualsiasi di cifre.
BBB rappresenta il prefisso locale e sarÃ  sempre composto da tre cifre.
CCC e DDDD rappresentano il numero locale e saranno sempre rispettivamente di tre e quattro cifre.
Determina se si tratta di un numero spam in base ai seguenti criteri:

Il prefisso internazionale Ã¨ lungo piÃ¹ di 2 cifre o non inizia con uno zero (0).
Il prefisso locale Ã¨ maggiore di 900 o minore di 200.
La somma delle prime tre cifre del numero locale compare tra le ultime quattro cifre del numero locale.
Il numero presenta la stessa cifra quattro o piÃ¹ volte di seguito (ignorando i caratteri di formattazione).
'''


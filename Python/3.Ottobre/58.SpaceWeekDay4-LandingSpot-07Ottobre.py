'''
Nel quarto giorno della Settimana Spaziale, ti verrÃ  fornita una matrice di numeri (un array di array) che rappresenta i potenziali punti di atterraggio per il tuo rover. Trova il punto di atterraggio piÃ¹ sicuro in base alle seguenti regole:

Ogni punto nella matrice conterrÃ  un numero da 0 a 9, inclusi.
Qualsiasi 0 rappresenta un potenziale punto di atterraggio.
Qualsiasi numero diverso da 0 Ã¨ troppo pericoloso per l'atterraggio. PiÃ¹ alto Ã¨ il numero, piÃ¹ pericoloso Ã¨.
Il punto piÃ¹ sicuro Ã¨ definito come la cella 0 le cui celle circostanti (fino a 4 vicine, ignorando le diagonali) presentano il pericolo totale piÃ¹ basso.
Ignora i vicini fuori dai limiti (angoli e bordi hanno semplicemente meno vicini).
Restituisci gli indici del punto di atterraggio piÃ¹ sicuro. Ci sarÃ  sempre un solo punto piÃ¹ sicuro.
Ad esempio, dato:

[
[1, 0],
[2, 0]
]

Restituisci [0, 1], gli indici per lo 0 nel primo array.
'''


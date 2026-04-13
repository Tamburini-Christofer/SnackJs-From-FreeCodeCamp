'''
Dato un array 2D che rappresenta una mappa del fondale oceanico che include un tesoro nascosto e un array con le coordinate ([riga, colonna]) per la prossima immersione della tua ricerca del tesoro, restituisci "Vuoto", "Trovato" o "Recuperato" utilizzando le seguenti regole:

L'array 2D specificato conterrÃ  esattamente un tesoro non recuperato, che occuperÃ  piÃ¹ celle.

Ogni cella dell'array 2D conterrÃ  uno dei seguenti valori:

"-": Nessun tesoro.
"O": Una parte del tesoro che non Ã¨ stata trovata.
"X": Una parte del tesoro che Ã¨ giÃ  stata trovata.
Se il luogo dell'immersione non contiene tesori, restituisci "Vuoto".

Se il luogo dell'immersione trova un tesoro, ma almeno un'altra parte del tesoro rimane non trovata, restituisci "Trovato".

Se il luogo dell'immersione trova l'ultima parte non trovata del tesoro, restituisci "Recuperato".

Ad esempio, dati:

[
[ "-", "X"],
[ "-", "X"],
[ "-", "O"]
]
E [2, 1] per le coordinate del luogo dell'immersione, restituisci "Recuperato" perchÃ© l'immersione ha trovato l'ultima parte non trovata del tesoro.
'''


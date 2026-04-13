'''
Consegna dell'esercizio
Il 2 novembre 1988 fu rilasciato il primo worm di Internet di grandi dimensioni, che infettÃ² circa il 10% dei computer connessi a Internet dopo solo un giorno.
In questa sfida, ti viene fornito il numero di giorni trascorsi dal rilascio di un worm e devi determinare quanti computer sono infetti utilizzando le seguenti regole:

Requisiti da rispettare
Il giorno 0, il primo computer Ã¨ infetto.
Ogni giorno successivo, il numero di computer infetti raddoppia.
Ogni 3 giorni, viene applicata una patch dopo la diffusione del virus, che riduce il numero di computer infetti del 20%. Arrotonda il numero di computer patchati al numero intero piÃ¹ vicino.
Ad esempio, il giorno:

Giorno 0: 1 computer in totale Ã¨ infetto.
Giorno 1: 2 computer in totale sono infetti.
Giorno 2: 4 computer in totale sono infetti.
Giorno 3: 8 computer in totale sono infetti. Quindi, applica la patch: 8 infetti * 20% = 1,6 computer patchati. Arrotonda 1,6 a 2. 8 computer infetti - 2 patchati = 6 computer totali infetti dopo il giorno 3.
Restituisci il numero totale di computer infetti dopo il numero di giorni specificato.
'''


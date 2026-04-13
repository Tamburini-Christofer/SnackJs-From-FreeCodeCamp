'''
Consegna dell'esercizio
Dati due stringhe che rappresentano l'ora in cui hai parcheggiato la tua auto e l'ora in cui l'hai ritirata, calcola la tariffa di parcheggio.
Le stringhe fornite saranno nel formato "HH:MM" utilizzando l'orologio a 24 ore. Quindi "14:00" corrisponde alle 14:00.
La prima stringa indicherÃ  l'ora in cui hai parcheggiato l'auto e la seconda l'ora in cui l'hai ritirata.
Se l'orario di ritiro Ã¨ precedente all'orario di ingresso, significa che il parcheggio si Ã¨ protratto oltre la mezzanotte del giorno successivo.
Regole tariffarie:
- Ogni ora di parcheggio costa $3.
- Le frazioni di ora vengono arrotondate per eccesso all'ora intera successiva.
- Se il parcheggio si protrae per tutta la notte (oltre la mezzanotte), viene applicato un supplemento di $10 per il parcheggio notturno.
- Ãˆ previsto un supplemento minimo di $5 (applicato solo se il totale sarebbe inferiore a $5).
Restituisci il costo totale nel formato "$costo", ad esempio "$5".
'''


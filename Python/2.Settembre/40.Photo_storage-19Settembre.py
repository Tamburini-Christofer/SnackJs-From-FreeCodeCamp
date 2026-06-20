# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dati la dimensione di una foto in megabyte (MB) e la capacità
# del disco rigido in gigabyte (GB), restituisci il numero di foto
# che il disco rigido può memorizzare.
#
# Vincoli:
# - 1 gigabyte = 1000 megabyte.
# - Restituire solo il numero intero di foto memorizzabili.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import math

def number_of_photos(photo_size_mb, drive_size_gb):
    mb_converted = 1000

    return math.floor((mb_converted / photo_size_mb) * drive_size_gb)

print(number_of_photos(3.5, 750))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def number_of_photos(photo_size_mb, drive_size_gb):
    total_space_mb = drive_size_gb * 1000

    return int(total_space_mb // photo_size_mb)

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La logica è corretta.
# - Converte correttamente i GB in MB.
# - Utilizza math.floor() per ottenere un numero intero di foto.
# - Soluzione compatta e facile da seguire.
# - Rispetta completamente la consegna.

# //! Contro
# - Il nome "mb_converted" è poco descrittivo.
# - Sarebbe più chiaro calcolare prima lo spazio totale disponibile.
# - math.floor() non è strettamente necessario.
# - La formula può risultare meno immediata da leggere rispetto
#   a una divisione diretta dello spazio totale.

# =========================================================
# //* Consigli
# =========================================================

# - L'esercizio è risolto correttamente.
# - Un approccio più leggibile è:
#
#       total_space_mb = drive_size_gb * 1000
#       photos = total_space_mb // photo_size_mb
#
# - In generale cerca di assegnare alle variabili un significato
#   legato ai dati che contengono.
# - Hai scelto correttamente di arrotondare per difetto, come
#   richiesto dalla consegna.
# - La complessità è O(1), quindi è già ottimale.

# Valutazione: 9/10
#
# Soluzione corretta e pulita.
# Migliorando leggermente i nomi delle variabili e la leggibilità
# del calcolo sarebbe da 10/10.
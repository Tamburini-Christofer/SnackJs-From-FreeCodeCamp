# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

"""
Vi ricordate gli iPod? Il primo modello è uscito esattamente 24 anni fa,
il 23 ottobre 2001.

Dato un array di oggetti "Song" che rappresentano la vostra playlist
dell'iPod, restituite un array con i titoli dei due brani più riprodotti,
con il brano più riprodotto in cima all'elenco.

Ogni oggetto avrà una proprietà "title" (stringa)
e una proprietà "plays" (intero).
"""

# =========================================================
# //* Codice scritto senza utilizzo di ChatGPT
# =========================================================

def favorite_songs(playlist):
    sort_playlist = sorted(playlist, key=lambda p: p["plays"], reverse=True)

    return [song["title"] for song in sort_playlist[:2]]

print(favorite_songs([
    {"title": "Sync or Swim", "plays": 3},
    {"title": "Byte Me", "plays": 1},
    {"title": "Earbud Blues", "plays": 2}
]))

# =========================================================
# //* Codice scritto da ChatGPT (versione migliorata)
# =========================================================

def favorite_songs(playlist):
    playlist = sorted(playlist, key=lambda song: song["plays"], reverse=True)
    return [song["title"] for song in playlist[:2]]

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta.
# - Uso appropriato di sorted() con key.
# - reverse=True permette di ordinare dal più riprodotto al meno riprodotto.
# - List comprehension pulita e leggibile.
# - Slice [:2] semplice ed efficace.
# - Complessivamente codice Pythonico.

# //! Contro
# - Il nome "sort_playlist" può essere leggermente migliorato: "sorted_playlist"
#   indica più chiaramente che è una nuova lista ordinata.
# - Il punto e virgola finale dopo sorted(...) è inutile in Python.

# =========================================================
# //* Consigli
# =========================================================

# - Evita di mettere ";" a fine riga: non serve in Python.
# - Dai nomi leggermente più descrittivi alle variabili (es. sorted_playlist).
# - Per il resto la soluzione è già molto buona e difficilmente migliorabile
#   senza peggiorarne la semplicità.

# =========================================================
# ⭐ Valutazione
# =========================================================

# Correttezza:      10/10
# Leggibilità:      9.5/10
# Efficienza:       9/10
# Stile Python:     9.5/10
#
# Voto complessivo: 9.5/10
#
# Ottima soluzione. È esattamente l'approccio che userebbe la maggior parte
# degli sviluppatori Python. L'unico dettaglio migliorabile riguarda i nomi
# delle variabili e il punto e virgola finale.
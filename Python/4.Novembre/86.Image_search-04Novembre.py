# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Google Images was launched on November 4, 2001, allowing users
# to search for images using search terms.
#
# Given an array of image names and a search term, return an array
# containing all image names that include the search term.
#
# Matching should be case-insensitive.
#
# Return the images in the same order as they appear in the input array.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def image_search(images, term):
    term_lower = term.lower()

    return list(filter(lambda i: term_lower in i.lower(), images))


print(image_search(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def image_search(images, term):
    term = term.lower()
    return [image for image in images if term in image.lower()]


print(image_search(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La soluzione è corretta e rispetta tutti i requisiti della consegna.
# - La ricerca è case-insensitive grazie all'utilizzo di lower().
# - L'ordine delle immagini viene mantenuto.
# - Hai evitato di chiamare lower() sul termine ad ogni iterazione.

# //! Contro
# - L'utilizzo di filter() con una lambda è corretto, ma in Python una list comprehension
#   è generalmente considerata più leggibile.
# - Il nome della variabile "i" potrebbe essere più descrittivo (ad esempio "image").

# =========================================================
# //* Consigli
# =========================================================

# - Continua a salvare il termine in minuscolo prima del ciclo: è una piccola
#   ottimizzazione che evita elaborazioni ripetute.
# - Quando devi filtrare una lista, valuta l'utilizzo delle list comprehension:
#   sono uno degli strumenti più usati e apprezzati in Python.
# - Scegli nomi di variabili significativi per migliorare la leggibilità del codice.

# Valutazione:
# Correttezza:     10/10
# Leggibilità:      9.5/10
# Ottimizzazione:  10/10
# Voto finale:      9.8/10

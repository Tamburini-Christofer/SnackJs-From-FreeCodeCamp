# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Given two integers (a number of rows and a number of columns),
# return a matrix (an array of arrays) filled with zeros (0)
# having the specified dimensions.
#
# For example:
#
# build_matrix(2, 3)
#
# should return:
#
# [
#     [0, 0, 0],
#     [0, 0, 0]
# ]

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def build_matrix(rows, cols):
    result = []

    for r in range(rows):
        row = []
        for c in range(cols):
            row.append(0)
        result.append(row)

    return result

print(build_matrix(2, 3))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def build_matrix(rows, cols):
    return [[0 for _ in range(cols)] for _ in range(rows)]

print(build_matrix(2, 3))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Logica corretta.
# - Hai utilizzato correttamente due cicli annidati.
# - Hai creato una nuova lista per ogni riga, evitando il classico errore
#   di avere tutte le righe collegate alla stessa lista.
# - Il codice è semplice da leggere.

# //! Contro
# - I punti e virgola (;) sono inutili in Python e andrebbero rimossi.
# - Le variabili r e c non vengono utilizzate: è preferibile usare "_"
#   quando il valore del contatore non serve.
# - Esiste una soluzione più compatta tramite list comprehension.

# =========================================================
# //* Consigli
# =========================================================

# - Continua ad esercitarti con i cicli annidati: sono fondamentali per
#   lavorare con matrici e griglie.
# - Inizia a prendere confidenza con le list comprehension, perché sono
#   molto usate nel codice Python professionale.
# - Evita di inserire ";" a fine riga: in Python non sono necessari.
# - Ottimo lavoro: la soluzione è corretta e dimostra che hai capito
#   come costruire una matrice manualmente.
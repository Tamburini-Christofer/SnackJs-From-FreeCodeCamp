# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

"""
Dato un array bidimensionale che rappresenta una mappa del fondale oceanico
contenente un tesoro nascosto, e un array con le coordinate ([riga, colonna])
per la prossima immersione di ricerca, restituisci:

- "Empty"
- "Found"
- "Recovered"

Regole:

"-" = Nessun tesoro.
"O" = Parte del tesoro non ancora trovata.
"X" = Parte del tesoro già trovata.

Se nel punto di immersione non c'è il tesoro → "Empty".
Se viene trovata una parte del tesoro ma ne rimangono altre → "Found".
Se viene trovata l'ultima parte del tesoro → "Recovered".
"""

# =========================================================
# //* Codice scritto senza utilizzo di ChatGPT
# =========================================================

def dive(map, coordinates):
    [row_co, col_co] = coordinates
    cell = map[row_co][col_co]

    if cell == "-":
        return "Empty"

    remaining = 0

    for row in range(len(map)):
        for col in range(len(map[0])):
            if not (row == row_co and col == col_co) and map[row][col] == "O":
                remaining += 1

    if cell == "O" and remaining == 0:
        return "Recovered"

    return "Found"

print(dive([
    ["-", "-", "-"],
    ["X", "O", "X"],
    ["-", "-", "-"]
], [1, 2]))

# =========================================================
# //* Codice scritto da ChatGPT (versione migliorata)
# =========================================================

def dive(map, coordinates):
    row, col = coordinates
    cell = map[row][col]

    if cell == "-":
        return "Empty"

    remaining = sum(
        1
        for r in range(len(map))
        for c in range(len(map[0]))
        if (r, c) != (row, col) and map[r][c] == "O"
    )

    return "Recovered" if cell == "O" and remaining == 0 else "Found"

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Logica corretta.
# - Gestisce tutti i casi richiesti dalla consegna.
# - L'idea di ignorare la cella appena esplorata è corretta.
# - Il codice è semplice da seguire.
# - Buon utilizzo degli indici della matrice.

# //! Contro
# - I ";" finali sono inutili in Python.
# - "map" è il nome di una funzione built-in di Python: meglio evitarlo
#   (ad esempio usare seabed, grid o ocean_map).
# - "remaining" viene incrementata quando basta sapere se esiste almeno un'altra
#   "O": si potrebbe interrompere il ciclo appena trovata.
# - L'espressione:
#       not(row == row_co and col == col_co)
#   è corretta ma poco leggibile rispetto a:
#       (row, col) != (row_co, col_co)

# =========================================================
# //* Consigli
# =========================================================

# - Evita di usare nomi di funzioni built-in come variabili (map, list, dict...).
# - Non usare ";" a fine riga.
# - Quando ti interessa solo sapere se esiste almeno un elemento,
#   valuta di usare "any()" oppure interrompere il ciclo con return.
# - Continua così: la logica è stata costruita molto bene.

# =========================================================
# ⭐ Valutazione
# =========================================================

# Correttezza:      10/10
# Leggibilità:      9/10
# Efficienza:       8.5/10
# Stile Python:     8.5/10
#
# Voto complessivo: 9.2/10
#
# Hai risolto l'esercizio senza scorciatoie e con una logica molto solida.
# Le uniche migliorie riguardano lo stile Python e qualche piccola ottimizzazione,
# non l'algoritmo, che è corretto.
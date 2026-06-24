# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# (La consegna incollata non corrisponde al codice fornito.)
#
# Dal codice si deduce che:
# Data una matrice contenente valori di pericolo,
# trovare la cella con valore 0 che ha la somma
# dei vicini ortogonali (sopra, sotto, sinistra, destra)
# più bassa possibile.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def find_landing_spot(matrix):
    safest_sum = float('inf')
    safest_point = []

    rows = len(matrix)
    cols = len(matrix[0])
    dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    for i in range(rows):
        for j in range(cols):
            if matrix[i][j] == 0:
                current_danger = 0

                for dx, dy in dirs:
                    ni, nj = i + dx, j + dy

                    if 0 <= ni < rows and 0 <= nj < cols:
                        current_danger += matrix[ni][nj]

                if current_danger < safest_sum:
                    safest_sum = current_danger
                    safest_point = [i, j]

    return safest_point

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def find_landing_spot(matrix):
    rows = len(matrix)
    cols = len(matrix[0])

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    safest_point = None
    lowest_danger = float("inf")

    for row in range(rows):
        for col in range(cols):

            if matrix[row][col] != 0:
                continue

            danger = 0

            for dr, dc in directions:
                nr, nc = row + dr, col + dc

                if 0 <= nr < rows and 0 <= nc < cols:
                    danger += matrix[nr][nc]

            if danger < lowest_danger:
                lowest_danger = danger
                safest_point = [row, col]

    return safest_point

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta e ben strutturata.
# - Ottimo utilizzo dei vettori direzionali.
# - Gestione corretta dei bordi della matrice.
# - Complessità efficiente O(n*m).

# //! Contro
# - safest_point = [] potrebbe essere sostituito con None
#   per indicare chiaramente l'assenza di risultati.
# - I nomi i e j sono standard ma row e col risultano
#   più leggibili.
# - dirs potrebbe essere rinominato directions.

# =========================================================
# //* Consigli
# =========================================================

# - Ottimo approccio con le direzioni: è una tecnica molto
#   usata negli esercizi sulle matrici.
# - Continua a separare bene i passaggi del calcolo.
# - Quando lavori con coordinate, usa row/col per rendere
#   il codice ancora più leggibile.
# - Valuta l'uso di continue per ridurre l'indentazione.

# Valutazione: 9.5/10
# Soluzione pulita, efficiente e scritta molto bene.
# È già da livello intermedio Python.


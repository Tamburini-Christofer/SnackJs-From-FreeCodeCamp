# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Given a matrix (an array of arrays) of single letters and a word to find,
# return the start and end indices of the word within the matrix.
#
# The matrix will contain only lowercase letters ('a' to 'z').
# The word will appear in the matrix exactly once.
# The word will always appear in a straight line in one of these directions:
#
# - Left to right
# - Right to left
# - Top to bottom
# - Bottom to top
#
# Example:
#
# [
#   ["a", "c", "t"],
#   ["t", "a", "t"],
#   ["c", "t", "c"]
# ]
#
# Word: "cat"
#
# Returns:
# [[0, 1], [2, 1]]

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def find_word(matrix, word):
    rows = len(matrix)
    cols = len(matrix[0])
    word_len = len(word)

    directions = [
        (0, 1),
        (0, -1),
        (1, 0),
        (-1, 0)
    ]

    for r in range(rows):
        for c in range(cols):
            if matrix[r][c] != word[0]:
                continue

            for dr, dc in directions:
                end_r = r + dr * (word_len - 1)
                end_c = c + dc * (word_len - 1)

                if not (0 <= end_r < rows and 0 <= end_c < cols):
                    continue

                match = True

                for i in range(1, word_len):
                    nr = r + dr * i
                    nc = c + dc * i

                    if matrix[nr][nc] != word[i]:
                        match = False
                        break

                if match:
                    return [[r, c], [end_r, end_c]]

    return None


print(find_word([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def find_word(matrix, word):
    rows = len(matrix)
    cols = len(matrix[0])
    word_len = len(word)

    directions = [
        (0, 1),
        (0, -1),
        (1, 0),
        (-1, 0)
    ]

    for r in range(rows):
        for c in range(cols):
            if matrix[r][c] != word[0]:
                continue

            for dr, dc in directions:
                end_r = r + dr * (word_len - 1)
                end_c = c + dc * (word_len - 1)

                if not (0 <= end_r < rows and 0 <= end_c < cols):
                    continue

                for i in range(1, word_len):
                    nr = r + dr * i
                    nc = c + dc * i

                    if matrix[nr][nc] != word[i]:
                        break
                else:
                    return [[r, c], [end_r, end_c]]

    return None


print(find_word([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog"))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - L'algoritmo è corretto ed efficiente.
# - Controlla tutte e quattro le direzioni richieste dalla consegna.
# - Verifica prima che la parola possa rientrare nella matrice evitando IndexError.
# - Interrompe subito il confronto quando trova una lettera diversa.
# - Restituisce il risultato appena trova la parola, evitando controlli inutili.
# - Il codice è ben organizzato e utilizza nomi di variabili chiari.

# //! Contro
# - La variabile "match" è superflua e può essere eliminata utilizzando il costrutto "for...else".
# - La lista delle direzioni potrebbe essere dichiarata come costante se dovesse essere riutilizzata.
# - Manca una gestione del caso in cui la matrice sia vuota, anche se la consegna garantisce input validi.

# =========================================================
# //* Consigli
# =========================================================

# - Hai scelto un algoritmo molto buono, con una complessità ottimale di O(R × C × L).
# - Impara a sfruttare il costrutto "for...else": rende il codice più Pythonico ed elimina variabili di appoggio.
# - Continua a controllare i limiti della matrice prima di accedere agli elementi: è un'ottima abitudine.
# - La soluzione è pulita, leggibile e adatta anche a un contesto di colloquio tecnico.
# - Nel complesso è una soluzione da 10/10.
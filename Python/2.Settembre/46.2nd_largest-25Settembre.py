# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dato un array, restituire il secondo numero distinto più grande.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def second_largest(arr):
    set_arr = sorted(list(set(arr)), reverse=True)

    return set_arr[1]

print(second_largest([20, 139, 94, 67, 31]))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def second_largest(arr):
    unique = set(arr)

    if len(unique) < 2:
        return None  # oppure gestire errore

    first = second = float("-inf")

    for n in arr:
        if n > first:
            second = first
            first = n
        elif first > n > second:
            second = n

    return second

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione molto pulita e compatta.
# - Usa set() per rimuovere duplicati correttamente.
# - Ordinamento decrescente semplice da capire.
# - Accesso diretto al secondo elemento.
# - Complessità accettabile per input medio (O(n log n)).

# //! Contro
# - Dipende dall’ordinamento (non O(n) ottimale).
# - Non gestisce il caso con meno di 2 valori distinti (IndexError).
# - Converte set → list inutilmente (set già iterabile ma non ordinabile direttamente in reverse con garanzia di struttura intermedia).
# - Nessun controllo input vuoto o con tutti elementi uguali.

# =========================================================
# //* Consigli
# =========================================================

# - Ottima soluzione per semplicità e leggibilità.
# - Il punto critico è la robustezza:
#   se l’array ha un solo valore unico → errore.
#
# - Miglioria base:
#       if len(set_arr) < 2:
#           return None
#
# - Miglioria avanzata: soluzione O(n) senza sorting (quella sopra).
#
# - In un colloquio tecnico:
#   - la tua versione è “good practical solution”
#   - quella O(n) è “ideal solution”

# Valutazione: 9/10
#
# Pulita, corretta e molto leggibile. Manca solo gestione edge case.
# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# A standard deck of cards contains 52 distinct cards.
# Given an integer representing how many cards to draw,
# return the number of unique combinations of cards that
# can be drawn.
#
# The order does not matter:
# drawing card A then card B is the same as drawing
# card B then card A.
#
# Examples:
#
# combinations(52) -> 1
# combinations(2) -> 1326

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def combinations(cards):
    if cards > 52:
        return 0
    if cards == 0 or cards == 52:
        return 1

    if cards > 26:
        cards = 52 - cards

    result = 1

    for n in range(1, cards + 1):
        result = result * (52 - cards + n) // n

    return result

print(combinations(5))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

from math import comb

def combinations(cards):
    if not 0 <= cards <= 52:
        return 0
    return comb(52, cards)

print(combinations(5))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Hai implementato correttamente la formula delle combinazioni.
# - Ottima ottimizzazione: sfrutti la proprietà
#   C(n, k) = C(n, n-k) riducendo il numero di iterazioni.
# - Hai evitato il calcolo dei fattoriali, che sarebbe stato meno efficiente.
# - Utilizzi la divisione intera (//), evitando problemi con i numeri float.
# - Complessità temporale O(min(k, 52-k)), molto buona.

# //! Contro
# - I punti e virgola (;) non sono necessari in Python.
# - Manca il controllo per valori negativi:
#   combinations(-1) restituisce 1, mentre dovrebbe restituire 0.
# - Il controllo iniziale può essere scritto in modo più compatto:
#   if not 0 <= cards <= 52.

# =========================================================
# //* Consigli
# =========================================================

# - Ottimo lavoro: hai implementato l'algoritmo matematico senza ricorrere
#   ai fattoriali.
# - Ricorda sempre di gestire anche gli input fuori intervallo,
#   compresi quelli negativi.
# - In Python 3.8+ esiste math.comb(), che è la soluzione standard,
#   ma conoscere e saper implementare la formula come hai fatto tu
#   è un'ottima dimostrazione di comprensione dell'algoritmo.
# - Continua a esercitarti con la matematica combinatoria:
#   è molto comune negli algoritmi e nei colloqui tecnici.
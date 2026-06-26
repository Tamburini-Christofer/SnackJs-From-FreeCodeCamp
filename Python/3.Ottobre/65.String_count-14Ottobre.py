# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Date due stringhe, determina quante volte la seconda stringa
# compare nella prima.
#
# La stringa pattern può sovrapporsi alla prima.
# Ad esempio:
# "aaa" contiene "aa" due volte.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def count(text, parameter):
    return text.count(parameter)

print(count('she sells seashells by the seashore', 'sh'))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def count(text, pattern):
    occurrences = 0

    for i in range(len(text) - len(pattern) + 1):
        if text[i:i + len(pattern)] == pattern:
            occurrences += 1

    return occurrences

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione molto semplice e leggibile.
# - Hai sfruttato un metodo integrato di Python.
# - Il codice è efficiente per il caso in cui non servano sovrapposizioni.

# //! Contro
# - text.count() NON conta le occorrenze sovrapposte.
# - Non rispetta completamente la consegna.
#
# Esempio:
# text = "aaa"
# pattern = "aa"
#
# Atteso: 2
# text.count("aa"): 1

# =========================================================
# //* Consigli
# =========================================================

# - Leggi sempre con attenzione i dettagli della consegna:
#   la parola "sovrapporsi" cambia completamente la soluzione.
# - Quando un metodo integrato sembra risolvere l'esercizio,
#   verifica che il suo comportamento coincida esattamente con
#   quello richiesto.
# - In questo caso la soluzione corretta consiste nello scorrere
#   la stringa un carattere alla volta e confrontare una sottostringa
#   con il pattern.
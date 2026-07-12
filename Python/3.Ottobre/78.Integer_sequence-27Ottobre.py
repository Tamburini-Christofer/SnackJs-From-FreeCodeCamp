# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Given a positive integer, return a string containing all integers from
# 1 up to and including the given number, in numerical order.
#
# For example:
# Given 5, return "12345".

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def sequence(n):
    string_result = ""

    for numero in range(1, n+1):
        string_result = string_result + str(numero);

    return string_result

print(sequence(5))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def sequence(n):
    return "".join(str(numero) for numero in range(1, n + 1))

print(sequence(5))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La logica è corretta.
# - Hai usato un ciclo for in modo appropriato.
# - Il codice è semplice da leggere.
# - La soluzione funziona per qualsiasi intero positivo.

# //! Contro
# - Il punto e virgola (;) è inutile in Python.
# - Concatenare stringhe con + all'interno di un ciclo è meno efficiente
#   perché viene creata una nuova stringa ad ogni iterazione.
# - Il nome "string_result" può essere abbreviato in "result" o "sequence".

# =========================================================
# //* Consigli
# =========================================================

# - Preferisci "".join() quando devi costruire una stringa in un ciclo:
#   è il metodo più Pythonico ed efficiente.
# - Evita il punto e virgola alla fine delle righe.
# - Continua a usare nomi di variabili descrittivi: rendono il codice più leggibile.
# - Quando impari una nuova funzione della libreria standard (come join),
#   cerca di capire in quali situazioni è più vantaggiosa rispetto alla concatenazione.
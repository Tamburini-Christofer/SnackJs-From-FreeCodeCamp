# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dato un numero intero non negativo, restituisci la sua
# rappresentazione binaria come stringa.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def to_binary(decimal):
    number_converted = []
    divide_number = decimal

    while(divide_number > 0):
        if divide_number % 2 == 0:
            number_converted.insert(0, "0")
        else:
            number_converted.insert(0, "1")

        divide_number = divide_number // 2

    return "".join(number_converted)

print(to_binary(12))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def to_binary(decimal):
    if decimal == 0:
        return "0"

    binary = []

    while decimal > 0:
        binary.append(str(decimal % 2))
        decimal //= 2

    return "".join(reversed(binary))

print(to_binary(12))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta per numeri maggiori di 0.
# - Hai applicato correttamente l'algoritmo richiesto.
# - Buona comprensione della divisione intera e del resto.
# - Codice abbastanza leggibile.
# - Non hai utilizzato funzioni già pronte come bin().

# //! Contro
# - Non gestisce il caso decimal = 0.
# - insert(0, ...) è poco efficiente perché ad ogni inserimento
#   tutti gli elementi della lista vengono spostati.
# - L'if può essere semplificato usando direttamente il resto.
# - I ";" finali non sono necessari in Python.

# =========================================================
# //* Consigli
# =========================================================

# - Ricorda sempre di controllare i casi limite richiesti.
# - Quando costruisci una lista, preferisci append()
#   e inverti il risultato alla fine.
# - Puoi convertire direttamente il resto in stringa:
#
#   binary.append(str(decimal % 2))
#
#   evitando l'if/else.
# - Continua a implementare gli algoritmi manualmente:
#   è un ottimo allenamento per i colloqui.

# =========================================================
# //* Valutazione
# =========================================================

# Livello: Junior+
#
# Complessità temporale: O(n²)
# a causa di insert(0, ...)
#
# Complessità spaziale: O(n)
#
# Passerebbe un colloquio Junior?
# Sì.
#
# Cosa apprezzerebbe un recruiter?
# - Hai seguito esattamente l'algoritmo richiesto.
# - Hai dimostrato di capire come funziona la conversione
#   decimale -> binario.
#
# Caso limite non gestito:
# - to_binary(0) restituisce "" invece di "0".


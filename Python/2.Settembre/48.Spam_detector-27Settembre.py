# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dato un numero di telefono nel formato:
# +A (BBB) CCC-DDDD
#
# Spam se:
#
# 1. Il prefisso internazionale contiene più di 2 cifre
#    oppure non inizia con 0.
#
# 2. Il prefisso di zona è maggiore di 900
#    oppure minore di 200.
#
# 3. La somma delle prime tre cifre del numero locale
#    compare nelle ultime quattro cifre del numero locale.
#
# 4. Lo stesso numero compare 4 o più volte consecutivamente
#    ignorando i caratteri di formattazione.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import re

def is_spam(number):
    validate_number = "^\+(?:[1-9]|\d{3}|0)\s\((?:155|555|955)\)\s\d{3}-\d{4}$"

    if re.match(validate_number, number):
        return True
    else:
        return False

print(is_spam("+0 (200) 234-0182"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

import re

def is_spam(number):

    match = re.match(r"^\+(\d+)\s\((\d{3})\)\s(\d{3})-(\d{4})$", number)

    if not match:
        return False

    country_code, area_code, first_part, last_part = match.groups()

    # Regola 1
    if len(country_code) > 2 or not country_code.startswith("0"):
        return True

    # Regola 2
    area_code = int(area_code)
    if area_code > 900 or area_code < 200:
        return True

    # Regola 3
    local_sum = sum(int(digit) for digit in first_part)

    if str(local_sum) in last_part:
        return True

    # Regola 4
    digits_only = re.sub(r"\D", "", number)

    if re.search(r"(\d)\1{3,}", digits_only):
        return True

    return False

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Hai scelto correttamente di utilizzare una regex.
# - Hai validato il formato generale del numero.
# - Hai cercato di incorporare parte delle regole nella regex.

# //! Contro
# - L'esercizio richiede verifiche logiche, non solo una validazione regex.
# - La regex accetta soltanto alcuni prefissi di zona
#   (155, 555, 955) che non derivano dalla consegna.
# - Non controlli la somma delle prime tre cifre.
# - Non controlli la presenza di quattro cifre consecutive uguali.
# - Restituisci True quando il formato è valido,
#   mentre l'esercizio richiede True quando il numero è spam.
# - Il prefisso internazionale viene interpretato in modo errato:
#   la consegna richiede un controllo sulla lunghezza e sullo zero iniziale.

# =========================================================
# //* Consigli
# =========================================================

# - Quando leggi una consegna, individua prima le regole logiche.
# - Usa la regex per estrarre i dati, non per risolvere tutto.
# - Se ci sono più condizioni indipendenti, implementale una alla volta.
# - Verifica sempre che il valore restituito coincida con ciò che viene
#   richiesto dalla consegna (spam/non spam).

# Complessità:
# Tempo: O(n)
# Spazio: O(n)

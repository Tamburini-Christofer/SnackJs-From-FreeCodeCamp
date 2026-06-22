# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data una stringa di undici cifre, restituisci la stringa
# come numero di telefono in questo formato:
#
# "+D (DDD) DDD-DDDD"

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def format_number(number):
    prefix = number[:1]
    first_number = number[1:4]
    second_number = number[4:7]
    third_nuber = number[7:]

    return f"+{prefix} ({first_number}) {second_number}-{third_nuber}"

print(format_number("05552340182"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def format_number(number):
    return f"+{number[0]} ({number[1:4]}) {number[4:7]}-{number[7:]}"

print(format_number("05552340182"))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta.
# - Utilizzo corretto dello slicing.
# - Codice molto leggibile.
# - Le variabili rendono chiaro il significato di ogni parte del numero.

# //! Contro
# - Sono state create variabili che vengono utilizzate una sola volta.
# - Piccolo errore di battitura nel nome "third_nuber".
# - Non viene verificato che la stringa abbia effettivamente 11 cifre.

# =========================================================
# //* Consigli
# =========================================================

# - Ottimo utilizzo dello slicing, è esattamente lo strumento giusto.
# - Fai attenzione ai nomi delle variabili per evitare typo.
# - In un contesto reale potresti aggiungere un controllo sulla lunghezza dell'input.
# - La tua soluzione è già perfettamente accettabile in un colloquio junior.

# =========================================================
# //* Valutazione
# =========================================================

# Livello: Junior
#
# Complessità temporale: O(1)
# Complessità spaziale: O(1)
#
# Passerebbe un colloquio Junior?
# Sì, senza problemi.
#
# Caso limite non gestito:
# - Stringhe con lunghezza diversa da 11.
# - Stringhe contenenti caratteri non numerici.
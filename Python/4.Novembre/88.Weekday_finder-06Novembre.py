# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Given a string representing a date in the format YYYY-MM-DD,
# return the day of the week.
#
# Valid return values are:
# - "Sunday"
# - "Monday"
# - "Tuesday"
# - "Wednesday"
# - "Thursday"
# - "Friday"
# - "Saturday"
#
# Make sure to ignore time zones.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

from datetime import datetime

def get_weekday(date_string):

    dt = datetime.strptime(date_string, "%Y-%m-%d")
    return dt.strftime("%A")

print(get_weekday("1111-11-11"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

from datetime import datetime

def get_weekday(date_string):
    return datetime.strptime(date_string, "%Y-%m-%d").strftime("%A")

print(get_weekday("1111-11-11"))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione completamente corretta.
# - Hai utilizzato il modulo datetime, che è lo strumento più adatto.
# - Il formato della data è stato specificato correttamente con strptime().
# - strftime("%A") restituisce direttamente il nome completo del giorno.
# - Il codice è semplice, leggibile ed efficiente.

# //! Contro
# - La variabile dt viene usata una sola volta: puoi evitare di crearla
#   e concatenare direttamente i metodi.
# - Il codice non gestisce eventuali date non valide (non richiesto
#   dall'esercizio, ma utile in applicazioni reali).

# =========================================================
# //* Consigli
# =========================================================

# - Ottima scelta della libreria: datetime è la soluzione standard.
# - Continua a prendere confidenza con strptime() e strftime(), perché
#   sono metodi molto utilizzati nello sviluppo Python.
# - Quando una variabile viene utilizzata una sola volta, valuta se
#   renderla una singola espressione per rendere il codice più compatto.
# - Per esercizi reali, considera l'uso di try/except per gestire input
#   con date non valide.
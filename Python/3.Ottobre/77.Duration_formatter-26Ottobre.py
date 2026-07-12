# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Given an integer number of seconds, return a string representing the
# same duration in the format "H:MM:SS", where "H" is the number of hours,
# "MM" is the number of minutes, and "SS" is the number of seconds.
#
# Follow these rules:
# - Seconds must always be represented with two digits.
# - Minutes should omit leading zeros when unnecessary.
#   Use "0" if the duration is less than one minute.
# - Hours should only be included if greater than zero.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def format(seconds):
    ore = seconds // 3600;
    minuti = (seconds % 3600) // 60;
    minuti_rimasti = seconds % 60

    if ore > 0:
        return f"{ore}:{minuti:02d}:{minuti_rimasti:02d}"
    else:
        return f"{minuti}:{minuti_rimasti:02d}"

print(format(5555))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def format(seconds):
    ore = seconds // 3600
    minuti = (seconds % 3600) // 60
    secondi = seconds % 60

    if ore > 0:
        return f"{ore}:{minuti:02d}:{secondi:02d}"

    return f"{minuti}:{secondi:02d}"

print(format(5555))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La logica è corretta.
# - Hai usato correttamente divisione intera (%) e resto (//).
# - Hai gestito correttamente il caso con e senza ore.
# - Hai utilizzato l'formatting con :02d per aggiungere gli zeri.

# //! Contro
# - In Python il punto e virgola (;) non è necessario.
# - Il nome "minuti_rimasti" è un po' fuorviante: rappresenta i secondi rimanenti.
# - L'else è superfluo perché il ramo if termina già con un return.

# =========================================================
# //* Consigli
# =========================================================

# - Evita di usare il punto e virgola alla fine delle righe.
# - Usa nomi delle variabili più descrittivi, ad esempio "secondi".
# - Quando un blocco if termina con return, puoi eliminare l'else per rendere il codice più pulito.
# - Continua a usare gli f-string: sono il modo più moderno e leggibile di formattare stringhe in Python.
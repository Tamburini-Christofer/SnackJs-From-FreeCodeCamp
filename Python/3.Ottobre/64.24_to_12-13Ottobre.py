# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dato un input che rappresenta un'ora del giorno nel formato
# 24 ore "HHMM", restituisci l'ora nel suo equivalente formato
# 12 ore "H:MM AM" o "H:MM PM".
#
# L'input sarà sempre una stringa di quattro cifre
# compresa tra "0000" e "2359".

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def to_12(time):
    hour_time = int(time[:2])
    minute_time = int(time[2:])

    if hour_time == 00:
        return f"12:{minute_time} AM";
    elif hour_time > 12 and hour_time < 24:
        return f"{hour_time - 12}:{minute_time} PM";
    elif hour_time < 12:
        return f"{hour_time}:{minute_time:02d} AM"

print(to_12("0900"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def to_12(time):
    hour = int(time[:2])
    minute = int(time[2:])

    if hour == 0:
        return f"12:{minute:02d} AM"
    elif hour == 12:
        return f"12:{minute:02d} PM"
    elif hour > 12:
        return f"{hour - 12}:{minute:02d} PM"
    else:
        return f"{hour}:{minute:02d} AM"

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Hai suddiviso correttamente ore e minuti tramite slicing.
# - Hai convertito le stringhe in interi nel modo corretto.
# - Hai utilizzato gli f-string.
# - Il ragionamento generale è corretto e copre buona parte dei casi.

# //! Contro
# - Manca il caso delle 12:XX, quindi to_12("1200") restituisce None.
# - Nei primi due return i minuti non vengono formattati con :02d.
#   Ad esempio "0005" diventa "12:5 AM" invece di "12:05 AM".
# - Il controllo hour_time < 24 è ridondante perché la consegna garantisce
#   un input valido.
# - I punti e virgola finali non sono necessari in Python.
# - I nomi hour_time e minute_time possono essere semplificati in hour e minute.

# =========================================================
# //* Consigli
# =========================================================

# - Controlla sempre tutti i casi limite (00:00, 12:00, 23:59, 00:05).
# - Usa sempre :02d quando devi stampare minuti o ore con due cifre.
# - Evita controlli superflui se la consegna garantisce input validi.
# - Preferisci nomi di variabili più brevi quando il contesto è chiaro.
# - Prima di considerare concluso un esercizio, prova mentalmente almeno
#   questi casi:
#       "0000" -> "12:00 AM"
#       "0005" -> "12:05 AM"
#       "0900" -> "9:00 AM"
#       "1200" -> "12:00 PM"
#       "1545" -> "3:45 PM"
#       "2359" -> "11:59 PM"
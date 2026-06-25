# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //todo Consegna dell'esercizio

# Per il sesto giorno della Space Week, ti verrà fornita una data
# nel formato "YYYY-MM-DD" e dovrai determinare la fase lunare.
#
# Utilizza un ciclo lunare semplificato di 28 giorni:
#
# "New"    : giorni 1 - 7
# "Waxing" : giorni 8 - 14
# "Full"   : giorni 15 - 21
# "Waning" : giorni 22 - 28
#
# Usa "2000-01-06" come riferimento per la luna nuova (giorno 1).
# Non verranno fornite date precedenti alla data di riferimento.
#
# Restituisci la fase corretta come stringa.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import re

def moon_phase(date_string):
    day = int(date_string[8:])

    if day <= 7:
         return "New"
    if day <= 14:
         return "Waxing"
    if day <= 21:
         return "Full"
    if day <= 28:
         return "Waning"

print(moon_phase("2000-01-12"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

from datetime import datetime

def moon_phase(date_string):
    reference_date = datetime.strptime("2000-01-06", "%Y-%m-%d")
    current_date = datetime.strptime(date_string, "%Y-%m-%d")

    days_passed = (current_date - reference_date).days
    cycle_day = (days_passed % 28) + 1

    if cycle_day <= 7:
        return "New"
    elif cycle_day <= 14:
        return "Waxing"
    elif cycle_day <= 21:
        return "Full"
    else:
        return "Waning"

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Hai individuato correttamente le quattro fasce di giorni associate
#   alle fasi lunari.
# - La logica degli if è semplice e leggibile.
# - Hai estratto correttamente il giorno dalla stringa usando lo slicing.

# //! Contro
# - La consegna richiede di calcolare i giorni trascorsi dalla data
#   di riferimento, non di usare il giorno del mese.
# - Il ciclo lunare di 28 giorni non viene considerato.
# - import re è inutilizzato.
# - La variabile day_join non esiste e genera un errore.
# - Funziona solo per alcune date dello stesso mese, ma fallisce
#   appena cambia mese o anno.

# =========================================================
# //* Consigli
# =========================================================

# - Quando una consegna parla di date, valuta subito l'utilizzo del
#   modulo datetime.
# - Leggi attentamente eventuali date di riferimento fornite dal testo:
#   spesso sono la chiave dell'esercizio.
# - Elimina gli import inutilizzati.
# - Prima di consegnare il codice, verifica che tutte le variabili
#   utilizzate siano state definite.
# - Testa sempre il programma con date di mesi e anni diversi per
#   verificare che la logica sia davvero generale.
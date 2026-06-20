# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dato un paragrafo, restituisci un nuovo paragrafo in cui la prima
# lettera di ogni frase è maiuscola.
#
# Tutti gli altri caratteri devono essere mantenuti.
# Le frasi possono terminare con:
# - un punto (.)
# - uno o più punti interrogativi (?)
# - uno o più punti esclamativi (!)

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import re

def generate_slug(testo):
    testo = testo.lower()

    testo = re.sub(r"[^a-z0-9\s]", "", testo)

    testo = testo.strip()

    testo = re.sub(r"\s+", "%20", testo)

    return testo

print(generate_slug("hello   world"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

import re

def capitalize_sentences(text):
    if not text:
        return text

    text = re.sub(
        r'(^|[.!?]+\s*)([a-z])',
        lambda m: m.group(1) + m.group(2).upper(),
        text
    )

    return text

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Il codice è pulito e leggibile.
# - Utilizza correttamente le regex.
# - Gestisce spazi multipli tra le parole.
# - Converte il testo in un formato URL-friendly.

# //! Contro
# - Il codice non risolve la consegna richiesta.
# - La funzione genera uno slug invece di capitalizzare
#   l'inizio delle frasi.
# - Rimuove la punteggiatura invece di utilizzarla per
#   identificare le frasi.
# - Modifica tutti i caratteri in minuscolo, cosa non richiesta.
# - L'output atteso dall'esercizio è completamente diverso.

# =========================================================
# //* Consigli
# =========================================================

# - Hai probabilmente incollato una soluzione di un esercizio diverso.
# - Prima di iniziare a programmare, verifica sempre che la funzione
#   richiesta corrisponda alla consegna.
# - In questo esercizio il focus è individuare l'inizio di ogni frase
#   e rendere maiuscola la prima lettera.
# - Una buona strategia è cercare:
#     1. L'inizio della stringa.
#     2. I caratteri dopo ., ?, !.
# - Se fossi in un colloquio tecnico, questa soluzione verrebbe
#   considerata non corretta perché non soddisfa la richiesta.

# Valutazione rispetto alla consegna: 0/10
# (la soluzione è valida per generare slug, ma non per questo esercizio)
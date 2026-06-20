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
#
# Le frasi possono terminare con:
# - un punto (.)
# - uno o più punti interrogativi (?)
# - uno o più punti esclamativi (!)

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import re

def capitalize(testo):
    if not testo:
        return testo

    lettere = r"[a-zA-ZàèìòùÀÈÌÒÙáéíóúÁÉÍÓÚ]"

    testo = re.sub(f"({lettere})", lambda m: m.group(1).upper(), testo, count=1)

    pattern = f"([\\.!\?]+)(\\s*)({lettere})"

    risultato = re.sub(
        pattern,
        lambda m: m.group(1) + m.group(2) + m.group(3).upper(),
        testo
    )

    return risultato

stringa_test = "crazy!!!strange???unconventional...sentences."
print(capitalize(stringa_test))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

import re

def capitalize_sentences(text):
    if not text:
        return text

    result = []
    capitalize_next = True

    for char in text:
        if capitalize_next and char.isalpha():
            result.append(char.upper())
            capitalize_next = False
        else:
            result.append(char)

        if char in ".!?":
            capitalize_next = True

    return "".join(result)

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Utilizza le regex in modo corretto.
# - Gestisce punti, punti interrogativi e punti esclamativi multipli.
# - Mantiene invariati gli altri caratteri.
# - Supporta lettere accentate.
# - Soluzione compatta e leggibile per chi conosce le regex.

# //! Contro
# - Uso delle regex più complesso del necessario.
# - La variabile "lettere" richiede manutenzione se si vogliono supportare
#   altri alfabeti o caratteri Unicode.
# - Meno immediato da comprendere rispetto a una soluzione iterativa.
# - Esegue due sostituzioni regex complete sul testo.

# =========================================================
# //* Consigli
# =========================================================

# - La tua soluzione è valida e rispetta la consegna.
# - Hai pensato correttamente al caso delle frasi senza spazi dopo
#   la punteggiatura ("ciao!!!come va?").
# - Ottimo l'uso di (\s*) per gestire sia la presenza che l'assenza
#   di spazi tra le frasi.
# - Per un colloquio tecnico probabilmente la tua soluzione sarebbe
#   considerata più avanzata della media.
# - Se l'obiettivo è massima leggibilità, una soluzione iterativa
#   senza regex potrebbe risultare più semplice da mantenere.
# - Complessivamente darei al codice un voto di 8.5/10. Funziona bene,
#   è robusto e mostra una buona padronanza delle espressioni regolari.
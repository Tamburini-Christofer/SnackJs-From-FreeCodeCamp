# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Given a string of text, return the number of words it contains.
#
# Words are any sequence of non-space characters separated by a
# single space.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def count_words(sentence):

    return len(sentence.split())

print(count_words("Hello world"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def count_words(sentence):
    return len(sentence.split())


print(count_words("Hello world"))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La soluzione è corretta e rispetta completamente la consegna.
# - Utilizza split(), il metodo più adatto per dividere una frase in parole.
# - Il codice è molto breve, leggibile ed efficiente.
# - La complessità è O(n), ottimale per questo problema.

# //! Contro
# - Non ci sono particolari aspetti negativi.
# - L'unica piccola miglioria riguarda lo stile: evitare la riga vuota all'interno della funzione.

# =========================================================
# //* Consigli
# =========================================================

# - Per esercizi di questo tipo, sfruttare i metodi integrati di Python è
#   la scelta migliore: il codice risulta semplice ed efficiente.
# - Continua a preferire soluzioni concise quando risolvono il problema in
#   modo chiaro.

# Valutazione:
# Correttezza:     10/10
# Leggibilità:     10/10
# Ottimizzazione:  10/10
# Voto finale:     10/10
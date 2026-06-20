# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data una stringa, restituire:
# - "cifre" se ci sono più numeri che lettere
# - "lettere" se ci sono più lettere che numeri
# - "pareggio" se uguali
#
# Regole:
# - cifre: 0–9
# - lettere: a–z (maiuscole e minuscole)
# - altri caratteri ignorati

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import re

def digits_or_letters(s):
    char = 0;
    numbers = 0;

    for value in s:
        if re.match("[a-zA-Z]", value):
            char += 1
        elif re.match("[0-9]", value):
            numbers += 1

    if char > numbers:
        return "letters";
    elif char < numbers:
        return "digits";
    else:
        return "tie"
        
print(digits_or_letters("abc123"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def digits_or_letters(s):
    letters = sum(c.isalpha() for c in s)
    digits = sum(c.isdigit() for c in s)

    if digits > letters:
        return "cifre"
    elif letters > digits:
        return "lettere"
    else:
        return "pareggio"

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Logica corretta nel conteggio.
# - Ignora automaticamente i caratteri non validi.
# - Struttura semplice e comprensibile.
# - Funziona per lettere e numeri come richiesto.

# //! Contro
# - Uso di regex non necessario per un singolo carattere.
# - `re.match` è più lento e meno idiomatico di `isalpha()` / `isdigit()`.
# - Output non conforme alla consegna:
#   - "letters" invece di "lettere"
#   - "digits" invece di "cifre"
#   - "tie" invece di "pareggio"
# - Nomi variabili poco descrittivi (`char`, `numbers`).
# - Punteggiatura inutile nei return (`;`).

# =========================================================
# //* Consigli
# =========================================================

# - Il problema principale qui è la NON aderenza alla consegna:
#   i valori di ritorno devono essere ESATTAMENTE quelli richiesti.
#
# - In Python, meglio evitare regex per controlli così semplici:
#       c.isalpha()
#       c.isdigit()
#
# - Piccolo miglioramento mentale utile:
#   prima controlla SEMPRE l’output richiesto, poi scrivi il codice.
#
# - La tua logica è corretta, quindi il problema è solo di “traduzione
#   della consegna”, non di algoritmo.

# Valutazione: 8/10
#
# Buona logica, ma penalizzato per mismatch nei valori di output e uso regex non necessario.
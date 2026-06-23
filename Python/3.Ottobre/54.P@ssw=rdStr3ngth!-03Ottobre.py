# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data una stringa di password, restituisci "debole", "media" o "forte"
# in base alla sicurezza della password.
#
# Una password viene valutata secondo le seguenti regole:
#
# - Deve essere lunga almeno 8 caratteri.
# - Contiene sia lettere maiuscole che minuscole.
# - Contiene almeno un numero.
# - Contiene almeno un carattere speciale tra: !, @, #, $, %, ^, & o *.
#
# Restituisci "weak" se la password soddisfa meno di due delle regole.
# Restituisci "medium" se la password soddisfa 2 o 3 delle regole.
# Restituisci "strong" se la password soddisfa tutte e 4 le regole.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import re

def check_strength(password):
    rules = 0

    if len(password) >= 8:
        rules += 1
    if re.search(r"[A-Za-z]", password):
        rules += 1
    if re.search(r"[0-9]", password):
        rules += 1
    if re.search(r"[#?!@$%^&*-]", password):
        rules += 1

    match rules:
        case 0 | 1 | 2:
            return "weak"
        case 3:
            return "medium"
        case 4:
            return "strong"

print(check_strength("123456"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

import re

def check_strength(password):
    rules = 0

    if len(password) >= 8:
        rules += 1
    if re.search(r"[a-z]", password) and re.search(r"[A-Z]", password):
        rules += 1
    if re.search(r"\d", password):
        rules += 1
    if re.search(r"[!@#$%^&*]", password):
        rules += 1

    if rules < 2:
        return "weak"
    elif rules < 4:
        return "medium"
    return "strong"

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Hai utilizzato correttamente il modulo re.
# - La logica a punteggio (rules) è semplice e leggibile.
# - L'utilizzo del match-case è corretto e moderno.
# - Hai separato bene i controlli in condizioni indipendenti.

# //! Contro
# - Hai interpretato male la regola "contiene sia lettere maiuscole che minuscole":
#   il controllo [A-Za-z] verifica soltanto la presenza di una lettera,
#   non che siano presenti entrambe le tipologie.
#
# - La classificazione finale non segue la consegna:
#   con 2 regole soddisfatte dovrebbe restituire "medium",
#   mentre il tuo codice restituisce "weak".
#
# - Il carattere speciale ? viene considerato valido dal tuo regex,
#   ma non è presente tra quelli richiesti dalla consegna.

# =========================================================
# //* Consigli
# =========================================================

# - Quando una consegna parla di maiuscole e minuscole, verifica sempre
#   che entrambe siano presenti separatamente.
#
# - Prima di scrivere il return finale, confronta i casi limite con la consegna:
#   rules = 2 è un ottimo esempio di test che avrebbe evidenziato l'errore.
#
# - Continua a usare l'approccio del contatore (rules): è una soluzione pulita,
#   facilmente estendibile e molto utilizzata negli esercizi di validazione.
# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data una stringa, stabilire se si tratta di un indirizzo email valido
# in base ai seguenti vincoli:
#
# - Deve contenere esattamente un simbolo @.
# - La parte locale (prima della @):
#   - Può contenere solo lettere (a-z, A-Z), cifre (0-9),
#     punti (.), underscore (_) o trattini (-).
#   - Non può iniziare né terminare con un punto.
# - La parte del dominio (dopo la @):
#   - Deve contenere almeno un punto.
#   - Deve terminare con un punto seguito da almeno due lettere.
# - Né la parte locale né quella del dominio possono contenere
#   due punti consecutivi.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGPT
# =========================================================

import re

def validate(email):
    if email.count('@') != 1:
        return False
    
    local_part, domain_part = email.split('@')

    if not re.match(r"^[a-zA-Z0-9._-]+$", local_part):
        return False
    
    if local_part.startswith('.') or local_part.endswith('.'):
        return False
    
    if '..' in local_part:
        return False
        
    if '.' not in domain_part:
        return False
        
    if '..' in domain_part:
        return False
        
    if not re.search(r"\.[a-zA-Z]{2,}$", domain_part):
        return False
        
    return True

print(validate("hell.-w.rld@example.com"))

# =========================================================
# //* Codice scritto da ChatGPT (versione migliorata)
# =========================================================

import re

def validate(email):
    if email.count("@") != 1:
        return False

    local_part, domain_part = email.split("@")

    if (
        not re.fullmatch(r"[a-zA-Z0-9._-]+", local_part)
        or local_part.startswith(".")
        or local_part.endswith(".")
        or ".." in local_part
    ):
        return False

    if (
        "." not in domain_part
        or ".." in domain_part
        or not re.search(r"\.[a-zA-Z]{2,}$", domain_part)
    ):
        return False

    return True

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Controlla correttamente che sia presente un solo simbolo @.
# - Divide in modo chiaro parte locale e dominio.
# - Usa le espressioni regolari solo dove sono realmente utili.
# - Il codice è facile da leggere grazie ai controlli separati.
# - Gestisce tutti i vincoli richiesti dalla consegna.

# //! Contro
# - re.fullmatch() sarebbe più appropriato di re.match(), perché verifica
#   direttamente che l'intera stringa rispetti il pattern.
# - I controlli sulla parte locale e sul dominio potrebbero essere
#   raggruppati per rendere il codice più compatto.
# - Alcuni controlli potrebbero essere eseguiti con una singola regex,
#   anche se la tua soluzione è più leggibile.

# =========================================================
# //* Consigli
# =========================================================

# - Preferisci re.fullmatch() quando vuoi validare l'intera stringa.
# - Continua a separare i controlli in piccoli blocchi: migliora la
#   leggibilità e facilita il debug.
# - Hai scelto un buon equilibrio tra regex e controlli Python, evitando
#   espressioni regolari troppo complesse.
# - Soluzione corretta, ordinata e facilmente manutenibile.
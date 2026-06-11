# ==========================================
# ⚡ FEEDBACK VELOCE
# ==========================================
# Ottimo approccio: hai usato regex e comprensione liste in modo corretto.
# Il codice è quasi perfetto, ma non rispetta completamente la regola dei separatori
# (underscore e dash) e si può rendere più aderente alla consegna.

# ==========================================
# ❌ ERRORI SPIEGATI
# ==========================================

# ❌ 1. Regex incompleta rispetto alla traccia
# La consegna dice che i separatori sono:
# spazio, '-', '_'
# Tu invece usi: [a-zA-Z0-9]+
# Questo funziona solo perché "salta" i separatori,
# ma non li tratta esplicitamente come richiesto.

# ❌ 2. Caso limite non gestito bene
# Stringhe tipo:
# "hello-world_test"
# funzionano, ma non per logica dichiarata (word break esplicito)

# ❌ 3. Migliorabile leggibilità
# Va bene, ma si può semplificare usando split regex sui separatori.

# ==========================================
# ✅ CODICE CORRETTO
# ==========================================

import re

def to_camel_case(s):
    # separo le parole usando i veri delimitatori richiesti
    parole = re.split(r'[-_\s]+', s)

    # tolgo eventuali stringhe vuote (es: input sporco)
    parole = [p for p in parole if p]

    if not parole:
        return ""

    # prima parola tutta minuscola
    prima_parola = parole[0].lower()

    # successive con prima lettera maiuscola
    parole_successive = [p.capitalize() for p in parole[1:]]

    return prima_parola + ''.join(parole_successive)


print(to_camel_case("hello world"))
print(to_camel_case("hello-world_test"))
print(to_camel_case("HELLO__world test"))

# ==========================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# ==========================================

# import re
# Import della libreria per usare regex

# re.split(r'[-_\s]+', s)
# Divide la stringa ogni volta che trova:
# - spazio
# - trattino -
# - underscore _
# il + significa "uno o più consecutivi"

# parole = [p for p in parole if p]
# elimina eventuali stringhe vuote

# if not parole:
# se la stringa è vuota o solo separatori

# return ""
# restituisce stringa vuota

# prima_parola = parole[0].lower()
# prima parola tutta minuscola

# parole_successive = [p.capitalize() for p in parole[1:]]
# tutte le altre parole con iniziale maiuscola

# return prima_parola + ''.join(...)
# unisce tutto senza spazi

# ==========================================
# 🎯 CONCETTI PYTHON IMPARATI
# ==========================================

# - regex split vs findall
# - gestione separatori multipli
# - list comprehension
# - pulizia dati (filter)
# - camelCase formatting

# ==========================================
# 🚀 COME LO FAREBBE UN PROGRAMMATORE PIÙ ESPERTO
# ==========================================

# - Usare split sui delimitatori invece di estrarre parole
# - Gestire input sporchi (multiple separazioni)
# - Scrivere codice idempotente (sempre stabile)
# - Evitare assunzioni implicite sui dati

# ==========================================
# 🏆 VALUTAZIONE FINALE
# ==========================================

# Logica: 9/10
# Sintassi: 9/10
# Pulizia: 8/10
# Pythonic: 9/10

# Voto complessivo: 9/10
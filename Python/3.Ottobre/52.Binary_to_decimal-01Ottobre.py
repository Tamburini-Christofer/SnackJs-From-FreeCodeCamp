# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data una stringa che rappresenta un numero binario,
# restituisci il suo equivalente decimale come numero.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def to_decimal(binary):
    number_converted = 0
    indice = 0

    for number in reversed(binary):
        number_converted += int(number) * (2 ** indice)
        indice += 1

    return number_converted

print(to_decimal("1010"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def to_decimal(binary):
    decimal = 0

    for index, digit in enumerate(reversed(binary)):
        decimal += int(digit) * (2 ** index)

    return decimal

print(to_decimal("1010"))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta.
# - Hai applicato correttamente la formula di conversione binario -> decimale.
# - Buon utilizzo di reversed().
# - Logica chiara e facile da seguire.
# - Non utilizzi funzioni già pronte come int(binary, 2),
#   dimostrando di conoscere l'algoritmo.

# //! Contro
# - La variabile "indice" viene gestita manualmente e può essere
#   sostituita da enumerate().
# - I nomi delle variabili potrebbero essere leggermente più brevi
#   e descrittivi.
# - I ";" finali non sono necessari in Python.

# =========================================================
# //* Consigli
# =========================================================

# - Quando hai bisogno di un contatore durante un ciclo,
#   valuta l'utilizzo di enumerate().
# - Evita i ";" finali: sono eredità di altri linguaggi ma
#   in Python non servono.
# - Continua a implementare gli algoritmi manualmente:
#   è un ottimo esercizio per comprendere i concetti.

# =========================================================
# //* Valutazione
# =========================================================

# Livello: Junior+
#
# Complessità temporale: O(n)
# Complessità spaziale: O(1)
#
# Passerebbe un colloquio Junior?
# Sì.
#
# Cosa apprezzerebbe un recruiter?
# - Conoscenza delle potenze.
# - Comprensione della rappresentazione binaria.
# - Capacità di implementare l'algoritmo senza scorciatoie.
#
# Caso limite non gestito:
# - Stringa vuota.
# - Presenza di caratteri diversi da 0 e 1.
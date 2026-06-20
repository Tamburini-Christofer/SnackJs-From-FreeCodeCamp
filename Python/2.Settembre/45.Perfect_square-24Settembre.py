# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dato un numero intero, determinare se è un quadrato perfetto.
#
# Un numero è un quadrato perfetto se esiste un intero x tale che:
# x * x = n

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def is_perfect_square(n):
    if n == 0 or n == 1:
        return True
    
    isFalse = False

    for number in range(n):
        if number * number == n:
            return True

    return isFalse

print(is_perfect_square(9))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def is_perfect_square(n):
    if n < 0:
        return False

    i = 0
    while i * i <= n:
        if i * i == n:
            return True
        i += 1

    return False

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Logica corretta e semplice.
# - Gestisce correttamente 0 e 1.
# - Funziona per casi positivi.
# - Approccio intuitivo (for loop diretto).

# //! Contro
# - Il ciclo `range(n)` è inefficiente (dovrebbe bastare fino a √n).
# - Variabile `isFalse` inutile (si può tornare direttamente False).
# - Mancata gestione esplicita di numeri negativi.
# - Controllo non ottimizzato (O(n) invece di O(√n)).
# - Nome variabile poco utile.

# =========================================================
# //* Consigli
# =========================================================

# - Il problema principale è l’efficienza:
#   non serve arrivare fino a n, basta arrivare fino a √n.
#
# - Versione migliore del tuo approccio:
#       for i in range(int(n**0.5) + 1)
#
# - Evita variabili “segnaposto” come isFalse:
#   in Python basta `return False`.
#
# - La logica è comunque corretta: hai centrato il problema.

# Valutazione: 8.5/10
#
# Corretto ma migliorabile in efficienza e pulizia.
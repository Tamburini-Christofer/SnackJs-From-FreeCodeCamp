# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Per il quinto giorno della Settimana dello Spazio,
# calcolare la zona abitabile di una stella.
#
# Data la massa della stella:
# - luminosità = massa ^ 3.5
# - inizio zona = 0.95 * sqrt(luminosità)
# - fine zona = 1.37 * sqrt(luminosità)
#
# Restituire un array contenente i due valori
# arrotondati a 2 cifre decimali.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import math

def goldilocks_zone(mass):
    luminosity_star = mass ** 3.5
    sqrt_luminosity = math.sqrt(luminosity_star)

    start_zone = 0.95 * sqrt_luminosity
    end_zone = 1.37 * sqrt_luminosity

    return [round(start_zone, 2), round(end_zone, 2)]

print(goldilocks_zone(3.7))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

import math

def goldilocks_zone(mass):
    luminosity = mass ** 3.5
    root_luminosity = math.sqrt(luminosity)

    return [
        round(0.95 * root_luminosity, 2),
        round(1.37 * root_luminosity, 2)
    ]

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta.
# - I passaggi del calcolo sono ben separati.
# - Nomi delle variabili descrittivi.
# - Utilizzo corretto di math.sqrt().
# - Codice facile da leggere e debuggare.

# //! Contro
# - I ";" finali sono inutili in Python.
# - Le variabili start_zone ed end_zone vengono usate una sola volta:
#   possono essere inserite direttamente nel return.
# - luminosity_star è un nome un po' lungo; luminosity è sufficiente.

# =========================================================
# //* Consigli
# =========================================================

# - Continua a spezzare i calcoli in passaggi logici:
#   rende il codice molto leggibile.
# - Evita i ";" finali.
# - Quando una variabile viene utilizzata una sola volta,
#   valuta se inserirla direttamente nel return.
# - Potresti anche usare l'operatore ** 0.5 al posto di
#   math.sqrt(), ma la tua soluzione è più esplicita.

# Valutazione: 10/10
# Soluzione corretta, pulita e ben strutturata.
# Non ci sono errori logici né problemi di efficienza.
# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# On November 2, 1988, the first major computer worm was released,
# infecting around 10% of the computers connected to the Internet
# within a single day.
#
# Given the number of days since the worm was released, determine
# how many computers are infected using these rules:
#
# - On day 0, one computer is infected.
# - Each following day, the number of infected computers doubles.
# - Every 3 days, after the virus spreads, a patch removes 20% of the
#   infected computers. The number of patched computers is always
#   rounded up to the nearest whole number.
#
# Example:
# Day 0 -> 1 infected
# Day 1 -> 2 infected
# Day 2 -> 4 infected
# Day 3 -> 8 infected
# Patch: ceil(8 × 20%) = 2
# Result: 6 infected

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import math

def infected(days):
    total_pc_infected = 1

    for day in range(1, days + 1):
        total_pc_infected *= 2

        if day % 3 == 0:
            total_pc_patch = math.ceil(total_pc_infected * 0.20)
            total_pc_infected -= total_pc_patch

    return total_pc_infected


print(infected(8))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

from math import ceil

def infected(days):
    infected_pc = 1

    for day in range(1, days + 1):
        infected_pc *= 2

        if day % 3 == 0:
            infected_pc -= ceil(infected_pc * 0.2)

    return infected_pc


print(infected(8))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La soluzione è corretta e rispetta tutte le regole della consegna.
# - La patch viene applicata dopo il raddoppio, come richiesto.
# - Utilizza correttamente math.ceil() per arrotondare per eccesso.
# - Il codice è semplice da leggere e da seguire.
# - I nomi delle variabili sono abbastanza descrittivi.

# //! Contro
# - La variabile total_pc_patch viene usata una sola volta e potrebbe essere evitata.
# - Gli ";" finali non sono necessari in Python.
# - Importare solo ceil rende il codice leggermente più pulito.

# =========================================================
# //* Consigli
# =========================================================

# - Ricorda che in Python non è necessario terminare le istruzioni con ";".
# - Quando una variabile viene utilizzata una sola volta, valuta se puoi
#   inserirla direttamente nell'espressione.
# - Continua a usare nomi di variabili descrittivi: rendono il codice più leggibile.
# - La tua simulazione giorno per giorno è un approccio corretto e naturale
#   per questo tipo di esercizi.

# Valutazione:
# Correttezza:     10/10
# Leggibilità:     10/10
# Ottimizzazione:   9/10
# Voto finale:     9.7/10
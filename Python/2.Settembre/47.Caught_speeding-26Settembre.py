# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dato un array di numeri che rappresentano la velocità a cui sono stati
# osservati i veicoli e un numero che rappresenta il limite di velocità,
# restituisci un array con due elementi:
#
# - il numero di veicoli che superavano il limite di velocità
# - la differenza media di velocità di tali veicoli rispetto al limite
#
# Se non sono stati rilevati veicoli che superavano il limite di velocità,
# restituisci [0, 0].

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

from functools import reduce

def speeding(speeds, limit):
    vehicles_speed = 0
    speed_average = []

    for vehicles in speeds:
        if vehicles > limit:
            vehicles_speed += 1
            speed_average.append(vehicles - limit)

    if vehicles_speed == 0:
        return [0, 0]
    else:
        return [
            vehicles_speed,
            (reduce(lambda x, y: x + y, speed_average) / len(speed_average))
        ]

print(speeding([50, 60, 55], 60))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def speeding(speeds, limit):
    differences = []

    for speed in speeds:
        if speed > limit:
            differences.append(speed - limit)

    if not differences:
        return [0, 0]

    return [len(differences), sum(differences) / len(differences)]

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta.
# - Hai separato bene il conteggio dei veicoli dalla media.
# - Gestisci correttamente il caso in cui nessun veicolo superi il limite.
# - Il codice è facile da seguire.

# //! Contro
# - L'uso di reduce() è superfluo: sum() è più leggibile e idiomatico.
# - vehicles_speed può essere ottenuto direttamente con len(speed_average).
# - Il nome speed_average è fuorviante: contiene differenze di velocità,
#   non una media.
# - I punti e virgola finali non servono in Python.
# - Il nome vehicles per una singola velocità può creare confusione;
#   speed sarebbe più chiaro.

# =========================================================
# //* Consigli
# =========================================================

# - Preferisci sum() a reduce() quando devi semplicemente sommare valori.
# - Usa nomi che descrivano esattamente il contenuto della variabile.
# - Evita variabili duplicate quando puoi ricavare l'informazione da una
#   struttura già esistente (es. len(speed_average)).
# - Continua a gestire esplicitamente gli edge case come [0, 0]:
#   è una buona abitudine.

# Complessità:
# Tempo: O(n)
# Spazio: O(n)
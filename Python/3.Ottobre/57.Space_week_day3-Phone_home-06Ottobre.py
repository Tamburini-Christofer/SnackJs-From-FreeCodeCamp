# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Per il terzo giorno della Settimana dello Spazio, ti viene fornito
# un array di numeri che rappresentano le distanze (in chilometri)
# tra te, i satelliti e il tuo pianeta natale lungo una rotta di
# comunicazione.
#
# Determina quanto tempo impiegherà un messaggio inviato lungo la rotta
# per raggiungere il pianeta di destinazione, utilizzando i seguenti
# vincoli:
#
# - Il primo valore nell'array rappresenta la distanza dalla tua
#   posizione al primo satellite.
# - Ogni valore successivo, eccetto l'ultimo, rappresenta la distanza
#   dal satellite successivo.
# - L'ultimo valore nell'array rappresenta la distanza dal satellite
#   precedente al tuo pianeta natale.
# - Il messaggio viaggia a 300.000 km/s.
# - Ogni satellite attraversato dal messaggio aggiunge un ritardo
#   di trasmissione di 0,5 secondi.
# - Restituisci un numero arrotondato a 4 cifre decimali,
#   eliminando gli zeri finali.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def send_message(route):
    velocity = 300000

    traveltime = sum(d / velocity for d in route)

    delay = (len(route) - 1) * 0.5

    total = traveltime + delay

    return round(total, 4)

print(send_message([300000, 300000]))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def send_message(route):
    SPEED = 300000

    travel_time = sum(route) / SPEED
    delay = (len(route) - 1) * 0.5

    return round(travel_time + delay, 4)

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta.
# - Buon utilizzo di sum() con una generator expression.
# - Variabili separate che rendono il ragionamento chiaro.
# - Codice leggibile e facile da seguire.

# //! Contro
# - Non è necessario dividere ogni distanza singolarmente:
#   sum(route) / velocity è più semplice.
# - Il nome "traveltime" potrebbe essere scritto come
#   "travel_time" seguendo la convenzione Python (snake_case).
# - Il punto e virgola finale non serve in Python.

# =========================================================
# //* Consigli
# =========================================================

# - Continua a scomporre il problema in variabili intermedie:
#   migliora la leggibilità.
# - Cerca di usare nomi delle variabili in snake_case.
# - Evita i ";" finali: sono inutili in Python.
# - Quando possibile, semplifica i calcoli:
#   sum(route) / velocity è più diretto e leggermente più efficiente.
#
# Valutazione: 9/10
# Soluzione corretta, pulita e già molto vicina a una soluzione ottimale.
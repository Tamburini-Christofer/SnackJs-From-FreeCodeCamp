# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dati la capacità del serbatoio, il livello attuale del carburante
# e il prezzo al gallone, calcolare il costo per riempire
# completamente il serbatoio.
#
# tankSize è la capacità totale del serbatoio in galloni.
# fuelLevel è la quantità attuale di carburante nel serbatoio.
# pricePerGallon è il costo di un gallone di carburante.
#
# Il valore restituito deve essere arrotondato a due cifre decimali
# nel formato: "$d.dd".

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def cost_to_fill(tank_size, fuel_level, price_per_gallon):
    tanz_fuel_level = (tank_size - fuel_level) * price_per_gallon

    return f"${tanz_fuel_level:.2f}"

print(cost_to_fill(20, 0, 4.00))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def cost_to_fill(tank_size, fuel_level, price_per_gallon):
    gallons_needed = tank_size - fuel_level
    cost = gallons_needed * price_per_gallon

    return f"${cost:.2f}"

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La logica è corretta.
# - Formula matematica applicata correttamente.
# - Utilizza le f-string per il formato richiesto.
# - Arrotonda correttamente a due cifre decimali.
# - Soluzione semplice e leggibile.
# - Rispetta completamente la consegna.

# //! Contro
# - Il nome della variabile "tanz_fuel_level" non descrive bene
#   il suo contenuto.
# - Sarebbe più leggibile separare il calcolo dei galloni mancanti
#   dal calcolo del costo totale.
# - Nessuna gestione di eventuali input non validi
#   (anche se non richiesta dall'esercizio).

# =========================================================
# //* Consigli
# =========================================================

# - L'esercizio è stato risolto correttamente.
# - La parte più importante era rispettare il formato "$d.dd"
#   e lo hai fatto perfettamente.
# - Cerca di usare nomi variabili più significativi:
#       gallons_needed
#       fuel_needed
#       total_cost
# - In un colloquio tecnico questa soluzione verrebbe considerata
#   corretta e sufficientemente pulita.
# - Non vedo ottimizzazioni particolari da fare perché la soluzione
#   è già O(1).

# Valutazione: 9/10
#
# Soluzione corretta, semplice e conforme alla consegna.
# Per arrivare a 10/10 basterebbe migliorare il naming delle variabili.
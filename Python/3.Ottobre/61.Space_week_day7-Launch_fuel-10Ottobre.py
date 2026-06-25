# =========================================================
# SNACK - STUDIO DELLA SOLUZIONE
# =========================================================

# Non sapevo svolgere questo esercizio.
#
# Il problema principale è capire che il carburante aggiunto
# ha una massa e quindi richiede altro carburante.
#
# L'idea è:
# 1. Calcolare il carburante necessario per il payload.
# 2. Calcolare il carburante aggiuntivo necessario per il
#    carburante appena aggiunto.
# 3. Ripetere finché il carburante extra richiesto è inferiore a 1 kg.
#
# Per questo motivo è molto utile utilizzare un ciclo while.

def fuel_required(payload_mass):

    # carburante totale accumulato
    total_fuel = payload_mass / 5

    # carburante aggiunto nell'ultima iterazione
    additional_fuel = total_fuel

    while True:

        # quanto carburante serve per sollevare
        # il carburante appena aggiunto
        next_fuel = additional_fuel / 5

        # se è inferiore a 1 kg ci fermiamo
        if next_fuel < 1:
            break

        # aggiungiamo il carburante trovato
        total_fuel += next_fuel

        # diventa il nuovo carburante da analizzare
        additional_fuel = next_fuel

    # arrotondamento ad una cifra decimale
    return round(total_fuel, 1)


print(fuel_required(50))
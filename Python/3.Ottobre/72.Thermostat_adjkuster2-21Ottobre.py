# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data la temperatura attuale in Fahrenheit e una temperatura
# target in Celsius, restituire:
#
# - "Heat: X degrees Fahrenheit" se bisogna riscaldare.
# - "Cool: X degrees Fahrenheit" se bisogna raffreddare.
# - "Hold" se la temperatura è già quella desiderata.
#
# Convertire prima i gradi Celsius in Fahrenheit con:
# F = (C * 1.8) + 32
#
# X deve essere arrotondato a una cifra decimale.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def adjust_thermostat(current_f, target_c):
    to_Fahrenheit = (target_c * 1.8) + 32

    if current_f == to_Fahrenheit:
        return "Hold"
    elif current_f < to_Fahrenheit:
        return f"Heat: {round(to_Fahrenheit - current_f, 1)} degrees Fahrenheit"
    elif current_f > to_Fahrenheit:
        return f"Cool: {round(current_f - to_Fahrenheit, 1)} degrees Fahrenheit"

print(adjust_thermostat(72, 18))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def adjust_thermostat(current_f, target_c):
    target_f = target_c * 1.8 + 32
    difference = round(abs(target_f - current_f), 1)

    if current_f == target_f:
        return "Hold"
    if current_f < target_f:
        return f"Heat: {difference} degrees Fahrenheit"
    return f"Cool: {difference} degrees Fahrenheit"

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Conversione da Celsius a Fahrenheit corretta.
# - Logica dei confronti chiara e ben organizzata.
# - Arrotondamento a una cifra decimale corretto.
# - Utilizzo delle f-string appropriato.

# //! Contro
# - Il nome della variabile to_Fahrenheit può essere semplificato in target_f.
# - Il calcolo della differenza viene ripetuto in due rami dell'if.
# - Dopo un return non è necessario usare elif: basta un nuovo if.
# - I ";" finali non servono in Python.

# =========================================================
# //* Consigli
# =========================================================

# - Evita i ";" a fine riga: sono ereditati da altri linguaggi ma in Python sono inutili.
# - Quando lo stesso calcolo compare più volte, salvalo in una variabile.
# - Usa nomi brevi ma descrittivi (target_f è più leggibile di to_Fahrenheit).
# - Ricorda che dopo un return la funzione termina, quindi spesso gli elif possono essere sostituiti da semplici if.
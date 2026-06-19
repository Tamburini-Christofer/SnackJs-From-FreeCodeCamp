# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================
# Data la temperatura attuale di una stanza e una temperatura target, restituisci una stringa che indichi come regolare la temperatura della stanza in base ai seguenti vincoli:

# Restituisci "riscalda" se la temperatura attuale è inferiore alla temperatura target.

# Restituisci "raffredda" se la temperatura attuale è superiore alla temperatura target.

# Restituisci "mantieni" se la temperatura attuale è uguale alla temperatura target.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def adjust_thermostat(temp, target):

    match temp:
        case temp if temp < target:
            return "heat"
        case temp if temp > target:
            return "cool"
        case _:
            return "hold"

print(adjust_thermostat(68, 72))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def adjust_thermostat(temp, target):
    if temp < target:
        return "heat"
    elif temp > target:
        return "cool"
    else:
        return "hold"

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Uso corretto di match-case
# - Struttura leggibile
# - Logica corretta

# //! Contro
# - Overengineering per un problema semplice
# - Stringhe non coerenti con output richiesto
# - match-case non necessario per due condizioni
# - codice meno immediato rispetto a if/elif/else

# =========================================================
# //* Consigli
# =========================================================

# - Usa if/elif/else per condizioni semplici
# - Usa match-case solo per casi complessi
# - Mantieni coerenza con i valori richiesti dall’esercizio
# - Preferisci soluzioni più semplici e leggibili quando possibile
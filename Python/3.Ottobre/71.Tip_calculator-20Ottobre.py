# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dati il prezzo di un pasto e una percentuale di mancia personalizzata,
# restituire un array contenente gli importi della mancia al:
# - 15%
# - 20%
# - percentuale personalizzata
#
# Il prezzo è nel formato "$N.NN".
# La percentuale è nel formato "25%".
# Restituire gli importi nel formato "$N.NN", arrotondati a due decimali.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def calculate_tips(meal_price, custom_tip):
    tip_conv = int(custom_tip.replace("%", ""))
    price_conv = float(meal_price.replace("$",""))

    return [
        "${:.2f}".format(price_conv * 15 / 100),
        "${:.2f}".format(price_conv * 20 / 100),
        "${:.2f}".format(price_conv * tip_conv / 100)
    ]

print(calculate_tips("$10.00", "25%"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def calculate_tips(meal_price, custom_tip):
    price = float(meal_price.removeprefix("$"))
    custom = int(custom_tip.removesuffix("%"))

    return [
        f"${price * percentage / 100:.2f}"
        for percentage in (15, 20, custom)
    ]

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Conversione corretta di prezzo e percentuale.
# - Formattazione a due decimali corretta.
# - Restituisce i valori nell'ordine richiesto.
# - Codice semplice e facile da seguire.

# //! Contro
# - Ripeti tre volte lo stesso calcolo cambiando solo la percentuale.
# - I nomi tip_conv e price_conv sono comprensibili, ma price e custom risultano più puliti.
# - format() funziona bene, ma le f-string sono oggi lo standard in Python.
# - Se in futuro dovessero cambiare le percentuali, dovresti modificare più righe.

# =========================================================
# //* Consigli
# =========================================================

# - Quando noti lo stesso codice ripetuto più volte, prova a usare un ciclo o una list comprehension.
# - Preferisci le f-string alla funzione format() per una sintassi più moderna e leggibile.
# - Dai nomi alle variabili che descrivano il valore, non l'operazione fatta (es. price invece di price_conv).
# - Continua a prestare attenzione alla formattazione dell'output: è uno dei tuoi punti di forza.
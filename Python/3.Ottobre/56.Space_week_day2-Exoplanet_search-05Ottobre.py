# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data una stringa in cui ogni carattere rappresenta la luminosità
# di una stella.
#
# Conversione dei valori:
# - '0' - '9' -> 0 - 9
# - 'A' - 'Z' -> 10 - 35
#
# Una stella ha un esopianeta se almeno una lettura è minore o uguale
# all'80% della media di tutte le letture.
#
# Restituire True se viene rilevato un esopianeta, altrimenti False.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def has_exoplanet(readings):
    values = []
    
    for v in readings.split():
        if v.upper() == "NAN":
            values.append(ord(v[0]) - 55)
        else: 
            values.append(float(v)) 

    if not values:
        return False

    avg = sum(values) / len(values)
    threshold = avg * 0.8

    return any(v <= threshold for v in values)

print(has_exoplanet("100 102 98 99 50 101"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def has_exoplanet(readings):
    values = []

    for char in readings:
        if char.isdigit():
            values.append(int(char))
        else:
            values.append(ord(char) - ord("A") + 10)

    avg = sum(values) / len(values)
    threshold = avg * 0.8

    return any(v <= threshold for v in values)

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Hai calcolato correttamente media e soglia dell'80%.
# - Hai utilizzato any() in modo elegante per verificare la condizione.
# - Hai gestito il caso di lista vuota.
# - La struttura generale della soluzione è ordinata.

# //! Contro
# - Hai interpretato male il formato dell'input.
#   La consegna specifica che ogni carattere rappresenta una lettura,
#   non che le letture siano separate da spazi.
#
# - Il controllo:
#   if v.upper() == "NAN"
#   non ha alcun legame con la consegna.
#
# - La conversione dei caratteri alfabetici è errata:
#   la consegna richiede A=10, B=11, ..., Z=35.
#
# - Stai convertendo le letture in float, ma i valori sono interi.
#
# - L'esempio testato ("100 102 98 99 50 101") non rispecchia il formato
#   dell'esercizio, che dovrebbe essere qualcosa come:
#   "ABC8D9F".

# =========================================================
# //* Consigli
# =========================================================

# - Prima di iniziare a programmare, individua sempre il formato esatto
#   dell'input. In questo esercizio era il dettaglio più importante.
#
# - Quando la consegna definisce una codifica personalizzata
#   (A=10, B=11, ...), spesso ord() è la soluzione più rapida.
#
# - La parte matematica della soluzione è corretta:
#   media, soglia e utilizzo di any() sono stati implementati bene.
#
# - Cerca di verificare che i tuoi test abbiano lo stesso formato
#   degli esempi descritti nella consegna.
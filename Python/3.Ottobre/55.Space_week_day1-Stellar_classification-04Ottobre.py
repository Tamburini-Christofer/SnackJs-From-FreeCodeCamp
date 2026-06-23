# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Il 4 ottobre inizia la Settimana Mondiale dello Spazio.
#
# Data la temperatura superficiale di una stella in Kelvin (K),
# determinarne la classificazione stellare:
#
# O: 30000 K o superiore
# B: 10000 K - 29999 K
# A: 7500 K - 9999 K
# F: 6000 K - 7499 K
# G: 5200 K - 5999 K
# K: 3700 K - 5199 K
# M: 0 K - 3699 K
#
# Restituire la classificazione corretta.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def classification(temp):

    if temp >= 30000:
        return "O"
    elif temp >= 10000:
        return "B"
    elif temp >= 7500:
        return "A"
    elif temp >= 6000:
        return "F"
    elif temp >= 5200:
        return "G"
    elif temp >= 3700:
        return "K"
    else:
        return "M"

print(classification(5778))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def classification(temp):
    if temp >= 30000:
        return "O"
    if temp >= 10000:
        return "B"
    if temp >= 7500:
        return "A"
    if temp >= 6000:
        return "F"
    if temp >= 5200:
        return "G"
    if temp >= 3700:
        return "K"
    return "M"

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta e conforme alla consegna.
# - Hai sfruttato bene gli intervalli ordinandoli dal valore più alto al più basso.
# - Il codice è molto leggibile.
# - Non hai inserito controlli ridondanti come:
#   temp >= 10000 and temp < 30000.
# - Complessità O(1), quindi ottima dal punto di vista delle prestazioni.

# //! Contro
# - Non ci sono errori logici o casi limite non gestiti rispetto alla consegna.
# - L'uso di molti elif è corretto, ma in questo caso potrebbe essere leggermente
#   semplificato usando solo if consecutivi con return immediato.

# =========================================================
# //* Consigli
# =========================================================

# - Ottima scelta quella di controllare gli intervalli in ordine decrescente:
#   è il modo più semplice per risolvere questo tipo di esercizi.
#
# - Quando gli intervalli sono continui e non sovrapposti,
#   non serve controllare il limite superiore.
#
# - Continua a ragionare in termini di "primo intervallo valido":
#   è una tecnica molto utile negli esercizi con classificazioni,
#   fasce di età, voti, tasse e punteggi.
#
# - Questo esercizio è risolto correttamente e in modo pulito.
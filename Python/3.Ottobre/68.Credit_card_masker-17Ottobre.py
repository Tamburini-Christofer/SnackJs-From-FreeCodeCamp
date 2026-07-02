# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data una stringa di numeri di carte di credito, restituisci una versione
# mascherata della stessa utilizzando i seguenti vincoli:
#
# - La stringa conterrà quattro gruppi di quattro cifre (0-9),
#   separati da un singolo spazio o da un singolo trattino (-).
# - Sostituisci tutte le cifre, tranne le ultime quattro, con un asterisco (*).
# - Lascia invariati i caratteri rimanenti.
#
# Esempio:
# "4012-8888-8888-1881" → "****-****-****-1881"

# =========================================================
# //* Codice scritto senza utilizzo di ChatGPT
# =========================================================

def mask(card):
    masked_card = ""

    for indice in range(len(card)):
        if indice > 14:
            masked_card += card[indice]

        if card[indice] == "-":
            masked_card += "-"
            continue

        if card[indice] == " ":
            masked_card += " "
            continue

        if indice < 14:
            masked_card += "*"

    return masked_card

print(mask("**** **** **** 5100"))

# =========================================================
# //* Codice scritto da ChatGPT (versione migliorata)
# =========================================================

def mask(card):
    result = ""

    digits_seen = 0
    total_digits = sum(c.isdigit() for c in card)

    for char in card:
        if char.isdigit():
            if digits_seen < total_digits - 4:
                result += "*"
            else:
                result += char
            digits_seen += 1
        else:
            result += char

    return result

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Il codice è semplice da seguire.
# - Mantiene correttamente spazi e trattini.
# - L'uso del continue evita annidamenti inutili.
# - L'idea generale della soluzione è corretta.

# //! Contro
# - La soluzione si basa sugli indici della stringa (14 e 15) invece che
#   sul numero di cifre: funziona solo per un formato specifico.
# - Se il separatore cambia (spazi invece di trattini) gli indici non
#   corrispondono più.
# - Maschera anche eventuali asterischi già presenti nell'input.
# - L'algoritmo dovrebbe verificare se il carattere è una cifra, non la
#   sua posizione nella stringa.
# - L'uso di += sulle stringhe ad ogni iterazione è meno efficiente di una
#   lista con "".join(), anche se per stringhe così corte è trascurabile.

# =========================================================
# //* Consigli
# =========================================================

# - Evita di usare numeri "magici" come 14 e 15.
# - Ragiona sul numero delle cifre anziché sulla loro posizione.
# - Usa isdigit() per distinguere le cifre dagli altri caratteri.
# - Cerca di rendere la soluzione indipendente dal tipo di separatore.
# - Quando possibile, scrivi codice che continui a funzionare anche se il
#   formato dell'input cambia leggermente.
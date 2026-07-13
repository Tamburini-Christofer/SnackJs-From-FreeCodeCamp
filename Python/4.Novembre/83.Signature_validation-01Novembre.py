# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Given a message string, a secret key string, and a signature number,
# determine whether the signature is valid using the following encoding method:
#
# Characters have the following values:
# - 'a' to 'z' have values from 1 to 26.
# - 'A' to 'Z' have values from 27 to 52.
# - All other characters have no value.
#
# Calculate the signature by summing the values of all characters
# in the message and the secret key.
#
# For example:
# message = "foo"
# key = "bar"
# signature = 57

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def verify(message, key, signature):
    stringa = 0
    chiave_stringa = 0

    for char in message:

        if char >= "A" and char <= "Z":
            stringa += ord(char) - 38
        elif char >= "a" and char <= "z":
            stringa += ord(char) - 96

    for char in key:

        if char >= "A" and char <= "Z":
            chiave_stringa += ord(char) - 38
        elif char >= "a" and char <= "z":
            chiave_stringa += ord(char) - 96

    totale = stringa + chiave_stringa

    return totale == signature


print(verify("foo", "bar", 57))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def value(text):
    total = 0

    for char in text:
        if "A" <= char <= "Z":
            total += ord(char) - 38
        elif "a" <= char <= "z":
            total += ord(char) - 96

    return total


def verify(message, key, signature):
    return value(message) + value(key) == signature


print(verify("foo", "bar", 57))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La soluzione è corretta e rispetta tutti i requisiti della consegna.
# - Gestisce correttamente lettere maiuscole, minuscole e caratteri non alfabetici.
# - Il codice è semplice da seguire e ben organizzato.
# - Utilizza correttamente ord() per calcolare il valore delle lettere.
# - Restituisce direttamente un valore booleano.

# //! Contro
# - Lo stesso codice viene ripetuto due volte (per message e key).
# - In caso di modifiche alla logica, bisognerebbe aggiornarla in entrambi i cicli.
# - I nomi delle variabili (stringa, chiave_stringa) potrebbero essere più descrittivi, ad esempio message_value e key_value.

# =========================================================
# //* Consigli
# =========================================================

# - Cerca di evitare la duplicazione del codice creando una funzione di supporto.
# - Continua a usare ord(): è una soluzione efficiente per questo tipo di esercizi.
# - Scegli nomi delle variabili che descrivano chiaramente il loro scopo.
# - Quando noti di copiare e incollare lo stesso blocco di codice, chiediti se può diventare una funzione.
#
# Valutazione:
# Correttezza:     10/10
# Leggibilità:      9.5/10
# Ottimizzazione:   8.5/10
# Voto finale:      9.5/10
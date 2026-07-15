# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Given a string, determine whether it is suitable for a social media post.
#
# Return:
# - "short post" if it is within the 40-character limit.
# - "long post" if it exceeds 40 characters but is within the 80-character limit.
# - "invalid post" if it exceeds both limits.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def can_post(message):
    if len(message) < 40 and len(message) != 0:
        return "short post"
    elif len(message) < 80 and len(message) != 0:
        return "long post"
    else:
        return "invalid post"

    return message

print(can_post("This is a longer message but still under eighty characters."))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def can_post(message):
    length = len(message)

    if length <= 40:
        return "short post"
    elif length <= 80:
        return "long post"
    else:
        return "invalid post"

print(can_post("This is a longer message but still under eighty characters."))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La logica generale è corretta.
# - Hai utilizzato correttamente if, elif ed else.
# - Il codice è semplice da seguire.
# - Restituisci direttamente il risultato senza usare variabili inutili.

# //! Contro
# - Hai interpretato male il limite: la consegna dice "within the limit",
#   quindi 40 e 80 devono essere inclusi. Dovevi usare <= e non <.
# - Il controllo len(message) != 0 è inutile: una stringa vuota è comunque
#   entro il limite dei 40 caratteri.
# - Chiami len(message) più volte: sarebbe meglio salvarlo in una variabile.
# - L'ultimo "return message" non verrà mai eseguito perché tutti i rami
#   precedenti terminano con un return.

# =========================================================
# //* Consigli
# =========================================================

# - Fai attenzione alle parole della consegna:
#   "within the limit" significa includere il valore limite.
# - Evita controlli ridondanti come len(message) != 0 quando non sono richiesti.
# - Quando utilizzi più volte len(), salva il risultato in una variabile.
# - Elimina il codice irraggiungibile per mantenere il programma pulito.
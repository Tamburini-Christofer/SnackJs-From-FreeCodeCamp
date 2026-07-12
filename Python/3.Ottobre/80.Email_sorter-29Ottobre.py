# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# On October 29th, 1971, the first email was sent, introducing the
# username@domain format still used today.
#
# Given an array of email addresses, sort them alphabetically by:
# - Domain name (the part after '@')
# - Username (the part before '@') if the domains are the same.
#
# The sorting must be case-insensitive.
#
# Return the sorted array while preserving the original capitalization.
#
# Example:
# ["jill@mail.com", "john@example.com", "jane@example.com"]
# ->
# ["jane@example.com", "john@example.com", "jill@mail.com"]

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def sort(emails):

   return sorted(emails, key=lambda email: (email.split('@')[1].lower(), email.split('@')[0].lower()));

print(sort(["jill@mail.com", "john@example.com", "jane@example.com"]))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def sort(emails):
    return sorted(
        emails,
        key=lambda email: (
            email.split("@")[1].lower(),
            email.split("@")[0].lower()
        )
    )

print(sort(["jill@mail.com", "john@example.com", "jane@example.com"]))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La soluzione è corretta.
# - Hai sfruttato perfettamente il parametro key di sorted().
# - L'ordinamento è case-insensitive grazie a lower().
# - Hai utilizzato una tupla come chiave di ordinamento, che è il modo
#   corretto per ordinare prima per dominio e poi per nome utente.
# - La distinzione tra maiuscole e minuscole viene mantenuta nell'output.
# - Complessità temporale O(n log n), ottimale per un ordinamento.

# //! Contro
# - Il punto e virgola (;) è inutile in Python.
# - split("@") viene eseguito due volte per ogni email; è un piccolo
#   spreco di operazioni, anche se trascurabile nella maggior parte dei casi.

# =========================================================
# //* Consigli
# =========================================================

# - Evita il punto e virgola finale.
# - Per rendere il codice leggermente più efficiente potresti dividere
#   l'email una sola volta.

# Esempio:

# def sort(emails):
#     return sorted(
#         emails,
#         key=lambda email: (
#             (parts := email.split("@"))[1].lower(),
#             parts[0].lower()
#         )
#     )

# - Continua a usare sorted() con key: è uno degli strumenti più potenti
#   e utilizzati in Python.
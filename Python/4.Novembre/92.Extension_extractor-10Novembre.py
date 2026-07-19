# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Given a string representing a filename, return its file extension.
#
# The extension is the part of the filename after the last dot (.).
#
# If the filename does not contain a dot or ends with a dot,
# return "none".
#
# Return the extension exactly as it appears, preserving case.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def get_extension(filename):
    if "." not in filename or filename.endswith("."):
        return "none"

    return filename.split(".")[-1]

print(get_extension("README"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def get_extension(filename):
    if "." not in filename or filename.endswith("."):
        return "none"

    return filename.rsplit(".", 1)[1]


print(get_extension("README"))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La soluzione è corretta e soddisfa tutti i requisiti della consegna.
# - Gestisce correttamente i file senza punto.
# - Gestisce correttamente i file che terminano con un punto.
# - Il codice è molto semplice e facilmente leggibile.
# - Utilizza metodi integrati di Python.

# //! Contro
# - split(".") divide l'intera stringa, anche se interessa solamente l'ultimo punto.
# - Su nomi molto lunghi con molti punti vengono create sottostringhe inutili.
# - rsplit(".", 1) è leggermente più efficiente perché divide solo una volta partendo da destra.

# =========================================================
# //* Consigli
# =========================================================

# - La tua soluzione è già ottima per questo esercizio.
# - Quando devi lavorare solo sull'ultima occorrenza di un carattere, preferisci rsplit().
# - Continua a sfruttare i metodi delle stringhe di Python: rendono il codice pulito e conciso.
# - La complessità temporale è O(n), che è la migliore possibile per questo problema.
# - Nel complesso è una soluzione da 10/10.
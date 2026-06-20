# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Date due stringhe, determinare se la seconda è speculare alla prima.
#
# Regole:
# - stessa sequenza di lettere in ordine inverso
# - maiuscole/minuscole distinte
# - ignorare caratteri non alfabetici

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import re

def is_mirror(str1, str2):
    clean_str1 = re.sub(r"[^a-zA-Z]", "", str1)
    clean_str2 = re.sub(r"[^a-zA-Z]", "", str2)

    return clean_str1 == clean_str2[::-1]

print(is_mirror("Hello World", "dlroW olleH"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

import re

def is_mirror(str1, str2):
    def clean(s):
        return re.sub(r"[^a-zA-Z]", "", s)

    return clean(str1) == clean(str2)[::-1]

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta e molto pulita.
# - Gestisce correttamente l’ignorare dei caratteri non alfabetici.
# - Usa slicing per il reverse in modo efficiente.
# - Rispetta la distinzione maiuscole/minuscole.
# - Complessità O(n), ottima.

# //! Contro
# - Uso di regex non necessario (si poteva usare isalpha()).
# - Duplicazione logica tra le due pulizie delle stringhe.
# - Nessuna validazione esplicita input (non richiesta però).

# =========================================================
# //* Consigli
# =========================================================

# - Questa è una soluzione molto buona: semplice, chiara e corretta.
# - Il punto più “da senior” sarebbe evitare duplicazione:
#       clean()
#
# - Alternativa senza regex più idiomatica:
#       "".join(c for c in s if c.isalpha())
#
# - A livello di logica e rispetto consegna: perfetto.

# Valutazione: 9.5/10
#
# Esercizio risolto correttamente, con ottima chiarezza.
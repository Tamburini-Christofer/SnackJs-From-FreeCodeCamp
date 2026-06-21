# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data la prima riga di un file CSV (valori separati da virgole),
# restituisci un array contenente le intestazioni.
#
# La prima riga di un file CSV contiene intestazioni separate da virgole.
# Rimuovi eventuali spazi bianchi iniziali o finali da ciascuna intestazione.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def get_headings(csv):
    final_csv = []

    csv_conv = csv.split(",")

    for word in csv_conv:
        final_csv.append(str(word.lower()).strip())

    return final_csv

print(get_headings("name,age,city"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def get_headings(csv):
    return [heading.strip() for heading in csv.split(",")]

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Hai utilizzato correttamente split(",") per separare le intestazioni.
# - Hai rimosso gli spazi con strip().
# - Il codice è semplice e facile da seguire.
# - La soluzione funziona per i casi richiesti dalla consegna.

# //! Contro
# - La consegna non richiede di convertire le intestazioni in minuscolo.
#   Con lower() modifichi dati che dovrebbero rimanere invariati.
# - str(word) è inutile perché word è già una stringa.
# - Crei una lista vuota e usi append() quando una list comprehension
#   renderebbe il codice più compatto.
# - Il nome csv_conv non descrive chiaramente il contenuto;
#   headings sarebbe più leggibile.

# =========================================================
# //* Consigli
# =========================================================

# - Attieniti esattamente alla consegna: se non viene richiesto di
#   modificare il testo, evita trasformazioni aggiuntive.
# - Evita conversioni superflue come str() su oggetti già stringa.
# - Quando devi trasformare ogni elemento di una lista, valuta
#   l'utilizzo delle list comprehension.
# - Continua a usare nomi descrittivi per migliorare la leggibilità.

# Complessità:
# Tempo: O(n)
# Spazio: O(n)
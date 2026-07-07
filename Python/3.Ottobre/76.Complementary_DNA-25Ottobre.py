# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

"""
Data una stringa che rappresenta una sequenza di DNA, restituisci il suo
filamento complementare seguendo queste regole:

- "A" ↔ "T"
- "C" ↔ "G"

Esempio:
"ACGT" → "TGCA"
"""

# =========================================================
# //* Codice scritto senza utilizzo di ChatGPT
# =========================================================

def complementary_dna(strand):
    dna = []

    for i in range(len(strand)):
        if strand[i] == "A":
            dna.append("T")
        if strand[i] == "C":
            dna.append("G")
        if strand[i] == "T":
            dna.append("A")
        if strand[i] == "G":
            dna.append("C")

    return "".join(dna)

print(complementary_dna("ACGT"))

# =========================================================
# //* Codice scritto da ChatGPT (versione migliorata)
# =========================================================

def complementary_dna(strand):
    complements = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }

    return "".join(complements[base] for base in strand)

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta.
# - La logica è semplice da capire.
# - Uso corretto della lista e di "".join().
# - Restituisce il risultato richiesto per qualsiasi sequenza valida.
# - Facile da modificare e da debuggare.

# //! Contro
# - I ";" finali sono inutili in Python.
# - Stai usando range(len(strand)) quando non ti serve l'indice:
#   puoi iterare direttamente sui caratteri.
# - I quattro "if" potrebbero essere "elif": funziona comunque,
#   ma Python esegue tutti i controlli invece di fermarsi dopo il primo.
# - Una mappa (dizionario) rende il codice più corto e facilmente estendibile.

# =========================================================
# //* Consigli
# =========================================================

# - Preferisci:
#
#   for base in strand:
#
#   invece di:
#
#   for i in range(len(strand)):
#
#   quando non hai bisogno dell'indice.
#
# - Quando i valori corrispondono a una semplice sostituzione,
#   un dizionario è spesso la soluzione più Pythonica.
#
# - Se continui a usare gli if, utilizza "elif" per evitare confronti inutili.
#
# - Continua a usare "".join(): è il modo corretto ed efficiente
#   per costruire stringhe in Python.

# =========================================================
# ⭐ Valutazione
# =========================================================

# Correttezza:      10/10
# Leggibilità:      9/10
# Efficienza:       9/10
# Stile Python:     8.5/10
#
# Voto complessivo: 9.1/10
#
# Hai scritto una soluzione corretta e lineare. Si vede che hai scelto
# un approccio chiaro piuttosto che complicare il codice. Per renderlo
# ancora più Pythonico, evita i ";" finali, itera direttamente sui caratteri
# e valuta l'uso di un dizionario per le sostituzioni.
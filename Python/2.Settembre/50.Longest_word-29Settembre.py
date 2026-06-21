# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data una frase, restituisci la parola più lunga al suo interno.
#
# Ignora i punti (.) nel calcolo della lunghezza delle parole.
#
# Se più parole hanno la stessa lunghezza,
# restituisci la prima che compare.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def get_longest_word(sentence):
    sentence_split = sentence.replace(".", "").split()

    longest_word = sentence_split[0]

    for word in sentence_split:
        if len(word) > len(longest_word):
            longest_word = word

    return longest_word

print(get_longest_word("Coding challenges are fun and educational."))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def get_longest_word(sentence):
    words = sentence.replace(".", "").split()

    longest_word = words[0]

    for word in words:
        if len(word) > len(longest_word):
            longest_word = word

    return longest_word

# Oppure:

def get_longest_word(sentence):
    return max(sentence.replace(".", "").split(), key=len)

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta.
# - Gestisci correttamente la rimozione dei punti.
# - Rispetti la regola di restituire la prima parola in caso di parità.
# - Algoritmo semplice e leggibile.
# - Variabili con nomi comprensibili.

# //! Contro
# - Il punto e virgola finale dopo longest_word = word non serve in Python.
# - Potresti usare max(..., key=len) per una soluzione più compatta.
# - Non gestisci il caso di stringa vuota (se richiesto).

# =========================================================
# //* Consigli
# =========================================================

# - Continua a inizializzare il risultato con il primo elemento:
#   è una tecnica molto comune.
# - Evita i ";" perché non fanno parte dello stile Python.
# - Quando hai acquisito dimestichezza, prova a conoscere funzioni
#   built-in come max(), min(), any() e all().
# - Prima di ottimizzare, privilegia sempre chiarezza e correttezza:
#   il tuo codice è già molto leggibile.

# Complessità:
# Tempo: O(n)
# Spazio: O(n)
# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Given a string, return an array containing the number of vowels and
# the number of consonants present in the string.
#
# Vowels are represented by uppercase and lowercase letters:
# a, e, i, o, u.
#
# Consonants are represented by all other uppercase and lowercase letters.
#
# Ignore non-alphabetic characters.
#
# Example:
#
# Input:
# "Hello World"
#
# Output:
# [3, 7]

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def count(s):

    converted_lower = s.lower()
    voc = 0
    con = 0

    vocal = "aeiou"

    for char in converted_lower:
        if char in vocal:
            voc += 1
        elif char.isalpha():
            con += 1

    return [voc, con]


print(count("Hello World"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def count(s):
    vowels = "aeiou"
    vowels_count = 0
    consonants_count = 0

    for char in s.lower():
        if char in vowels:
            vowels_count += 1
        elif char.isalpha():
            consonants_count += 1

    return [vowels_count, consonants_count]


print(count("Hello World"))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La soluzione è corretta e rispetta completamente la consegna.
# - Hai gestito correttamente maiuscole e minuscole usando lower().
# - Hai ignorato correttamente i caratteri non alfabetici.
# - Il controllo delle vocali è semplice e leggibile.
# - La complessità è ottimale: O(n).

# //! Contro
# - Il nome della variabile "vocal" sarebbe più corretto come "vowels" in inglese.
# - "converted_lower" è leggermente lungo: puoi usare direttamente s.lower() nel ciclo.
# - Sono presenti alcuni ";" non necessari in Python.
# - I nomi "voc" e "con" sono comprensibili ma meno descrittivi rispetto a "vowels_count" e "consonants_count".

# =========================================================
# //* Consigli
# =========================================================

# - Ottimo esercizio: la logica è semplice ma hai gestito bene tutti i casi limite.
# - In Python evita il punto e virgola: non serve come in JavaScript.
# - Cerca di usare nomi di variabili descrittivi, soprattutto nei progetti più grandi.
# - Continua a ragionare dividendo il problema in condizioni semplici: è un ottimo approccio.
# - Questa soluzione è da livello base/intermedio ed è scritta correttamente.

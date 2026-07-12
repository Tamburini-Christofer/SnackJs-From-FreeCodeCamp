# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Given a string representing a variable name, convert it into "spooky case"
# following these rules:
#
# - Replace all underscores (_) and hyphens (-) with a tilde (~).
# - Convert the first letter of the string to uppercase and all other letters
#   to lowercase.
# - Ignore the tilde when counting letters.
#
# Example:
# Given "hello_world", return "HeLlO~wOrLd".

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def spookify(boo):
    converted_word = boo.replace("-_", "~").replace("-", "~").replace("_", "~")
    final_word = "";

    letter_count = 0

    for char in converted_word:
        if char == "~":
            final_word += char
            continue
            
        if letter_count % 2 == 0:
            final_word += char.upper()
        else:
            final_word += char.lower()

        letter_count += 1

    return final_word

print(spookify("hello_world"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def spookify(word):
    word = word.replace("_", "~").replace("-", "~")

    result = ""
    count = 0

    for char in word:
        if char == "~":
            result += char
            continue

        result += char.upper() if count % 2 == 0 else char.lower()
        count += 1

    return result

print(spookify("hello_world"))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La logica è corretta.
# - Hai gestito bene il fatto che la tilde non deve influenzare il conteggio.
# - Hai usato continue nel modo giusto per saltare caratteri speciali.
# - Il controllo con il modulo (%) per alternare maiuscole e minuscole è corretto.
# - Il codice è leggibile e facile da seguire.

# //! Contro
# - Il replace("-_", "~") è inutile perché il caso "-_" viene già gestito
#   sostituendo prima "-" e poi "_".
# - Il punto e virgola dopo final_word è superfluo in Python.
# - La concatenazione delle stringhe con += dentro un ciclo può essere meno
#   efficiente con stringhe molto lunghe.
# - Il nome del parametro "boo" non descrive il contenuto della variabile.

# =========================================================
# //* Consigli
# =========================================================

# - Usa nomi di variabili descrittivi:
#   "word" o "variable_name" sono più chiari di "boo".
#
# - Ricorda che replace() può essere concatenato:
#   string.replace("_", "~").replace("-", "~")
#
# - Per stringhe molto grandi puoi usare una lista e poi "".join(),
#   ma per esercizi di questo tipo il tuo approccio è assolutamente valido.
#
# - Ottima gestione del conteggio ignorando i caratteri speciali:
#   è la parte più importante dell'esercizio.
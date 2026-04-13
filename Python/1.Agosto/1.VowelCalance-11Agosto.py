# ===============================
# ESERCIZIO: STRINGA BILANCIATA
# ===============================

# ! OBIETTIVO
# Controllare se il numero di vocali nella prima metà
# della stringa è uguale a quello nella seconda metà

# ===============================
# VERSIONE CORRETTA + COMMENTATA
# ===============================

def is_balanced(s):
    # ! lunghezza stringa
    n = len(s)

    # ! punto centrale
    mid = n // 2

    # ! se dispari, salta il carattere centrale
    if n % 2 != 0:
        first_half = s[:mid]
        second_half = s[mid+1:]
    else:
        first_half = s[:mid]
        second_half = s[mid:]

    # ! contatori vocali
    count1 = 0
    count2 = 0

    # ! vocali
    vowels = "aeiouAEIOU"

    # ===============================
    # PRIMA META'
    # ===============================

    for char in first_half:   # ! ciclo su ogni carattere
        if char in vowels:   # ! controlla se è vocale
            count1 += 1      # ! incrementa

    # ===============================
    # SECONDA META'
    # ===============================

    for char in second_half:
        if char in vowels:
            count2 += 1

    # ! confronto finale
    return count1 == count2

# ===============================
# TEST
# ===============================

print(is_balanced("racecar"))  # True


# ===============================
# SPIEGAZIONE DEL TUO CODICE
# ===============================

# def is_balanced(s):
#     middlePart = round(len(s) / 2)
#
# ! ERRORE: round() non serve
# ! meglio usare // per evitare problemi

#     firstPart = 0
#     secondPart = 0

# ! OK: contatori corretti

#     for f range(middlePart):
#
# ! ERRORE: manca "in"
# ! corretto: for i in range(middlePart)

#         if(f == /[aeiou]/i) firstPart++
#
# ! ERRORE GROSSO:
# - Python non usa regex così
# - ++ NON ESISTE
# - f è un numero, non un carattere
#
# ! CORRETTO:
# if s[i] in "aeiouAEIOU":
#     firstPart += 1

#     for s range(len(s)):
#
# ! ERRORE:
# - stai sovrascrivendo "s"
# - manca "in"

#     if(s == /[aeiou]/i) secondPart++
#
# ! stessi errori sopra

# ===============================
# CONCETTI IMPORTANTI CHE TI SERVONO
# ===============================

# ! Python NON usa ++
# usa: x += 1

# ! NON esistono regex tipo JS inline
# usa: char in "aeiou"

# ! for funziona così:
# for i in range(10):
# for char in stringa:

# ! slicing stringhe:
# s[:mid] -> prima metà
# s[mid:] -> seconda metà

# ===============================
# FINE
# ===============================

# Riscrivo completo 

def is_balanced(s): 
    lunghezza = len(s)
    metà = lunghezza // 2

    if lunghezza % 2 != 0:
        primaMetà = s[:metà]
        secondaMetà = s[metà+1:]
    else:
        primaMetà = s[:metà]
        secondaMetà = s[metà:]

    conta1 = 0
    conta2 = 0

    vocali = "aeiouAEIOU"

    for char in primaMetà:
        if char in vocali:
            conta1 += 1

    for char in secondaMetà:
        if char in vocali:
            conta2 += 1
            
    return conta1 == conta2

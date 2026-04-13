# ==========================================
# ESERCIZIO: SUCCESSIONE DI FIBONACCI
# ==========================================

# ! CONSEGNA
# La successione di Fibonacci è una serie di numeri
# in cui ogni numero è la somma dei due precedenti.
#
# Esempio:
# 0, 1, 1, 2, 3, 5, 8, 13...
#
# INPUT:
# - una lista con i primi due numeri
# - una lunghezza desiderata
#
# OUTPUT:
# - una lista con la sequenza completa
#
# CASI PARTICOLARI:
# - se lunghezza = 0 → []


# ==========================================
# TUO CODICE (CON ERRORI)
# ==========================================

# def fibonacci_sequence(start_sequence, length):
#     arrayPartenza = start_sequence.copy()
#
#     for n in arrayPartenza range(length):
#         arrayPartenza.add[n] = arrayPartenza[1] + arrayPartenza[0]
#
#     return arrayPartenza


# ==========================================
# ⚡ FEEDBACK VELOCE
# ==========================================

# 👍 idea corretta
# ❌ errori su for, append e logica Fibonacci


# ==========================================
# ❌ ERRORI SPIEGATI
# ==========================================

# 1. for sbagliato
# ❌ for n in arrayPartenza range(length)
# ✔ for i in range(...)

# 2. .add non esiste per liste
# ✔ usare append()

# 3. logica Fibonacci errata
# ❌ usavi sempre index 0 e 1
# ✔ devi usare gli ultimi due elementi [-1] e [-2]


# ==========================================
# ✅ CODICE CORRETTO
# ==========================================

def fibonacci_sequence(start_sequence, length):

    # ! caso speciale
    if length == 0:
        return []

    # ! copia lista iniziale
    seq = start_sequence.copy()

    # ! continua finché non raggiungi la lunghezza
    while len(seq) < length:
        prossimo = seq[-1] + seq[-2]
        seq.append(prossimo)

    return seq


# ==========================================
# TEST
# ==========================================

print(fibonacci_sequence([0, 1], 10))
# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


# ==========================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# ==========================================

# if length == 0:
# 👉 se vogliono lunghezza zero → lista vuota

# seq = start_sequence.copy()
# 👉 eviti di modificare la lista originale

# while len(seq) < length:
# 👉 loop finché non arrivi alla lunghezza richiesta

# prossimo = seq[-1] + seq[-2]
# 👉 somma ultimi due numeri

# seq.append(prossimo)
# 👉 aggiunge il nuovo numero

# return seq
# 👉 restituisce tutta la sequenza


# ==========================================
# 💡 CONSIGLI IMPORTANTI
# ==========================================

# ✔ usa sempre append() per liste
# ✔ usa [-1] e [-2] per ultimi valori
# ✔ usa while quando la lunghezza cambia


# ==========================================
# 🔥 VERSIONE ALTERNATIVA CON FOR
# ==========================================

# def fibonacci_sequence(start_sequence, length):
#     if length == 0:
#         return []
#
#     seq = start_sequence.copy()
#
#     for i in range(length - len(seq)):
#         seq.append(seq[-1] + seq[-2])
#
#     return seq


# ==========================================
# FINE
# ==========================================

# Riscrivo il codice 

def fibonacci_sequence(start_sequence, length):
    if length == 0: 
        return []

    copyList = start_sequence.copy()

    while len(copyList) < length:
        value = copyList[-1] + copyList[-2]
        copyList.append(value)
    
    return copy_list
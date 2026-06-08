# ==========================================
# ⚡ FEEDBACK VELOCE
# ==========================================
# Hai capito bene la logica generale del problema (confronto carattere per carattere).
# Però il codice non funziona perché stai usando metodi e variabili in modo errato
# e stai anche sommando invece di confrontare battaglie singole.

# ==========================================
# ❌ ERRORI SPIEGATI
# ==========================================

# ❌ 1. Uso sbagliato di findall
# point.findall(...) NON esiste.
# findall è del modulo re, non delle stringhe.
# Inoltre qui non serve proprio regex.

# ❌ 2. Logica sbagliata: somma invece di battaglia
# Il problema richiede confronto 1 vs 1 per posizione,
# NON somma totale delle energie.

# ❌ 3. count_opp mai aggiornato
# Nel secondo ciclo stai ancora usando count_my invece di count_opp.

# ❌ 4. Valori lettere errati per A-Z
# ord('A') - 64 → dà 1 invece di 27.
# Formula corretta: ord(c) - 64 + 26

# ❌ 5. Numeri trattati male
# stai facendo: count_my += point (stringa)
# invece devi convertire con int(point)

# ❌ 6. Import inutile
# import re non viene usato (da rimuovere)

# ❌ 7. Mancanza logica di battaglia per posizione
# Devi confrontare ogni coppia (my_army[i], opposing_army[i])

# ==========================================
# ✅ CODICE CORRETTO
# ==========================================

def strength(char):
    if char.islower():
        return ord(char) - 96
    elif char.isupper():
        return ord(char) - 64 + 26
    elif char.isdigit():
        return int(char)
    else:
        return 0


def battle(my_army, opposing_army):
    if len(my_army) > len(opposing_army):
        return "Opponent retreated"
    elif len(my_army) < len(opposing_army):
        return "We retreated"

    my_wins = 0
    opp_wins = 0

    for my_char, opp_char in zip(my_army, opposing_army):
        my_strength = strength(my_char)
        opp_strength = strength(opp_char)

        if my_strength > opp_strength:
            my_wins += 1
        elif my_strength < opp_strength:
            opp_wins += 1

    if my_wins > opp_wins:
        return "We won"
    elif my_wins < opp_wins:
        return "We lost"
    else:
        return "It was a tie"


print(battle("Hello", "World"))

# ==========================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# ==========================================

# def strength(char):
# Funzione che assegna un valore a un singolo carattere

# if char.islower():
# Se è minuscola (a-z)

# return ord(char) - 96
# converte 'a'→1, 'b'→2, ..., 'z'→26

# elif char.isupper():
# Se è maiuscola (A-Z)

# return ord(char) - 64 + 26
# converte 'A'→27, ..., 'Z'→52

# elif char.isdigit():
# Se è numero

# return int(char)
# converte '0'→0, '9'→9

# else:
# qualsiasi altro simbolo

# return 0
# valore nullo

# ------------------------------------------

# def battle(...)
# funzione principale

# controllo lunghezze:
# se diversi → qualcuno "ritira"

# my_wins / opp_wins:
# contatori vittorie

# zip(my_army, opposing_army):
# confronta carattere per carattere

# confronto strength:
# chi è più forte vince il round

# risultato finale:
# confronto vittorie totali

# ==========================================
# 🎯 CONCETTI PYTHON IMPARATI
# ==========================================

# - Funzioni helper (strength)
# - zip() per confronti paralleli
# - ord() per conversione caratteri
# - islower / isupper / isdigit
# - logica a battaglie singole

# ==========================================
# 🚀 COME LO FAREBBE UN PROGRAMMATORE PIÙ ESPERTO
# ==========================================

# - Separare sempre logica (strength function)
# - Evitare regex per problemi semplici
# - Usare zip per confronti paralleli
# - Evitare variabili duplicate o confuse
# - Scrivere codice leggibile prima di "complicarlo"

# ==========================================
# 🏆 VALUTAZIONE FINALE
# ==========================================

# Logica: 6/10
# Sintassi: 3/10
# Pulizia: 4/10
# Pythonic: 3/10

# Voto complessivo: 4/10
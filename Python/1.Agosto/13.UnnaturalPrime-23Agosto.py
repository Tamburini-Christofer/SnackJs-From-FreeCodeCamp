# =========================================================
# ESERCIZIO:
# Controllare se un numero è:
#
# - un numero primo
# - oppure un numero primo negativo
#
# Regole:
# ✔ I numeri primi sono > 1
# ✔ Devono essere divisibili solo per 1 e se stessi
# ✔ I numeri negativi funzionano uguale usando il valore assoluto
# ✔ 0, 1 e -1 NON sono primi
# =========================================================


# =========================================================
# ⚡ FEEDBACK VELOCE
# =========================================================
# Ottimo lavoro.
#
# Hai usato bene:
# ✔ abs()
# ✔ ciclo for
# ✔ controllo del resto %
# ✔ return False immediato
#
# La logica è corretta.
#
# C’è solo una piccola ottimizzazione possibile:
# non serve controllare fino al numero stesso.


# =========================================================
# ❌ ERRORI SPIEGATI
# =========================================================

# 1) Controlli troppi numeri
#
# range(2, converted_number)
#
# Funziona, MA è poco efficiente.
#
# Esempio:
#
# Per 101 controlli:
# 2,3,4,5,6,7...100
#
# In realtà basta controllare
# fino alla radice quadrata del numero.
#
# Questo rende il codice MOLTO più veloce.


# 2) Nome variabile
#
# converted_number
#
# Potrebbe essere più chiaro:
#
# absolute_number
#
# perché stai usando il valore assoluto.


# =========================================================
# ✅ CODICE CORRETTO E OTTIMIZZATO
# =========================================================

def is_unnatural_prime(n):

    # 0, 1 e -1 NON sono numeri primi
    if n == 0 or n == 1 or n == -1:
        return False

    # Converte il numero in positivo
    absolute_number = abs(n)

    # Controlla i divisori
    # fino alla radice quadrata
    for number in range(2, int(absolute_number ** 0.5) + 1):

        # Se trovi un divisore
        # non è primo
        if absolute_number % number == 0:
            return False

    # Se non trovi divisori
    # allora è primo
    return True


print(is_unnatural_prime(19))


# =========================================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# =========================================================

# def is_unnatural_prime(n):
#
# Crei una funzione che riceve:
#
# n -> numero da controllare


# if n == 0 or n == 1 or n == -1:
#
# 0, 1 e -1 NON sono numeri primi.
#
# Quindi restituisci subito False.


# absolute_number = abs(n)
#
# abs() trasforma il numero in positivo.
#
# Esempi:
#
# abs(-19) -> 19
# abs(19)  -> 19
#
# Così puoi controllare sia positivi
# che negativi con la stessa logica.


# range(2, int(absolute_number ** 0.5) + 1)
#
# Questa è la parte importante.
#
# absolute_number ** 0.5
#
# calcola la radice quadrata.
#
# Esempio:
#
# sqrt(25) = 5
#
# Basta controllare i divisori
# fino alla radice quadrata.
#
# Perché?
#
# Se esiste un divisore più grande,
# ne esiste sempre uno più piccolo.


# if absolute_number % number == 0:
#
# % controlla il resto.
#
# Se il resto è 0:
#
# il numero è divisibile.
#
# Quindi NON è primo.


# return False
#
# Appena trovi un divisore:
# esci subito.


# return True
#
# Se il ciclo finisce senza trovare divisori:
#
# il numero è primo.


# =========================================================
# ESEMPI
# =========================================================
#
# 19
#
# divisori controllati:
# 2, 3, 4
#
# Nessuno divide 19
#
# => True
#
#
# -7
#
# abs(-7) -> 7
#
# 7 è primo
#
# => True
#
#
# 20
#
# 20 % 2 == 0
#
# => False
# =========================================================
# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# A prime number is a positive integer greater than 1 that is divisible
# only by 1 and itself.
#
# The first five prime numbers are:
# 2, 3, 5, 7, 11
#
# Given a positive integer n, return the nth prime number.
#
# Example:
# Given 5, return 11.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def nth_prime(n):
    primi = []
    numero_da_testare = 2 

    while len(primi) < n:
        es_primo = True

        divisore = 2
        while divisore * divisore <= numero_da_testare:
            if numero_da_testare % divisore == 0:
                es_primo = False
                break 
            divisore += 1
        
        if es_primo:
            primi.append(numero_da_testare)
            
        numero_da_testare += 1

    return primi[-1]

print(nth_prime(5))

# =========================================================
# //* Codice scritto da Chatgpt (versione migliorata)
# =========================================================

def nth_prime(n):
    primes = []
    number = 2

    while len(primes) < n:
        is_prime = True

        for divisor in range(2, int(number ** 0.5) + 1):
            if number % divisor == 0:
                is_prime = False
                break

        if is_prime:
            primes.append(number)

        number += 1

    return primes[-1]

print(nth_prime(5))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La logica è corretta.
# - Hai utilizzato un algoritmo efficiente per verificare se un numero è primo:
#   controllare fino alla radice quadrata del numero.
# - Hai gestito bene il ciclo fino al raggiungimento dell'n-esimo primo.
# - La variabile es_primo rende il codice facilmente comprensibile.
# - La soluzione funziona correttamente per diversi valori di n.

# //! Contro
# - Creare una lista di tutti i numeri primi fino all'n-esimo è leggermente
#   più dispendioso del necessario.
# - Il nome "es_primo" è comprensibile, ma "is_prime" sarebbe più vicino
#   alla convenzione Python.
# - Il doppio while rende il codice un po' più lungo rispetto a un for.
# - La variabile "primi" contiene tutti i risultati, ma serve solo l'ultimo.

# =========================================================
# //* Consigli
# =========================================================

# - Continua a usare il controllo fino alla radice quadrata:
#   è una tecnica fondamentale negli algoritmi sui numeri primi.
#
# - Per migliorare ancora puoi evitare di salvare tutti i primi:
#   basta usare un contatore dei numeri primi trovati.
#
# - Quando una variabile rappresenta uno stato booleano, nomi come:
#   is_prime, found, valid
#   sono più leggibili nello standard Python.
#
# - Ottimo esercizio: qui hai applicato correttamente cicli annidati,
#   condizioni e ottimizzazione matematica.
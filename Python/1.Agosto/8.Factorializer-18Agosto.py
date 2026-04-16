# ============================================================
# 🧠 ESERCIZIO
# ============================================================

# Calcolare il fattoriale di un numero intero tra 0 e 20.
# Il fattoriale di n è il prodotto di tutti i numeri da 1 a n.
# Per definizione: 0! = 1

# Esempio:
# 5! = 5 * 4 * 3 * 2 * 1 = 120


# ============================================================
# 👨‍💻 CODICE SCRITTO DA ME
# ============================================================

def factorial(n):
    if n == 0: return 1

    factor = 1;

    for numero in range(1, n + 1):
        factor = factor * numero

    return factor


print(factorial(5))


# ============================================================
# ⚡ FEEDBACK VELOCE
# ============================================================

# Codice corretto 👍
# Logica giusta e semplice da seguire
# Ottimo uso del ciclo for

# Solo un dettaglio di stile da migliorare:
# - il punto e virgola ";" non serve in Python


# ============================================================
# ❌ ERRORI SPIEGATI
# ============================================================

# ❌ factor = 1;
# Il ";" non è necessario in Python
# Non rompe il codice, ma è stile non corretto

# ✔️ Python standard:
# factor = 1


# ============================================================
# ✅ CODICE CORRETTO (PULITO)
# ============================================================

def factorial(n):

    # caso base: 0! = 1
    if n == 0:
        return 1

    # variabile accumulatore
    factor = 1

    # moltiplico tutti i numeri da 1 a n
    for numero in range(1, n + 1):
        factor *= numero

    return factor


# ============================================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# ============================================================

# def factorial(n):
# → funzione che prende un numero

# if n == 0:
# → caso speciale del fattoriale

# return 1
# → definizione matematica: 0! = 1

# factor = 1
# → variabile che accumula il risultato

# for numero in range(1, n + 1):
# → ciclo da 1 a n incluso

# factor *= numero
# → moltiplico progressivamente
# esempio con 5:
# 1 → 1
# 1*2 → 2
# 2*3 → 6
# 6*4 → 24
# 24*5 → 120

# return factor
# → restituisce il risultato finale


# ============================================================
# 🧪 TEST
# ============================================================

print(factorial(0))  # 1
print(factorial(5))  # 120
print(factorial(7))  # 5040
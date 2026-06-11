# ============================================================
# 🧠 ESERCIZIO
# ============================================================

# Dato un numero intero positivo n (fino a 1000),
# restituire la somma dei quadrati di tutti i numeri da 1 a n.

# Esempio:
# n = 5 → 1² + 2² + 3² + 4² + 5² = 55


# ============================================================
# 👨‍💻 CODICE SCRITTO DA ME
# ============================================================

def sum_of_squares(n):

    sum_sqrt = 0;

    for number in range(1, n + 1 ):
        sum_sqrt += number**2

    return sum_sqrt


print(sum_of_squares(5))


# ============================================================
# ⚡ FEEDBACK VELOCE
# ============================================================

# Codice corretto 👍
# Logica giusta e molto chiara
# Ottimo uso del ciclo for e dell'operatore **

# Solo un piccolo dettaglio di naming:
# sum_sqrt non rappresenta le radici quadrate
# ma la somma dei quadrati


# ============================================================
# ❌ ERRORI SPIEGATI
# ============================================================

# ❌ sum_sqrt
# Il nome è fuorviante:
# "sqrt" fa pensare a square root (radice quadrata)

# ✔️ Meglio usare:
# sum_squares


# ❌ punto e virgola ";"
# Non serve in Python


# ============================================================
# ✅ CODICE CORRETTO (PULITO)
# ============================================================

def sum_of_squares(n):

    # accumulatore della somma
    sum_squares = 0

    # ciclo da 1 a n
    for number in range(1, n + 1):
        sum_squares += number ** 2

    return sum_squares


# ============================================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# ============================================================

# def sum_of_squares(n):
# → funzione che prende un numero

# sum_squares = 0
# → variabile accumulatore

# for number in range(1, n + 1):
# → ciclo da 1 fino a n incluso

# number ** 2
# → elevo al quadrato il numero

# sum_squares += ...
# → sommo progressivamente i quadrati

# return sum_squares
# → restituisce il risultato finale


# ============================================================
# 🧪 TEST
# ============================================================

print(sum_of_squares(5))   # 55
print(sum_of_squares(3))   # 14
print(sum_of_squares(10))  # 385
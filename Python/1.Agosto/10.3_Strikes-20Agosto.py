# ============================================================
# 🧠 ESERCIZIO
# ============================================================

# Dato un numero intero n (1 → 10.000),
# contare quanti numeri da 1 a n hanno il quadrato
# che contiene almeno una cifra "3".

# Esempio:
# 10 → controlli 1², 2², ... 10²
# e conti quelli che hanno "3" nel risultato


# ============================================================
# 👨‍💻 CODICE SCRITTO DA ME
# ============================================================

def squares_with_three(n):

    if n == 1: return 0

    cont = 0;

    for number in range(1, n + 1):
        quadrato = number ** 2
        if "3" in str(quadrato):
            cont += 1

    return cont


print(squares_with_three(100))


# ============================================================
# ⚡ FEEDBACK VELOCE
# ============================================================

# Codice corretto 👍
# Logica chiara e funzionante
# Ottimo uso di:
# - range
# - conversione str()
# - controllo "in"

# Nessun errore logico importante


# ============================================================
# ❌ ERRORI SPIEGATI
# ============================================================

# ⚠️ if n == 1: return 0
# Non è necessario e può essere sbagliato in altri contesti

# Perché?
# 1² = 1 → non contiene "3" → quindi 0 è corretto
# ma il controllo è ridondante

# ✔️ meglio lasciare la logica generale


# ❌ punto e virgola ";"
# non serve in Python


# ============================================================
# ✅ CODICE CORRETTO (PULITO)
# ============================================================

def squares_with_three(n):

    cont = 0

    for number in range(1, n + 1):

        quadrato = number ** 2

        # trasformo in stringa e cerco la cifra "3"
        if "3" in str(quadrato):
            cont += 1

    return cont


# ============================================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# ============================================================

# cont = 0
# → contatore dei numeri validi

# for number in range(1, n + 1):
# → ciclo su tutti i numeri da 1 a n

# quadrato = number ** 2
# → calcolo il quadrato

# str(quadrato)
# → converto il numero in stringa
# esempio: 49 → "49"

# "3" in str(quadrato)
# → controllo se contiene la cifra 3

# cont += 1
# → incremento il contatore


# ============================================================
# 🧪 TEST
# ============================================================

print(squares_with_three(10))
print(squares_with_three(100))
print(squares_with_three(500))
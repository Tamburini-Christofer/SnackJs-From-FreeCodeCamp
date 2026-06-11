# ===============================
# VALIDAZIONE NUMERO IN UNA BASE (2-36)
# ===============================

# ! OBIETTIVO
# Controllare se una stringa rappresenta un numero valido
# nella base data (da 2 a 36)

# ===============================
# VERSIONE COMPLETA + CONSIGLI DA DEV
# ===============================

def is_valid_number(n, base):
    # ===============================
    # NORMALIZZAZIONE INPUT
    # ===============================

    # ! rendiamo tutto maiuscolo per evitare problemi A/a
    n = n.upper()

    # ! tutte le cifre possibili fino alla base 36
    digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    # ! prendiamo solo le cifre valide per la base scelta
    valid_digits = digits[:base]

    # ===============================
    # CONSIGLIO IMPORTANTE (LOGICA)
    # ===============================
    # 👉 NON serve convertire in int
    # 👉 NON serve fare confronti > o <
    # 👉 basta controllare se il carattere esiste tra quelli validi

    # ===============================
    # CONTROLLO CARATTERE PER CARATTERE
    # ===============================

    for char in n:
        # ! se trovi un carattere non valido, puoi uscire subito
        if char not in valid_digits:
            return False

    # ! se tutti i caratteri sono validi
    return True

# ===============================
# TEST RAPIDI
# ===============================

print(is_valid_number("10101", 2))   # True
print(is_valid_number("10201", 2))   # False
print(is_valid_number("1A", 16))     # True
print(is_valid_number("1G", 16))     # False
print(is_valid_number("Z9", 36))     # True

# ===============================
# ERRORI CHE STAVI FACENDO (IMPORTANTI)
# ===============================

# ❌ usare int() su lettere (non funziona per base 16/36)
# ❌ confrontare caratteri con > o <
# ❌ logica separata per ogni base (non serve)
# ❌ usare false invece di False

# ===============================
# COME DEVI PENSARE (MENTAL MODEL)
# ===============================

# ✔ ogni base = un insieme di caratteri validi
# ✔ il problema diventa: "ogni char è dentro quell'insieme?"

# ===============================
# TRUCCHI DA DEVELOPER
# ===============================

# 💡 digits[:base] è il trucco principale
# 💡 set(char) sarebbe ancora più veloce in progetti grandi
# 💡 return False subito = codice più efficiente

# ===============================
# VERSIONE PIÙ AVANZATA (OPTIONAL)
# ===============================

# puoi anche ottimizzare così:
# valid_set = set(valid_digits)
# return all(char in valid_set for char in n)

# ===============================
# FINE
# ===============================


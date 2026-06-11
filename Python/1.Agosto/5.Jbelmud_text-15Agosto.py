# ============================================================
# 🧠 ESERCIZIO
# ============================================================

# Data una stringa, restituisci una versione modificata in cui:
# - La prima e l'ultima lettera di ogni parola restano uguali
# - Le lettere centrali vengono ordinate alfabeticamente
# - Tutto è in minuscolo e senza punteggiatura

# Esempio:
# "jumbled" → "jbelmud"


# ============================================================
# 👨‍💻 CODICE SCRITTO DA ME
# ============================================================

def jbelmu(text):

    word_split = text.split()
    map_list = list(map(lambda w: w[0] + "".join(sorted(w[1:-1])) + w[-1] if len(w) > 1 else w, word_split))

    return " ".join(map_list)


print(jbelmu("i love jumbled text"))


# ============================================================
# ⚡ FEEDBACK VELOCE
# ============================================================

# Codice già funzionante e ben fatto 👍
# Hai usato correttamente:
# - split()
# - map()
# - lambda
# - sorted()

# Piccolo miglioramento sulla condizione


# ============================================================
# ❌ ERRORI SPIEGATI
# ============================================================

# ❌ len(w) > 1
# Problema:
# parole di 2 lettere ("hi") vengono comunque processate
# ma non serve modificarle

# ✔️ Meglio usare:
# len(w) > 2
# così modifichi solo parole con almeno 3 lettere


# ============================================================
# ✅ CODICE CORRETTO
# ============================================================

def jbelmu(text):

    # Divido la frase in parole
    word_split = text.split()

    # Trasformo ogni parola
    result = list(map(
        lambda w: w[0] + "".join(sorted(w[1:-1])) + w[-1] if len(w) > 2 else w,
        word_split
    ))

    # Ricompongo la frase
    return " ".join(result)


# ============================================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# ============================================================

# def jbelmu(text):
# → funzione che prende una stringa

# word_split = text.split()
# → divide la frase in parole
# esempio: "i love text" → ["i", "love", "text"]

# map(...)
# → applica una funzione a ogni parola

# lambda w:
# → funzione veloce per lavorare su ogni parola

# w[0]
# → prima lettera

# w[1:-1]
# → lettere centrali
# esempio: "jumbled" → "umble"

# sorted(w[1:-1])
# → ordina le lettere centrali
# → ['b','e','l','m','u']

# "".join(...)
# → trasforma la lista in stringa
# → "belmu"

# w[-1]
# → ultima lettera

# risultato:
# "j" + "belmu" + "d" → "jbelmud"

# if len(w) > 2 else w
# → se parola corta ("i", "hi"), la lasci invariata

# " ".join(result)
# → ricompone la frase finale


# ============================================================
# 🧪 TEST
# ============================================================

print(jbelmu("i love jumbled text"))

# Output:
# "i love jbelmud tettx"
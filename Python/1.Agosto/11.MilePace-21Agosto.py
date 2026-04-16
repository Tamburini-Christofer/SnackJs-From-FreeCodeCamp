# ============================================================
# 🧠 ESERCIZIO
# ============================================================

# Dati:
# - numero di miglia
# - tempo totale nel formato "MM:SS"

# Obiettivo:
# calcolare il ritmo medio per miglio
# e restituirlo nel formato "MM:SS"

# Esempio:
# 3 miglia, 24:00 → 08:00 per miglio


# ============================================================
# 👨‍💻 CODICE SCRITTO DA ME
# ============================================================

def mile_pace(miles, duration):

    minutes = int(duration[:-3])
    seconds = int(duration[-2:])

    total_seconds = (minutes * 60 + seconds) / miles

    pace_minutes = int(total_seconds // 60)
    pace_seconds = int(total_seconds % 60)

    return str(pace_minutes).zfill(2) + ":" + str(pace_seconds).zfill(2)


print(mile_pace(3, "24:00"))


# ============================================================
# ⚡ FEEDBACK VELOCE
# ============================================================

# Codice quasi corretto 👍
# Logica giusta e ben strutturata
# Buon uso di conversioni e formattazione

# ❗ Ma c'è un errore importante nel parsing del tempo


# ============================================================
# ❌ ERRORI SPIEGATI
# ============================================================

# ❌ minutes = int(duration[:-3])
# Questo è fragile e sbagliato per il formato "MM:SS"

# Perché:
# "24:00"
# duration[:-3] → "2" ❌ (non sempre funziona)

# ✔️ Metodo corretto:
# usare split(":") → molto più sicuro


# ============================================================
# ✅ CODICE CORRETTO
# ============================================================

def mile_pace(miles, duration):

    # separo minuti e secondi in modo sicuro
    minutes, seconds = map(int, duration.split(":"))

    # converto tutto in secondi totali
    total_seconds = (minutes * 60 + seconds) / miles

    # calcolo nuovo ritmo
    pace_minutes = int(total_seconds // 60)
    pace_seconds = int(total_seconds % 60)

    # formato MM:SS con zeri iniziali
    return f"{pace_minutes:02d}:{pace_seconds:02d}"


# ============================================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# ============================================================

# duration.split(":")
# → divide "24:00" in ["24", "00"]

# map(int, ...)
# → converte entrambi in numeri

# total_seconds
# → trasformo tutto in secondi e divido per le miglia

# // 60
# → minuti

# % 60
# → secondi rimanenti

# f"{x:02d}"
# → formatta sempre con 2 cifre (08, 05, 00)


# ============================================================
# 🧪 TEST
# ============================================================

print(mile_pace(3, "24:00"))  # 08:00
print(mile_pace(2, "10:30"))  # 05:15
print(mile_pace(5, "50:00"))  # 10:00
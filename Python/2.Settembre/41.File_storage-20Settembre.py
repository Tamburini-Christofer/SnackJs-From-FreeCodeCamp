# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dati la dimensione di un file, l'unità di misura della dimensione del file
# e la capacità del disco rigido in gigabyte (GB), restituire il numero di file
# che il disco rigido può memorizzare.
#
# Vincoli:
# - unità: "B", "KB", "MB"
# - 1 KB = 1000 B
# - 1 MB = 1000 KB
# - 1 GB = 1000 MB
# - risultato: numero intero di file memorizzabili

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def number_of_files(file_size, file_unit, drive_size_gb):
    b = 1;
    kb = b * 1000;
    mb = kb * 1000;
    gb = mb * 1000;

    match file_unit:
        case "B":
            return (drive_size_gb * gb) // (file_size * b)
        case "KB":
            return (drive_size_gb * gb) // (file_size * kb)
        case "MB":
            return (drive_size_gb * gb) // (file_size * mb)
        case "GB":
            return (drive_size_gb * gb) // (file_size * gb)

    return file_size

print(number_of_files(4096, "B", 1.5))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def number_of_files(file_size, file_unit, drive_size_gb):
    units = {
        "B": 1,
        "KB": 1000,
        "MB": 1000**2,
        "GB": 1000**3
    }

    file_size_bytes = file_size * units[file_unit]
    drive_size_bytes = drive_size_gb * units["GB"]

    return drive_size_bytes // file_size_bytes

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Logica corretta e funzionante.
# - Uso di match/case moderno e leggibile.
# - Gestione chiara delle unità di misura.
# - Rispetta correttamente le conversioni richieste.
# - Restituisce il numero intero di file memorizzabili.

# //! Contro
# - Variabili b, kb, mb, gb ridondanti: si possono evitare.
# - La struttura è più lunga del necessario.
# - Il caso "GB" nel match è matematicamente inutile
#   (si lavora già in byte nel disco).
# - `return file_size` finale non ha senso logico (fallback errato).
# - Possibile rischio di errore se file_unit non è valido.

# =========================================================
# //* Consigli
# =========================================================

# - Soluzione corretta ma migliorabile in pulizia.
# - Il punto chiave è standardizzare tutto in byte:
#       file_size_bytes
#       drive_size_bytes
# - Evita variabili di conversione “manuali” ripetute.
# - Il match/case va benissimo, ma puoi semplificare molto la logica.
# - Attenzione al fallback finale: meglio sollevare errore o gestire None.
# - In un colloquio tecnico questa soluzione sarebbe considerata corretta
#   ma un po’ verbosa.

# Valutazione: 8.5/10
#
# Corretta e robusta, ma migliorabile in compattezza e pulizia.
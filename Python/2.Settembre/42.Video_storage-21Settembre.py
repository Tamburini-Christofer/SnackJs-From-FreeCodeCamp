# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dati la dimensione di un video, la sua unità di misura,
# la capacità del disco e la sua unità di misura, calcolare
# quanti video completi possono essere memorizzati.
#
# Vincoli:
# - Video unit: B, KB, MB, GB
#   se diversa → "Unità di misura video non valida"
#
# - Drive unit: GB, TB
#   se diversa → "Unità di misura del disco non valida"
#
# Conversioni:
# 1 KB = 1000 B
# 1 MB = 1000 KB
# 1 GB = 1000 MB
# 1 TB = 1000 GB

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def number_of_videos(video_size, video_unit, drive_size, drive_unit):
    if video_unit == "TB":
        return "Invalid video unit";
    
    if drive_unit == "B" or drive_unit == "KB" or drive_unit == "MB" :
        return "Invalid drive unit"

    b = 1;
    kb = b * 1000;
    mb = kb * 1000;
    gb = mb * 1000;
    tb = gb * 1000;

    video_unit_converted = 0;
    drive_unit_converted = 0;

    match video_unit:
        case "B":
            video_unit_converted = video_size * b;
        case "KB":
            video_unit_converted = video_size * kb;
        case "MB":
            video_unit_converted = video_size * mb;
        case "GB":
            video_unit_converted = video_size * gb;
        case "TB":
            video_unit_converted = video_size * tb;

    match drive_unit:
        case "B":
            drive_unit_converted = drive_size * b;
        case "KB":
            drive_unit_converted = drive_size * kb;
        case "MB":
            drive_unit_converted = drive_size * mb;
        case "GB":
            drive_unit_converted = drive_size * gb;
        case "TB":
            drive_unit_converted = drive_size * tb;

    return drive_unit_converted // video_unit_converted

print(number_of_videos(1, "TB", 10, "TB"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def number_of_videos(video_size, video_unit, drive_size, drive_unit):
    units = {
        "B": 1,
        "KB": 1000,
        "MB": 1000**2,
        "GB": 1000**3,
        "TB": 1000**4
    }

    valid_video_units = {"B", "KB", "MB", "GB"}
    valid_drive_units = {"GB", "TB"}

    if video_unit not in valid_video_units:
        return "Unità di misura video non valida"

    if drive_unit not in valid_drive_units:
        return "Unità di misura del disco non valida"

    video_bytes = video_size * units[video_unit]
    drive_bytes = drive_size * units[drive_unit]

    return drive_bytes // video_bytes

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Logica generale corretta.
# - Uso di match/case chiaro.
# - Conversioni coerenti tra unità di misura.
# - Gestione del calcolo finale corretta (divisione intera).
# - Struttura leggibile.

# //! Contro
# - Errore grave nella validazione iniziale:
#   `if video_unit == "TB"` è sbagliato (TB è valido come unità logica).
# - Messaggi di errore non coerenti con la consegna.
# - Validazione del drive errata: controlla valori invece che set valido.
# - Codice duplicato (match video + match drive).
# - Rischio di incoerenze tra conversione e validazione.
# - Uso di variabili intermedie ridondanti.

# =========================================================
# //* Consigli
# =========================================================

# - Il punto più importante qui è la validazione:
#   devi controllare se l'unità è IN un insieme valido, non contro un valore singolo.
#
# - Usa set o dizionari per evitare duplicazione:
#       valid_units = {...}
#
# - Il tuo approccio di conversione è corretto ma troppo verboso.
#
# - Attenzione: TB non è “non valido” per il video, lo è solo per la specifica.
#
# - Struttura ideale:
#       1. validazione
#       2. conversione in byte
#       3. divisione intera
#
# - In un colloquio tecnico: buona base, ma la validazione ti abbassa il voto.

# Valutazione: 7.5/10
#
# Buona logica generale, ma errori nella validazione delle unità.
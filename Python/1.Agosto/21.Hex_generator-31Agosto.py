# //todo Consegna dell'esercizio
# Dato un nome di stringa di colore CSS ("red", "green", "blue"),
# generare un codice colore esadecimale casuale (HEX) di 6 caratteri
# in cui il colore scelto è dominante (valore più alto degli altri).
#
# Se l'input non è valido, restituire "Colore non valido".


# //* Codice scritto senza utilizzo di ChatGPT
import random

def generate_hex(color):
    if color not in ["red", "green", "blue"]:
        return "Invalid color"

    max_color = "FF"

    rand1 = f"{random.randint(0, 127):02X}"
    rand2 = f"{random.randint(0, 127):02X}"
    
    if color == "red":  
        return f"{max_color}{rand1}{rand2}"
    elif color == "green":
        return f"{rand1}{max_color}{rand2}"
    else: 
        return f"{rand1}{rand2}{max_color}"


# //* Codice scritto da ChatGPT (correzione)
import random

def generate_hex_correct(color):
    if color not in ["red", "green", "blue"]:
        return "Colore non valido"

    def rand_channel():
        return random.randint(0, 127)

    if color == "red":
        r = random.randint(128, 255)
        g = random.randint(0, r - 1)
        b = random.randint(0, r - 1)
        return f"{r:02X}{g:02X}{b:02X}"

    if color == "green":
        g = random.randint(128, 255)
        r = random.randint(0, g - 1)
        b = random.randint(0, g - 1)
        return f"{r:02X}{g:02X}{b:02X}"

    if color == "blue":
        b = random.randint(128, 255)
        r = random.randint(0, b - 1)
        g = random.randint(0, b - 1)
        return f"{r:02X}{g:02X}{b:02X}"


# //* Pro e contro del mio codice

# //* Pro
# - Soluzione semplice e leggibile
# - Usa correttamente random per generare variazione
# - Logica base corretta per dominanza del colore

# //! Contro
# - Dominanza del colore non garantita matematicamente (solo "visivamente forte")
# - Uso di 0–127 limita ma non assicura la regola "maggiore degli altri"
# - Messaggio errore diverso da quello richiesto ("Invalid color" invece di "Colore non valido")

# //* Consigli
# - Quando un vincolo è matematico (dominanza), va garantito con logica precisa
# - Usa range dinamici basati sul canale dominante
# - Attenzione alle specifiche del testo (stringa di output precisa)
# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //todo Consegna dell'esercizio

# Data una stringa che rappresenta un numero esadecimale (base 16),
# restituisci il suo valore decimale (base 10) come numero intero.
#
# L'esadecimale utilizza le cifre 0-9 e le lettere A-F
# per rappresentare i valori da 0 a 15.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def hex_to_decimal(hex_str):
    hex_str = hex_str.upper()
    hex_converted = 0
    
    for i, char in enumerate(hex_str):
        if '0' <= char <= '9':
            value = ord(char) - ord('0')
        elif 'A' <= char <= 'F':
            value = ord(char) - ord('A') + 10
        else:
            raise ValueError("Invalid hexadecimal character")
            
        hex_converted = (hex_converted * 16) + value
        
    return hex_converted

print(hex_to_decimal("2E"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def hex_to_decimal(hex_str):
    decimal = 0

    for char in hex_str.upper():
        if '0' <= char <= '9':
            value = ord(char) - ord('0')
        else:
            value = ord(char) - ord('A') + 10

        decimal = decimal * 16 + value

    return decimal

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta.
# - Hai implementato manualmente la conversione senza usare funzioni
#   già pronte come int(hex_str, 16).
# - Ottimo utilizzo di ord() per convertire caratteri in numeri.
# - Hai applicato correttamente la formula:
#   risultato = risultato * 16 + valore_corrente
# - Il codice è leggibile e ben organizzato.
# - Hai gestito anche eventuali caratteri non validi.

# //! Contro
# - enumerate() non viene utilizzato, quindi è superfluo.
# - Il controllo del carattere non valido non era necessario,
#   perché la consegna garantisce input validi.
# - Il nome hex_converted potrebbe essere più semplice
#   (es. decimal o result).

# =========================================================
# //* Consigli
# =========================================================

# - Ottimo esercizio per comprendere i sistemi numerici.
# - Cerca di riconoscere il pattern:
#   risultato = risultato * base + valore
#   perché è lo stesso principio usato per:
#   - binario -> decimale
#   - ottale -> decimale
#   - esadecimale -> decimale
#
# - Quando usi enumerate(), chiediti sempre se ti serve davvero
#   l'indice. In questo caso bastava:
#
#   for char in hex_str:
#
# - Questa è una soluzione da livello intermedio:
#   dimostra che hai capito come funziona realmente
#   la conversione e non ti sei limitato a usare funzioni già pronte.
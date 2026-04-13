# ==========================================
# ESERCIZIO: SPACE JAM
# ==========================================

# Ti viene data una stringa.
# Devi:
# - Rimuovere tutti gli spazi
# - Convertire tutto in maiuscolo
# - Inserire due spazi tra ogni carattere
# - I caratteri non alfabetici restano invariati


# ==========================================
# ⚡ FEEDBACK VELOCE
# ==========================================

# Il tuo approccio è buono 👍
# Hai centrato la parte della trasformazione e del join.
# Manca solo la gestione corretta della rimozione di TUTTI gli spazi.


# ==========================================
# ❌ ERRORI SPIEGATI
# ==========================================

# 1. strip() NON basta
#    -> rimuove solo spazi iniziali e finali
#    -> ma qui servono tutti gli spazi rimossi

# 2. Mancava la pulizia completa della stringa
#    -> serve replace(" ", "")

# 3. Il resto della logica è corretto
#    -> upper() ok
#    -> join con due spazi ok


# ==========================================
# ✅ CODICE CORRETTO
# ==========================================

def space_jam(s):
    # Rimuove tutti gli spazi dalla stringa
    s = s.replace(" ", "")

    # Converte tutta la stringa in maiuscolo
    s = s.upper()

    # Inserisce due spazi tra ogni carattere
    result = "  ".join(s)

    # Restituisce il risultato finale
    return result


# ==========================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# ==========================================

# def space_jam(s)
# -> crea una funzione che prende una stringa

# s = s.replace(" ", "")
# -> elimina TUTTI gli spazi nella stringa
# esempio: "a b c" -> "abc"

# s = s.upper()
# -> trasforma tutto in maiuscolo
# esempio: "abc" -> "ABC"

# result = "  ".join(s)
# -> mette 2 spazi tra ogni carattere
# esempio: "ABC" -> "A  B  C"

# return result
# -> restituisce il risultato finale


# ==========================================
# TEST
# ==========================================

print(space_jam("freeCodeCamp"))
# Output atteso:
# F  R  E  E  C  O  D  E  C  A  M  P
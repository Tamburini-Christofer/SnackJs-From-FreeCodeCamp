# =========================================================
# ESERCIZIO:
# Decodificare un messaggio cifrato.
#
# - Shift positivo  -> il messaggio originale era stato
#   spostato in avanti
#
# - Shift negativo -> il messaggio originale era stato
#   spostato indietro
#
# - Maiuscole e minuscole vanno mantenute
# - I caratteri non alfabetici NON vanno modificati
# =========================================================


# =========================================================
# ⚡ FEEDBACK VELOCE
# =========================================================
# Ottimo codice.
#
# Hai usato molto bene:
# ✔ isalpha()
# ✔ isupper()
# ✔ ord()
# ✔ chr()
# ✔ modulo % 26
#
# La logica è corretta e il codice funziona.
#
# Unica cosa:
# hai importato "re" ma non lo usi.


# =========================================================
# ❌ ERRORI SPIEGATI
# =========================================================

# 1) Import inutile
#
# import re
#
# Non serve perché non stai usando regex.
#
# Va rimosso.


# 2) Nome variabile
#
# message_converted
#
# Funziona, ma un nome più chiaro potrebbe essere:
#
# decoded_message
#
# perché rappresenta il messaggio decodificato.


# =========================================================
# ✅ CODICE CORRETTO E PULITO
# =========================================================

def decode(message, shift):

    decoded_message = ""

    for letter in message:

        # Se NON è una lettera
        # la aggiunge senza modificarla
        if not letter.isalpha():
            decoded_message += letter
            continue

        # Controlla se la lettera è maiuscola
        if letter.isupper():
            base = ord('A')
        else:
            base = ord('a')

        # Calcola la nuova posizione della lettera
        new_char_code = (ord(letter) - base - shift) % 26

        # Converte il codice ASCII in carattere
        decoded_message += chr(new_char_code + base)

    return decoded_message


print(decode("Byffi Qilfx!", 20))


# =========================================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# =========================================================

# def decode(message, shift):
#
# Crei una funzione:
#
# message -> testo codificato
# shift   -> numero di spostamenti


# decoded_message = ""
#
# Stringa vuota dove costruirai
# il messaggio finale.


# for letter in message:
#
# Cicla ogni carattere del messaggio.


# if not letter.isalpha():
#
# Controlla se il carattere NON è una lettera.
#
# Esempi:
# spazio
# !
# ?
# 1
#
# Non vanno modificati.


# decoded_message += letter
#
# Aggiunge il carattere così com'è.


# continue
#
# Salta al prossimo ciclo.


# if letter.isupper():
#
# Controlla se la lettera è maiuscola.


# base = ord('A')
#
# ord() restituisce il codice ASCII.
#
# ord('A') = 65


# base = ord('a')
#
# ord('a') = 97


# new_char_code = (ord(letter) - base - shift) % 26
#
# QUESTA è la parte più importante.
#
# Esempio:
#
# letter = "B"
#
# ord("B") = 66
#
# base = 65
#
# 66 - 65 = 1
#
# Ottieni la posizione nell'alfabeto.
#
# Poi sottrai shift
# perché stai DECODIFICANDO.
#
# % 26 serve per tornare all'inizio
# dell'alfabeto quando superi Z o A.


# chr(new_char_code + base)
#
# chr() trasforma un numero ASCII
# in carattere.
#
# Esempio:
#
# 65 -> A
# 66 -> B


# return decoded_message
#
# Restituisce il messaggio decodificato.


# =========================================================
# ESEMPIO PRATICO
# =========================================================
#
# "B" con shift 1
#
# B -> A
#
# perché:
#
# B era stata spostata avanti di 1.
#
# Per decodificare bisogna tornare indietro.
# =========================================================


# # //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# # //todo Consegna dell'esercizio

# Dato un colore CSS nel formato rgb(r, g, b), restituire il suo equivalente esadecimale.

# Esempi:

# "rgb(255, 255, 255)" → "#ffffff"
# "rgb(1, 2, 3)" → "#010203"

# Il risultato deve:
# - essere in minuscolo
# - iniziare con #
# - contenere sempre 6 caratteri esadecimali

# # //todo

# L'obiettivo è estrarre i tre valori RGB, convertirli in esadecimale e concatenarli nel formato corretto.

# # //*Codice scritto senza utilizzo di ChatGpt

# def rgb_to_hex(rgb):
#     extract_hex = rgb.replace("rgb","").replace("(", "").replace(")","").replace(",", "").split()

#     hex_convert = ""

#     for number in extract_hex:
#         hex_convert += hex(int(number))[2:].zfill(2)

#     return "#" + hex_convert

# print(rgb_to_hex("rgb(1, 11, 111)"))

# # //*

# # //* Codice scritto da ChatGpt

# def rgb_to_hex(rgb):
#     values = rgb[4:-1].split(", ")

#     hex_color = "#"

#     for value in values:
#         hex_color += format(int(value), "02x")

#     return hex_color

# # //*

# # //* Pro e contro del mio codice

# # //* Pro

# - Soluzione corretta.
# - Hai usato zfill(2), ottima scelta per garantire sempre due cifre.
# - Hai sfruttato la funzione built-in hex().
# - Il codice è semplice da leggere.
# - Hai gestito correttamente anche valori piccoli come 1, 2 o 3.

# # //! Contro

# - Il nome `extract_hex` è poco descrittivo: in realtà contiene i valori RGB estratti.
# - Stai facendo molte `replace()` consecutive; funziona, ma non è il metodo più elegante.
# - `hex()` restituisce una stringa con il prefisso `0x`, quindi devi rimuoverlo con `[2:]`.
# - Non stai validando che i numeri siano compresi tra 0 e 255 (anche se la consegna probabilmente garantisce input validi).

# # //*

# # //* Consigli

# - Dai nomi più significativi alle variabili (`rgb_values`, `hex_color`).
# - Impara a usare `format(numero, "02x")`, molto comune per le conversioni esadecimali.
# - Quando fai molte operazioni di pulizia su una stringa, chiediti se esiste un modo più diretto per ottenere il risultato.
# - La tua soluzione è più che adeguata per un esercizio Junior.
# - Hai dimostrato una buona conoscenza delle stringhe e delle conversioni di tipo.

# Valutazione: 9/10

# La soluzione è corretta, compatta e produce esattamente l'output richiesto. Gli unici miglioramenti riguardano stile e leggibilità, non la logica.

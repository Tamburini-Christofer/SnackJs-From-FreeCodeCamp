# # //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# # //todo Consegna dell'esercizio

# Data una stringa, restituire una nuova stringa in cui ogni vocale viene ripetuta.

# Regole:
# - La prima vocale compare una volta.
# - La seconda vocale compare due volte.
# - La terza vocale compare tre volte.
# - E così via.

# Inoltre:
# - Le vocali sono a, e, i, o, u sia maiuscole che minuscole.
# - La prima lettera della sequenza mantiene il suo maiuscolo/minuscolo originale.
# - Le eventuali ripetizioni aggiuntive devono essere minuscole.
# - I caratteri non vocalici non devono essere modificati.

# # //todo

# L'obiettivo è contare le vocali incontrate nella frase e ripeterle progressivamente.

# # //*Codice scritto senza utilizzo di ChatGpt

# import re

# def repeat_vowels(s):

#     final_word = ""
#     indice = 1;

#     for char in s:

#         if re.search(r"[aeiouAEIOU]",char):
#             final_word += char * indice
#             indice += 1
#         else:
#              final_word += char
             
#     return final_word

# print(repeat_vowels("I like eating ice cream in Iceland"))

# # //*

# # //* Codice scritto da ChatGpt

# def repeat_vowels(s):
#     vowels = "aeiouAEIOU"
#     result = ""
#     count = 1

#     for char in s:
#         if char in vowels:
#             result += char + char.lower() * (count - 1)
#             count += 1
#         else:
#             result += char

#     return result

# # //*

# # //* Pro e contro del mio codice

# # //* Pro

# - Hai identificato correttamente le vocali.
# - Hai usato un contatore che aumenta dopo ogni vocale.
# - La logica generale della ripetizione progressiva è corretta.
# - Il codice è semplice da seguire.
# - La soluzione produce risultati coerenti quando tutte le vocali sono minuscole.

# # //! Contro

# - Non rispetta completamente la consegna sulle maiuscole.
# - Se la vocale è maiuscola, anche tutte le ripetizioni diventano maiuscole.
#   - Esempio: `I` → `II`
#   - Richiesto: `Ii`
# - L'uso di `re.search()` per controllare un singolo carattere è eccessivo.
# - Il modulo `re` non è necessario per questo esercizio.
# - I punti e virgola (`;`) in Python sono superflui.

# # //*

# # //* Consigli

# - Quando una consegna parla di lettere, spesso basta usare `char in "aeiouAEIOU"` invece delle regex.
# - Leggi sempre con attenzione i dettagli sui maiuscoli/minuscoli: qui era il vero "tranello" dell'esercizio.
# - Per costruire la ripetizione corretta puoi fare:
  
#   `char + char.lower() * (indice - 1)`

# - Cerca di testare casi limite come:
#   - `"I"`
#   - `"AE"`
#   - `"Hello"`
#   - `"aEi"`

# - La struttura della soluzione è buona; l'unico errore sostanziale è il trattamento delle vocali maiuscole.

# Valutazione: 7.5/10

# La logica principale è corretta, ma la soluzione non soddisfa completamente una delle richieste fondamentali della consegna: le ripetizioni aggiuntive devono sempre essere minuscole.
# # //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# # //todo Consegna dell'esercizio

# Data una parola o una frase e una sequenza di lettere minuscole, determinare se la parola o la frase:

# - utilizza tutte le lettere dell'insieme dato almeno una volta
# - non utilizza nessun'altra lettera

# Bisogna:
# - ignorare caratteri non alfabetici
# - ignorare maiuscole e minuscole

# # //todo

# L'obiettivo è verificare che l'insieme delle lettere presenti nella frase coincida esattamente con l'insieme delle lettere fornite.

# # //*Codice scritto senza utilizzo di ChatGpt

# def is_pangram(sentence, letters):
#     sentence_letters = [char for char in sentence.lower() if char.isalpha()]
    
#     clean_sentence = "".join(list(dict.fromkeys(sentence_letters)))

#     clean_letters = "".join(list(dict.fromkeys(letters.lower())))
    
#     return sorted(clean_sentence) == sorted(clean_letters)

# print(is_pangram("hello", "hel"))

# # //*

# # //* Codice scritto da ChatGpt

# def is_pangram(sentence, letters):
#     sentence_set = {
#         char.lower()
#         for char in sentence
#         if char.isalpha()
#     }

#     letters_set = set(letters.lower())

#     return sentence_set == letters_set

# # //*

# # //* Pro e contro del mio codice

# # //* Pro

# - Hai correttamente ignorato maiuscole e minuscole usando `lower()`.
# - Hai filtrato i caratteri non alfabetici con `isalpha()`.
# - Hai eliminato i duplicati prima del confronto.
# - La logica è corretta e rispetta la consegna.
# - Conosci una tecnica interessante usando `dict.fromkeys()` per rimuovere duplicati mantenendo l'ordine.

# # //! Contro

# - Stai trasformando le liste in stringhe anche se non serve.
# - Ordinare le stringhe con `sorted()` ha un costo aggiuntivo.
# - `dict.fromkeys()` è una soluzione più complessa del necessario per questo problema.
# - Il nome della funzione `is_pangram` può essere fuorviante: qui non stai verificando un vero pangramma, ma la corrispondenza tra due insiemi di lettere.
# - Crei diverse strutture dati intermedie che possono essere evitate.

# # //*

# # //* Consigli

# - Per problemi che riguardano la presenza o assenza di elementi, pensa subito ai `set`.
# - I set eliminano automaticamente i duplicati e permettono confronti molto rapidi.
# - In questo esercizio il concetto chiave è confrontare due insiemi di lettere, non il loro ordine.
# - La tua soluzione è corretta e dimostra una buona conoscenza di liste, stringhe e dizionari.
# - Se durante un colloquio spiegassi perché hai usato `dict.fromkeys()`, farebbe comunque una buona impressione.

# Valutazione: 8.5/10

# La logica è corretta e l'esercizio è risolto. Tuttavia Python offre i `set`, che sono stati pensati esattamente per questo tipo di problema e rendono la soluzione più semplice, leggibile ed efficiente.
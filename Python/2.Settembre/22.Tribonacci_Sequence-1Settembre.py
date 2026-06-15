# # //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# # //todo Consegna dell'esercizio

# La successione di Tribonacci è una serie di numeri in cui ogni numero è la somma dei tre numeri precedenti.

# Dato un array contenente i primi tre numeri della successione e una lunghezza desiderata, restituire la successione completa.

# Se la lunghezza è 0 bisogna restituire un array vuoto.

# # //todo

# L'obiettivo è generare una sequenza Tribonacci partendo dai primi tre valori forniti e continuare fino alla lunghezza richiesta.

# # //*Codice scritto senza utilizzo di ChatGpt

# def tribonacci_sequence(start_sequence, length):
#     if length == 1:
#         return [start_sequence[0]]
#     elif length == 2:
#         return [start_sequence[0], start_sequence[1]]
#     elif length == 3:
#         return start_sequence
#     elif length == 0:
#         return []

#     Tribonacci_sequence = start_sequence.copy()
#     indice = 2;

#     for number in range(length - 3):
#         Tribonacci_sequence.append(
#             Tribonacci_sequence[indice]
#             + Tribonacci_sequence[indice-1]
#             + Tribonacci_sequence[indice-2]
#         )
#         indice += 1

#     return Tribonacci_sequence

# # //*

# # //* Codice scritto da ChatGpt

# def tribonacci_sequence(start_sequence, length):
#     if length == 0:
#         return []

#     sequence = start_sequence[:length]

#     while len(sequence) < length:
#         sequence.append(sequence[-1] + sequence[-2] + sequence[-3])

#     return sequence

# # //*

# # //* Pro e contro del mio codice

# # //* Pro

# - Hai gestito correttamente tutti i casi limite da 0 a 3.
# - L'algoritmo genera correttamente la successione.
# - Hai usato copy() per non modificare la lista originale.
# - Il codice è facile da seguire per chi sta imparando Python.
# - Hai capito che serve aggiungere un elemento alla volta utilizzando append().

# # //! Contro

# - L'ordine dei controlli potrebbe essere migliorato mettendo subito `length == 0`.
# - Il nome `Tribonacci_sequence` non segue la convenzione Python (snake_case). Sarebbe meglio `tribonacci_sequence`.
# - La variabile `indice` è superflua: puoi usare direttamente gli ultimi tre elementi della lista.
# - I punti e virgola (`;`) in Python non servono.
# - Nel test finale stai passando una lista di 8 elementi, mentre la consegna richiede una lista iniziale di 3 elementi.

# # //*

# # //* Consigli

# - Cerca di sfruttare gli indici negativi (`[-1]`, `[-2]`, `[-3]`), sono molto usati in Python.
# - Quando una variabile serve solo per contare il ciclo, usa `_` invece di `number`.
# - Abituati a usare nomi in snake_case.
# - Per un colloquio Junior la tua soluzione è assolutamente valida.
# - Direi livello: Buono Junior. La logica è corretta e dimostra che hai capito il problema senza scorciatoie.

# Valutazione: 8/10

# L'unico vero errore rispetto alla consegna è il test finale con una lista di 8 elementi. L'algoritmo invece è corretto.
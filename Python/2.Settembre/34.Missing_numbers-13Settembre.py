# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# //todo Consegna dell'esercizio

# Dato un array di interi da 1 a n, inclusi, restituisci un array contenente tutti gli interi mancanti compresi tra 1 e n (dove n è il numero più grande nell'array).
# L'array fornito può non essere ordinato e può contenere duplicati.
# L'array restituito deve essere in ordine crescente.
# Se non mancano interi, restituisci un array vuoto.

# //*Codice scritto senza utilizzo di ChatGpt

def find_missing_numbers(arr):
    new_set_list = list(set(arr))
    max_number = max(new_set_list)

    final_list = []

    for number in range(1, max_number):
        
        if number not in new_set_list:
            final_list.append(number)

    return final_list

print(find_missing_numbers([1, 3, 5]))

# //* Codice scritto da ChatGpt

def find_missing_numbers(arr):
    if not arr:
        return []

    unique = set(arr)
    max_number = max(unique)

    missing = []

    for i in range(1, max_number + 1):
        if i not in unique:
            missing.append(i)

    return missing

# //* Pro e contro del mio codice

# //* Pro
# - Uso del set per rimuovere duplicati
# - Logica semplice e comprensibile
# - Buona struttura generale

# //! Contro
# - max() può crashare con lista vuota
# - range esclude il numero massimo
# - conversione set → list non necessaria
# - uso di nomi variabili poco chiari

# //* Consigli

# - Usa direttamente set(arr) senza trasformarlo in lista
# - Gestisci il caso lista vuota prima di usare max()
# - Usa range(1, max_number + 1)
# - Il tuo approccio è corretto, devi solo gestire meglio gli edge case
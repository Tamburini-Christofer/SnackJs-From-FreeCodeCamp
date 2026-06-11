# //todo Consegna dell'esercizio
# Dato un array di interi, restituisci un array di interi che compaiono più di una volta nell'array iniziale,
# ordinati in ordine crescente. Se nessun valore compare più di una volta, restituisci un array vuoto.
# L'array restituito deve includere una sola occorrenza di ciascun valore.


# //* Codice scritto senza utilizzo di ChatGPT
def find_duplicates(arr):
    sort_list = sorted(arr)
    list_duplicates = []

    for indice in range(len(sort_list) - 1):
        if sort_list[indice] == sort_list[indice + 1]:
            if sort_list[indice] not in list_duplicates:
                list_duplicates.append(sort_list[indice])

    return list_duplicates


# //* Codice scritto da ChatGPT (correzione)
def find_duplicates_correct(arr):
    seen = set()
    duplicates = set()

    for num in arr:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)

    return sorted(list(duplicates))


# //* Pro e contro del mio codice

# //* Pro
# - Ottima idea usare sorted() per semplificare il confronto
# - Logica corretta nel confronto tra elementi consecutivi
# - Gestione corretta dell’unicità nel risultato

# //! Contro
# - Controllo "not in list" poco efficiente
# - Dipendenza dal sorting anche quando non strettamente necessario
# - Nomi variabili migliorabili (sort_list → sorted_arr)

# //* Consigli
# - Usa set quando devi solo verificare presenza o duplicati
# - Il tuo approccio va benissimo per esercizi base (ottimo per imparare)
# - Se vuoi migliorare performance, evita sorting quando non richiesto
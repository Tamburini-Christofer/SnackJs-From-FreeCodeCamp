# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# //todo Consegna dell'esercizio

# Dati due array di stringhe, restituisci un nuovo array contenente tutti i valori presenti in un solo array.
# L'array restituito deve essere ordinato alfabeticamente.

# //todo


# //*Codice scritto senza utilizzo di ChatGpt

def array_diff(arr1, arr2):

    new_list = [];

    for word in arr1:
        if word in arr2:
            continue;
        else:
            new_list.append(word)

    for word in arr2:
        if word in arr1:
            continue;
        else:
            new_list.append(word)

    new_list.sort()
    return new_list

print(array_diff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]))

# //*


# //* Codice scritto da ChatGpt

def array_diff(arr1, arr2):
    result = []

    for word in arr1:
        if word not in arr2:
            result.append(word)

    for word in arr2:
        if word not in arr1:
            result.append(word)

    return sorted(result)

# //*


# //* Pro e contro del mio codice

# //* Pro

# - La soluzione è corretta e restituisce il risultato richiesto.
# - Il codice è leggibile e facile da seguire.
# - L'ordinamento finale è gestito correttamente.
# - Hai utilizzato una logica chiara per confrontare i due array.

# //! Contro

# - Gli else sono superflui dopo un continue.
# - I punti e virgola non sono necessari in Python.
# - Con array molto grandi, i controlli con "in" diventano meno efficienti.
# - Il codice può essere leggermente semplificato.

# //*


# //* Consigli

# - Preferisci condizioni positive come "if word not in arr2".
# - Evita continue ed else quando non sono indispensabili.
# - Abituati a valutare la complessità temporale della soluzione.
# - Valuta l'utilizzo dei set quando non è necessario mantenere i duplicati.
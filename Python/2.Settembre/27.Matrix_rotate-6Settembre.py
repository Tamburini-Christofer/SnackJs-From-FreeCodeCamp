# # //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# # //todo Consegna dell'esercizio

# Data una matrice (un array di array), ruotala di 90 gradi in senso orario e restituiscila. Ad esempio, data [[1, 2], [3, 4]], che si presenta così:

# 1 2
# 3 4

# Dovresti restituire [[3, 1], [4, 2]], che si presenta così:

# 3 1
# 4 2

# # //todo

# Bisogna trasformare le righe in colonne invertendo l'ordine delle righe.

# # //*Codice scritto senza utilizzo di ChatGpt

# ```python
def rotate(matrix):
    len_matrix = len(matrix);

    new_matrix = []

    for column in range(len_matrix):
        row = []

        for row in range(len_matrix):
            row.append(matrix[row][column]);
        
        newMatrix.append(row)

    return new_matrix;
    

print(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]))
# ```

# # //*

# # //* Codice scritto da ChatGpt

# ```python
def rotate(matrix):
    size = len(matrix)
    new_matrix = []

    for column in range(size):
        new_row = []

        for row in range(size - 1, -1, -1):
            new_row.append(matrix[row][column])

        new_matrix.append(new_row)

    return new_matrix
# ```

# # //*

# # //* Pro e contro del mio codice

# # //* Pro

# - Hai capito che bisogna lavorare su righe e colonne.
# - Hai creato una nuova matrice invece di modificare quella originale.
# - La struttura con due cicli annidati è una buona base per questo problema.
# - Il codice è relativamente semplice da seguire.

# # //! Contro

# - C'è un errore di naming:

# ```python
# new_matrix = []
# ```

# ma successivamente usi:

# ```python
# newMatrix.append(row)
# ```

# Questo genera un errore perché `newMatrix` non esiste.

# - Stai usando `row` sia come lista sia come indice del ciclo:

# ```python
# row = []

# for row in range(len_matrix):
# ```

# La variabile lista viene sovrascritta dal contatore del ciclo.

# - La logica attuale estrae semplicemente le colonne:

# ```python
# [
#  [0,1,0],
#  [1,0,0],
#  [0,1,0]
# ]
# ```

# ma non effettua la rotazione di 90°.

# - Funziona solo con matrici quadrate (N x N).

# # //*

# # //* Consigli

# - Correggi il nome della variabile `newMatrix` in `new_matrix`.
# - Evita di usare lo stesso nome per una lista e per l'indice di un ciclo.
# - Per ruotare di 90° in senso orario devi leggere ogni colonna dal basso verso l'alto.
# - Utilizza nomi più descrittivi come:

# ```python
# row_index
# column_index
# new_row
# ```

# - Prima di scrivere il codice, prova a disegnare la matrice e seguire manualmente il percorso degli elementi.

# # //*

# # //* Valutazione

# **5.5/10**

# Hai individuato correttamente che la soluzione passa attraverso righe e colonne, ma ci sono:

# - un errore di variabile (`newMatrix`)
# - una sovrascrittura di `row`
# - la logica della rotazione non è ancora completa

# La parte difficile dell'esercizio è proprio capire come invertire l'ordine delle righe durante la costruzione della nuova matrice. Una volta sistemato questo concetto, la soluzione è molto vicina.

# # //*
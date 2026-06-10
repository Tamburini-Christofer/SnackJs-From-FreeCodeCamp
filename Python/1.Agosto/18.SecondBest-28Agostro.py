# //Prompt ChatGpt: modello esercizi

# //todo Consegna dell'esercizio

# Dato un array di prezzi di laptop e un budget,
# restituire:
#
# 1) Il secondo laptop più costoso se rientra nel budget
# 2) Altrimenti il laptop più costoso che rientra nel budget
# 3) 0 se nessuno rientra nel budget
#
# I duplicati devono essere ignorati

# //*Codice scritto senza utilizzo di ChatGpt

def get_laptop_cost(laptops, budget):

    laptopsSort = sorted(list(set(laptops)), reverse=True)

    second_best = None
    best = None

    if len(laptopsSort) >= 1:
        best = laptopsSort[0]
    if len(laptopsSort) >= 2:
        second_best = laptopsSort[1]

    if second_best is not None and second_best <= budget:
        return second_best

    for laptop in laptopsSort:
        if laptop <= budget:
            return laptop

    return 0


print(get_laptop_cost([1500, 2000, 1800, 1400], 1900))

# *


# //* Codice scritto da ChatGpt

def get_laptop_cost(laptops, budget):

    # Rimuovo duplicati e ordino dal più caro al più economico
    unique_sorted = sorted(set(laptops), reverse=True)

    # Tengo solo quelli dentro il budget
    affordable = [price for price in unique_sorted if price <= budget]

    # Se nessun laptop rientra nel budget
    if not affordable:
        return 0

    # Se ce n'è almeno uno, il migliore è il primo
    best = affordable[0]

    # Se ce ne sono almeno due, il secondo è il secondo elemento
    if len(affordable) >= 2:
        return affordable[1]

    return best

# *


# //* Pro e contro del mio codice

# //* Pro

# - Hai gestito correttamente i duplicati con set()
# - Hai ordinato correttamente i prezzi
# - Hai usato una logica chiara per best e second_best
# - Il codice è funzionante
# - Hai coperto tutti i casi richiesti

# //! Contro

# - Variabili inutili (best e second_best non servono davvero)
# - Doppia logica ridondante:
#   prima controlli second_best,
#   poi rifai un ciclo per trovare il best
#
# - Il codice è più lungo del necessario
#
# - Complessità leggermente più alta del necessario
#   (loop + controlli inutili)
#
# - Nomi variabili migliorabili:
#   laptopsSort → unique_sorted

# *


# //* Consigli

# - La tua soluzione è GIUSTA al 100% 👍
#
# - Però puoi semplificarla così:
#
#   1. elimina duplicati
#   2. ordina
#   3. filtra quelli nel budget
#   4. scegli primo o secondo
#
# - Concetto importante:
#
#   👉 quando hai già una lista ordinata,
#   non serve controllare manualmente best e second_best
#
# - Livello:
#
#   Logica: 8/10
#   Python: 8/10
#   Pulizia codice: 6.5/10
#
# - Sei molto vicino a uno stile "da sviluppatore reale"
#
# *

print(get_laptop_cost([1500, 2000, 1800, 1400], 1900))
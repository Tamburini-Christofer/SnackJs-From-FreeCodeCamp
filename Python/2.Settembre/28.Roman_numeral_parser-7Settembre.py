# # //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# # //todo Consegna dell'esercizio

# Data una stringa che rappresenta un numero romano, restituisci il suo valore intero.

# I numeri romani sono composti dai simboli:
# I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

# Regola:
# - Se un numero più piccolo precede uno più grande, viene sottratto
# - Altrimenti viene sommato

# # //todo

# Bisogna convertire ogni simbolo romano in numero e poi applicare la regola di somma/sottrazione.

# # //*Codice scritto senza utilizzo di ChatGpt

# ```python
def parse_roman_numeral(numeral):

    Roman_number = [1,5,10,50,100,500,1000]

    list_roman = []
    tot = 0;

    for roman in numeral:

        match roman:
            case "I":
                list_roman.append(Roman_number[0])
            case "V":
                list_roman.append(Roman_number[1])
            case "X":
                list_roman.append(Roman_number[2])
            case "L":
                list_roman.append(Roman_number[3])
            case "C":
                list_roman.append(Roman_number[4])
            case "D":
                list_roman.append(Roman_number[5])
            case "M":
                list_roman.append(Roman_number[6])

    indice = 1;

    for i in range(len(list_roman)):
        if i + 1 < len(list_roman) and list_roman[i] < list_roman[i+1]:
            tot -= list_roman[i]
        else:
            tot += list_roman[i]

    return tot;

print(parse_roman_numeral("IV"))
# ```

# # //*

# # //* Codice scritto da ChatGpt

# ```python
def parse_roman_numeral(numeral):
    values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    total = 0
    prev = 0

    for char in reversed(numeral):
        value = values[char]

        if value < prev:
            total -= value
        else:
            total += value

        prev = value

    return total
# ```

# # //*

# # //* Pro e contro del mio codice

# # //* Pro

# - Hai correttamente implementato la logica di sottrazione nei casi tipo "IV".
# - Hai separato chiaramente conversione e calcolo.
# - L’idea di trasformare prima in lista numerica è valida.
# - Il ragionamento generale è corretto.

# # //! Contro

# - Usi una lista `Roman_number` con indici: soluzione poco leggibile e fragile.
# - `match` è lungo e ripetitivo (poco scalabile).
# - Variabile `indice` inutile (non viene mai usata).
# - Secondo ciclo corretto ma non ottimizzato (due passaggi invece di uno).
# - Il codice può diventare lento e pesante su stringhe lunghe.
# - Stile: `Roman_number` dovrebbe essere `snake_case` (`roman_numbers`).

# # //*

# # //* Consigli

# - Usa un dizionario invece di una lista + match:

# ```python
# values = {"I": 1, "V": 5, ...}
# ```

# - Puoi evitare completamente la lista intermedia `list_roman`.
# - Approccio più pulito: iterare da destra a sinistra tenendo traccia del valore precedente.
# - Rimuovi variabili inutili come `indice`.
# - Cerca di ridurre il problema a **un solo ciclo**.
# - Pensa sempre: “posso evitare una struttura dati intermedia?”

# # //*

# # //* Valutazione

# **7.5/10**

# Ottimo ragionamento sulla regola di sottrazione (questa è la parte più importante dell’esercizio).

# Da migliorare soprattutto:
# - pulizia del codice
# - efficienza (evitare doppio passaggio)
# - semplificazione della struttura dati

# Se lo riscrivi con un dizionario e un solo ciclo, diventa da livello junior solido.
# # //*
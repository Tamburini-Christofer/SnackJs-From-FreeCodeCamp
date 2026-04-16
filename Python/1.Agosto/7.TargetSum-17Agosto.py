# ============================================================
# 🧠 ESERCIZIO
# ============================================================

# Dato un array di numeri e un target:
# trovare due numeri diversi la cui somma è uguale al target.
# Restituire gli indici dei due numeri (in ordine crescente)
# oppure "Target non trovato" se non esiste la coppia.

# Esempio:
# [2, 7, 11, 15], target = 9 → [0, 1]


# ============================================================
# 👨‍💻 CODICE SCRITTO DA ME
# ============================================================

def find_target(arr, target):

    visti = {}

    for i, n in enumerate(arr):
        differenza = target - n

        if differenza in visti:
            return [visti[differenza], i]

        visti[n] = i

    return "Target not found"


print(find_target([2, 7, 11, 15], 9))


# ============================================================
# ⚡ FEEDBACK VELOCE
# ============================================================

# Soluzione corretta e molto efficiente 👍
# Hai usato il pattern giusto: "hash map / dictionary"
# Complimenti, è una soluzione da livello buono/intermedio.


# ============================================================
# ❌ ERRORI SPIEGATI
# ============================================================

# Nessun errore logico ❌ → il codice funziona correttamente

# ⚠️ Piccola miglioria:
# La consegna dice:
# "L'array restituito deve avere gli indici in ordine crescente"

# Il tuo return:
# return [visti[differenza], i]

# potrebbe teoricamente restituire indici non ordinati
# (anche se nella pratica spesso sono già ordinati)


# ============================================================
# ✅ CODICE CORRETTO (VERSIONE MIGLIORATA)
# ============================================================

def find_target(arr, target):

    visti = {}

    for i, n in enumerate(arr):
        differenza = target - n

        if differenza in visti:

            # prendo gli indici e li ordino
            result = [visti[differenza], i]
            return sorted(result)

        visti[n] = i

    return "Target not found"


# ============================================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# ============================================================

# visti = {}
# → dizionario per salvare numero → indice

# for i, n in enumerate(arr):
# → scorro array con indice e valore

# differenza = target - n
# → calcolo il numero che mi serve per arrivare al target

# if differenza in visti:
# → controllo se quel numero è già stato visto prima

# return [visti[differenza], i]
# → ho trovato la coppia

# sorted(result)
# → assicura che gli indici siano in ordine crescente

# visti[n] = i
# → salvo il numero corrente con il suo indice


# ============================================================
# 🧪 TEST
# ============================================================

print(find_target([2, 7, 11, 15], 9))      # [0, 1]
print(find_target([3, 2, 4], 6))          # [1, 2]
print(find_target([1, 2, 3], 10))         # "Target not found"
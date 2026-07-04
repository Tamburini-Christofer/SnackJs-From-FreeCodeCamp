# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dato un elemento HTML valido, restituisci gli attributi
# dell'elemento come array di stringhe nel formato:
# ["attributo1, valore1", "attributo2, valore2"].
#
# Gli attributi sono sempre nel formato:
# attributo="valore"
#
# Devono essere restituiti nell'ordine originale.
# Se non sono presenti attributi, restituire un array vuoto.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import re

def extract_attributes(element):
    regex = r'(\w+)="([^"]*)"'
    
    matches = re.findall(regex, element)
    
    result = [f"{attr}, {value}" for attr, value in matches]
    
    return result

print(extract_attributes('<span class="red"></span>'))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

import re

def extract_attributes(element):
    return [
        f"{attribute}, {value}"
        for attribute, value in re.findall(r'(\w+)="([^"]*)"', element)
    ]

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Regex semplice e corretta.
# - Utilizzo appropriato di re.findall().
# - Comprensione di lista pulita e leggibile.
# - Mantiene l'ordine degli attributi.
# - Restituisce automaticamente una lista vuota se non trova corrispondenze.

# //! Contro
# - La variabile regex viene usata una sola volta: può essere inserita direttamente nella findall().
# - La variabile result è superflua: si può restituire direttamente la list comprehension.
# - Il pattern (\w+) non riconosce attributi con caratteri come "-" (es. data-id o aria-label), anche se la consegna potrebbe non richiederli.

# =========================================================
# //* Consigli
# =========================================================

# - Quando una variabile viene usata una sola volta, valuta se eliminarla per rendere il codice più compatto.
# - Continua ad usare le list comprehension: sono uno degli strumenti più utili di Python.
# - Abituati a chiederti se una regex copre tutti i casi possibili (ad esempio attributi con "-"), anche quando la consegna è semplice.
# - In questo esercizio la soluzione è già molto buona: è leggibile, efficiente e facile da mantenere.
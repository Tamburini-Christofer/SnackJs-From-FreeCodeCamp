# # //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# # //todo Consegna dell'esercizio

# Data una stringa, determinare se tutti i caratteri della stringa sono unici.

# Le lettere maiuscole e minuscole devono essere considerate caratteri diversi.

# # //todo

# Bisogna verificare che nessun carattere si ripeta nella stringa.

# # //*Codice scritto senza utilizzo di ChatGpt

# ```python
def all_unique(s):
    string_sort = sorted(s)

    for i in range(len(string_sort)):
        if i + 1 < len(string_sort) and string_sort[i] == string_sort[i+1]:
            return False;
 
    return True

print(all_unique("abc"))
# ```

# # //*

# # //* Codice scritto da ChatGpt

# ```python
def all_unique(s):
    return len(set(s)) == len(s)
# ```

# # //*

# # //* Pro e contro del mio codice

# # //* Pro

# - Hai capito che ordinare aiuta a trovare duplicati facilmente.
# - La logica del confronto tra elementi adiacenti è corretta.
# - Il codice è semplice e leggibile.
# - Hai una buona gestione del return immediato.

# # //! Contro

# - `sorted()` aggiunge complessità inutile (O logica + O ordinamento).
# - Esiste una soluzione più efficiente senza ordinamento.
# - Il punto e virgola non serve in Python.
# - Il nome `string_sort` è ok, ma non necessario per questo problema.
# - Stai facendo un approccio O(n log n) invece di O(n).

# # //*

# # //* Consigli

# - La soluzione più pulita e veloce è usare un `set`:

# ```python
# len(set(s)) == len(s)
# ```

# - Per capire il problema a livello logico:
#   - un carattere duplicato abbassa la cardinalità della struttura dati
# - Se vuoi farlo “manuale”, puoi usare un set in loop:

# ```python
# seen = set()
# for char in s:
#     if char in seen:
#         return False
#     seen.add(char)
# return True
# ```

# - Evita `sorted()` quando non è necessario: è spesso un costo inutile.

# # //*

# # //* Valutazione

# **8/10**

# Ottimo approccio logico: hai risolto il problema correttamente e in modo chiaro.

# Da migliorare:
# - efficienza (ordinamento non necessario)
# - conoscere strutture dati alternative (`set`)

# È uno degli esercizi migliori che hai fatto finora come ragionamento.
# # //*
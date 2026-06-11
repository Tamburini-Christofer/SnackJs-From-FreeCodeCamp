# ============================================================
# 🧠 ESERCIZIO
# ============================================================

# Date due stringhe, determinare se sono anagrammi:
# - Contengono gli stessi caratteri in qualsiasi ordine
# - Ignorare maiuscole/minuscole
# - Ignorare spazi

# Esempio:
# "listen", "silent" → True


# ============================================================
# 👨‍💻 CODICE SCRITTO DA ME
# ============================================================

def are_anagrams(str1, str2):

    s1 = str1.lower().replace(" ", "")
    s2 = str2.lower().replace(" ", "")

    if len(s1) != len(s2):
        return False

    return sorted(s1) == sorted(s2)


print(are_anagrams("listen", "silent"))


# ============================================================
# ⚡ FEEDBACK VELOCE
# ============================================================

# Codice pulito e corretto ✅
# Soluzione semplice e giusta
# Ottimo uso di:
# - lower()
# - replace()
# - sorted()

# Nessun errore reale 👍


# ============================================================
# ❌ ERRORI SPIEGATI
# ============================================================

# Nessun errore 👍

# (Extra miglioramento opzionale)
# replace(" ", "") rimuove solo gli spazi singoli
# Se ci fossero tab o più spazi strani, non li prende

# Alternativa più robusta:
# usare "".join(str.split())


# ============================================================
# ✅ CODICE CORRETTO (VERSIONE MIGLIORATA)
# ============================================================

def are_anagrams(str1, str2):

    # Rimuovo spazi e rendo tutto minuscolo
    s1 = "".join(str1.lower().split())
    s2 = "".join(str2.lower().split())

    # Confronto diretto dopo ordinamento
    return sorted(s1) == sorted(s2)


# ============================================================
# 📖 SPIEGAZIONE RIGA PER RIGA
# ============================================================

# def are_anagrams(str1, str2):
# → funzione che prende due stringhe

# str1.lower()
# → trasforma tutto in minuscolo
# "Listen" → "listen"

# .split()
# → divide la stringa sugli spazi
# "a b c" → ["a", "b", "c"]

# "".join(...)
# → unisce senza spazi
# ["a","b","c"] → "abc"

# risultato:
# rimuovi spazi + minuscolo

# sorted(s1)
# → ordina i caratteri
# "listen" → ['e','i','l','n','s','t']

# confronto finale:
# se le liste sono uguali → anagrammi


# ============================================================
# 🧪 TEST
# ============================================================

print(are_anagrams("listen", "silent"))      # True
print(are_anagrams("hello", "world"))        # False
print(are_anagrams("Dormitory", "dirty room"))  # True
# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dato un paragrafo, restituisci un array contenente le tre parole che ricorrono più frequentemente.

# Le parole del paragrafo sono separate da spazi.
# Ignora maiuscole e minuscole.
# Ignora la punteggiatura (, . !).
# L’output deve essere in minuscolo.
# L’array deve essere ordinato per frequenza decrescente.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def get_words(paragraph):

    for char in ",.!":
        paragraph = paragraph.replace(char, "")

    para_split = paragraph.split()
    words = {}

    for word in para_split:
        word = word.lower()
        words[word] = words.get(word, 0) + 1

    sorted_words = sorted(words, key=words.get, reverse=True)
    three_words = sorted_words[:3]

    return three_words

print(get_words("Coding in Python is fun because coding Python allows for coding in Python easily while coding"))

# =========================================================
# //* Codice scritto da ChatGpt
# =========================================================

from collections import Counter

def get_words(paragraph):
    paragraph = paragraph.lower()

    for char in ",.!":
        paragraph = paragraph.replace(char, "")

    words = paragraph.split()
    counts = Counter(words)

    return [word for word, _ in counts.most_common(3)]

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Buona logica di conteggio con dizionario
# - Uso corretto di split e lower
# - Codice leggibile

# //! Contro
# - Punteggiatura gestita in modo limitato
# - sorted(words, key=words.get) meno efficiente
# - lower applicato troppo tardi
# - soluzione non scalabile per testi più complessi

# =========================================================
# //* Consigli
# =========================================================

# - Applica lower() subito all’inizio
# - Usa Counter per problemi di frequenza
# - Per punteggiatura usa regex se aumenta
# - La tua logica è corretta, devi solo rifinirla
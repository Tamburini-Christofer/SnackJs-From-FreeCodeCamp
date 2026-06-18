# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# //todo Consegna dell'esercizio

# Data una stringa di parole, restituisci una nuova stringa con le parole in ordine inverso.
# La prima parola deve trovarsi alla fine e l'ultima all'inizio.
# Le parole possono essere separate da uno o più spazi.
# La stringa restituita deve contenere un solo spazio tra le parole.

# //todo


# //*Codice scritto senza utilizzo di ChatGpt

def reverse_sentence(sentence):

    sentence_reversed = sentence.split()[::-1]
    sentence_join = " ".join(sentence_reversed)

    return sentence_join

print(reverse_sentence("world hello"))

# //*


# //* Codice scritto da ChatGpt

def reverse_sentence(sentence):
    words = sentence.split()
    words.reverse()

    return " ".join(words)

# //*


# //* Pro e contro del mio codice

# //* Pro

# - La soluzione è corretta e soddisfa tutti i requisiti della consegna.
# - Hai sfruttato bene split(), che elimina automaticamente gli spazi multipli.
# - L'utilizzo dello slicing [::-1] rende il codice compatto e leggibile.
# - Il join() ricostruisce correttamente la frase con un solo spazio tra le parole.

# //! Contro

# - La variabile sentence_join potrebbe essere evitata restituendo direttamente il risultato.
# - Il nome sentence_reversed contiene già la lista finale e potrebbe essere chiamato semplicemente words.
# - Crei una nuova lista con lo slicing, consumando leggermente più memoria rispetto a reverse().

# //*


# //* Consigli

# - Continua a utilizzare le funzioni built-in di Python come split() e join(), sono molto apprezzate nei colloqui.
# - Quando una variabile viene utilizzata una sola volta, valuta se può essere evitata.
# - Lo slicing [::-1] è una tecnica Pythonica molto utile da conoscere.
# - La tua soluzione è già molto pulita e vicina a quella che scriverebbe uno sviluppatore Python esperto.

# Valutazione: 9/10
# Soluzione corretta, elegante e perfettamente aderente alla consegna.
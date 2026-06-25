# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# //todo Consegna dell'esercizio

# Date due frasi che rappresentano la tua squadra e quella avversaria,
# ogni parola si scontra con la parola nella stessa posizione.
#
# Il valore di una parola è la somma dei valori delle sue lettere:
# - a-z valgono 1-26
# - A-Z valgono il doppio (2-52)
#
# Vince la parola con il valore maggiore.
# Vince la squadra che ottiene più vittorie.
#
# Restituisci:
# - "We win"
# - "We lose"
# - "Draw"

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def battle(our_team, opponent):
    our_words = our_team.split()
    opp_words = opponent.split()

    def word_value(word):
        total = 0
        for char in word:

            base = ord(char.upper()) - 64

            if char.isupper():
                total += base * 2
            else:
                total += base
        return total

    our_wins = 0
    opp_wins = 0

    for i in range(len(our_words)):
        val_our = word_value(our_words[i])
        val_opp = word_value(opp_words[i])
        
        if val_our > val_opp:
            our_wins += 1
        elif val_opp > val_our:
            opp_wins += 1

    if our_wins > opp_wins:
        return "We win"
    elif our_wins < opp_wins:
        return "We lose"
    else:
        return "Draw"

print(battle("We must never surrender", "Our team must win"))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def battle(our_team, opponent):

    def word_value(word):
        value = 0

        for char in word:
            letter_value = ord(char.lower()) - ord('a') + 1

            if char.isupper():
                letter_value *= 2

            value += letter_value

        return value

    our_score = 0
    opponent_score = 0

    for our_word, opponent_word in zip(our_team.split(), opponent.split()):

        if word_value(our_word) > word_value(opponent_word):
            our_score += 1
        elif word_value(opponent_word) > word_value(our_word):
            opponent_score += 1

    if our_score > opponent_score:
        return "We win"
    elif our_score < opponent_score:
        return "We lose"
    return "Draw"

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Soluzione corretta.
# - Hai creato una funzione separata per il calcolo del valore
#   della parola, migliorando la leggibilità.
# - Ottimo utilizzo di split() per dividere le squadre.
# - Hai gestito correttamente lettere maiuscole e minuscole.
# - La logica delle vittorie è chiara e facile da seguire.
# - Buona organizzazione generale del codice.

# //! Contro
# - Potresti usare zip() invece di accedere alle liste tramite indice.
# - ord(char.upper()) - 64 funziona, ma è meno leggibile rispetto a:
#
#   ord(char.lower()) - ord('a') + 1
#
# - I nomi val_our e val_opp sono corretti ma poco descrittivi.
# - La funzione word_value() potrebbe essere commentata meglio
#   per spiegare il calcolo del punteggio.

# =========================================================
# //* Consigli
# =========================================================

# - Questo esercizio verifica soprattutto:
#   * manipolazione di stringhe
#   * funzioni annidate
#   * utilizzo di ord()
#   * confronto tra collezioni
#
# - Quando scorri due liste in parallelo, prova a ricordarti di zip():
#
#   for a, b in zip(lista1, lista2):
#
#   È spesso più leggibile di:
#
#   for i in range(len(lista1)):
#
# - Hai scelto una buona struttura:
#   1. calcolo valore parola
#   2. confronto parole
#   3. conteggio vittorie
#   4. determinazione del vincitore
#
# - Soluzione da livello intermedio: mostra una buona padronanza
#   delle stringhe e della logica di confronto.

# =========================================================
# Valutazione
# =========================================================

# Correttezza: 10/10
# Leggibilità: 9/10
# Efficienza: 9/10
# Comprensione dell'argomento: 10/10
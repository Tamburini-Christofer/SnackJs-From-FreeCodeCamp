# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# //todo Consegna dell'esercizio

# Dato un array di numeri interi e un array di operatori stringa,
# applica le operazioni ai numeri in sequenza da sinistra a destra.
#
# Ripeti le operazioni finché non sono stati utilizzati tutti i numeri.
#
# Gli operatori validi sono:
# +, -, *, / e %
#
# Esempio:
#
# [1, 2, 3, 4, 5]
# ['+', '*']
#
# Deve essere calcolato:
#
# 1 + 2 = 3
# 3 * 3 = 9
# 9 + 4 = 13
# 13 * 5 = 65
#
# Risultato: 65
#
# Non bisogna rispettare la normale precedenza matematica.

# //todo


# //*Codice scritto senza utilizzo di ChatGpt

def evaluate(numbers, operators):
    result = ""

    for i in range(len(numbers)):
        result += str(numbers[i])

        if i < len(numbers) - 1:
            symbol = operators[i % len(operators)]
            result += symbol

    total = eval(result)
    return total

print(evaluate([5, 6, 7, 8, 9], ['+', '-']))

# *


# //* Codice scritto da ChatGpt

def evaluate(numbers, operators):

    total = numbers[0]

    for i in range(1, len(numbers)):

        operator = operators[(i - 1) % len(operators)]
        number = numbers[i]

        if operator == "+":
            total += number

        elif operator == "-":
            total -= number

        elif operator == "*":
            total *= number

        elif operator == "/":
            total /= number

        elif operator == "%":
            total %= number

    return total

# *


# //* Pro e contro del mio codice

# //* Pro

# - Hai utilizzato correttamente un ciclo for.
# - Hai usato il modulo (%) per ripetere gli operatori.
# - Hai costruito dinamicamente l'espressione.
# - Il codice è corto e leggibile.
# - Con operatori semplici come + e - funziona correttamente.

# //! Contro

# - eval() non rispetta la richiesta dell'esercizio.
#
# Esempio:
#
# 1 + 2 * 3 + 4 * 5
#
# eval() produce:
#
# 27
#
# perché esegue prima le moltiplicazioni.
#
# L'esercizio invece richiede:
#
# (((1+2)*3)+4)*5
#
# che restituisce:
#
# 65
#
# - eval() è generalmente sconsigliato:
#   - più lento
#   - meno sicuro
#   - spesso vietato nei colloqui tecnici
#
# - Non gestisci direttamente gli operatori.
#
# - La logica richiesta era quella di aggiornare
#   il risultato passo dopo passo.

# *


# //* Consigli

# - Ottima intuizione nell'usare:
#
#   operators[i % len(operators)]
#
#   È la parte migliore della soluzione.
#
# - Ripassa:
#
#   ✓ accumulatore (total)
#   ✓ aggiornamento progressivo del risultato
#   ✓ if / elif
#   ✓ modulo %
#
# - Quando una consegna dice:
#
#   "da sinistra a destra"
#
#   evita eval() e pensa sempre a:
#
#   "prendo un risultato iniziale e lo modifico
#   passo dopo passo"
#
# - Livello della soluzione:
#
#   Logica: 7/10
#   Python: 7.5/10
#   Aderenza alla consegna: 4/10
#
# - In un colloquio Junior:
#
#   Il ragionamento sarebbe apprezzato,
#   ma probabilmente ti chiederebbero
#   di eliminare eval() e implementare
#   le operazioni manualmente.

# *
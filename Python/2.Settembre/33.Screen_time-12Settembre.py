# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio, codice e vorrei che tu mi dessi consigli

# //todo Consegna dell'esercizio

# Dato un array di sette numeri interi che rappresentano una settimana,
# dove ogni numero rappresenta le ore al telefono per giorno,
# determinare se il tempo è eccessivo in base a:
# - un singolo giorno > 10 ore
# - media di 3 giorni consecutivi >= 8 ore
# - media dei 7 giorni >= 6 ore

# //todo


# //*Codice scritto senza utilizzo di ChatGpt

from functools import reduce

def too_much_screen_time(hours):
    if reduce(lambda x, y: x + y, hours) / len(hours) >= 6:
        return True

    for i in range(len(hours)):
        time = hours[i];
        if time >= 10:
            return True;

        if i < len(hours) - 2:
            media_tre_giorni = (hours[i] + hours[i+1] + hours[i+2]) / 3
            if media_tre_giorni >= 8:
                return True
        
    return False

print(too_much_screen_time([1, 2, 3, 4, 5, 6, 7]))

# //*


# //* Codice scritto da ChatGpt

def too_much_screen_time(hours):
    if max(hours) > 10:
        return True

    if sum(hours) / 7 >= 6:
        return True

    for i in range(len(hours) - 2):
        if (hours[i] + hours[i+1] + hours[i+2]) / 3 >= 8:
            return True

    return False

# //*


# //* Pro e contro del mio codice

# //* Pro

# - La logica generale è corretta e rispetta tutti i vincoli.
# - Hai gestito bene i casi di media su 3 giorni consecutivi.
# - L'uso di reduce mostra buona conoscenza degli strumenti Python.
# - Il codice è chiaro nella separazione dei controlli.

# //! Contro

# - Il controllo della media dei 7 giorni viene fatto prima di controllare il singolo giorno (>10), mentre la consegna suggerisce priorità logica indipendente.
# - Usi reduce quando sum() sarebbe più semplice e leggibile.
# - Il ciclo controlla anche la media dopo aver già verificato il totale, rendendo alcune operazioni inutili.
# - I punti e virgola non sono necessari in Python.
# - Il loop parte da 0 fino a len(hours), ma per le triple conviene fermarsi prima.

# //*


# //* Consigli

# - Usa sum() invece di reduce: è più Pythonico e immediato.
# - Controlla prima i casi più semplici e veloci (max e sum), poi le condizioni più complesse.
# - Nel ciclo delle finestre di 3 giorni usa direttamente range(len(hours) - 2).
# - Quando lavori con finestre scorrevoli, pensa sempre a evitare controlli fuori indice.
# - Ottimo esercizio: stai già ragionando bene sulle condizioni multiple.

# Valutazione: 8.5/10
# Buona logica, ma si può migliorare in efficienza e pulizia del codice.
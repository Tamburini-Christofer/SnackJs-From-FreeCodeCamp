# //todo Consegna dell'esercizio
# Dato un numero intero che rappresenta il numero di candele iniziali e un numero intero che rappresenta quante candele bruciate servono per crearne una nuova,
# restituisci il numero totale di candele utilizzate dopo averne create e bruciate il maggior numero possibile.

# Esempio:
# burn_candles(7, 2) → 13


# //* Codice scritto senza utilizzo di ChatGPT
def burn_candles(candles, leftovers_needed):

    burned = candles;
    leftovers = candles;

    while leftovers >= leftovers_needed:
        newCandles = leftovers // leftovers_needed;
        burned += newCandles
        leftovers = leftovers % leftovers_needed + newCandles

    return burned


# //* Codice scritto da ChatGPT (correzione)
def burn_candles_correct(candles, leftovers_needed):
    burned = 0
    leftovers = candles

    while leftovers >= leftovers_needed:
        new_candles = leftovers // leftovers_needed
        burned += leftovers_needed * new_candles
        leftovers = (leftovers % leftovers_needed) + new_candles

    burned += leftovers
    return burned


# //* Pro e contro del mio codice

# //* Pro
# - Hai impostato bene il ciclo while
# - Uso corretto di // e %
# - Buona intuizione sulla logica di riciclo

# //! Contro
# - Hai contato le nuove candele come se fossero già bruciate
# - Confusione tra candele create e candele consumate
# - Aggiornamento di leftovers non del tutto corretto

# //* Consigli
# - Separa sempre: bruciate vs create
# - Conta solo ciò che viene effettivamente consumato
# - Pensa al ciclo come: brucio → riciclo → ripeto
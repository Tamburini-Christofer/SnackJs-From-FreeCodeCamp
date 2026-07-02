# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Dati un numero intero che rappresenta il numero iniziale di paia di
# calzini e un altro intero che indica il numero di cicli di lavaggio
# effettuati, restituisci il numero di paia complete di calzini.
#
# Regole:
# - Ogni 2 cicli si perde un calzino.
# - Ogni 3 cicli si ritrova un calzino perso.
# - Ogni 5 cicli un calzino si rovina e viene gettato.
# - Ogni 10 cicli si acquista un nuovo paio di calzini.
# - Il numero totale di calzini non può mai scendere sotto zero.
# - Più regole possono verificarsi nello stesso ciclo.
# - Restituire il numero di paia complete.

# =========================================================
# //* Codice scritto senza utilizzo di ChatGPT
# =========================================================

def sock_pairs(pairs, cycles):
    total_sock = pairs * 2

    for wash in range(1, cycles + 1):

        if wash % 2 == 0:
            total_sock -= 1

        if wash % 3 == 0:
            total_sock += 1

        if wash % 5 == 0:
            total_sock -= 1

        if wash % 10 == 0:
            total_sock += 2

        if total_sock < 0:
            return 0

    return total_sock // 2

print(sock_pairs(6, 25))

# =========================================================
# //* Codice scritto da ChatGPT (versione migliorata)
# =========================================================

def sock_pairs(pairs, cycles):
    socks = pairs * 2

    for wash in range(1, cycles + 1):
        if wash % 2 == 0:
            socks = max(0, socks - 1)

        if wash % 3 == 0:
            socks += 1

        if wash % 5 == 0:
            socks = max(0, socks - 1)

        if wash % 10 == 0:
            socks += 2

    return socks // 2

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La simulazione dei cicli di lavaggio è chiara e intuitiva.
# - Le regole sono applicate nell'ordine corretto e possono sovrapporsi.
# - I nomi delle variabili sono comprensibili.
# - Il risultato finale viene calcolato correttamente con la divisione intera.

# //! Contro
# - Il vincolo "il numero totale di calzini non può mai scendere sotto zero"
#   non è rispettato completamente.
# - Se i calzini diventano negativi, la funzione termina immediatamente con
#   return 0, mentre dovrebbe semplicemente riportare il totale a 0 e
#   continuare i cicli successivi.
# - total_sock potrebbe essere rinominato in total_socks per una maggiore
#   chiarezza.

# =========================================================
# //* Consigli
# =========================================================

# - Quando una consegna dice che un valore "non può mai scendere sotto zero",
#   usa max(0, valore) invece di interrompere la funzione.
# - Continua a simulare tutti i cicli anche quando il totale arriva a zero,
#   perché nei cicli successivi si potrebbero ritrovare o acquistare nuovi
#   calzini.
# - La logica della simulazione è buona: hai tradotto correttamente ogni
#   regola in un blocco if.
# # //todo Consegna dell'esercizio

# Data una stringa, determinare se si tratta di un indirizzo IPv4 valido.

# Condizioni:
# - Deve contenere esattamente 4 numeri separati da punti.
# - Ogni numero deve essere compreso tra 0 e 255.
# - Non sono ammessi zeri iniziali (tranne il numero "0").
# - Sono ammessi solo caratteri numerici.

# # //todo

# Bisogna verificare sia la struttura dell'indirizzo sia la validità di ogni singolo blocco.

# # //*Codice scritto senza utilizzo di ChatGpt

def is_valid_ipv4(ipv4):
    ip_split = ipv4.replace(".", " ").split()

    if len(ip_split) < 4:
        return False

    is_ip = True

    for number in ip_split:
        if number.startswith("0") and number != "0":
            return False;

        number = int(number);
        if number < 0 or number > 255:
            return False;

    return is_ip

# # //*

# # //* Pro e contro del mio codice

# # //* Pro

# - Hai gestito correttamente il controllo degli zeri iniziali.
# - Hai verificato il range tra 0 e 255.
# - Hai usato un ciclo semplice e leggibile.
# - Restituisci immediatamente False quando trovi un errore.

# # //! Contro

# - `replace(".", " ").split()` è rischioso: `"192.168.101."` diventa `["192", "168", "101"]`, facendo sparire l'ultimo blocco vuoto.
# - Controlli solo `len(ip_split) < 4`, ma dovresti verificare che sia **esattamente 4**.
# - Se uno dei blocchi contiene lettere (`"192.abc.1.1"`), `int(number)` genera un errore.
# - La variabile `is_ip` è inutile: vale sempre `True` e non viene mai modificata.
# - I `;` a fine riga non servono in Python.

# # //*

# # //* Consigli

# - Usa direttamente:

# ```python
# ip_split = ipv4.split(".")
# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# Incolla direttamente questo file nel progetto VS Code
# =========================================================

# //Prompt ChatGpt: questo è il modello. Invierò consegna esercizio e codice, e vorrei feedback strutturato

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# On October 28th, 1994, Netscape Navigator was released, helping millions
# of people explore the early web.
#
# Given an array of browser commands executed in Netscape Navigator,
# return the current page after executing all commands.
#
# Rules:
# - Start on the "Home" page, which is not included in the commands.
# - Valid commands:
#   - "Visit Page": visit a new page. The forward history must be cleared.
#   - "Back": go to the previous page if possible.
#   - "Forward": go to the next page if possible.
#
# Example:
# ["Visit About Us", "Back", "Forward"] -> "About Us"

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

def navigate(commands):
    pagina_corrente = "Home";
    cronologia = [];
    avanti = [];

    for command in commands:
        if command.startswith("Visit"):
            cronologia.append(pagina_corrente);
            pagina_corrente = command[6:];
            avanti = [];
        
        elif command == "Back" and len(cronologia):
            avanti.append(pagina_corrente);
            pagina_corrente = cronologia.pop();

        elif command == "Forward" and len(avanti):
            cronologia.append(pagina_corrente);
            pagina_corrente = avanti.pop();

    return pagina_corrente

print(navigate(["Visit About Us", "Back", "Forward"]))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def navigate(commands):
    current_page = "Home"
    back_history = []
    forward_history = []

    for command in commands:
        if command.startswith("Visit"):
            back_history.append(current_page)
            current_page = command[6:]
            forward_history.clear()

        elif command == "Back" and back_history:
            forward_history.append(current_page)
            current_page = back_history.pop()

        elif command == "Forward" and forward_history:
            back_history.append(current_page)
            current_page = forward_history.pop()

    return current_page

print(navigate(["Visit About Us", "Back", "Forward"]))

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - La logica è corretta e simula bene il funzionamento di un browser.
# - Hai utilizzato due stack (cronologia e avanti), che è la soluzione ideale.
# - Hai gestito correttamente l'eliminazione della cronologia "Avanti"
#   quando viene visitata una nuova pagina.
# - L'utilizzo di append() e pop() rende il codice semplice ed efficiente.
# - Complessità temporale O(n).

# //! Contro
# - Il punto e virgola (;) è superfluo in Python.
# - "len(cronologia)" e "len(avanti)" possono essere sostituiti con
#   "cronologia" e "avanti", più Pythonici.
# - "avanti = []" crea una nuova lista; clear() svuota quella esistente.
# - I nomi delle variabili sono corretti, ma usare nomi coerenti in inglese
#   (come nell'esercizio) rende il codice più uniforme.

# =========================================================
# //* Consigli
# =========================================================

# - In Python una lista vuota è False, quindi puoi scrivere:
#   if cronologia:
#   invece di:
#   if len(cronologia):
#
# - Per svuotare una lista esistente preferisci:
#   avanti.clear()
#   invece di:
#   avanti = []
#
# - Continua a pensare ai problemi come strutture dati:
#   qui hai riconosciuto perfettamente l'utilizzo di due stack,
#   che è esattamente la soluzione adottata anche nelle implementazioni reali
#   della cronologia dei browser.
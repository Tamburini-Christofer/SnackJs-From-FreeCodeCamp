# =========================================================
# ! ESERCIZIO NON SVOLTO PERSONALMENTE
# =========================================================
# Questo esercizio non è stato svolto da me ed è quindi
# escluso dall'analisi delle mie competenze.
# =========================================================


# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data una frase, restituisci una versione "da insegnante saggio":
#
# - Trova la prima parola tra: "have", "must", "are", "will", "can"
# - Sposta tutte le parole fino a quella parola inclusa alla fine
# - Mantieni ordine delle parole spostate
# - Le parole spostate diventano minuscole
# - Aggiungi ", " prima delle parole spostate
# - Mantieni la punteggiatura finale originale
# - La nuova frase deve iniziare con maiuscola

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import re

def wise_speak(frase):
    keywords = ["have", "must", "are", "will", "can"]
    
    punteggiatura = frase[-1]
    testo = frase[:-1]
    parole = testo.split()
    
    indice_taglio = -1
    parola_trovata = ""
    
    for i, parola in enumerate(parole):
        if parola.lower() in keywords:
            indice_taglio = i
            parola_trovata = parola
            break
            
    if indice_taglio == -1:
        return frase

    prima_parte = parole[:indice_taglio + 1]
    seconda_parte = parole[indice_taglio + 1:]
    
    nuova_frase = " ".join(seconda_parte)

    if nuova_frase:
        nuova_frase = nuova_frase[0].upper() + nuova_frase[1:]
    
    parte_spostata = " ".join(prima_parte).lower()
    nuova_frase += f", {parte_spostata}{punteggiatura}"
    
    return nuova_frase


print(f"1. {wise_speak('You must speak wisely.')}")

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

def wise_speak(sentence):
    keywords = {"have", "must", "are", "will", "can"}
    
    words = sentence[:-1].split()
    punctuation = sentence[-1]
    
    split_index = next(
        (i for i, w in enumerate(words) if w.lower() in keywords),
        None
    )
    
    if split_index is None:
        return sentence

    main = words[split_index + 1:]
    moved = words[:split_index + 1]

    result = " ".join(main)
    if result:
        result = result[0].upper() + result[1:]

    moved_part = ", " + " ".join(moved).lower()

    return f"{result}{moved_part}{punctuation}"


# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Logica corretta e ben strutturata
# - Gestione corretta della punteggiatura finale
# - Uso chiaro di split e slicing
# - Buon controllo della parola chiave
# - Funziona anche se non trova keyword

# //! Contro
# - import re non utilizzato
# - variabile parola_trovata non serve
# - logica un po' lunga e migliorabile
# - capitalizzazione fatta manualmente invece di .capitalize()
# - slicing della stringa per punteggiatura fragile (assume ultimo carattere)

# =========================================================
# //* Consigli
# =========================================================

# - Evita import inutilizzati (re in questo caso)
# - Usa set invece di lista per keyword (più veloce)
# - Usa .capitalize() invece di manipolare stringhe a mano
# - Puoi semplificare molto usando slicing più diretto
# - Continua così: la logica è corretta, ora serve solo pulizia del codice

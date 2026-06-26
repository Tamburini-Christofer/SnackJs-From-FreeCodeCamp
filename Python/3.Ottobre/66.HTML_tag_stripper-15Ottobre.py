# =========================================================
# FILE TEMPLATE - ANALISI ESERCIZI PYTHON
# =========================================================

# =========================================================
# //todo Consegna dell'esercizio
# =========================================================

# Data una stringa di codice HTML, rimuovere i tag e restituire
# il testo semplice.
#
# La stringa di input conterrà solo HTML valido.
# I tag possono essere annidati.
# Rimuovere anche gli eventuali attributi.
#
# Esempio:
# '<a href="#">Clicca qui</a>' -> "Clicca qui"

# =========================================================
# //* Codice scritto senza utilizzo di ChatGpt
# =========================================================

import re

def strip_tags(html):
    clean_text = re.sub(r'<[^>]*>', '', html)
    return clean_text

print(strip_tags('<p class="center">Hello <b>World</b>!</p>'))

# =========================================================
# //* Codice scritto da ChatGpt (versione migliorata)
# =========================================================

import re

def strip_tags(html):
    return re.sub(r"<[^>]+>", "", html)

# =========================================================
# //* Pro e contro del mio codice
# =========================================================

# //* Pro
# - Hai individuato subito l'approccio corretto usando le espressioni regolari.
# - La regex rimuove sia i tag sia gli attributi.
# - Il codice è corto, leggibile ed efficiente.
# - Hai assegnato il risultato a una variabile con un nome chiaro.

# //! Contro
# - La variabile clean_text è opzionale: puoi restituire direttamente
#   il risultato della regex.
# - La regex "<[^>]+>" è leggermente più restrittiva rispetto a "<[^>]*>",
#   evitando di considerare un tag vuoto "<>", anche se in questo esercizio
#   entrambe funzionano.

# =========================================================
# //* Consigli
# =========================================================

# - Quando il risultato viene usato una sola volta, puoi restituirlo
#   direttamente senza creare una variabile intermedia.
# - Continua a esercitarti con le regex: sono molto utili per problemi
#   di elaborazione del testo.
# - Ricorda però che, in progetti reali, per analizzare HTML complesso
#   è preferibile usare parser dedicati (es. BeautifulSoup) anziché regex.
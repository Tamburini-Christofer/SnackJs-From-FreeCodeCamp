'''
Consegna dell'esercizio
Date due stringhe della stessa lunghezza, una parola segreta e un'ipotesi, confrontate l'ipotesi con la parola segreta utilizzando le seguenti regole:

Requisiti da rispettare
La parola segreta e l'ipotesi saranno composte solo da lettere maiuscole (dalla "A" alla "Z");
Per ogni lettera nell'ipotesi, sostituitela con un numero in base alla sua corrispondenza con la parola segreta:
"2" se la lettera Ã¨ presente nella parola segreta e nella posizione corretta.
"1" se la lettera Ã¨ presente nella parola segreta ma nella posizione sbagliata.
"0" se la lettera non Ã¨ presente nella parola segreta.
Ogni lettera nella parola segreta puÃ² essere utilizzata al massimo una volta.
Le corrispondenze esatte ("2") vengono assegnate per prime, poi le corrispondenze parziali ("1") vengono assegnate da sinistra a destra per le lettere rimanenti.
Se una lettera compare piÃ¹ volte nell'ipotesi, puÃ² corrispondere solo a un numero di volte pari a quello presente nella parola segreta. Ad esempio, data la parola segreta "APPLE" e un'ipotesi di "POPPA", restituisci "10201":
La prima "P" non Ã¨ nella posizione corretta ("1"), la "O" non Ã¨ nella parola segreta ("0"), la seconda "P" Ã¨ nella posizione corretta ("2"), la terza "P" Ã¨ uno zero ("0") perchÃ© sono state utilizzate le due "P" nella parola segreta e la "A" non Ã¨ nella posizione corretta ("1").
'''


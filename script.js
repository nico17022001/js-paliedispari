/*
Passaggi Palindroma 
- Creo un promt dove chiedo una parola
- Trasformo la parola data dall'utente in un array 
- Creo una condizione nella quale se la parola data dall'utente uguale anche se invertita allora la parola è palindroma 



*/

const chiediparola = prompt("Parola") 

const parolaInvertita = chiediparola.split("").reverse()

console.log( parolaInvertita)

const parolaUnita = parolaInvertita.join("")

if (chiediparola == parolaUnita) {
  console.log("Palindroma")
}else {
  console.log("Non è palindroma")
}









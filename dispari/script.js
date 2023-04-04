const pariDispari = prompt("scegli pari o dispari");
const numeroScelto = parseInt(prompt("scegli un numero da 1 a 5"));
const numeroPc = generaNumero(1,5);

const sommaNumeri = numeroScelto + numeroPc

console.log('numero scelto dal pc', numeroPc)
console.log('somma', sommaNumeri);

risultato = sommaNumeri % 2 ? "dispari" : "pari";
document.querySelector("div").innerHTML = risultato == pariDispari ? "hai vinto" : "hai perso";

function generaNumero(min, max) {
  return Math.floor(Math.random() * max) + min;
}









const pariDispari = prompt("scegli pari o dispari");
const numeroScelto = parseInt(prompt("scegli un numero da 1 a 5"));
const div = document.querySelector("div")
const numeroPc = generaNumero(1,5);
console.log(numeroPc)

function generaNumero(min,max) {
  const numeroGenerato = Math.floor(Math.random() * max) + min;
  return numeroGenerato
}

if (numeroScelto > 0 && numeroScelto <= 5) {

}else{
  prompt("inserisci un numero valido")
}

const sommaNumeri = numeroScelto + numeroPc


if (risultato = (!sommaNumeri % 2)) {
  let risultato = console.log("dispari")
}else{
  let risultato = console.log("pari")
}

if (risultato == pariDispari) {
  div.innerHTML = "hai vinto"
}else{
  div.innerHTML = "hai perso"
}















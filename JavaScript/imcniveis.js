let peso = 86
let altura = 1.76
let imc = peso / (altura * altura)
console.log(imc)
if (imc < 18.5) {
    console.log("Ta precisando de uma cesta básica irmão");
}
else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
}
else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
    console.log("Projeto Thais Carla");
} else {
    console.log("THAIS CARLA é você???");
}
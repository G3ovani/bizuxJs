function imc(peso, altura) {
    let valorimc = peso / (altura * altura);

    if (valorimc < 18.5) {
        return ("Ta precisando de uma cesta básica irmão")
    }
    else if (valorimc >= 18.5 && valorimc < 25) {
        return ("Peso normal");
    }
    else if (valorimc >= 25 && valorimc < 30) {
        return ("Acima do peso");
    } else if (valorimc >= 30 && valorimc < 40) {
        return ("Projeto Thais Carla");
    } else {
        return ("THAIS CARLA é você???");
    }

}
console.log(imc(80, 1.80))
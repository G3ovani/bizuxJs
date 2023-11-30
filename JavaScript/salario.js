function calculo(bruto, beneficios) {
    let impostoDoAmor;
    if (bruto < 1100.00) {
        impostoDoAmor = bruto * 0.05;
    } else if (bruto >= 1100.01 && bruto < 2500.00) {
        impostoDoAmor = bruto * 0.1;
    } else {
        impostoDoAmor = bruto * 0.15;
    }
    return (bruto - impostoDoAmor) + beneficios;
}

console.log(calculo(1100, 50));
console.log(calculo(2000, 250));
console.log(calculo(3000, 400));

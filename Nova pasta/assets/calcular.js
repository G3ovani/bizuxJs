const calcular = document.getElementById('calcular')

calcular.addEventListener('click', function soma(){
    const numero1 = Number(document.getElementById('num1').value);
    const numero2 = Number(document.getElementById('num2').value);

    const total = document.getElementById('total')

    total.textContent = numero1 + numero2
})
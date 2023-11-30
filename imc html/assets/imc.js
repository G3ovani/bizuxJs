const calcular = document.getElementById('multiplicar')

calcular.addEventListener('click', function mult(){
    const num1 = Number(document.getElementById('num1').value);
    const nume2 = Number(document.getElementById('num2').value);

    const total = document.getElementById('total')

    total.textContent = Number(num1 / ( nume2 * nume2)).toFixed(2)
}) 
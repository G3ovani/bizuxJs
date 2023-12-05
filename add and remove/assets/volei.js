const add = document.getElementById('adicionar')
const add2 = document.getElementById('adicionar2')
const remove = document.getElementById('remover')
const remove2 = document.getElementById('remover2')

let numero1 = 0
let numero2 = 0

add.addEventListener('click', function (){
    const addd1 = document.getElementById('brasil')

    numero1++

    addd1.textContent = Number(numero1)
}) 
add2.addEventListener('click', function (){
    const addd2 = document.getElementById('italia')

    numero2++

    addd2.textContent = Number(numero2)
}) 
remove.addEventListener('click', function (){
    const addd1 = document.getElementById('brasil')

    numero1--

    addd1.textContent = Number(numero1)
    if(numero1 < 0){
        numero1 = 0
        addd1.textContent = Number(numero1)
    }
}) 
remove2.addEventListener('click', function (){
    const addd2 = document.getElementById('italia')

    numero2--

    addd2.textContent = Number(numero2)
    if(numero2 < 0){
        numero2 = 0
        addd2.textContent = Number(numero2)
    }
}) 
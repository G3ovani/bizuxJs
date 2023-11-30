let botaoVermelho = document.getElementById("vermelho")
let botaoVerde = document.getElementById("verde")
function mudaCorFundo(cor){
    document.body.style.backgroundColor = cor
}

botaoVermelho.addEventListener("click",function(){
    mudaCorFundo("crimson")
})
botaoVerde.addEventListener("click",function(){
    mudaCorFundo("chartreuse")
})










console.log(botaoVermleho)
const botao = document.getElementById("clicar")

botao.addEventListener("click",function mudarBotao(){
    let saudacao = document.getElementById("paragrafo")
    saudacao.innerHTML = "Boa noite e Obrigado por clicar"
})



//function mudarBotao(){
    //const botao = document.getElementById('clicar')
    //botao.innerHTML = 'clicou'
//}
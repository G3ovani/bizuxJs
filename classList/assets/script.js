let btn = document.getElementById("botao")

btn.addEventListener("click", function trocar (){
    let div = document.getElementById("titulo")
    if(div.classList.contains("verde")){
        div.classList.remove("verde")
    }
    else{
        div.classList.add("verde")
    }
})
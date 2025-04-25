let carusel = document.getElementById("carusel")
let buyButton = document.getElementById("buy_button")

function showBuy(){
    carusel.style.opacity = ".3"
    buyButton.style.display = "block"
}

function hideBuy(){
    carusel.style.opacity = "1"
    buyButton.style.display = "none"
}
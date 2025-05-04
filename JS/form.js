document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle");
    const flipCard = document.getElementById("flipCard");

    if (!toggle || !flipCard) {
        console.error("No se encontraron los elementos necesarios.");
        return;
    }

    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            flipCard.classList.add("flipped");
        } else {
            flipCard.classList.remove("flipped");
        }
    });
});

let flipCardForm = document.querySelector('.flip-card__form')

flipCardForm.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e)
})
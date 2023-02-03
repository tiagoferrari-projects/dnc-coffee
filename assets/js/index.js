
let cards = Array.from(document.querySelectorAll(".card"));
let buttons = Array.from(document.querySelectorAll(".btn-comprar"));
let cardText = Array.from(document.querySelectorAll(".card-text"));

cards.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
        cardText[index].style.height = "110px";
        buttons[index].style.visibility = 'visible';
        buttons[index].style.height = "auto";
        buttons[index].style.margin = "20px"
    });


    element.addEventListener("mouseleave", () => {
        cardText[index].style.height = "auto";
        buttons[index].style.visibility = 'hidden';
        buttons[index].style.height = "0";
    });
});
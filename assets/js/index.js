//variáveis do DOM para criar botão ao passar no card
let cards = Array.from(document.querySelectorAll(".card"))
let buttons = Array.from(document.querySelectorAll(".btn-comprar"))
let cardText = Array.from(document.querySelectorAll(".card-text"))

// Arrow functions para aprecer/desaparecer botão comprar

cards.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
        cardText[index].style.height = "110px"
        buttons[index].style.visibility = 'visible'
        buttons[index].style.height = "auto"
    });


    element.addEventListener("mouseleave", () => {
        cardText[index].style.height = "auto"
        buttons[index].style.visibility = 'hidden'
        buttons[index].style.height = "0"
    });
});

// variáveis do modal de atendimento
let modalCard = null
let modal = document.querySelector("#modal")
let modalPlace = document.querySelector("#modalPlace")

// verifica se já existe um modal e não cria vários em cascata
modal.addEventListener("click", () => {
    if (modalCard !== null) {
        modalCard.remove();
    }

    // cria e torna div do card do modal visível
    modalCard = document.createElement("div")
    modalPlace.style.visibility = "visible"

    // conteudo do modal
    modalCard.innerHTML = `<div class="modalAttendance"><button><img src="./assets/images/fechar.png" onClick="closeModal()"></button>
    <h1>Atendimento</h1>
    <p>Rua José de Alencar, 111, Centro<br>
    CEP: 12209-000 | +55 (11) 3333-8000</p>
     <button>ENTRAR EM CONTATO</button>
    </div>`

    modalPlace.append(modalCard)

})

//  fecha o modal ao clicar no "x"
closeModal = () => {
    modalPlace.style.visibility = "hidden"
}
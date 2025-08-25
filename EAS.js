const container = document.getElementById("container")
let counter = 0;
while (counter < 256) {
    const twelveDivs = document.createElement("div");
    container.appendChild(twelveDivs);
    twelveDivs.classList.add("square");
    twelveDivs.id = "deActivated";
    twelveDivs.style.width = "31.25px"
    twelveDivs.style.height = "31.25px"
    counter++;
    console.log(counter)
}

let hovered = document.querySelectorAll(".square");
hovered.forEach((square) => {
    square.addEventListener('mouseenter', (event) => {
    let target = event.target;
    target.classList.add("activatedSquare");
    });
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', (event) => {
    let squareNumber = prompt("how many squares per side of the grid?");
    let target = event.target;
    let counter = 0;
    let size = 500/squareNumber
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    while (counter < (squareNumber * squareNumber)) {
        const twelveDivs = document.createElement("div");
        container.appendChild(twelveDivs);
        twelveDivs.classList.add("square");
        twelveDivs.id ="deActivated";
        twelveDivs.style.width = `${size}px`;
        twelveDivs.style.height = `${size}px`;
        counter++;
    }
    let hovered = document.querySelectorAll(".square");
    hovered.forEach((square) => {
        square.addEventListener('mouseenter', (event) => {
        let target = event.target;
        target.classList.add("activatedSquare");
        });
    });
});

const container = document.getElementById("container")
let counter = 0;
function randomColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
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
    let rgb = randomColour();
    target.style.backgroundColor = `${rgb}`
    target.classList.add("activatedSquare");
    });
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', (event) => {
    let squareNumber = prompt("how many squares per side of the grid? Limit 100", "16");
    if (squareNumber > 100 || squareNumber === 0) {
        squareNumber = 100;
    }
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
        let rgb = randomColour();
        target.style.backgroundColor = `${rgb}`
        target.classList.add("activatedSquare");
        });
    });
});



const container = document.getElementById("container")
let counter = 0;
while (counter < 256){
    const twelveDivs = document.createElement("div");
    container.appendChild(twelveDivs);
    twelveDivs.classList.add("square");
    twelveDivs.id ="deActivated";
    counter++;
    console.log(counter)
}

const hovered = document.querySelectorAll(".square");
hovered.forEach((square) => {
    square.addEventListener('mouseenter', (event) => {
    let target = event.target;
    target.classList.add("activatedSquare");
    });
});


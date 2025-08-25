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
        target.classList.add("activatedSquare");
        });
    });
});

let onOffrgb = "off"
const rgbButton = document.getElementById("rgb");
rgbButton.addEventListener('click', (event) =>{
    if (onOffrgb ==="off") {
        onOffrgb = "on";
        rgbButton.style.backgroundColor = "green"
        let hovered = document.querySelectorAll(".square");
        hovered.forEach((square) => {
            square.addEventListener('mouseenter', (event) => {
                let target = event.target;
                let rgb = randomColour();
                target.style.backgroundColor = `${rgb}`
                target.classList.add("activatedSquare");
            })
        });
    }
    else if (onOffrgb = "on" && onOffOpacity === "on") {
        onOffrgb = "off";
        rgbButton.style.backgroundColor = "white"
        let hovered = document.querySelectorAll(".square");
        hovered.forEach((square) => {
            let hoverCounter = 0;
            square.addEventListener('mouseenter', (event) => {
                let target = event.target;
                if (hoverCounter === 0) {
                    target.style.opacity = "0.1";
                }
                else if (hoverCounter === 1) {
                    target.style.opacity = "0.2";
                }
                else if (hoverCounter === 2) {
                    target.style.opacity = "0.3";
                }
                else if (hoverCounter === 3) {
                    target.style.opacity = "0.4";
                }
                else if (hoverCounter === 4) {
                    target.style.opacity = "0.5";
                }
                else if (hoverCounter === 5) {
                    target.style.opacity = "0.6";
                }
                else if (hoverCounter === 6) {
                    target.style.opacity = "0.7";
                }
                else if (hoverCounter === 7) {
                    target.style.opacity = "0.8";
                }
                else if (hoverCounter === 8) {
                    target.style.opacity = "0.9";
                }
                else if (hoverCounter >= 9) {
                    target.style.opacity = "1";
                }
                target.classList.add("activatedSquare");
                target.style.backgroundColor = "black";
                hoverCounter +=1;
            })
        })
    }
    else {
        onOffrgb = "off";
        rgbButton.style.backgroundColor = "white"
        let hovered = document.querySelectorAll(".square");
        hovered.forEach((square) => {
            square.addEventListener('mouseenter', (event) => {
                let target = event.target;
                target.style.backgroundColor = "black"
                target.classList.add("activatedSquare");
            });
        });
    }
});

let onOffOpacity = "off";
const opacityButton = document.getElementById("opacity");
opacityButton.addEventListener('click', (event) =>{
    if (onOffOpacity ==="off") {
        onOffOpacity = "on";
        opacityButton.style.backgroundColor = "green"
        let hovered = document.querySelectorAll(".square");
        hovered.forEach((square) => {
            let hoverCounter = 0;
            square.addEventListener('mouseenter', (event) => {
                let target = event.target;
                if (hoverCounter === 0) {
                    target.style.opacity = "0.1";
                }
                else if (hoverCounter === 1) {
                    target.style.opacity = "0.2";
                }
                else if (hoverCounter === 2) {
                    target.style.opacity = "0.3";
                }
                else if (hoverCounter === 3) {
                    target.style.opacity = "0.4";
                }
                else if (hoverCounter === 4) {
                    target.style.opacity = "0.5";
                }
                else if (hoverCounter === 5) {
                    target.style.opacity = "0.6";
                }
                else if (hoverCounter === 6) {
                    target.style.opacity = "0.7";
                }
                else if (hoverCounter === 7) {
                    target.style.opacity = "0.8";
                }
                else if (hoverCounter === 8) {
                    target.style.opacity = "0.9";
                }
                else if (hoverCounter >= 9) {
                    target.style.opacity = "1";
                }
                target.classList.add("activatedSquare");
                hoverCounter +=1;
            })
        });
    }
    else if (onOffOpacity = "on" && onOffrgb === "on") {
        onOffOpacity = "off";
        opacityButton.style.backgroundColor = "white"
        let hovered = document.querySelectorAll(".square");
        hovered.forEach((square) => {
            square.addEventListener('mouseenter', (event) => {
                let target = event.target;
                target.style.opacity = "1";
                target.classList.add("activatedSquare");
                let rgb = randomColour();
                target.style.backgroundColor = `${rgb}`;
            })
        })
    }
    else {
        onOffOpacity = "off";
        opacityButton.style.backgroundColor = "white"
        let hovered = document.querySelectorAll(".square");
        hovered.forEach((square) => {
            square.addEventListener('mouseenter', (event) => {
                let target = event.target;
                target.style.backgroundColor = "black";
                target.style.opacity = "1";
                target.classList.add("activatedSquare");
            });
        });
    }
});




function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function resetGrid() {
    divContainer.innerHTML = ""
    setupGrid(numOfGrid,dimensionPerEach)
}

function setCurrentMode(newMode) {
    currentlyActive(newMode)
    currentMode = newMode
}

function setCurrentMode(newMode) {
    currentlyActive(newMode)
    currentMode = newMode
}

function setupGrid(gridSize,dimensions) {
    for (let i = 0; i < gridSize**2; i++) {
        let drawDiv = document.createElement("div")
        drawDiv.classList.add("grid-pixel")
        drawDiv.style.cssText = `height:${dimensions}vh; width:${dimensions}vh`
        drawDiv.style.backgroundColor = "#F9F5FF"
        divContainer.appendChild(drawDiv)
        drawDiv.addEventListener("mouseover", ()=> {
            if (currentMode === "classic") {
                drawDiv.style.backgroundColor = "#15191D"
            }
            else if (currentMode === "rainbow") {
                let red = getRandomNumber(0,256)
                let green = getRandomNumber(0,256)
                let blue = getRandomNumber(0,256)
                drawDiv.style.backgroundColor =  `rgb(${red},${green},${blue})`
            }
            else if (currentMode === "eraser") {
                drawDiv.style.backgroundColor = "#F9F5FF"
            }
        })
    }
}

function currentlyActive(newMode) {
    if (currentMode === "classic") {
        classic.classList.remove("activeMode")
    }
    else if (currentMode === "rainbow") {
        rainbow.classList.remove("activeMode")
    }
    else if (currentMode === "eraser") {
        eraser.classList.remove("activeMode")
    }

    if (newMode === "classic") {
        classic.classList.add("activeMode")
    }

    if (newMode === "rainbow") {
        rainbow.classList.add("activeMode")
    }

    if (newMode === "eraser") {
        eraser.classList.add("activeMode")
    }
}

const divContainer = document.querySelector(".container")
const classic = document.getElementById("classic")
const rainbow = document.getElementById("rainbow")
const eraser = document.getElementById("eraser")
const reloadPage = document.getElementById("customGrid")
const resetPage = document.getElementById("resetPage")

classic.classList.add("activeMode")

const defaultMode = "classic"
const totalAreaAvail = 75*75

let currentMode = defaultMode;

let numOfGrid = parseInt(prompt("Enter grid number (1-100)"))
if (numOfGrid > 100) {
    numOfGrid = 100
} else if (numOfGrid <= 0) {
    alert("Enter a valid number")
    location.reload()
} else if (!(Number.isInteger(numOfGrid))) {
    alert("Enter a valid number")
    location.reload()
}

let areaPerEach = (totalAreaAvail)/ (numOfGrid*numOfGrid)
let dimensionPerEach = areaPerEach**(1/2)

classic.onclick = () => setCurrentMode("classic")
rainbow.onclick = () => setCurrentMode("rainbow")
eraser.onclick = () => setCurrentMode("eraser")


reloadPage.addEventListener("click", ()=> {
    location.reload()
})

resetPage.addEventListener("click", ()=> {
    resetGrid()
})

setupGrid(numOfGrid,dimensionPerEach)
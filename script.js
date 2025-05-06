const divContainer = document.querySelector(".container")
const totalAreaAvail = 75*75

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


areaPerEach = (totalAreaAvail)/ (numOfGrid*numOfGrid)
dimensionPerEach = areaPerEach**(1/2)

function setupGrid(gridSize,dimensions) {
    for (let i = 0; i < gridSize**2; i++) {
        let drawDiv = document.createElement("div")
        drawDiv.classList.add("grid-pixel")
        drawDiv.style.cssText = `height:${dimensions}vh; width:${dimensions}vh`
        drawDiv.style.backgroundColor = "#F9F5FF"
        divContainer.appendChild(drawDiv)
        drawDiv.addEventListener("mouseover", ()=> {
            drawDiv.style.backgroundColor = "#15191D"
        })
    }
}

const reloadPage = document.getElementById("customGrid")

reloadPage.addEventListener("click", ()=> {
    location.reload()
})

const resetPage = document.getElementById("resetPage")

resetPage.addEventListener("click", ()=> {
    for (let i = 0; i < numOfGrid**2; i++) {
        divContainer.innerHTML = ""
    }
    setupGrid(numOfGrid,dimensionPerEach)
})

setupGrid(numOfGrid,dimensionPerEach)
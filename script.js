const divContainer = document.querySelector(".container")
const totalAreaAvail = 75*75
let numOfGrid = prompt("Enter grid number (1-100)")
areaPerEach = (totalAreaAvail)/ (numOfGrid*numOfGrid)
dimensionPerEach = areaPerEach**(1/2)

function setupGrid(gridSize,dimensions) {
    for (let i = 0; i < gridSize**2; i++) {
        let drawDiv = document.createElement("div")
        drawDiv.classList.add("grid-pixel")
        drawDiv.style.cssText = `height:${dimensions}vh; width:${dimensions}vh`
        drawDiv.style.backgroundColor = "black"
        divContainer.appendChild(drawDiv)
        drawDiv.addEventListener("mouseover", ()=> {
            drawDiv.style.backgroundColor = "white"
        })
    }
}

setupGrid(numOfGrid,dimensionPerEach)
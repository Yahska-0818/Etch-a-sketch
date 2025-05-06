const divContainer = document.querySelector(".container")
const totalAreaAvail = 75*75
let numOfGrid = prompt("Enter grid number (1-100)")
areaPerEach = (totalAreaAvail)/ (numOfGrid*numOfGrid)
dimensionPerEach = areaPerEach**(1/2)

for (let i = 0; i < numOfGrid*numOfGrid; i++) {
    let drawDiv = document.createElement("div")
    drawDiv.style.cssText = `height:${dimensionPerEach}vh; width:${dimensionPerEach}vh`
    drawDiv.style.backgroundColor = "black"
    divContainer.appendChild(drawDiv)
}
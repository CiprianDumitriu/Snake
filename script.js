const gameBoard = document.querySelector(".gameBoard")
const keyboard = document.querySelector(".keyboard")
const gameGrid = []
let snake = [2, 2]
let previousKey = "d"
for (let i = 0; i < 15; i++) {
    gameGrid[i] = []
    createRow()
    for (let j = 0; j < 15; j++) {
        gameGrid[i][j] = null
    }
}

const rows = document.querySelectorAll(".row")
rows.forEach((row) => {
    for (i = 0; i < 15; i++) {
        let createCell = document.createElement('div')
        createCell.setAttribute("class", "cell")
        row.appendChild(createCell)
    }
})

window.setInterval(handleMovement, 500)
window.addEventListener("keydown", e => {
    // handleMovement(e.key)
    
    
    if (e.key === "a" && previousKey != "d") {
        snake[0] -= 1
        previousKey = e.key
    } else if (e.key === "w" && previousKey != "s") {
        snake[1] -= 1
        previousKey = e.key
    } else if (e.key === "s" && previousKey != "w") {
        snake[1] += 1
        previousKey = e.key
    } else if (e.key === "d" && previousKey != "a") {
        snake[0] += 1
        previousKey = e.key
    } else {
        previousKey = previousKey
    }
})



function createRow() {
    let createRow = document.createElement('div')
    createRow.setAttribute("class", "row")
    gameBoard.appendChild(createRow)
}

function handleMovement(key) {
    // if (key === "a" && previousKey != "d") {
    //     snake[0] -= 1
    //     previousKey = key
    // } else if (key === "w" && previousKey != "s") {
    //     snake[1] -= 1
    //     previousKey = key
    // } else if (key === "s" && previousKey != "w") {
    //     snake[1] += 1
    //     previousKey = key
    // } else if (key === "d" && previousKey != "a") {
    //     snake[0] += 1
    //     previousKey = key
    // } else {
    //     previousKey = previousKey
    // }
    let currentRow = document.querySelectorAll(`.row :nth-child(${snake[0]})`)
    let currentCell = currentRow[snake[1]]
    currentCell.setAttribute("class", "cell current-position")
    console.log(currentCell)

}


console.log(gameGrid)
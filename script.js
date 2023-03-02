const gameBoard = document.querySelector(".gameBoard")
const keyboard = document.querySelector(".keyboard")
const gameGrid = []
let snake = [2]
let previousKey = "d"
let direction = 1
let key = "d"
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

let cells = document.querySelectorAll(".cell")


window.setInterval(handleMovement, 5000)
window.addEventListener("keydown", e => {
    if (e.key === "a" && key != "d"  || e.key === "w" && key != "s"  || e.key === "d" && key != "a"  || e.key === "s" && key != "w") {
        key = e.key
    }
    
})

function handleMovement() {
    if (key === "a") {
        direction -= 1
    } else if (key === "d") {
        direction += 1
    } else if (key === "w") {
        direction -= 15
    } else if (key === "s") {
        direction += 15
    }
    snake.forEach((i) => {
        cells[i].classList.add("current-position")
    })
}

function createRow() {
    let createRow = document.createElement('div')
    createRow.setAttribute("class", "row")
    gameBoard.appendChild(createRow)
}






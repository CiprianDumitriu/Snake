const gameBoard = document.querySelector(".gameBoard")
console.log(gameBoard)
const gameGrid = []
for (let i = 0; i < 15; i++) {
    gameGrid[i] = []
    createRow()
    for (let j = 0; j < 15; j++) {
        gameGrid[i][j] = null
    }
}

const rows = document.querySelectorAll(".row")
console.log(rows)

function createRow() {
    let createRow = document.createElement('div')
    createRow.setAttribute("class", "row")
    gameBoard.appendChild(createRow)
}



console.log(gameGrid)
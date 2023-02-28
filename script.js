const rows = 16
const columns = 16
const gameGrid = []
for (let i = 0; i < rows; i++) {
    gameGrid[i] = []
    for (let j = 0; j < columns; j++) {
        gameGrid[i][j] = null
    }
}

console.log(gameGrid)
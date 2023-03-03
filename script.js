const gameBoard = document.querySelector(".gameBoard")
const keyboard = document.querySelector(".keyboard")
let snake = [3, 2]
let previousKey = "d"
let key = "d"
let appleIndex = 25
for (let i = 0; i < 15; i++) {
    createRow()
}

const rows = document.querySelectorAll(".row")
rows.forEach((row) => {
    for (i = 0; i < 15; i++) {
        let createCell = document.createElement('div')
        createCell.classList.add("cell")
        row.appendChild(createCell)
    }
})

var interval = window.setInterval(handleMovement, 500)
window.addEventListener("keydown", e => {
    if (e.key === "a" && key != "d"  || e.key === "w" && key != "s"  || e.key === "d" && key != "a"  || e.key === "s" && key != "w") {
        key = e.key
    }
    
})

function handleMovement() {
    let direction = 0
    if (key === "a") {
        direction -= 1
    } else if (key === "d") {
        direction += 1
    } else if (key === "w") {
        direction -= 15
    } else if (key === "s") {
        direction += 15
    }
    let cells = document.querySelectorAll(".cell")
    cells[appleIndex].classList.add("apple")
    for (i = 0; i < snake.length; i++) {
        cells[snake[i]].classList.add("current-position")
    }
    if ((snake[0] + 15 >= 225 && direction === 15) ||
    (snake[0] % 15 === 14 && direction === 1) ||   
    (snake[0] % 15 === 0 && direction === -1) ||   
    (snake[0] - 15 <= 0 && direction === -15) ||
    cells[snake[0] + direction].classList.contains("current-position")) {
        alert("GAME OVER! Try again!")
        clearInterval(interval)
    } else {
        snake.unshift(snake[0] + direction)
        cells[snake[0]].classList.add("current-position")
        let tail = snake.pop()
        cells[tail].classList.remove("current-position")
        eatApple(cells, tail)
    }
}

function eatApple(cells, tail) {
    if (cells[snake[0]].classList.contains("apple")) {
        cells[snake[0]].classList.remove("apple")
        cells[tail].classList.add("snake")
        randomApple(cells)
        snake.push(tail)
        clearInterval(interval)
        interval = setInterval(handleMovement, 500)
    }
}

function randomApple(cells) {
    do {
      appleIndex = Math.floor(Math.random() * cells.length);
    } while (cells[appleIndex].classList.contains("snake"));
    cells[appleIndex].classList.add("apple");
  }


function createRow() {
    let createRow = document.createElement('div')
    createRow.setAttribute("class", "row")
    gameBoard.appendChild(createRow)
}






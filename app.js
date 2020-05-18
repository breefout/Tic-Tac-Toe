const cells = document.querySelectorAll(".row > div");
console.log(cells);
const winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
];
let currentPlayer = "X";
let turnCount = 0;
let gameOver = false;
let board = document.querySelector('#board');
console.log(board);
if (board) {
    board.onclick = function() {
        if (gameOver) {
            cells.forEach(cell => {
                cell.textContent = "";
            });
        }
    };
}


cells.forEach(cell => {
    cell.addEventListener("click", function (e) {
        console.log("cell clicked");
        e.target.textContent = currentPlayer;

        turnCount++;
        checkWin();
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
    });

});

function checkWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        let XCount = 0;
        let OCount = 0;

        for (let j = 0; j < winningCombos[i].length; j++) {
            if (winningCombos[i][j].textContent === "X") {
                XCount++;
            } else if (winningCombos[i][j].textContent === "O") {
                OCount++;
            }

        }

        if (XCount === 3) {
            gameOver = true;
            alert("X Wins");
        } else if (OCount === 3) {
            gameOver = true;
            alert("O Wins");
        } else if (turnCount === 9) {
            gameOver = true;
            alert("Draw");
            break;
        }
    };
}



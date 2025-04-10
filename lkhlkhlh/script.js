const board = document.querySelector("#board");
        const messageTur = document.querySelector("#message");
        const resetBtn = document.querySelector("#resetBtn");

        let currentPlayer = "X";
        let gameBoard = ["", "", "", "", "", "", "", "", ""];
        let winningCombo = [0, 0, 0];
        let gameOver = false;

        function createBoard() {
            for (let i = 0; i < 9; i++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.index = i;
                cell.addEventListener("click", handleCellClick);
                board.appendChild(cell);
            }
        }

        function handleCellClick(event) {
            if (gameOver) return;

            const index = parseInt(event.target.dataset.index);
            if (gameBoard[index] !== "") return;

            event.target.textContent = currentPlayer;
            gameBoard[index] = currentPlayer;

            if (checkWin()) {
                messageTur.textContent = `${currentPlayer} wygrał!`;
                gameOver = true;
                drawWinningLine();
            } else if (gameBoard.every(cell => cell !== "")) {
                messageTur.textContent = "Remis!";
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                messageTur.textContent = `Tura: ${currentPlayer}`;
            }
        }

        function checkWin() {
            const winConditions = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6],
            ];

            for (const condition of winConditions) {
                const [a, b, c] = condition;
                if (
                    gameBoard[a] &&
                    gameBoard[a] === gameBoard[b] &&
                    gameBoard[a] === gameBoard[c]
                ) {
                    winningCombo = condition;
                    return true;
                }
                
            }
            return false;
        }
function drawWinningLine() {
            const line = document.createElement("div");
            line.classList.add("line");
            board.appendChild(line);

            const [start, , end] = winningCombo;

            if (start === 0 && end === 2) {
                line.style.width = "310px";
                line.style.top = "50px";
                line.style.left = "0";
            } else if (start === 3 && end === 5) {
                line.style.width = "310px";
                line.style.top = "160px";
                line.style.left = "0";
            } else if (start === 6 && end === 8) {
                line.style.width = "310px";
                line.style.top = "267px";
                line.style.left = "0";
            } else if (start === 0 && end === 6) {
                line.style.width = "310px";
                line.style.top = "0";
                line.style.left = "55px";
                line.style.transform = "rotate(90deg)";
            } else if (start === 1 && end === 7) {
                line.style.width = "310px";
                line.style.top = "0";
                line.style.left = "160px";
                line.style.transform = "rotate(90deg)";
            } else if (start === 2 && end === 8) {
                line.style.width = "310px";
                line.style.top = "0";
                line.style.left = "265px";
                line.style.transform = "rotate(90deg)";
            } else if (start === 0 && end === 8) {
                line.style.width = "440px";
                line.style.top = "0";
                line.style.left = "0";
                line.style.transform = "rotate(45deg)";
            } else if (start === 2 && end === 6) {
                line.style.width = "447px";
                line.style.top = "0";
                line.style.left = "315px";
                line.style.transform = "rotate(134deg)";}
            }
    
            function resetGame() {
                gameBoard = ["", "", "", "", "", "", "", "", ""];
                currentPlayer = "X";
                gameOver = false;
                messageTur.textContent = "Tura: X";
    
                const cells = document.querySelectorAll(".cell");
                cells.forEach(cell => {
                    cell.textContent = "";
                });
    
                const line = document.querySelector(".line");
                if (line) line.remove();
            }
    
            resetBtn.addEventListener("click", resetGame);
    
            createBoard();

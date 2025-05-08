const index = parseInt(event.target.dataset.index);
if (gameBoard[index] !== "") return;  // Jeśli pole jest już zajęte, nie wykonuj ruchu
event.target.textContent = currentPlayer;    
gameBoard[index] = currentPlayer;
############
const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // poziome linie
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // pionowe linie
    [0, 4, 8], [2, 4, 6],            // przekątne
];

for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
        winningCombo = condition;  // Zapisanie wygrywającej kombinacji
        return true;  // Zwrócenie true, jeśli warunki wygranej są spełnione
    }
}
##############
const line = document.createElement("div");
line.classList.add("line");
board.appendChild(line);

const [start, , end] = winningCombo;

if (start === 0 && end === 2) {
    line.style.width = "310px";
    line.style.top = "50px";
    line.style.left = "0";
} // Rysowanie linii dla poziomej wygranej
#########################

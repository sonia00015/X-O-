# X-O-
--------------------------
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div"); // Tworzy nowe pole planszy (div)
    cell.classList.add("cell");                // Dodaje klasę CSS do pola
    cell.dataset.index = i;                    // Ustawia numer pola (0–8)
    cell.addEventListener("click", handleCellClick); // Dodaje reakcję na kliknięcie
    board.appendChild(cell);                   // Dodaje pole do planszy
}
------------------------
        gameOver = true;//Ustawia, że gra się zakończyła – nie można już dalej grać.//
----------------------------
 messageTur.textContent = "Remis!";//Pokazuje komunikat o remisie.//
 ----------------------------
  } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X"//Jeśli gra trwa dalej – zmienia gracza z X na O lub odwrotnie.//
        ------------------------------------------------
          messageTur.textContent = `Tura: ${currentPlayer}`;
    }
}
//Pokazuje komunikat, czyja jest teraz tura.//


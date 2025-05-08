# X-O-

# Gra w Kółko i Krzyżyk (Tic Tac Toe)

## Opis projektu
Gra w **Kółko i Krzyżyk (Tic Tac Toe)** to klasyczna gra dla dwóch graczy, w której celem jest ułożenie trzech swoich symboli ("X" lub "O") w jednej linii – poziomej, pionowej lub przekątnej na planszy 3x3. Gra kończy się, gdy jeden z graczy wygra lub gdy wszystkie pola są zajęte (remis). Gra działa w przeglądarce przy użyciu HTML, CSS i JavaScript.

## Jak grać
1. **Uruchom plik `index.html`** w swojej przeglądarce.
2. Gra rozpoczyna się od tury gracza "X".
3. Gracze na przemian klikają na puste pola, aby umieścić swoje znaki.
4. Gra ogłasza zwycięzcę, gdy jeden z graczy ułoży trzy swoje symbole w linii. Jeśli wszystkie pola zostaną zapełnione, a nie ma zwycięzcy, ogłoszony zostaje remis.
5. Kliknij przycisk **Reset**, aby rozpocząć nową grę.

## Struktura plików
- **`index.html`** – Struktura HTML strony z planszą gry.
- **`style.css`** – Stylizacja planszy oraz elementów gry.
- **`script.js`** – Skrypt JavaScript, który zawiera logikę gry.

---

## Główne zmienne w kodzie

### `currentPlayer`
```javascript
let currentPlayer = "X";





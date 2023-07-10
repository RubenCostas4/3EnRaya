
// Obtener las celdas del tablero
const cells = document.querySelectorAll('.cell');

// Variable para mantener el estado del juego
let currentPlayer = 'X';

let contadorX = 0;
let contadorO = 0;

function contador() {

}


// Añadir eventos de clic a cada celda
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // Evitar que se pueda jugar en una celda ya marcada
        if (cell.textContent !== '') return;

        // Marcar la celda con el jugador actual
        cell.textContent = currentPlayer;

        // Cambiar de jugador
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        // Verificar si hay un ganador
        checkWinner();
    });
});

// Función para verificar si hay un ganador
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        const cellA = cells[a].textContent;
        const cellB = cells[b].textContent;
        const cellC = cells[c].textContent;

        if (cellA !== '' && cellA === cellB && cellA === cellC) {
            // Si se encuentra una combinación ganadora, mostrar mensaje y reiniciar juego
            alert(`¡El jugador ${cellA} ha ganado!`);
            if (cellA === 'X') {
                contadorX++;
                document.getElementById('cell1').textContent = contadorX;

            } else if (cellA === 'O') {
                contadorO++;
                document.getElementById('cell2').textContent = contadorO;
            } if (contadorX - contadorO >= 3) {
                alert(`¡EL JUGADOR O ES UN PAQUETE `)
            } else if (contadorO - contadorX >= 3) {
                alert(`¡EL JUGADOR X ES UN PAQUETE`)
            }
            resetGame();
            return;
        }
    }

    // Si no hay ganador y todas las celdas están marcadas, mostrar mensaje de empate y reiniciar juego
    if ([...cells].every(cell => cell.textContent !== '')) {
        alert('¡Empate!');
        resetGame();
    }
}

// Función para reiniciar el juego
function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
    });

    currentPlayer = 'X';
}



const board = document.getElementById('board');

const initialBoard = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
];

// Функция отрисовки доски
function drawBoard() {
    board.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if ((i + j) % 2 === 1) cell.classList.add('dark');
            if (initialBoard[i][j] !== '') {
                const piece = document.createElement('div');
                piece.classList.add('piece');
                if (initialBoard[i][j] === 'w') piece.classList.add('white');
                cell.appendChild(piece);
            }
            cell.dataset.row = i;
            cell.dataset.col = j;
            board.appendChild(cell);
        }
    }
}

// Инициализация игры
drawBoard();

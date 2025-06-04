const boardElement = document.getElementById('board');

// Unicode pieces for white and black
const pieces = {
    'r': '\u265C',
    'n': '\u265E',
    'b': '\u265D',
    'q': '\u265B',
    'k': '\u265A',
    'p': '\u265F',
    'R': '\u2656',
    'N': '\u2658',
    'B': '\u2657',
    'Q': '\u2655',
    'K': '\u2654',
    'P': '\u2659'
};

// Starting board position
let board = [
    ['r','n','b','q','k','b','n','r'],
    ['p','p','p','p','p','p','p','p'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['P','P','P','P','P','P','P','P'],
    ['R','N','B','Q','K','B','N','R']
];

function drawBoard() {
    boardElement.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add((row + col) % 2 === 0 ? 'light' : 'dark');
            square.dataset.row = row;
            square.dataset.col = col;
            square.textContent = pieces[board[row][col]] || '';
            square.addEventListener('click', onSquareClick);
            boardElement.appendChild(square);
        }
    }
}

let selected = null;

function onSquareClick(e) {
    const row = parseInt(e.currentTarget.dataset.row, 10);
    const col = parseInt(e.currentTarget.dataset.col, 10);
    if (selected) {
        // Move piece
        board[row][col] = board[selected.row][selected.col];
        board[selected.row][selected.col] = '';
        selected = null;
        drawBoard();
    } else if (board[row][col] !== '') {
        // Select piece
        selected = {row, col};
    }
}

function resetBoard() {
    board = [
        ['r','n','b','q','k','b','n','r'],
        ['p','p','p','p','p','p','p','p'],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['P','P','P','P','P','P','P','P'],
        ['R','N','B','Q','K','B','N','R']
    ];
    selected = null;
    drawBoard();
}

drawBoard();

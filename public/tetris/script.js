 // Game constants
 const BOARD_WIDTH = 10;
 const BOARD_HEIGHT = 20;
 const CELL_SIZE = 20;
 
 // Game variables
 let board = [];
 let currentPiece = null;
 let nextPiece = null;
 let gameInterval = null;
 let isPaused = false;
 let isGameOver = false;
 let score = 0;
 let lines = 0;
 let level = 1;
 let dropSpeed = 1000; // milliseconds
 let keyStates = {}; // Track which keys are pressed
 let canRotate = true; // Flag to prevent continuous rotation
 let gameStarted = false; // Flag to track if game has started
 
 // Tetromino definitions (I, O, T, S, Z, J, L)
 const TETROMINOES = {
     'I': {
         shape: [
             [0, 0, 0, 0],
             [1, 1, 1, 1],
             [0, 0, 0, 0],
             [0, 0, 0, 0]
         ],
         className: 'piece-I'
     },
     'O': {
         shape: [
             [1, 1],
             [1, 1]
         ],
         className: 'piece-O'
     },
     'T': {
         shape: [
             [0, 1, 0],
             [1, 1, 1],
             [0, 0, 0]
         ],
         className: 'piece-T'
     },
     'S': {
         shape: [
             [0, 1, 1],
             [1, 1, 0],
             [0, 0, 0]
         ],
         className: 'piece-S'
     },
     'Z': {
         shape: [
             [1, 1, 0],
             [0, 1, 1],
             [0, 0, 0]
         ],
         className: 'piece-Z'
     },
     'J': {
         shape: [
             [1, 0, 0],
             [1, 1, 1],
             [0, 0, 0]
         ],
         className: 'piece-J'
     },
     'L': {
         shape: [
             [0, 0, 1],
             [1, 1, 1],
             [0, 0, 0]
         ],
         className: 'piece-L'
     }
 };
 
 // DOM elements
 const gameBoard = document.getElementById('game-board');
 const nextPieceDisplay = document.getElementById('next-piece');
 const scoreElement = document.getElementById('score');
 const linesElement = document.getElementById('lines');
 const levelElement = document.getElementById('level');
 const startButton = document.getElementById('start-btn');
 const pauseButton = document.getElementById('pause-btn');
 const gameOverDisplay = document.getElementById('game-over');
 const finalScoreDisplay = document.getElementById('final-score');
 const restartButton = document.getElementById('restart-btn');
 
 // Initialize game
 function initGame() {
     // Create empty board
     board = Array(BOARD_HEIGHT).fill().map(() => Array(BOARD_WIDTH).fill(0));
     
     // Create game board grid
     gameBoard.innerHTML = '';
     for (let y = 0; y < BOARD_HEIGHT; y++) {
         for (let x = 0; x < BOARD_WIDTH; x++) {
             const cell = document.createElement('div');
             cell.classList.add('game-cell');
             cell.dataset.x = x;
             cell.dataset.y = y;
             gameBoard.appendChild(cell);
         }
     }
     
     // Create next piece display
     nextPieceDisplay.innerHTML = '';
     for (let y = 0; y < 4; y++) {
         for (let x = 0; x < 4; x++) {
             const cell = document.createElement('div');
             cell.classList.add('game-cell');
             nextPieceDisplay.appendChild(cell);
         }
     }
     
     // Reset game state
     score = 0;
     lines = 0;
     level = 1;
     dropSpeed = 1000;
     isPaused = false;
     isGameOver = false;
     gameStarted = true;
     
     // Update displays
     updateScoreDisplay();
     
     // Generate first pieces
     nextPiece = generateRandomPiece();
     spawnNewPiece();
 }
 
 // Generate a random tetromino
 function generateRandomPiece() {
     const pieces = Object.keys(TETROMINOES);
     const randomKey = pieces[Math.floor(Math.random() * pieces.length)];
     const piece = JSON.parse(JSON.stringify(TETROMINOES[randomKey]));
     
     // Set initial position (centered at top)
     piece.x = Math.floor(BOARD_WIDTH / 2) - Math.floor(piece.shape[0].length / 2);
     piece.y = 0;
     piece.type = randomKey;
     
     return piece;
 }

 // Add this function to calculate the hard drop position
function calculateGhostPiecePosition() {
    if (!currentPiece) return null;
    
    // Create a copy of the current piece
    const ghostPiece = JSON.parse(JSON.stringify(currentPiece));
    
    // Move the ghost piece down until it can't move further
    let dropY = ghostPiece.y;
    while (isValidMove(ghostPiece.x, dropY + 1, ghostPiece.shape)) {
        dropY++;
    }
    
    ghostPiece.y = dropY;
    return ghostPiece;
}
 
 // Spawn a new piece and show the next piece
 function spawnNewPiece() {
     currentPiece = nextPiece;
     nextPiece = generateRandomPiece();
     
     // Check if game over
     if (!isValidMove(currentPiece.x, currentPiece.y, currentPiece.shape)) {
         gameOver();
         return;
     }
     
     renderBoard();
     renderNextPiece();
 }
 
// Modify renderBoard to include ghost piece rendering
function renderBoard() {
    // Clear all cells
    document.querySelectorAll('#game-board .game-cell').forEach(cell => {
        cell.className = 'game-cell';
    });
    
    // Render fixed pieces on the board
    for (let y = 0; y < BOARD_HEIGHT; y++) {
        for (let x = 0; x < BOARD_WIDTH; x++) {
            if (board[y][x]) {
                const cell = document.querySelector(`#game-board .game-cell[data-x="${x}"][data-y="${y}"]`);
                cell.classList.add(board[y][x]);
            }
        }
    }
    
    // Render ghost piece
    const ghostPiece = calculateGhostPiecePosition();
    if (ghostPiece) {
        for (let y = 0; y < ghostPiece.shape.length; y++) {
            for (let x = 0; x < ghostPiece.shape[y].length; x++) {
                if (ghostPiece.shape[y][x]) {
                    const boardX = ghostPiece.x + x;
                    const boardY = ghostPiece.y + y;
                    
                    // Check if within board boundaries
                    if (boardX >= 0 && boardX < BOARD_WIDTH && boardY >= 0 && boardY < BOARD_HEIGHT) {
                        const cell = document.querySelector(`#game-board .game-cell[data-x="${boardX}"][data-y="${boardY}"]`);
                        cell.classList.add(`ghost-${ghostPiece.className}`);
                    }
                }
            }
        }
    }
    
    // Render current piece
    if (currentPiece) {
        for (let y = 0; y < currentPiece.shape.length; y++) {
            for (let x = 0; x < currentPiece.shape[y].length; x++) {
                if (currentPiece.shape[y][x]) {
                    const boardX = currentPiece.x + x;
                    const boardY = currentPiece.y + y;
                    
                    // Check if within board boundaries
                    if (boardX >= 0 && boardX < BOARD_WIDTH && boardY >= 0 && boardY < BOARD_HEIGHT) {
                        const cell = document.querySelector(`#game-board .game-cell[data-x="${boardX}"][data-y="${boardY}"]`);
                        cell.classList.add(currentPiece.className);
                    }
                }
            }
        }
    }
}
 
 // Render the next piece display
 function renderNextPiece() {
     // Clear next piece display
     document.querySelectorAll('#next-piece .game-cell').forEach(cell => {
         cell.className = 'game-cell';
     });
     
     // Find the center of the next piece display for centering
     const size = nextPiece.shape.length;
     const offsetX = Math.floor((4 - size) / 2);
     const offsetY = Math.floor((4 - size) / 2);
     
     // Render next piece
     for (let y = 0; y < nextPiece.shape.length; y++) {
         for (let x = 0; x < nextPiece.shape[y].length; x++) {
             if (nextPiece.shape[y][x]) {
                 const displayX = offsetX + x;
                 const displayY = offsetY + y;
                 const index = displayY * 4 + displayX;
                 const cell = nextPieceDisplay.children[index];
                 cell.classList.add(nextPiece.className);
             }
         }
     }
 }
 
 // Check if move is valid
 function isValidMove(x, y, shape) {
     for (let row = 0; row < shape.length; row++) {
         for (let col = 0; col < shape[row].length; col++) {
             if (shape[row][col]) {
                 const boardX = x + col;
                 const boardY = y + row;
                 
                 // Check boundaries
                 if (boardX < 0 || boardX >= BOARD_WIDTH || boardY >= BOARD_HEIGHT) {
                     return false;
                 }
                 
                 // Check if position is already occupied
                 if (boardY >= 0 && board[boardY][boardX]) {
                     return false;
                 }
             }
         }
     }
     return true;
 }
 
 // Move piece
 function movePiece(dx, dy) {
     if (isGameOver || isPaused) return;
     
     if (isValidMove(currentPiece.x + dx, currentPiece.y + dy, currentPiece.shape)) {
         currentPiece.x += dx;
         currentPiece.y += dy;
         renderBoard();
         return true;
     }
     return false;
 }
 
 // Rotate piece
 function rotatePiece() {
     if (isGameOver || isPaused || !canRotate) return;
     if (currentPiece.type === 'O') return; // O piece doesn't rotate
     
     const rotated = rotateMatrix(currentPiece.shape);
     
     // Wall kick logic - try to fit the rotated piece
     for (let offset of [0, -1, 1, -2, 2]) {
         if (isValidMove(currentPiece.x + offset, currentPiece.y, rotated)) {
             currentPiece.shape = rotated;
             currentPiece.x += offset;
             renderBoard();
             
             // Set rotation flag to false to prevent continuous rotation
             canRotate = false;
             return;
         }
     }
 }
 
 // Rotate a matrix (2D array) 90 degrees clockwise
 function rotateMatrix(matrix) {
     const N = matrix.length;
     const result = Array(N).fill().map(() => Array(N).fill(0));
     
     for (let y = 0; y < N; y++) {
         for (let x = 0; x < N; x++) {
             result[x][N - 1 - y] = matrix[y][x];
         }
     }
     
     return result;
 }
 
 // Hard drop
 function hardDrop() {
     if (isGameOver || isPaused || !gameStarted) return;
     
     let dropDistance = 0;
     while (movePiece(0, 1)) {
         dropDistance++;
     }
     
     // Add bonus points for hard drop
     if (dropDistance > 0) {
         score += dropDistance * 2;
         updateScoreDisplay();
     }
     
     lockPiece();
 }
 
 // Lock the current piece in place
 function lockPiece() {
     for (let y = 0; y < currentPiece.shape.length; y++) {
         for (let x = 0; x < currentPiece.shape[y].length; x++) {
             if (currentPiece.shape[y][x]) {
                 const boardX = currentPiece.x + x;
                 const boardY = currentPiece.y + y;
                 
                 if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
                     board[boardY][boardX] = currentPiece.className;
                 }
             }
         }
     }
     
     // Check for completed lines
     checkLines();
     
     // Spawn a new piece
     spawnNewPiece();
 }
 
 // Check for completed lines
 function checkLines() {
     let linesCleared = 0;
     
     for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
         if (board[y].every(cell => cell !== 0)) {
             // Remove the line
             board.splice(y, 1);
             // Add empty line at the top
             board.unshift(Array(BOARD_WIDTH).fill(0));
             linesCleared++;
             y++; // Re-check the same row index since rows have shifted
         }
     }
     
     if (linesCleared > 0) {
         // Create a flash effect for cleared lines
         document.querySelector('#game-board').animate(
             [
                 { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                 { backgroundColor: 'rgba(0, 0, 0, 0.6)' }
             ],
             { duration: 300, easing: 'ease-out' }
         );
         
         // Update score
         const linePoints = [0, 40, 100, 300, 1200]; // Points for 0, 1, 2, 3, 4 lines
         score += linePoints[linesCleared] * level;
         lines += linesCleared;
         
         // Update level
         level = Math.floor(lines / 10) + 1;
         
         // Update speed
         dropSpeed = Math.max(100, 1000 - (level - 1) * 100);
         
         // Reset game interval with new speed
         if (gameInterval) {
             clearInterval(gameInterval);
             gameInterval = setInterval(gameLoop, dropSpeed);
         }
         
         // Update display
         updateScoreDisplay();
     }
 }
 
 // Update score display
 function updateScoreDisplay() {
     scoreElement.textContent = score;
     linesElement.textContent = lines;
     levelElement.textContent = level;
 }
 
 // Main game loop
 function gameLoop() {
     if (!isPaused && !isGameOver) {
         if (!movePiece(0, 1)) {
             lockPiece();
         }
     }
 }
 
 // Start game
 function startGame() {
     if (!gameInterval) {
         initGame();
         gameInterval = setInterval(gameLoop, dropSpeed);
         startButton.textContent = 'Restart';
     } else {
         // Reset and restart
         clearInterval(gameInterval);
         initGame();
         gameInterval = setInterval(gameLoop, dropSpeed);
     }
     
     // Hide game over screen if shown
     gameOverDisplay.style.display = 'none';
 }
 
 // Pause game
 function togglePause() {
     isPaused = !isPaused;
     pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
 }
 
 // Game over
 function gameOver() {
     isGameOver = true;
     gameStarted = false;
     clearInterval(gameInterval);
     finalScoreDisplay.textContent = score;
     gameOverDisplay.style.display = 'block';
 }
 
 // Event listeners
 startButton.addEventListener('click', startGame);
 pauseButton.addEventListener('click', togglePause);
 restartButton.addEventListener('click', startGame);
 
 document.addEventListener('keydown', (e) => {
     if (isGameOver) return;
     
     // Avoid repeating actions when key is held down
     if (keyStates[e.key]) return;
     keyStates[e.key] = true;
     
     switch (e.key) {
         case 'ArrowLeft':
             movePiece(-1, 0);
             break;
         case 'ArrowRight':
             movePiece(1, 0);
             break;
         case 'ArrowDown':
             if (movePiece(0, 1)) {
                 score += 1;
                 updateScoreDisplay();
             }
             break;
         case 'ArrowUp':
             rotatePiece();
             break;
         case ' ':
             // Only allow space to hard drop when game is actually started
             if (gameStarted) {
                 hardDrop();
             }
             // Prevent space from triggering button clicks
             e.preventDefault();
             break;
         case 'p':
         case 'P':
             togglePause();
             break;
     }
 });
 
 document.addEventListener('keyup', (e) => {
     keyStates[e.key] = false;
     
     // Reset rotation flag when arrow up is released
     if (e.key === 'ArrowUp') {
         canRotate = true;
     }
 });
 
 // Add touch controls for mobile
 let touchStartX = 0;
 let touchStartY = 0;
 
 document.addEventListener('touchstart', (e) => {
     if (isGameOver || isPaused) return;
     touchStartX = e.touches[0].clientX;
     touchStartY = e.touches[0].clientY;
 });
 
 document.addEventListener('touchend', (e) => {
     if (isGameOver || isPaused) return;
     
     const touchEndX = e.changedTouches[0].clientX;
     const touchEndY = e.changedTouches[0].clientY;
     
     const diffX = touchEndX - touchStartX;
     const diffY = touchEndY - touchStartY;
     
     // Detect swipe direction
     if (Math.abs(diffX) > Math.abs(diffY)) {
         // Horizontal swipe
         if (diffX > 50) {
             // Right swipe
             movePiece(1, 0);
         } else if (diffX < -50) {
             // Left swipe
             movePiece(-1, 0);
         }
     } else {
         // Vertical swipe
         if (diffY > 50) {
             // Down swipe - soft drop
             if (movePiece(0, 1)) {
                 score += 1;
                 updateScoreDisplay();
             }
         } else if (diffY < -50) {
             // Up swipe - rotate
             rotatePiece();
         }
     }
     
     // Tap for hard drop
     if (Math.abs(diffX) < 10 && Math.abs(diffY) < 10) {
         hardDrop();
     }
 });
 
 // Add special styling for active buttons
 document.querySelectorAll('button').forEach(button => {
     button.addEventListener('mousedown', function() {
         this.style.transform = 'translateY(2px)';
     });
     
     button.addEventListener('mouseup', function() {
         this.style.transform = '';
     });
     
     button.addEventListener('mouseleave', function() {
         this.style.transform = '';
     });
 });
 
 // Initialize the game board (but don't start until button press)
 initGame();
 gameStarted = false; // Set back to false until Start button is clicked

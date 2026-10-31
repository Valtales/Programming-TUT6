let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

// Initialize the game by showing the first player.
document.getElementById('next-lbl').innerText = nextPlayer;

// This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Add an empty button to each of the nine cells.
    for (let i = 1; i <= 9; i++)
    {
        let cell = document.getElementById('c' + i);
        let button = document.createElement('button');
        button.innerText = '[ ]';
        cell.appendChild(button);
    }

    // Listen for clicks on each board button.
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener('click', takeCell);
    }
}

// Respond to a click on a board button.
function takeCell(event)
{
    let button = event.target;

    // Fill the chosen cell and prevent it from being chosen again.
    button.innerText = '[' + nextPlayer + ']';
    button.disabled = true;

    // Switch to the other player and update the label.
    if (nextPlayer === 'X')
    {
        nextPlayer = 'O';
    }
    else
    {
        nextPlayer = 'X';
    }
    document.getElementById('next-lbl').innerText = nextPlayer;

    // The game only ends when all nine cells have been chosen.
    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

function isGameOver()
{
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        if (!btns[i].disabled)
        {
            return false;
        }
    }
    return true;
}

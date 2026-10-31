let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

// Show whose turn it is to start.
document.getElementById('next-lbl').innerText = nextPlayer;

// Set up the board when the page loads.
createGameBoard();

function createGameBoard()
{
    // Put a blank button in every cell.
    for (let i = 1; i <= 9; i++)
    {
        let cell = document.getElementById('c' + i);
        let button = document.createElement('button');
        button.innerText = '[ ]';
        cell.appendChild(button);
    }

    // Make each button respond when clicked.
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener('click', takeCell);
    }
}

// Runs when a player picks a cell.
function takeCell(event)
{
    let button = event.target;

    // Mark the spot and stop it from being clicked again.
    button.innerText = '[' + nextPlayer + ']';
    button.disabled = true;

    // Change turns and show the next player.
    if (nextPlayer === 'X')
    {
        nextPlayer = 'O';
    }
    else
    {
        nextPlayer = 'X';
    }
    document.getElementById('next-lbl').innerText = nextPlayer;

    // No more moves once every spot is filled.
    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

function isGameOver()
{
    // If any button is still usable, the board is not full.
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

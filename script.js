//board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
//tie = [['X','O','X'],[' ','O','O'],['O','X','X']]

board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
players = ['X' , 'O']
currentPlayer = players[0]
turn = 1


//FUNCTIONS
function printBoard() {
    console.log(
        board[0][0] + '|' + board[0][1] + '|' + board[0][2] + '\n' +
        '-' + '-' + '-' + '-' + '-' + '\n' +

        board[1][0] + '|' + board[1][1] + '|' + board[1][2] + '\n' +
        '-' + '-' + '-' + '-' + '-' + '\n' +

        board[2][0] + '|' + board[2][1] + '|' + board[2][2]
        
    )
}

function changePlayer() {
    if (currentPlayer == players[0]) {
        currentPlayer = players[1]
        return currentPlayer
    }
    else {
        currentPlayer = players[0]
        return currentPlayer
    }
}

function annouceTurn() {
    message = 'It is ' + currentPlayer + '\'s turn!'
    console.log(message)
    document.querySelector('h2').innerText = message
    
}

function takeTurn(x,y) {
    turn += 1
    if (board[y][x] !== ' ') {
        console.log('Invalid square!')
        printBoard()
        annouceTurn()
    }

    else {
        board[y][x] = currentPlayer
        insertSymbol(x,y)
        if (checkWin() == true) {
            printBoard()
            document.querySelector('h2').innerText = `${currentPlayer}'s Win!`
            removeEvents()


        }
        else if (checkTie() == true) {
            document.querySelector('h2').innerText = 'Tie!'
        }

        else {
            changePlayer()
            printBoard()
            annouceTurn()
        }
    }
}

function insertSymbol(x,y) {
    const xCoord = '[data-x=' + x.toString() + ']'
    const yCoord = '[data-y=' + y.toString() + ']'
    const selector = `.cell[data-x='${x}'][data-y='${y}']`
    const pick = document.querySelector(selector)
    pick.innerText= currentPlayer
}

function checkWin() {
    //row 1
    if (board[0][0] != ' ') {
        if (board[0][0] == board[0][1] && board[0][0] == board[0][2]) {
            console.log('row1 win')
            return true
            
        }
    }
    //row 2
    if (board[1][0] != ' ') {
        if (board[1][0] == board[1][1] && board[1][0] == board[1][2]) {
            console.log('row2 win')
            return true
        }
    }
    //row 3
    if (board[2][0] != ' ') {
        if (board[2][0] == board[2][1] && board[2][0] == board[2][2]) {
            console.log('row3 win')
            return true
        }
    }

    //col 1
    if (board[0][0] != ' ') {
        if (board[0][0] == board[1][0] && board[0][0] == board[2][0]) {
            console.log('col1 win')
            return true
        }
    }
    //col 2
    if (board[0][1] != ' ') {
        if (board[0][1] == board[1][1] && board[0][1] == board[2][1]) {
            console.log('col2 win')
            return true
        }
    }
    //col 3
    if (board[0][2] != ' ') {
        if (board[0][2] == board[1][2] && board[0][2] == board[2][2]) {
            console.log('col3 win')
            return true
        }
    }

    //dia R
    if (board[0][0] != ' ') {
        if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
            console.log('dia R win')
            return true
        }
    }

    //dia L
    if (board[0][2] != ' ') {
        if (board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
            console.log('dia L win')
            return true
        }
    }
    
    return false
    

    
}

function checkTie() {
    if (turn == 9 && checkWin() == false) {
        return true
    }
    else {
        return false
    }
}

function clearBoard() {
    board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
    currentPlayer = players[0]
    turn = 1
    const cellList = document.querySelectorAll('.cell')
    cellList.forEach((element) => element.innerText = '')
    printBoard()
    annouceTurn()
}

//EVENT LISTENERS

const buttonEvent = document.querySelector('.button')
buttonEvent.addEventListener('click', () => {
    clearBoard();
});

function addEvents() {
    const allCells = document.querySelectorAll('.cell')
    allCells.forEach((cell) => cell.addEventListener('click', () => {
        const datax = parseInt(cell.getAttribute('data-x'));
        const datay = parseInt(cell.getAttribute('data-y'));
        takeTurn(datax,datay);
    }));
};



printBoard()
annouceTurn()
addEvents()
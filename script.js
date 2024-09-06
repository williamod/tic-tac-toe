board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
players = ['X' , 'O']
currentPlayer = players[0]



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
    console.log('It is ' + currentPlayer + '\'s turn!')
}

function takeTurn(x,y) {
    if (board[y][x] !== ' ') {
        console.log('Invalid square!')
        printBoard()
        annouceTurn()
    }

    else {
        board[y][x] = currentPlayer
        if (checkWin() == true) {
            printBoard()
            alert(currentPlayer + '\'s Win!')
            clearBoard()
        }
        else {
            changePlayer()
            printBoard()
            annouceTurn()
        }
    }
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

    else {
        return false
    }
}

function clearBoard() {
    board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
    currentPlayer = players[0]
    printBoard()
    annouceTurn()
}





printBoard()
annouceTurn()
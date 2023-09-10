function playGame(playerMove){
    const computerMove = pickComputerMove;
    let result = '';

    if (playerMove === 'Rock') {
        if(computerMove === 'Rock')
        {
            result = 'Tie.';
        }
        else if (computerMove === 'Paper'){
            result = 'You Loss.';
        }
        else if (computerMove === 'Scissors'){
            result = 'You Win.';
        }
    }
    else if (playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'You Win.';
        }
        else if (computerMove === 'Paper'){
            result = 'Tie.';
        }
        else if (computerMove === 'Scissors'){
            result = 'You Loss.';
        }
    }
    else if (playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
            result = 'You Loss.';
        }
        else if (computerMove === 'Paper'){
            result = 'You Win.';
        }
        else if (computerMove === 'Scissors'){
            result = 'Tie.';
        }
    }
    alert(`You Pick ${playerMove}. Computer Pick ${computerMove}. ${result}`);
}


function pickComputerMove(){
    let randomMove =  Math.random();
    let computerMove='';
    
    if (randomMove => 0 && randomMove < 1 / 3){
    computerMove = 'Rock';
    }
    else if(randomMove => 1 / 3 && randomMove < 2 / 3){
        computerMove ='Paper';
    }
    else if (randomMove => 2 / 3 && randomMove < 1)
    {
        computerMove = 'Scissors';
    }
    return computerMove;
}



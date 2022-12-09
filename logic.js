console.log('Hello World!')

function getComputerChoice(x){
    var x = Math.floor(Math.random()*10);
  if (x < 4){
    return "rock"
  } else if (x > 3 && x <7){
    return "paper"
  } else {
    return "scissors"
  }
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' || 'Rock' || 'ROCK' && computerSelection == 'paper'){
        return 'You loose! Paper beats rock.'
    } else if (playerSelection == 'rock' || 'Rock' || 'ROCK' && computerSelection == 'scissors'){
        return 'You win! Rock beats scissors.'
    } else if (playerSelection == 'rock' || 'Rock' || 'ROCK' && computerSelection == 'rock'){
        return 'It\'s a draw! You both got the same.'
    } else {
        return 'maybe'
    }
}

const playerSelection = 'rock'; 
// let playerSelection = prompt('Write rock, paper, or scissors');
var computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))


for (let i = 0; i < 5; i++ ){
  var w = getComputerChoice(i);
  console.log(w);
  if (w == 'rock'){
    console.log('it\s a tie!');
  } else if (w == 'paper'){
    console.log('you loose');
  } else if (w == 'scissors'){
    console.log('you win!');
  } else {
    console.log('nothing')
  }
}

/*
refactor words to lower case only
achieve one game with all options and combinations (if statement)
then find a way to repeat the game ???
find a way to keep the score
then limit game scores to 5x (for loop)

*/ 

/*
playRound
rock beats scissors
scissors beats paper
paper beats rock
*/


/*
get random choice by computer steps:
get a random number between 1 and 9 
123 = rock
456 = paper
789 = scissors
using if statements 
then return
*/




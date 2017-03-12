"use strict";

function getGoalNumber(){
  var goalNumber = prompt("Please enter the number you will race to.");
  return parseInt(goalNumber);
}

function getPlayerName(){
  var playerName = prompt("Please enter your player name.");
  console.log("Hi " + playerName + ", Welcome to the game!");
  return playerName;
}



function getDice(playerName,playerScore,goalNumber){
  if (playerScore < goalNumber){
    var numberToGo = (goalNumber - playerScore);
    console.log(playerName + " you need " + numberToGo +" more to win.");
  }
  else {
    numberToGo = (playerScore - goalNumber);
    console.log(playerName + " you need " + numberToGo +" less to win.");
  }
}



function getDiceChoice(){
  var diceChoice = prompt("Which dice do you choose?");
  if(diceChoice === "4"){
    var diceRoll = roll4Dice();
  }
  else if(diceChoice === "6"){
    diceRoll = roll6Dice();
  }
  else if(diceChoice === "8"){
    diceRoll = roll8Dice();
  }
  else if(diceChoice === "10"){
    diceRoll = roll10Dice();
  }
  else if(diceChoice === "12"){
    diceRoll = roll12Dice();
  }
  else if(diceChoice === "20"){
    diceRoll = roll20Dice();
  }
  else if(diceChoice === "exit"){
    console.log("Sorry you have to leave so soon.");
    diceRoll = "exit";
  }
  // here is where the "else" should go, with prompt "your dice choice is invalid. Please choose a proper dice".
  return diceRoll;
}

// end the above with an "else" that would send them back to making a new choice, in case their current choice is invalid.
// also, maybe I could just have one dice function and just bring in the diceChoice value.

function roll4Dice(){
  var dice4Rolled = Math.floor((Math.random()*4)+1);
  return dice4Rolled;
}

function roll6Dice(){
  var dice6Rolled = Math.floor((Math.random()*6)+1);
  return dice6Rolled;
}

function roll8Dice(){
  var dice8Rolled = Math.floor((Math.random()*8)+1);
  return dice8Rolled;
}

function roll10Dice(){
  var dice10Rolled = Math.floor((Math.random()*10)+1);
  return dice10Rolled;
}

function roll12Dice(){
  var dice12Rolled = Math.floor((Math.random()*12)+1);
  return dice12Rolled;
}

function roll20Dice(){
  var dice20Rolled = Math.floor((Math.random()*20)+1);
  return dice20Rolled;
}


function checkScore(playerScore, diceResult, goalNumber){
  if (playerScore < goalNumber){
    playerScore += diceResult;
  }
  else if (playerScore > goalNumber){
    playerScore -= diceResult;
  }
  return playerScore;
}

// function below needs work.
function checkWinner(playerScore,goalNumber){
  var winner = 0;
  if (playerScore === goalNumber){
    winner = 1;
    //call display winner function
  }
  else {
    winner = 0;
  }
  return winner
}

function declareWinner(playerName){
  console.log(playerName + " You WIN! Thank you both for playing!");
}
function endGame(playerName, playerName){
  console.log(player1Name + " and " + player2Name + " Thank you both for playing!");
}


function runGame(){
  var goalNumber = getGoalNumber();
  var player1Name = getPlayerName();
  var player1Score = 0;
  var player2Name = getPlayerName();
  var player2Score = 0;

  var winner = 0;


  while (winner === 0){

    getDice(player1Name, player1Score, goalNumber);
    var player1DiceResult = getDiceChoice();
    if(player1DiceResult === "exit"){
      break;
    }
    console.log(player1Name + " you rolled a " + player1DiceResult)
    player1Score = checkScore(player1Score, player1DiceResult, goalNumber);
    console.log(player1Name + " your score is " + player1Score);
    winner = checkWinner(player1Score,goalNumber);
    if(winner === 1){
      declareWinner(player1Name);
      endGame(player1Name, player2Name);
    }
    else {
      getDice(player2Name, player2Score, goalNumber);
      var player2DiceResult = getDiceChoice();
      if(player2DiceResult === "exit"){
        break;
      }
      player2Score = checkScore(player2Score, player2DiceResult, goalNumber);
      console.log("player two score = " + player2Score);
      winner = checkWinner(player2Score, goalNumber);
      if(winner === 1){
        declareWinner(player2Name);
        endGame(player2Name, player1Name);
      }
    }
  }
}

//runGame();





//unused code below.

//document.write(runGameResult);

//function validateDiceChoice(diceChoice){
//  var validDiceChoice;
//  if (diceChoice = 4){
//    validDiceChoice = 4;
//  }
//} else if (diceChoice = 6){



//var nextMoveDirection =getNextMoveDirection();

//function getNextMoveDirection(playerScore,goalNumber){
//  var nextMoveDirection
//  if (playerScore < goalNumber){
//    nextMoveDirection = plus;
//  } else {
//    nextMoveDirection = minus;
//  }
//  return nextMoveDirection;
//}

//function rollAllDice(){
//  var dice4Rolled = roll4Dice();
//  var dice6Rolled = roll6Dice();
//  var dice8Rolled = roll8Dice();
//  var dice10Rolled = roll10Dice();
//  var dice12Rolled = roll12Dice();
//  var dice20Rolled = roll20Dice();
//  var allRolledTotal = dice4Rolled + dice6Rolled + dice8Rolled + dice10Rolled + dice12Rolled + dice20Rolled;
//  return allRolledTotal;
//}

//var allRolledTotal = rollAllDice();
//console.log(allRolledTotal);
//document.write("Your total dice roll is "+ allRolledTotal);

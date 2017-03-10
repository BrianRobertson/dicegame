"use strict";

function getGoalNumber(){
  var goalNumber = prompt("Please enter the number you will race to.");
  return goalNumber;
}

function getPlayerName(){
  var playerName = prompt("Please enter your player name.");
  document.write("Hi " + playerName + ", Welcome to the game!");
  return playerName;
}



function getDice(playerName,playerScore,goalNumber){
  if (playerScore < goalNumber){
    var numberToGo = (goalNumber - playerScore);
    document.write(playerName + " you need " + numberToGo +" more to win.");
  }
  else {
    numberToGo = (playerScore - goalNumber);
    document.write(playerName + " you need " + numberToGo +" less to win.");
  }
  var diceChoice = getDiceChoice();
  return diceChoice;
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

//function checkWinner(playerScore,goalNumber){
//  if (playerScore === goalNumber){
//    //declare winner
//  }
//  else //no winner
//}



//keep adding to runGame to test functions so far
function runGame(){
  var goalNumber = getGoalNumber();
  var player1Name = getPlayerName();
  var player1Score = 0;
  var player2Name = getPlayerName();
  var player2Score = 0;

  //while loop
  var player1DiceResult = getDice(player1Name, player1Score, goalNumber);
  player1Score = checkScore(player1Score, player1DiceResult, goalNumber);
  //check winner

  var player2DiceResult = getDice(player2Name, player2Score, goalNumber);
  player2Score = checkScore(player2Score, player2DiceResult, goalNumber);
}
// check winner


//call to runGame to test step by step.
runGame();
//document.write(runGameResult);









//unused code below.



//function validateDiceChoice(diceChoice){
//  var validDiceChoice;
//  if (diceChoice = 4){
//    validDiceChoice = 4;
//  }
//} else if (diceChoice = 6){



//var nextMoveDirection =getNextMoveDirection();

function getNextMoveDirection(playerScore,goalNumber){
  var nextMoveDirection
  if (playerScore < goalNumber){
    nextMoveDirection = plus;
  } else {
    nextMoveDirection = minus;
  }
  return nextMoveDirection;
}

function rollAllDice(){
  var dice4Rolled = roll4Dice();
  var dice6Rolled = roll6Dice();
  var dice8Rolled = roll8Dice();
  var dice10Rolled = roll10Dice();
  var dice12Rolled = roll12Dice();
  var dice20Rolled = roll20Dice();
  var allRolledTotal = dice4Rolled + dice6Rolled + dice8Rolled + dice10Rolled + dice12Rolled + dice20Rolled;
  return allRolledTotal;
}

//var allRolledTotal = rollAllDice();
//console.log(allRolledTotal);
//document.write("Your total dice roll is "+ allRolledTotal);

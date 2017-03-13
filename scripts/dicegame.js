"use strict";

function getPlayerName(){
  var playerName = prompt("Please enter your player name.");
  console.log("Hi " + playerName + ", welcome to the game!");
  return playerName;
}

function getGoalNumber(player1Name, player2Name){
  var goalNumber = prompt(player1Name + " and " + player2Name + ", please decide together what number you will be racing to, and enter it here.");
  console.log(player1Name + " and " + player2Name + ", you will each be dice racing to " + goalNumber + ". Good luck!");
  return parseInt(goalNumber);
}

function informPlayerOnNextMove(playerName,playerScore,goalNumber){
  if (playerScore < goalNumber){
    var numberToGo = (goalNumber - playerScore);
    console.log(playerName + ", you need " + numberToGo +" more to win.");
  }
  else {
    numberToGo = (playerScore - goalNumber);
    console.log(playerName + ", you need " + numberToGo +" less to win.");
  }
}

function getDiceChoice(playerName){
  var diceChoice = prompt(playerName + ", it is your turn. Please choose a dice by entering the number of sides. You may choose 4, 6, 8, 10, 12 or 20. Please type your choice here.");
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
  return diceRoll;
}

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

function moveScore(playerScore, diceResult, goalNumber){
  if (playerScore < goalNumber){
    playerScore += diceResult;
  }
  else if (playerScore > goalNumber){
    playerScore -= diceResult;
  }
  return playerScore;
}

function checkWinner(playerScore,goalNumber){
  var winner = 0;
  if (playerScore === goalNumber){
    winner = 1;
  }
  else {
    winner = 0;
  }
  return winner
}

function declareWinner(playerName){
  console.log(playerName + ", you WIN!");
}

function endGame(player1Name, player2Name){
  console.log("Thank you " + player1Name + " and " + player2Name + " for playing!");
}

function runGame(){
  var player1Name = getPlayerName();
  var player1Score = 0;
  var player2Name = getPlayerName();
  var player2Score = 0;
  var goalNumber = getGoalNumber(player1Name, player2Name);
  var winner = 0;

  while (winner === 0){
    informPlayerOnNextMove(player1Name, player1Score, goalNumber);
    var player1DiceResult = getDiceChoice(player1Name);
    if(player1DiceResult === "exit"){
      break;
    }
    console.log(player1Name + ", you rolled a " + player1DiceResult)
    player1Score = moveScore(player1Score, player1DiceResult, goalNumber);
    console.log(player1Name + ", your new score is " + player1Score);
    winner = checkWinner(player1Score,goalNumber);
    if(winner === 1){
      declareWinner(player1Name);
      endGame(player1Name, player2Name);
    }
    else {
      informPlayerOnNextMove(player2Name, player2Score, goalNumber);
      var player2DiceResult = getDiceChoice(player2Name);
      if(player2DiceResult === "exit"){
        break;
      }
      console.log(player2Name + ", you rolled a " + player2DiceResult)
      player2Score = moveScore(player2Score, player2DiceResult, goalNumber);
      console.log(player2Name + ", your new score is " + player2Score);
      winner = checkWinner(player2Score, goalNumber);
      if(winner === 1){
        declareWinner(player2Name);
        endGame(player1Name, player2Name);
      }
    }
  }
}

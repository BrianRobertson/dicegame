"use strict";

function getGoalNumber(){
  var goalNumber = prompt("Please enter the number you will race to");
  return goalNumber;
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

//keep adding to runGame to test functions so far
function runGame(){
  var goalNumber = getGoalNumber();
  return goalNumber;
}

var runGameResult = runGame();
document.write(runGameResult);









//extra code below
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

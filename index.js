"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
/*global console*/ // This line tells jsLint that you're allowed to use console.log for printing.
function roll_dice() {
  var result;
  result = Math.ceil(Math.random()*6)
  return result;
}
function five_dice() {
var map;
map = [0,0,0,0,0];
map[0] = roll_dice()
map[1] = roll_dice()
map[2] = roll_dice()
map[3] = roll_dice()
map[4] = roll_dice()
return map;
}
function Yahtzee(map) {
var score;
  score = 0;
  if (map[0] === map[1]) {
  if (map[1] === map[2]) {
  if (map[2] === map[3]) {
  if (map[3] === map[4]) {
    score = 50;
  }
  }
  }
}
  return score
}
 function add(numbers){
var total, current;
  current = 0;
  total = 0;
  while (current < numbers.length){
    total = total + numbers[current];
    current = current + 1;
  }
  return total;
}
   function four(map) {
var score;
  map.sort();
  score = 0;
  if (map[0] === map[1]) {
  if (map[1] === map[2]) {
  if (map[2] === map[3]) {
    score = add(map);
  }
  }
  }
if (map[1] === map[2]) {
  if (map[2] === map[3]) {
  if (map[3] === map[4]) {
    score = add(map);
  }
  }
}
  return score
}    
   function straight(map) {
var score;
     map.sort()
  score = 0;
  if (map[0] === map[1] - 1) {
  if (map[1] === map[2] - 1) {
  if (map[2] === map[3] - 1) {
  if (map[3] === map[4] - 1) {
    score = 40;
  }
  }
  }
  }
  return score
}    
function full(map) {
var score;
  map.sort();
  score = 0;
  if (map[0] === map[1]) {
  if (map[1] === map[2]) {
if (map[3] === map[4]) {
 score = 25;
  }
  }
  }
if (map[0] === map[1]) {
if (map[2] === map[3]) {
if (map[3] === map[4]) {
score = 25;
}
}
}
  return score
}  
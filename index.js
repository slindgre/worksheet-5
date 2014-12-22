"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
/*global console*/ // This line tells jsLint that you're allowed to use console.log for printing.

function minimum_of_two(first_number, second_number){
var minimum;
if (first_number < second_number) {
minimum = first_number;
} else {
minimum = second_number;
}
return minimum;
}

function flipping_a_coin() {
var result;
if (Math.random() < .5) {
result = 'heads';
} else {
result = 'tails';
}
return result;
}

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

function max(map) {
  var max = 0;
 map.sort();
  max = map[map.length - 1];
  return max;
}

function cat(map) {
  var score = [Yahtzee(map), four(map), straight(map)], result = 0;
  score.sort();
  result = score[score.length - 1];
  return result
}

function roll() {
var count = 0, score = 0;
  while (score < 25) {
    count = count + 1;
    score = cat(five_dice());
  }
    return count;
}

function game(map, functions) {
var score,
count;
score = {
}
count = 0
while (count < functions.length) {
score[count] = functions[count](map)
count = count + 1
}
return score;
}

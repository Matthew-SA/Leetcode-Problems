//Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.
// Input: hour = 12, minutes = 30
// Output: 165
// minutes: 30/60, which is basically half the circle? which might mean 180 degrees.
// hours: since the hour hand is influenced by minutes, then...
// we can possibly convert hours to minutes instead.
// hour 12 = 0 degrees + half the hour


// 360 degrees
// 12 hours
// 60 minutes

// 30 degrees/hour
// 6 degrees/minute

// if hour and minute are equal, then return 0 (instead of 360)

// if the hour is dependent by what minute it is...
// 30 degrees / 60 minutes
// example: 12:30
// 
// x degree / 30 degrees = y minutes / 60 minutes
// x = 15 degrees


const angleClock = (hour, minutes) => { // 12, 30
  let minutes_degrees;
  let hours_degrees;

  minutes_degrees = minutes * 6; // 30 * 6 = 180

  //calculating hour hand without minutes
  if(hour === 12) hour = 0;
  hour_degrees = hour * 30; 

  // x degree / 30 degrees = y minutes / 60 minutes
  // x degree / 30 degrees = 30 minutes / 60 minutes
  // x / 30 = 1 / 2
  // 2x = 30
  // x = 15 degrees;

  let extra_degrees = (minutes / 60) * 30; // 15

  hours_degrees += extra_degrees; //0 + 15 = 15

  let difference = Math.abs(hours_degrees - minutes_degrees);

  return difference > 180 ? 360 - difference : difference;  
  // but this doesn't address getting the smaller value
  
};


/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
const angleClock = (hour, minutes) => {
  let degrees = Math.abs(hoursToAngle(hour, minutes) - minutesToAngle(minutes))
  return degrees > 180 ? 360 - degrees : degrees
};

const minutesToAngle = minutes => {
  return (minutes * 6) % 360;
};

const hoursToAngle = (hour, minutes) => {
  let initialValue = (hour * 30) % 360;
  let degreesFromMinutes = (minutes * .5) % 30;
  return initialValue + degreesFromMinutes;
};

//leetcode.com/problems/battleships-in-a-board/

// Given an 2D board, count how many battleships are in it. The battleships are
// represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically. In other words, they
// can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
// Example:

// X..X
// ...X
// ...X
// In the above board there are 2 battleships.
// Invalid Example:

// ...X
// XXXX
// ...X
// This is an invalid board that you will not receive - as battleships will
// always have a cell separating between them.
// Follow up:
// Could you do it in one-pass, using only O(1) extra memory and without
// modifying the value of the board?

/**
 * @param {character[][]} board
 * @return {number}
 */

const countBattleships = board => {
  let count = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i]?.[j] === 'X' && board[i + 1]?.[j] !== 'X' && board[i][j + 1] !== 'X') count++
    };
  };

  return count;
};

// X..X
// ...X
// ...X


var countBattleships = function(board) {
    let battleShips = 0;
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] === "."){
                continue;
            } else if (i > 0 && board[i - 1][j] === "X"){  
                continue;
            } else if (j > 0 && board[i][j - 1] === "X"){
                continue;
                //instead of looking ahead, you look backwards!
                //this is more efficient because
                //
            } else { battleShips ++ }
        }
    }
    
    return battleShips;
};

//  ooh yeah cause you've seen it already right?  If you always checking forward, you're technically checking the same space twice!  I think. haha
// niiiiiice.  Very cool.  This was a good problem. ( i definitely need to work on getting better at walking through these sorts of problems.) hahaha
// yeah I definitely need to work on that as well.  Sami said the same haha.
// haha you're moment to shine :)

//oops
//yes!

// yeah, no worries, you definitely had the right idea (like the 90% haha). I would just say don't be afraid to
// speak your thoughts. haha yeah, if you feel like you're pausing for too long, you probably are :) 


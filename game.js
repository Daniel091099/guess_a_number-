const prompt = require('prompt-sync')();
const { target } = require('./randonnumber');

function rounds(number, target) {
  if (number === target) {
    return true;
  } else if (number > target) {
    console.log('Your number is too high');
  } else if (number < target) {
    console.log('Your number is too low');
  }
  return false;
}

function backstage(target) {
  let attempts = 0;
  let win = false;

  while (attempts < 5 && win === false) {
    let number = prompt('What is the number? ');
    console.log(number, 'you said');
    win = rounds(Number(number), target);
    console.log('🚀 ~ file: game.js:25 ~ backstage ~ win', win);
    attempts++;
    console.log(attempts);
  }
  return win;
}

module.exports = {
  backstage,
};

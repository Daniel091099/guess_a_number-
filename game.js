const prompt = require('prompt-sync')();
const { start, askLevel } = require('./message');

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

function backstage(target, tries) {
  let attempts = 0;
  let win = false;

  while (attempts < tries && win === false) {
    let number = prompt('What is the number? ');
    console.log(number, 'you said');
    win = rounds(Number(number), target);
    attempts++;
    console.log(attempts);
  }
  return win;
}

module.exports = {
  backstage,
};

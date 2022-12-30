const prompt = require('prompt-sync')();
console.log('welcome to the Guess a Number. You need to guess the number between 0 an 100.');

const random = Math.random() * 100;

const target = Math.floor(random);

let number = prompt('What is the number? ');

console.log(number, 'you said');

let attempts = 0;

while (attempts < 5 && number != 1000) {
  if (number == target) {
    console.log('Good!! You guesed the right number.');
    break;
  } else if (number > target) {
    console.log('Your number is too high');
    attempts++;
    console.log(attempts);
    number = prompt('What is the number? ');
  } else if (number < target) {
    console.log('Your number is too low');
    attempts++;
    console.log(attempts);
    number = prompt('What is the number? ');
  }
}

if (attempts >= 5) {
  console.log('Voce perdeu!!');
}

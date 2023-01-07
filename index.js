const prompt = require('prompt-sync')();
const { target } = require('./randonnumber');
const { backstage } = require('./game');
console.log('welcome to the Guess a Number. You need to guess the number between 0 an 100.');

const result = backstage(target);
if (result === true) {
  console.log('Sucsses!!');
} else {
  console.log('you loose!!');
}

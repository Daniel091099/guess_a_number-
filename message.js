const prompt = require('prompt-sync')();

function askForName() {
  const player = prompt('What is your name? ');
  return player;
}

function greetings(player) {
  console.log('Welcome ' + player + '!!');
}

function renderMenu(player) {
  console.log('Menu -> Choose an option');
  console.log('1 - guess a number');
  console.log('2 - settings');
  console.log('3 - revert to default');
  console.log('4 - exit');
  const shouldStart = prompt('');
  return shouldStart;
}

function askLevel() {
  const chances = prompt('how many chances you want? ');
  console.log('you have', chances, 'tries');
  return chances;
}

module.exports = {
  askForName,
  renderMenu,
  greetings,
  askLevel,
};

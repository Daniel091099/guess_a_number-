const prompt = require('prompt-sync')();
const { askForName, renderMenu, greetings, askLevel } = require('./message');
const { getSettings, revertSettings, setSettings } = require('./settings');
const { target } = require('./randonnumber');
const { backstage } = require('./game');
console.log('Welcome to the Guess a Number.');

function start() {
  const player = askForName();
  greetings(player);

  let exit = false;
  while (!exit) {
    const option = renderMenu();
    if (option === '1') {
      const result = backstage(target, getSettings().numberOfChances);
      if (result === true) {
        console.log('Sucsses!!');
      } else {
        console.log('you loose!!');
      }
    } else if (option === '2') {
      console.log('How many chances, do you want?');
      setSettings(prompt(''));
      console.log('Number of chances updated.');
    } else if (option === '3') {
      revertSettings();
      console.log('Settings reverted to default values.');
    } else {
      exit = true;
      console.log('Ok! Farewell!');
    }
  }
}

start();

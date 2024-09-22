import readlineSync from 'readline-sync';
import { initLCMGame } from './games/brain-scm.js';
import { initProgressionGame } from './games/brain-progression.js';

export function askName() {
  console.log('===============| Welcome to the "Brain Games"! |===============');
  console.log('===============|  Please, introduce yourself!  |===============\n');
  console.log('What is your name?\n');

  let name = readlineSync.question('Your name: ');
  name == '' ? name = 'dummy' : name;

  console.log(`Nice to meet you, ${name}!`);

  return name;
}

export function askGame(userName) {
  console.log('Choose the game!\n');
  console.log('1. LCM-game\n');
  console.log('2. Progression\n');

  let game = readlineSync.question('Enter number: ');
  if (game == '') {
    console.log('Ooops! Error occured!');
    return;
  }

  switch (game) {
  case '1':
    initLCMGame(userName);
    break;
  case '2':
    initProgressionGame(userName);
  default:
    break;
  }

  return game;
}
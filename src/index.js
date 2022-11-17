import readlineSync from 'readline-sync';
import makeGreeting from './cli.js';
import * as gameEven from './games/brain-even.js';
import * as gameCalc from './games/brain-calc.js';
import * as gameGcd from './games/brain-gcd.js';
import * as gameProgression from './games/brain-progression.js';
import * as gamePrime from './games/brain-prime.js';

const initGame = (gameName) => {
  if (gameName === 'even') {
    return gameEven;
  } else if (gameName === 'calc') {
    return gameCalc;
  } else if (gameName === 'gcd') {
    return gameGcd;
  } else if (gameName === 'progression') {
    return gameProgression;
  } else if (gameName === 'prime') {
    return gamePrime;
  }
}

const main = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const userName = makeGreeting();
  let game = initGame(gameName);
  console.log(game.nameDescription);

  let countCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    let questionWithCorrectAnswer = game.newQuestionWithAnswer();
    const question = questionWithCorrectAnswer[0];
    const correctAnswer = questionWithCorrectAnswer[1];
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (game.check(correctAnswer, answer)) {
      countCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (countCorrectAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default main;

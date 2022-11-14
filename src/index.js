import readlineSync from 'readline-sync';
import makeGreeting from './cli.js';
import { check as checkEven, newQuestionWithAnswer as newQuestionWithAnswerEven } from './games/brain-even.js';
import { check as checkCalc, newQuestionWithAnswer as newQuestionWithAnswerCalc } from './games/brain-calc.js';
import { check as checkGcd, newQuestionWithAnswer as newQuestionWithAnswerGcd } from './games/brain-gcd.js';
import { check as checkProgression, newQuestionWithAnswer as newQuestionWithAnswerProgression } from './games/brain-progression.js';
import { check as checkPrime, newQuestionWithAnswer as newQuestionWithAnswerPrime } from './games/brain-prime.js';

const main = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const userName = makeGreeting();

  if (gameName === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (gameName === 'calc') {
    console.log('What is the result of the expression?');
  } else if (gameName === 'gcd') {
    console.log('Find the greatest common divisor of given numbers.');
  } else if (gameName === 'progression') {
    console.log('What number is missing in the progression?');
  } else if (gameName === 'prime') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }

  let countCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    let questionWithCorrectAnswer;

    if (gameName === 'even') {
      questionWithCorrectAnswer = newQuestionWithAnswerEven();
    } else if (gameName === 'calc') {
      questionWithCorrectAnswer = newQuestionWithAnswerCalc();
    } else if (gameName === 'gcd') {
      questionWithCorrectAnswer = newQuestionWithAnswerGcd();
    } else if (gameName === 'progression') {
      questionWithCorrectAnswer = newQuestionWithAnswerProgression();
    } else if (gameName === 'prime') {
      questionWithCorrectAnswer = newQuestionWithAnswerPrime();
    }

    const question = questionWithCorrectAnswer[0];
    const correctAnswer = questionWithCorrectAnswer[1];
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

    let isCorrect;
    if (gameName === 'even') {
      isCorrect = checkEven(correctAnswer, answer);
    } else if (gameName === 'calc') {
      isCorrect = checkCalc(correctAnswer, answer);
    } else if (gameName === 'gcd') {
      isCorrect = checkGcd(correctAnswer, answer);
    } else if (gameName === 'progression') {
      isCorrect = checkProgression(correctAnswer, answer);
    } else if (gameName === 'prime') {
      isCorrect = checkPrime(correctAnswer, answer);
    }

    if (isCorrect) {
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

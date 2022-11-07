import readlineSync from 'readline-sync';
import { makeGreeting } from './cli.js';
import { check as checkEven, newQuestionWithAnswer as newQuestionWithAnswerEven } from './games/brain-even.js';
import { check as checkCalc, newQuestionWithAnswer as newQuestionWithAnswerCalc } from './games/brain-calc.js';
import { check as checkGcd, newQuestionWithAnswer as newQuestionWithAnswerGcd } from './games/brain-gcd.js';

export const main = (gameName) => {
    console.log('Welcome to the Brain Games!');
    const userName = makeGreeting();

    if (gameName === 'even') {
        console.log('Answer "yes" if the number is even, otherwise answer "no".')
    } else if (gameName === 'calc') {
        console.log('What is the result of the expression?')
    } else if (gameName === 'gcd') {
        console.log('Find the greatest common divisor of given numbers.')
    }


    let countCorrectAnswers = 0
    for (let i = 0; i < 3; i++) {
        let questionWithCorrectAnswer;

        if (gameName === 'even') {
            questionWithCorrectAnswer = newQuestionWithAnswerEven();
        } else if (gameName === 'calc') {
            questionWithCorrectAnswer = newQuestionWithAnswerCalc();
        } else if (gameName === 'gcd') {
            questionWithCorrectAnswer = newQuestionWithAnswerGcd();
        }

        const question = questionWithCorrectAnswer[0];
        let correctAnswer = questionWithCorrectAnswer[1];
        const answer = readlineSync.question(`Question : ${question}\nYour answer: `);
        

        let isCorrect;
        if (gameName === 'even') {
            isCorrect = checkEven(correctAnswer, answer);
        } else if (gameName === 'calc') {
            isCorrect = checkCalc(correctAnswer, answer);
        } else if (gameName === 'gcd') {
            isCorrect = checkGcd(correctAnswer, answer);
        }

        if (isCorrect) {
            countCorrectAnswers += 1;
            console.log('Correct!')
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
        }  
    } 
    if (countCorrectAnswers === 3) {
        console.log(`Congratulations, ${userName}!`)
    }

};
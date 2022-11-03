import readlineSync from 'readline-sync';
import { makeGreeting } from './cli.js';
import { check as checkEven, newQuestionWithAnswer as newQuestionWithAnswerEven } from './games/brain-even.js';
import { check as checkCalc, newQuestionWithAnswer as newQuestionWithAnswerCalc } from './games/brain-calc.js';

export const main = (gameName) => {
    console.log('Welcome to the Brain Games!');
    const userName = makeGreeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    let countCorrectAnswers = 0
    for (let i = 0; i < 3; i++) {
        let questionWithCorrectAnswer;

        if (gameName === 'even') {
            questionWithCorrectAnswer = newQuestionWithAnswerEven();
        } else if (gameName === 'calc') {
            questionWithCorrectAnswer = newQuestionWithAnswerCalc();
        }

        const question = questionWithCorrectAnswer[0];
        let correctAnswer = questionWithCorrectAnswer[1];
        const answer = readlineSync.question(`Question : ${question}\nYour answer: `);
        

        let isCorrect;
        if (gameName === 'even') {
            isCorrect = checkEven(correctAnswer, answer);
        } else if (gameName === 'calc') {
            isCorrect = checkCalc(correctAnswer, answer);
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
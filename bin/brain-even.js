import readlineSync from 'readline-sync';
import { makeGreeting } from "../src/cli.js";

console.log('Welcome to the Brain Games!');
const userName = makeGreeting();

const MAX = 100;
console.log('Answer "yes" if the number is even, otherwise answer "no".')
let countCorrectAnswers = 0
for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * MAX);
    const answer = readlineSync.question(`Question : ${randomNumber}\nYour answer: `);
    let correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no'
    if (correctAnswer === answer) {
        countCorrectAnswers += 1;
        console.log('Correct!')
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
    }  
} 
if (countCorrectAnswers === 3) {
    console.log(`Congratulations, ${userName}!`)
}
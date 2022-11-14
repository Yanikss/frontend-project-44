const OPERATORS = ['+', '-', '*'];
const MAX = 10;

export const newQuestionWithAnswer = () => {
  const firstRandomNumber = Math.floor(Math.random() * MAX);
  const secondRandomNumber = Math.floor(Math.random() * MAX);
  const randomOperatorIndex = Math.floor(Math.random() * OPERATORS.length);

  const operator = OPERATORS[randomOperatorIndex];

  const question = `${firstRandomNumber} ${operator} ${secondRandomNumber}`;

  let correctAnswer;
  if (operator === '+') {
    correctAnswer = firstRandomNumber + secondRandomNumber;
  } else if (operator === '-') {
    correctAnswer = firstRandomNumber - secondRandomNumber;
  } else if (operator === '*') {
    correctAnswer = firstRandomNumber * secondRandomNumber;
  }

  return [question, correctAnswer]; // ['4+3', 7]
};

export const check = (correctAnswer, answer) => correctAnswer === +answer;

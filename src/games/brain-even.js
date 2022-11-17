const MAX = 100;

export const newQuestionWithAnswer = () => {
  const question = Math.floor(Math.random() * MAX);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export const nameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const check = (correctAnswer, answer) => correctAnswer === answer;

const MAX = 100;

export const newQuestionWithAnswer = () => {
  const question = Math.floor(Math.random() * MAX);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export const check = (correctAnswer, answer) => correctAnswer === answer;

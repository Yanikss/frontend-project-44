const MAX = 100;
const primality = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
};
export const newQuestionWithAnswer = () => {
  const question = Math.floor(Math.random() * MAX);
  const correctAnswer = primality(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export const check = (correctAnswer, answer) => correctAnswer === answer;

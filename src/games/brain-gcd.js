const MAX = 100;

const nod = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return nod(m, k);
  }

  return Math.abs(n);
};

export const newQuestionWithAnswer = () => {
  const firstNumber = Math.floor(Math.random() * MAX);
  const secondNumber = Math.floor(Math.random() * MAX);

  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = nod(firstNumber, secondNumber);

  return [question, correctAnswer];// ['4', 7]
};

export const check = (correctAnswer, answer) => correctAnswer === +answer;
